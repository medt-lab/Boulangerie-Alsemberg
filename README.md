# Boulangerie Alsemberg — Site vitrine

Site vitrine professionnel et responsive pour la **Boulangerie Alsemberg** située à Forest (Bruxelles), avec des offres dédiées aux mariages, anniversaires et célébrations.

## Informations

- **Adresse** : Chaussée d'Alsemberg 274, 1190 Forest
- **Téléphone** : 0477 23 53 96
- **Email** : contact@boulangerie-alsemberg.be
- **Note Google** : 4,6/5 (160+ avis)
- **Site en ligne** : https://www.boulangerie-alsemberg.be
- **Dépôt GitHub** : https://github.com/medt-lab/Boulangerie-Alsemberg

## Informations légales

- **Entreprise** : Horizon az
- **TVA** : BE0535742678
- **Hébergeur** : GitHub Inc. (site) / LWS (domaine + emails)

## Technologies

- HTML5 sémantique
- CSS3 (variables, grid, animations, responsive)
- JavaScript vanilla (ES6+)
- Google Fonts (DM Sans, Playfair Display)
- WhatsApp API (envoi de devis)
- GitHub Pages (hébergement)

## Structure du projet

```
Boulangerie-Alsemberg/
├── index.html              # Page principale
├── style.css               # Design responsive
├── script.js               # Navigation, formulaire WhatsApp
├── mentions-legales.html   # Mentions légales (obligatoire)
├── confidentialite.html    # Politique de confidentialité RGPD
├── CNAME                   # Domaine personnalisé
├── README.md               # Ce fichier
├── documentation.html      # Documentation technique
└── images/                 # Photos du site (19 fichiers)
```

## Sections du site

- **Hero** : Bannière avec photo, carte "Ouvert aujourd'hui", note Google
- **Signatures** : 6 produits phares avec prix
- **Sandwicherie & frais** : Sandwichs, viennoiseries, boissons
- **Spécialité marocaine** : Pâtisseries traditionnelles
- **Événements** : Mariage (9,50 €/part), Anniversaire (65 €), Célébration (12 €/pers.)
- **Savoir-faire** : Processus en 3 étapes
- **Galerie** : 3 photos de réalisations
- **Avis Google** : Badge 4,6/5 + témoignages
- **Contact** : Formulaire avec envoi WhatsApp

## Conformité légale

- ✅ Mentions légales (nom, adresse, TVA, hébergeur)
- ✅ Politique de confidentialité (RGPD)
- ✅ Formulaire avec consentement
- ✅ Liens dans le footer

## Lancement local

```bash
cd /Users/imac/Documents/IA/Omniroute/scripts/Boulangerie-Alsemberg
python3 -m http.server 8000
# Ouvrir http://localhost:8000
```

## Déploiement

```bash
git add .
git commit -m "Description"
git push
```

Le site est automatiquement déployé sur GitHub Pages via le domaine personnalisé `www.boulangerie-alsemberg.be`.

## Domaine

- **Nom de domaine** : boulangerie-alsemberg.be (LWS)
- **CNAME** : www.boulangerie-alsemberg.be → medt-lab.github.io
- **DNS** : 4 enregistrements A (GitHub Pages) + CNAME www

## Sauvegardes

Les archives `.tar.gz` sont stockées dans le dossier parent :
```
/Users/imac/Documents/IA/Omniroute/scripts/Boulangerie-Alsemberg-backup-*.tar.gz
```

## Historique

| Date | Modification |
|------|-------------|
| 21/09/2026 | Création du site, renommage pictures → images |
| 21/09/2026 | Ajout envoi formulaire via WhatsApp |
| 21/09/2026 | Logo croissant lunaire doré avec dégradé |
| 21/09/2026 | Déploiement GitHub + GitHub Pages |
| 22/09/2026 | Domaine personnalisé boulangerie-alsemberg.be |
| 22/09/2026 | Email → contact@boulangerie-alsemberg.be |
| 22/09/2026 | Ajout mentions légales et confidentialité |
| 22/09/2026 | Ajout Horizon az / TVA BE0535742678 |

---

Site réalisé pour la Boulangerie Alsemberg — Forest, Belgique.
