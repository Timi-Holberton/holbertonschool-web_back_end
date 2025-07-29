#!/usr/bin/env python3
"""typage"""
from typing import Iterable, List, Tuple, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """typage"""
    return [(i, len(i)) for i in lst]
