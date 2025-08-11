
#!/usr/bin/env python3
""" Pagination """
from typing import Tuple
import csv
import math
from typing import List, Dict, Any


def index_range(page: int, page_size: int) -> Tuple:
    """
    La fonction doit retourner un tuple de deux éléments contenant un
    indice de début et un indice de fin correspondant à la plage d’index
    à retourner dans une liste pour ces paramètres de pagination
    spécifiques.
    """
    start_index = (page - 1) * page_size
    fin_index = start_index + page_size
    return (start_index, fin_index)


class Server:
    """
    Classe de serveur pour paginer une base de données de prénoms
    de bébé populaires.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """ Ensemble de données mis en cache """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Retourne une portion du dataset correspondant à la page demandée.
        """
        # Vérification des paramètres
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # Calcul des indices de début et fin
        start_index, end_index = index_range(page, page_size)

        # Récupération des données
        dataset = self.dataset()

        # Si la page est hors limites, retourne une liste vide
        if start_index >= len(dataset):
            return []

        # Retourne la tranche correspondant à la page
        return dataset[start_index:end_index]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        """Retourne information de pagination avec metadata"""
        data = self.get_page(page, page_size)
        total = len(self.dataset())
        total_pages = math.ceil(total / page_size)
        return {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": page + 1 if page < total_pages else None,
            "prev_page": page - 1 if page > 1 else None,
            "total_pages": total_pages
        }
