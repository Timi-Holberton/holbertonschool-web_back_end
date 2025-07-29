#!/usr/bin/env python3
""" Lance une coroutine"""
import asyncio, random
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Lance n fois la coroutine wait_random avec un délai maximal donné et
    retourne une liste des délais obtenus, ordonnée dans l'ordre d'arrivée
    (croissant), sans utiliser la fonction sort().

    Args:
        n (int): Le nombre de fois à exécuter wait_random.
        max_delay (int): Le délai maximal (en secondes) pour chaque attente.

    Returns:
        List[float]: Liste des délais flottants dans l'ordre d'achèvement.
    """
    tasks = [wait_random(max_delay) for _ in range(n)]
    results = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        results.append(delay)
    return results




"""
Importez wait_random depuis le fichier Python précédent que vous avez écrit et
écrivez une routine asynchrone appelée wait_n qui prend deux arguments de type
entier (dans cet ordre) : n et max_delay. Vous lancerez wait_random n fois avec
le max_delay spécifié.

async def wait_n(n: int, max_delay: int) -> List[float]:

    tasks = [wait_random(max_delay) for _ in range(n)]
    results = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        results.append(delay)
    return results

    #!/usr/bin/env python3

    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    results = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        results.append(delay)
    return results





wait_n doit renvoyer la liste de tous les délais (valeurs flottantes).
La liste des délais doit être classée par ordre croissant sans utiliser sort()
en raison de la concurrence.
"""
