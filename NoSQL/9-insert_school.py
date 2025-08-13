#!/usr/bin/env python3
"""
Écrivez une fonction Python qui insère un nouveau document dans une
collection en fonction des arguments kwargs.
"""


def insert_school(mongo_collection, **kwargs):
    """
    Insère un document dans la collection MongoDB.

    Args: mongo_collection: collection pymongo
          kwargs: paires clé/valeur du document à insérer

    Returns: InsertOneResult: résultat de l'insertion
    """
    return mongo_collection.insert(kwargs)
