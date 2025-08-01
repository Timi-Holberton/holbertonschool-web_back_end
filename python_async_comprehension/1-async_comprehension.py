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
    Collecte 10 nombres à virgule flottante aléatoires à l'aide d'une
    compréhension asynchrone sur le générateur asynchrone.

    Return : Liste[float] : une liste contenant 10 nombres à virgule flottante
    aléatoires.
    """
    coroutine = []                          # Liste vide
    async for value in async_generator():   # boucle sur async_generator
        coroutine.append(value)             # ajoute calue à coroutine
        if len(coroutine) == 10:            # vérifie qu'il y en ai 10
            return coroutine                # return si condition atteinte
