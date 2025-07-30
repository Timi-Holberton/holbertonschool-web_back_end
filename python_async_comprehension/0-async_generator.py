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
    """
    Génère 10 nombres flottants entre 0 et 10 avec une pause d'1 seconde.

    À chaque itération, attend 1 seconde puis produit un nombre réel
    compris entre 0 (inclus) et 10 (exclus).

    Retourne :
        AsyncGenerator[float, None] : générateur asynchrone de nombres.
    """
    for _ in range(10):
        await asyncio.sleep(1)          # Pause asynchrone de 1 seconde
        yield random.uniform(0, 10)     # Génère un float entre 0 et 10
