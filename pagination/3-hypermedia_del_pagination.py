#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import Dict, List, Optional


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Module de pagination avec index hypermédia.

        Ce module fournit des fonctionnalités permettant de naviguer dans un
        jeu de données de manière paginée, avec gestion des index pour
        l'accès direct à un élément et à la page suivante.

        Fonctions principales :
        - get_page(page, page_size) : Retourner une page spécifique de données.
        - get_hyper_index(index, page_size) : Retourner un dictionnaire contenant
        les données de la page correspondant à l'index donné, ainsi que
        l'index de la page suivante si disponible.

        Types :
        - Les pages sont renvoyées sous forme de listes d’éléments.
        - Les résultats hypermédia sont renvoyés sous forme de dictionnaires
        avec les clés : 'index', 'data', 'page_size', 'next_index'.
        """
        assert isinstance(index, int) or index is None
        assert isinstance(page_size, int) and page_size > 0

        dataset = self.dataset()

        # Si index est None, on commence au début
        if index is None:
            index = 0
        assert 0 <= index < len(dataset), "index hors limite"

        # Récupération des données
        data = dataset[index:index + page_size]

        # Calcul de l'index suivant
        next_index = (
            index + page_size if (index + page_size) < len(dataset) else None
        )

        return {
            "index": index,
            "data": data,
            "page_size": len(data),  # taille réelle de la page
            "next_index": next_index
        }
