#!/usr/bin/env python3
"""Importez async_comprehension depuis le fichier précédent et écrivez une
coroutine measure_runtime qui exécutera async_comprehension quatre fois en
parallèle à l'aide de asyncio.gather.

measure_runtime doit mesurer le temps d'exécution total et le renvoyer.

Notez que le temps d'exécution total est d'environ 10 secondes,
expliquez-vous pourquoi.
"""
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Mesurer le temps d'exécution de l'exécution concurrente de plusieurs
    coroutines.

    Cette fonction exécute quatre fois la coroutine `async_comprehension` de
    manière concurrente
    en utilisant `asyncio.gather`, puis mesure et renvoie le temps total
    d'exécution.

    Returns:
        float: Durée d'exécution totale en secondes.
    """
    debut = time.perf_counter()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        )
    fin = time.perf_counter()
    return (fin - debut)
