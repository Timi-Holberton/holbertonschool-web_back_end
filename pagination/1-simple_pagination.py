#!/usr/bin/env python3
""" Pagination """
from typing import Tuple
import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    @staticmethod
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

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        """
        # Vérification des paramètres
        assert isinstance(page, int) and page > 0, "page doit être un entier"
        assert isinstance(page_size, int) and page_size > 0,
        "page_size doit être un entier"

        # Calcul des indices de début et fin
        start_index, end_index = self.index_range(page, page_size)

        # Récupération des données
        dataset = self.dataset()

        # Si la page est hors limites, retourne une liste vide
        if start_index >= len(dataset):
            return []

        # Retourne la tranche correspondant à la page
        return dataset[start_index:end_index]
