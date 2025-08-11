#!/usr/bin/env python3
from typing import Tuple

def index_range(page: int, page_size: int) -> Tuple:
    """
    """
    star_index = (page - 1) * page_size
    fin_index = star_index + page_size
    return (star_index, fin_index)
