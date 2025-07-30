#!/usr/bin/env python3
"""
Écrivez une coroutine appelée async_generator qui ne prend aucun argument.
La coroutine effectuera 10 boucles, attendra asynchroniquement 1 seconde à
chaque fois, puis produira un nombre aléatoire compris entre 0 et 10. Utilisez
le module random.
"""
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
