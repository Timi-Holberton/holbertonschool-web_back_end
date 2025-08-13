#!/usr/bin/env python3
"""
Écrivez une fonction Python qui renvoie la liste des écoles ayant un thème
spécifique :

Prototype : def schools_by_topic(mongo_collection, topic):

- mongo_collection sera l'objet de collection pymongo
- topic (chaîne de caractères) sera le thème recherché
"""

def schools_by_topic(mongo_collection, topic):
    """
    Renvoie la liste des écoles dont le champ 'topics' contient le thème spécifié.

    Args:
        mongo_collection (pymongo.collection.Collection): Collection MongoDB.
        topic (str): Thème recherché dans le champ 'topics'.

    Returns:
        list of dict: Liste des documents correspondant au critère.
    """
    return list(mongo_collection.find({"topics": topic}))
