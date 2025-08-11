#!/usr/bin/env python3
from typing import List


def index_range(page: int, page_size: int) -> List[int]:
    """
    La fonction doit retourner un tuple de deux éléments contenant un indice
    de début et un indice de fin correspondant à la plage d’index à retourner
    dans une liste pour ces paramètres de pagination spécifiques.
    """
    star_index = (page - 1) * page_size
    fin_index = star_index + page_size
    return (star_index, fin_index)
