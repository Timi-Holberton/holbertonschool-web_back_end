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
    Met à jour le champ 'topics' de tous les documents dans la collection
    MongoDB correspondant au nom spécifié.

    Args:
        mongo_collection (pymongo.collection.Collection): Collection MongoDB.
        name (str): Nom de l'école à mettre à jour.
        topics (list of str): Liste des thèmes à assigner au champ 'topics'.

    Returns:
        pymongo.results.UpdateResult: Objet contenant le résultat de la MAJ,
        incluant le nombre de documents modifiés.
    """
    return mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
