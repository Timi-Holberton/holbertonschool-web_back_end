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
    # Création des coroutines à exécuter
    # Ici, on génère une liste de coroutines en appelant la fonction wait_random
    # avec le paramètre delai_max, répété 'nombre' fois.
    # Ces coroutines ne sont pas encore lancées, ce sont des objets prêts à être exécutés.
    coroutines = [wait_random(delai_max) for _ in range(nombre)]

    # Création des tâches asyncio à partir des coroutines pour planification immédiate
    # La fonction asyncio.create_task transforme chaque coroutine en tâche planifiée
    # qui sera prise en charge par la boucle d'événements dès son démarrage.
    # Cela permet à toutes les coroutines d'être lancées "concurremment".
    taches = [asyncio.create_task(coro) for coro in coroutines]

    # Liste qui va stocker les délais dans l’ordre d’achèvement des tâches
    # On initialise une liste vide qui contiendra les résultats (les délais)
    # dans l'ordre dans lequel les tâches se terminent, ce qui reflète
    # la chronologie réelle de chaque coroutine.
    delais_ordonnes = []

    # Récupération des tâches dans l’ordre où elles se terminent
    # asyncio.as_completed(taches) retourne un itérable de tâches qui seront
    # itérées dans l’ordre où elles finissent, pas dans l’ordre de lancement.
    # Pour chaque tâche terminée, on fait un await pour récupérer son résultat,
    # puis on l'ajoute à la liste des délais ordonnés.
    for tache_terminee in asyncio.as_completed(taches):
        delai = await tache_terminee
        delais_ordonnes.append(delai)

    # Retourne la liste des délais triés naturellement par ordre d'arrivée
    # sans utiliser la fonction sort(), car l'ordre d'arrivée correspond
    # à l'ordre croissant des délais.
    return delais_ordonnes

