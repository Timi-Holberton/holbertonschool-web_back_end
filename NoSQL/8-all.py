"""
Écrivez une fonction Python qui répertorie tous les documents
d'une collection.
"""


def list_all(mongo_collection):
    """ Liste tous les doc """
    return list(mongo_collection.find())
