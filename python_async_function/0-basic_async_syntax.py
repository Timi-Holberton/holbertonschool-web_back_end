#!/usr/bin/env python3
"""Fonction qui écrit une coroutine asynchrone qui prend en argument un entier
(max_delay, avec une valeur par défaut de 10) nommé wait_random qui attend
un délai aléatoire compris entre 0 et max_delay (inclus et valeur flottante)
secondes et le renvoie finalement.
"""
import asyncio
import random


async def wait_random(max_delay=10):
    """coroutine asynchrone """
    value = random.uniform(0, max_delay)
    await asyncio.sleep(value)
    return value
