# Jad'OR — Boulangerie artisanale & pâtisserie d'événements

Site vitrine professionnel et responsive pour la Boulangerie Jad'OR (Forest), avec des offres dédiées aux mariages, anniversaires et célébrations.

## Coordonnées

- **Adresse** : Chaussée d'Alsemberg 274, 1190 Forest
- **Téléphone** : 0477 23 53 96
- **Email** : bonjour@jade-baker.fr
- **Note Google** : 4,6/5 (160+ avis)

## Horaires

| Jour | Horaires |
|------|----------|
| Lundi | 6h00 – 20h00 |
| Mardi | 6h00 – 20h00 |
| Mercredi | **Fermé** |
| Jeudi | 6h00 – 20h00 |
| Vendredi | 6h00 – 20h00 |
| Samedi | 6h00 – 20h00 |
| Dimanche | 6h00 – 20h00 |

## Sections du site

### Hero
- Photo d'accueil (vitrine pains)
- Petite photo de célébration superposée
- Note Google 4,6/5
- Carte "Ouvert aujourd'hui"

### Signatures Jad'OR (6 produits)
| Produit | Image | Prix |
|---------|-------|------|
| Baguette Tradition | j8.jpg | 1,20 € |
| Croissant à l'amande | j6.jpg | 2,80 € |
| Pain Campagnard | j1.jpg | 3,90 € |
| Tarte Tatin | j4.jpg | 6,50 € |
| Pain aux céréales | Unsplash | 4,20 € |
| Croissant au beurre | Unsplash | 2,80 € |

### Sandwicherie & frais (4 produits)
| Produit | Image | Prix |
|---------|-------|------|
| Sandwich frais | THON-CRUDITES-1.jpg | 7,50 € |
| Viennoiseries | j18.jpg | À partir de 1,80 € |
| Sélection fraîche | j9.jpg | Sur sélection |
| Boissons | Unsplash café | 3,50 € |

**Sandwichs disponibles** : poulet, andalouse, thon nature, thon piquant, crudités

### Spécialité marocaine (2 produits)
| Produit | Image |
|---------|-------|
| Gâteaux de toutes sortes | j7.jpg |
| Création sur mesure | j11.jpg |

### Événements (3 offres)
| Événement | Image | Prix |
|-----------|-------|------|
| Mariage | j13.jpg | À partir de 9,50 €/part |
| Anniversaire | j16.jpg | À partir de 65 € |
| Célébration | j17.jpg | 12 €/pers. |

### Savoir-faire
- Photo : j8.jpg (assortiment pains)
- Processus en 3 étapes : Écoute → Imagination → Sublimation

### Galerie (3 images)
| Image | Description |
|-------|-------------|
| j2.jpg | Pains de tradition |
| j5.jpg | Entremets au chocolat |
| j15.jpg | Douceurs pour célébration |

### Avis Google
- Badge 4,6/5 avec 160+ avis
- 3 avis clients intégrés (C.M., V.T., L.V.)

### Contact
- Formulaire de demande de devis
- Envoi via WhatsApp
- Coordonnées complètes

## Fonctionnalités

- Navigation responsive avec menu mobile
- Présentation des créations signatures
- Offres événementielles : mariage, anniversaire, célébration
- Mise en avant du savoir-faire et galerie
- Section avis Google avec notes et témoignages
- Formulaire de demande de devis avec envoi WhatsApp
- Accessibilité : navigation au clavier, libellés, contraste et réduction des animations
- Animations au défilement (reveal)
- Logo croissant lunaire doré

## Structure des fichiers

| Fichier | Description |
|---------|-------------|
| `index.html` | Structure de la page |
| `style.css` | Design responsive et animations |
| `script.js` | Navigation, défilement et formulaire |
| `favicon.svg` | Identité visuelle (croissant lunaire) |
| `documentation.html` | Documentation technique du site |
| `images/` | Photos du site (j1.jpg à j18.jpg + THON-CRUDITES-1.jpg) |

## Images du dossier images/

| Image | Contenu | Utilisation |
|-------|---------|-------------|
| j1.jpg | Vitrine pains | Hero + Pain Campagnard |
| j2.jpg | Vitrine gâteaux | Galerie |
| j3.jpg | Vitrine pâtisseries | — |
| j4.jpg | Tartes fraîches | Tarte Tatin |
| j5.jpg | Gâteau Noël | Galerie |
| j6.jpg | Tartes chocolat/framboise | Croissant à l'amande |
| j7.jpg | Pâtisseries marocaines | Spécialité marocaine |
| j8.jpg | Assortiment pains | Baguette Tradition + Savoir-faire |
| j9.jpg | Red velvet / desserts | Sélection fraîche |
| j10.jpg | Barres chocolat/pistache | — |
| j11.jpg | Makrouds/briouats | Spécialité marocaine |
| j12.jpg | Entremets chocolat | Photo banner footer |
| j13.jpg | Façade boutique | Événements Mariage |
| j14.jpg | Gâteau mariage | — |
| j15.jpg | Verres dessert | Galerie |
| j16.jpg | Gâteau anniversaire | Événements Anniversaire |
| j17.jpg | Gâteau 50 ans | Événements Célébration |
| j18.jpg | Viennoiseries | Sandwicherie Viennoiseries |
| THON-CRUDITES-1.jpg | Sandwich thon | Sandwich frais |

## Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Design responsive, animations, variables custom
- **JavaScript vanilla** : Navigation, formulaire, observateurs d'intersection
- **Google Fonts** : DM Sans, Playfair Display
- **WhatsApp API** : Envoi de devis

## Lancement du site

Ouvrir `index.html` directement dans un navigateur ou lancer un serveur local :

```bash
cd /Users/imac/Documents/IA/Omniroute/scripts/Jade-Baker
python3 -m http.server 8000
```

Puis ouvrir [http://localhost:8000](http://localhost:8000).

## Déploiement Git

```bash
git init
git add .
git commit -m "Version initiale du site Jad'OR"
gh repo create jade-baker --public --source=. --remote=origin --push
```

## Sauvegardes

Les archives de sauvegarde sont situées dans :
`/Users/imac/Documents/IA/Omniroute/scripts/Jade-Baker-backup-*.tar.gz`

## Auteur

Site réalisé pour la Boulangerie Jad'OR — Forest, Belgique.
