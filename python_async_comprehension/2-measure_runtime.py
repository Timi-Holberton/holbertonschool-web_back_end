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


async def measure_runtime():
    tpsavant = time.time()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        )
    tpsapres = time.time()
    return (tpsapres - tpsavant)
