#!/usr/bin/env python3
"""
Écrivez un script Python qui fournit certaines statistiques sur les journaux
Nginx stockés dans MongoDB :

Base de données : logs
Collection : nginx
Affichage (identique à l'exemple) :
première ligne : x journaux, où x est le nombre de documents dans cette
collection deuxième ligne : Méthodes :
5 lignes avec le nombre de documents avec la méthode = ["GET", "POST", "PUT",
"PATCH", "DELETE"] dans cet ordre (voir l'exemple ci-dessous -
attention : il y a une tabulation avant chaque ligne)
une ligne avec le nombre de documents avec :
méthode=GET
chemin=/status
Vous pouvez utiliser ce dump comme échantillon de données : dump.zip
"""
from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx_collection = client.logs.nginx

    total_doc = nginx_collection.count_documents({})
    print(f"{total_doc} logs")

    total_get = nginx_collection.count_documents({"method": "GET"})
    total_post = nginx_collection.count_documents({"method": "POST"})
    total_put = nginx_collection.count_documents({"method": "PUT"})
    total_patch = nginx_collection.count_documents({"method": "PATCH"})
    total_delete = nginx_collection.count_documents({"method": "DELETE"})
    total_statut = nginx_collection.count_documents({"method": "GET",
                                                     "path": "/status"})
    print(f"Methods:")
    print(f"\tmethod GET: {total_get}")
    print(f"\tmethod POST: {total_post}")
    print(f"\tmethod PUT: {total_put}")
    print(f"\tmethod PATCH: {total_patch}")
    print(f"\tmethod DELETE: {total_delete}")
    print(f"{total_statut} status check")
