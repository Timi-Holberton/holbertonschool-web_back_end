#!/usr/bin/env python3
"""
Lance plusieurs fois une coroutine wait_random et récupère les délais
dans l’ordre d’arrivée.
"""

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, delai_max: int) -> List[float]:
    """
    Exécute la coroutine wait_random un nombre donné de fois avec un délai
    maximal spécifié, puis retourne la liste des délais obtenus, triée
    selon l’ordre d’achèvement.

    Args:
        nombre (int) : nombre d’exécutions de la coroutine wait_random
        delai_max (int) : délai maximal (en secondes) à passer en
        paramètre à wait_random

    Returns:
        List[float] : liste des délais dans l’ordre d’achèvement
    """
    # Crée une liste de coroutines prêtes à être lancées
    listCoroutine = [wait_random(delai_max) for _ in range(n)]

    # Planifie l’exécution concurrente avec asyncio.create_task
    tache_repet = [asyncio.create_task(coro) for coro in listCoroutine]

    # Liste des délais dans l’ordre où les tâches se terminent
    delais_trier = []

    # Récupère les résultats dans l’ordre d’achèvement des tâches
    for tache_fin in asyncio.as_completed(tache_repet):
        delai = await tache_fin
        delais_trier.append(delai)

    # Retourne les délais triés selon l’ordre d’arrivée
    return delais_trier
