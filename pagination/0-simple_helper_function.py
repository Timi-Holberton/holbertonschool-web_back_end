#!/usr/bin/env python3
""" Pagination """
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple:
    """
    La fonction doit retourner un tuple de deux éléments contenant un indice
    de début et un indice de fin correspondant à la plage d’index à retourner
    dans une liste pour ces paramètres de pagination spécifiques.
    """
    start_index = (page - 1) * page_size
    fin_index = start_index + page_size
    return (start_index, fin_index)
