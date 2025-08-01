#!/usr/bin/env python3
"""
Importez async_generator depuis la tâche précédente, puis écrivez une
coroutine appelée async_comprehension qui ne prend aucun argument.

La coroutine collectera 10 nombres aléatoires à l'aide d'une compréhension
asynchrone sur async_generator, puis renverra les 10 nombres aléatoires.
"""
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Collecter 10 nombres flottants générés de manière asynchrone.

    Returns:
        List[float]: Une liste de 10 nombres à virgule flottante générés
        de façon asynchrone.
    """

    return [value async for value in async_generator()]
