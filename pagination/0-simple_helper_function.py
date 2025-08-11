#!/usr/bin/env python3

def index_range(page, page_size):
    """
    """
    star_index = (page - 1) * page_size
    fin_index = star_index + page_size
    return (star_index, fin_index)
