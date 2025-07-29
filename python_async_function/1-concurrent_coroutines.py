#!/usr/bin/env python3
"""Lance plusieurs fois une coroutine wait_random et récupère les délais
dans l’ordre d’arrivée
"""

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def attendre_n_fois(nombre: int, delai_max: int) -> List[float]:
    """
    Exécute la coroutine wait_random un nombre donné de fois avec un délai
    maximal spécifié,     puis retourne la liste des délais obtenus,
    ordonnée dans l’ordre d’achèvement.

    Args:
        nombre (int) : Nombre d’exécutions de la coroutine wait_random.
        delai_max (int) : Délai maximal (en secondes) à passer en paramètre
        à wait_random.

    Returns:
        List[float] : Liste des délais (float) dans l’ordre où les coroutines
        se terminent.
    """
    # Création des coroutines à exécuter.
    # On crée une liste de coroutines wait_random avec delai_max.
    # Ces coroutines ne sont pas encore lancées, juste prêtes.
    listCoroutine = [wait_random(delai_max) for _ in range(nombre)]

    # Création des tâches asyncio à partir des coroutines.
    # asyncio.create_task planifie chaque coroutine pour exécution.
    # Cela permet de lancer toutes les tâches en même temps.
    tache = [asyncio.create_task(coro) for coro in listCoroutine]

    # Liste pour stocker les délais dans l’ordre d’achèvement.
    # On crée une liste vide qui recevra les résultats au fur et à mesure.
    delais_trier = []

    # Récupération des tâches dans l’ordre de leur fin.
    # asyncio.as_completed retourne les tâches terminées dans l’ordre.
    # On attend chaque tâche finie et on ajoute son délai à la liste.
    for tache_fin in asyncio.as_completed(tache):
        delai = await tache_fin
        delais_trier.append(delai)

    # Retourne la liste des délais dans l’ordre d’arrivée.
    # Pas besoin de trier car l’ordre correspond à celui d’achèvement.
    return delais_trier
