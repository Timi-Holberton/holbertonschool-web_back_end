#!/usr/bin/env python3
"""typage"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """typage"""
    return (k, float(v ** 2))
