#!/usr/bin/env python3
"""
Mesurer le temps moyen d'exécution de wait_n(n, max_delay).
"""

import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Mesure le temps d'exécution moyen de la coroutine wait_n.

    Args:
        n (int) : nombre de tâches asynchrones
        max_delay (int) : délai maximal pour chaque tâche

    Returns:
        float : durée moyenne d'exécution par tâche
    """
    # Mesure le temps avant l'exécution
    tempsAvant = time.time()

    # Exécution de la coroutine wait_n avec asyncio
    asyncio.run(wait_n(n, max_delay))

    # Mesure le temps après l'exécution
    tempsApres = time.time()

    # Durée totale divisée par le nombre de tâches
    resultat = (tempsApres - tempsAvant) / n
    return resultat
