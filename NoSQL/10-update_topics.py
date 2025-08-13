#!/usr/bin/env python3
"""
Écrivez une fonction Python qui modifie tous les thèmes d'un document scolaire
en fonction du nom :

Prototype : def update_topics(mongo_collection, name, topics) :
mongo_collection sera l'objet de collection pymongo
name (chaîne de caractères) sera le nom de l'école à mettre à jour
topics (liste de chaînes de caractères) sera la liste des thèmes abordés
dans l'école
"""


def update_topics(mongo_collection, name, topics):
    """
    Met à jour le champ 'topics' de l'école dont le nom est donné.

    Args:
        mongo_collection: collection pymongo
        name (str): nom de l'école à mettre à jour
        topics (list): liste de thèmes à mettre dans le document

    Returns:
        UpdateResult: résultat de la mise à jour
    """
    return mongo_collection.update(
        {"name": name},
        {"$set": {"topics": topics}},
        {"multi": True}
    )
