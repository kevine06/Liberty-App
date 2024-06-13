#Description
Liberty NFT Marketplace est une application web développée avec Angular et Tailwind CSS. Elle permet aux utilisateurs de créer, mettre en vente et acheter des NFTs. Le projet utilise un backend JSON Server pour simuler une API RESTful et gérer les données des NFTs.

#Installation
Suivez ces étapes pour installer et exécuter le projet en local :

Clonez le dépôt

Copier le code
 https://github.com/kevine06/Liberty-App.git
cd liberty-site
Installez les dépendances


npm install
Installez JSON Server


npm install -g json-server
Configuration
Assurez-vous que json-server est configuré pour démarrer avec les données initiales.

Démarrez JSON Server

json-server --watch src/db.json
Démarrez l'application Angular

ng serve
Accédez à l'application via http://localhost:4200.

Utilisation
L'application est divisée en plusieurs sections :

Accueil : Présente les collections les plus en vogue.
Explorer : Permet de naviguer à travers différentes collections et articles.
Détail de l'article : Affiche les détails d'un NFT spécifique.<b>
Auteur : Présente des informations sur les artistes.<br>
Créer votre NFT : Permet aux utilisateurs de créer et de mettre en vente leurs propres NFTs.<br>
Structure du Projet<br/>
<br>
<br>
liberty-site/<br>
├── src//<br>
│   ├── app//<br>
│   │   ├── components//<br>
│   │   │   ├── navbar//<br>
│   │   │   ├── footer//<br>
│   │   │   ├── page/app-home/<br>
│   │   ├── liberty.service.ts/<br>
│   │   ├── models//<br>
│   │   │   ├── model.ts/<br>
│   │   ├── app.component.ts/<br>
│   │   ├── app.module.ts//<br>
│   ├── assets//<br>
│   ├── styles//<br>
│   │   ├── tailwind.css//<br>
├── db.json/<br>
├── README.md/<br>
