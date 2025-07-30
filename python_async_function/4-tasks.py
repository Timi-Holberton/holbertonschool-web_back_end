#!/usr/bin/env python3
"""Prenez le code de wait_n et modifiez-le pour créer une nouvelle
fonction task_wait_n. Le code est presque identique à celui de wait_n,
à l'exception de l'appel à task_wait_random.
"""
from typing import List
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:

    listCoroutine = [wait_random(max_delay) for _ in range(n)]
    tache_repet = [asyncio.create_task(coro) for coro in listCoroutine]
    delais_trier = []

    for tache_fin in asyncio.as_completed(tache_repet):
        delai = await tache_fin
        delais_trier.append(delai)
    return delais_trier
