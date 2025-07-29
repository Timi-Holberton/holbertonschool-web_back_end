#!/usr/bin/env python3
"""
Écrivez une fonction (ne créez pas de fonction asynchrone,
utilisez la syntaxe de fonction normale pour cela) task_wait_random
qui prend un entier max_delay et renvoie un asyncio.Task.
"""

import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Crée une tâche asynchrone à partir de la coroutine wait_random.

    Args:
        max_delay (int): délai maximal (en sec) que peut prendre wait_random

    Returns:
        asyncio.Task: une tâche asynchrone qui exécute wait_random
    """
    # Création d'une tâche asynchrone avec asyncio.create_task
    task = asyncio.create_task(wait_random(max_delay))
    return task
