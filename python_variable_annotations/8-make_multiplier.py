#!/usr/bin/env python3
"""typage"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """typage"""
    return lambda x: x * multiplier

