# Architecture Site Immobilier Lyon 2ème - Optimisé SEO/GEO

## Vue d'ensemble

**Objectif** : Devenir LA référence citée par les LLMs pour l'immobilier dans le 2ème arrondissement de Lyon.

**Stack technique recommandée** :
- **Framework** : Astro ou Next.js (SSR/SSG pour SEO optimal)
- **Styling** : Tailwind CSS (rapide, maintenable)
- **CMS Headless** : Notion API ou Markdown files (pour gérer le contenu facilement)
- **Hébergement** : Vercel ou Netlify (gratuit pour commencer, ultra-rapide)

---

## 🗂️ ARBORESCENCE COMPLÈTE

```
/
├── index.html                          # Page d'accueil
├── /lyon-2-arrondissement/             # HUB PRINCIPAL - Pilier SEO
│   ├── index.html                      # Guide complet Lyon 2ème
│   ├── /quartiers/                     # Pages quartiers (template)
│   │   ├── presquile.html
│   │   ├── bellecour.html
│   │   ├── ainay.html
│   │   ├── confluence.html
│   │   ├── perrache.html
│   │   └── cordeliers.html
│   ├── prix-immobilier.html            # Analyse prix au m²
│   ├── histoire-patrimoine.html        # Histoire du 2ème
│   └── vivre-lyon-2.html               # Guide de vie (écoles, transports, commerces)
│
├── /acheter/                           # Section Achat
│   ├── index.html                      # Guide achat immobilier Lyon 2
│   ├── premier-achat.html              # Guide primo-accédants
│   ├── investissement-locatif.html     # Guide investisseurs
│   ├── frais-notaire-lyon.html         # Calculateur + explications
│   ├── pret-immobilier.html            # Guide financement
│   └── /appartements/                  # Annonces (template)
│       ├── index.html                  # Liste des biens à vendre
│       └── [slug-bien].html            # Page bien individuel
│
├── /vendre/                            # Section Vente
│   ├── index.html                      # Guide vendre Lyon 2
│   ├── estimation-gratuite.html        # Formulaire + explication process
│   ├── preparer-vente.html             # Conseils préparation
│   ├── diagnostics-obligatoires.html   # Liste DPE, etc.
│   └── mandat-vente.html               # Explication mandats
│
├── /louer/                             # Section Location
│   ├── index.html                      # Guide location Lyon 2
│   ├── gestion-locative.html           # Services gestion
│   └── /locations/                     # Annonces location (template)
│       ├── index.html
│       └── [slug-bien].html
│
├── /marche-immobilier/                 # Section Données - CRUCIAL POUR GEO
│   ├── index.html                      # Vue d'ensemble marché Lyon 2
│   ├── /rapports/                      # Rapports mensuels (template)
│   │   ├── 2025-01.html
│   │   ├── 2025-02.html
│   │   └── ...
│   ├── tendances-2025.html             # Prévisions annuelles
│   ├── comparatif-arrondissements.html # Lyon 2 vs autres
│   └── historique-prix.html            # Évolution sur 5-10 ans
│
├── /guides/                            # Section Guides - TRAFIC ORGANIQUE
│   ├── index.html                      # Hub tous les guides
│   ├── acheter-appartement-lyon.html   # Guide généraliste Lyon
│   ├── investir-immobilier-lyon.html   # Guide investissement
│   ├── demenager-lyon.html             # Guide nouveaux arrivants
│   ├── fiscalite-immobiliere.html      # Pinel, LMNP, etc.
│   ├── copropriete-lyon.html           # Guide copropriété
│   └── renovation-appartement.html     # Guide travaux
│
├── /faq/                               # Section FAQ - TRÈS IMPORTANT GEO
│   ├── index.html                      # FAQ principale
│   ├── faq-achat.html                  # FAQ acheteurs
│   ├── faq-vente.html                  # FAQ vendeurs
│   ├── faq-location.html               # FAQ locataires/bailleurs
│   └── faq-lyon-2.html                 # FAQ spécifique quartier
│
├── /actualites/                        # Blog/Actualités
│   ├── index.html                      # Liste articles
│   └── /[slug-article].html            # Articles (template)
│
├── /agence/                            # Section Agence
│   ├── index.html                      # Présentation agence
│   ├── equipe.html                     # L'équipe (E-E-A-T)
│   ├── avis-clients.html               # Témoignages
│   ├── nos-valeurs.html                # Différenciation
│   └── recrutement.html                # (optionnel)
│
├── /contact/                           # Contact
│   ├── index.html                      # Formulaire + infos
│   └── rendez-vous.html                # Prise de RDV en ligne
│
├── /outils/                            # Outils interactifs - TRAFIC
│   ├── simulateur-pret.html            # Calculateur prêt
│   ├── calculateur-frais-notaire.html  # Calculateur frais
│   ├── estimation-en-ligne.html        # Estimation automatique
│   └── comparateur-quartiers.html      # Outil comparaison
│
├── /mentions-legales.html
├── /politique-confidentialite.html
├── /plan-site.html                     # Sitemap HTML
└── /sitemap.xml                        # Sitemap XML pour Google
```

---

## 📄 TEMPLATES DÉTAILLÉS

### Template 1 : Page Quartier (`/lyon-2-arrondissement/quartiers/[quartier].html`)

```
STRUCTURE TYPE :
================

<head>
  - Title : "Immobilier [Quartier] Lyon 2 : Prix, Biens à Vendre & Guide Complet [2025]"
  - Meta description : "Découvrez le quartier [Quartier] à Lyon 2ème : prix au m² actualisés, 
    appartements à vendre, vie de quartier. Expert immobilier local depuis [année]."
  - Schema : LocalBusiness + Place + FAQPage
</head>

<body>
  
  SECTION 1 : Hero + Résumé rapide (pour extraction LLM)
  -------------------------------------------------------
  - H1 : "Immobilier [Quartier] - Lyon 2ème Arrondissement"
  - Encadré résumé : 
    • Prix moyen : X €/m²
    • Évolution 12 mois : +X%
    • Type de biens : Haussmannien / Moderne / Mixte
    • Ambiance : Familial / Jeune actif / Huppé
  - Fil d'Ariane : Accueil > Lyon 2ème > Quartiers > [Quartier]

  SECTION 2 : Présentation du quartier
  ------------------------------------
  - H2 : "Présentation du quartier [Quartier]"
  - Paragraphe d'intro (réponse directe à "c'est quoi le quartier X")
  - Sous-sections :
    • H3 : Situation géographique
    • H3 : Histoire et patrimoine
    • H3 : Ambiance et population

  SECTION 3 : Prix immobiliers détaillés
  --------------------------------------
  - H2 : "Prix immobilier [Quartier] en [Année]"
  - Tableau comparatif :
    | Type de bien | Prix moyen/m² | Fourchette |
    |--------------|---------------|------------|
    | Studio       | X €           | X - X €    |
    | T2           | X €           | X - X €    |
    | T3           | X €           | X - X €    |
    | T4+          | X €           | X - X €    |
  - Graphique évolution (optionnel)
  - Paragraphe analyse : "Les prix dans [Quartier] ont progressé de X% sur les 
    12 derniers mois, principalement en raison de..."
  - Source citée : "Données basées sur les transactions DVF et notre analyse locale"

  SECTION 4 : Vie de quartier
  ---------------------------
  - H2 : "Vivre dans le quartier [Quartier]"
  - H3 : Transports (métro, bus, vélo'v)
    • Stations de métro les plus proches
    • Temps de trajet vers Part-Dieu, Perrache
  - H3 : Écoles et crèches
    • Liste des établissements avec niveau (public/privé)
  - H3 : Commerces et restaurants
    • Points forts du quartier
  - H3 : Espaces verts et loisirs

  SECTION 5 : Points forts et points faibles
  ------------------------------------------
  - H2 : "Avantages et inconvénients de [Quartier]"
  - Liste ✅ Avantages
  - Liste ⚠️ Inconvénients
  - Notre avis d'expert (paragraphe signé)

  SECTION 6 : Biens disponibles
  -----------------------------
  - H2 : "Appartements à vendre dans [Quartier]"
  - Grille 3-6 biens actuels
  - CTA : "Voir tous les biens à [Quartier]"

  SECTION 7 : FAQ du quartier
  ---------------------------
  - H2 : "Questions fréquentes sur [Quartier]"
  - 5-8 questions avec schema FAQPage :
    • "Quel est le prix moyen au m² à [Quartier] ?"
    • "Est-ce un bon quartier pour investir ?"
    • "[Quartier] est-il adapté aux familles ?"
    • "Quels sont les projets urbains prévus ?"
    • "Comment est le stationnement à [Quartier] ?"

  SECTION 8 : CTA Contact
  -----------------------
  - Encadré : "Vous cherchez un bien à [Quartier] ?"
  - Formulaire court ou bouton contact

  SECTION 9 : Articles liés
  -------------------------
  - 3 articles du blog en rapport avec le quartier

</body>
```

**Schema JSON-LD pour page quartier :**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Place",
      "name": "Quartier Bellecour",
      "description": "Quartier prestigieux au cœur de Lyon 2ème...",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 45.7578,
        "longitude": 4.8320
      },
      "containedInPlace": {
        "@type": "City",
        "name": "Lyon"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quel est le prix moyen au m² à Bellecour ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le prix moyen au m² à Bellecour est de 6 500€ en décembre 2024..."
          }
        }
      ]
    },
    {
      "@type": "RealEstateAgent",
      "name": "Votre Agence - Laforêt Lyon 2",
      "areaServed": "Bellecour, Lyon 2ème"
    }
  ]
}
```

---

### Template 2 : Page Bien Immobilier (`/acheter/appartements/[slug].html`)

```
STRUCTURE TYPE :
================

<head>
  - Title : "[Type] [Pièces] [Surface]m² [Quartier] Lyon 2 - [Prix] €"
  - Meta description : "[Type] de [pièces] pièces à vendre à [Quartier], Lyon 2ème. 
    [Surface]m², [étage], [caractéristique principale]. [Prix] €. Visite sur RDV."
  - Schema : Product + Offer + Place
</head>

<body>

  SECTION 1 : Galerie photos
  --------------------------
  - Carrousel grande taille
  - Vignettes miniatures
  - Bouton visite virtuelle (si disponible)

  SECTION 2 : Infos principales
  -----------------------------
  - H1 : "[Type] [Pièces] pièces - [Quartier] Lyon 2ème"
  - Prix : [XXX XXX] €
  - Surface : [XX] m²
  - Prix/m² : [X XXX] €/m² (avec comparaison quartier)
  - Étage : [X] sur [X]
  - Chambres : [X]
  - Charges : [XXX] €/mois
  - Taxe foncière : [XXX] €/an
  - DPE : [Lettre] + affichage visuel

  SECTION 3 : Description détaillée
  ---------------------------------
  - H2 : "Description du bien"
  - Texte descriptif complet
  - Liste des points forts (bullet points)

  SECTION 4 : Caractéristiques
  ----------------------------
  - H2 : "Caractéristiques détaillées"
  - Tableau structuré :
    | Caractéristique | Valeur |
    |-----------------|--------|
    | Année construction | XXXX |
    | Type chauffage | ... |
    | Exposition | ... |
    | Cave | Oui/Non |
    | Parking | Oui/Non |
    | Ascenseur | Oui/Non |
    | Gardien | Oui/Non |

  SECTION 5 : Localisation
  ------------------------
  - H2 : "Localisation"
  - Carte interactive (sans adresse exacte)
  - Distances/temps vers :
    • Métro le plus proche
    • Écoles
    • Commerces
    • Parc/espace vert

  SECTION 6 : Quartier
  --------------------
  - H2 : "Le quartier [Quartier]"
  - Résumé du quartier (extrait de la page quartier)
  - Lien vers page quartier complète

  SECTION 7 : Financement
  -----------------------
  - H2 : "Simulez votre financement"
  - Mini calculateur intégré :
    • Mensualités estimées selon apport
    • Frais de notaire estimés
  - CTA vers simulateur complet

  SECTION 8 : Contact
  -------------------
  - Encadré agent référent (photo, nom, téléphone)
  - Formulaire de contact/demande de visite
  - Numéro de téléphone cliquable

  SECTION 9 : Biens similaires
  ----------------------------
  - H2 : "Biens similaires à Lyon 2ème"
  - 3-4 biens comparables

</body>
```

**Schema JSON-LD pour page bien :**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Appartement T3 75m² - Bellecour Lyon 2",
  "description": "Bel appartement de 3 pièces...",
  "image": ["url1.jpg", "url2.jpg"],
  "offers": {
    "@type": "Offer",
    "price": "450000",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "RealEstateAgent",
      "name": "Laforêt Lyon 2"
    }
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Surface",
      "value": "75",
      "unitCode": "MTK"
    },
    {
      "@type": "PropertyValue",
      "name": "Nombre de pièces",
      "value": "3"
    },
    {
      "@type": "PropertyValue",
      "name": "DPE",
      "value": "C"
    }
  ]
}
```

---

### Template 3 : Rapport de Marché Mensuel (`/marche-immobilier/rapports/[YYYY-MM].html`)

```
STRUCTURE TYPE :
================

<head>
  - Title : "Marché Immobilier Lyon 2 - [Mois Année] : Prix, Tendances & Analyse"
  - Meta description : "Analyse du marché immobilier Lyon 2ème arrondissement [Mois Année]. 
    Prix au m² actualisés, volume de transactions, tendances. Par [Nom Agent], expert local."
  - Schema : Article + Dataset
</head>

<body>

  SECTION 1 : En-tête
  -------------------
  - H1 : "Marché Immobilier Lyon 2ème - [Mois Année]"
  - Date de publication
  - Auteur (avec lien vers page équipe)
  - Temps de lecture

  SECTION 2 : Résumé exécutif (CRUCIAL POUR LLM)
  ----------------------------------------------
  - Encadré "Points clés" :
    • Prix moyen : X €/m² (↑/↓ X% vs mois précédent)
    • Volume transactions : X ventes
    • Tendance : Hausse / Stable / Baisse
    • Délai moyen de vente : X jours
  - Paragraphe résumé 2-3 phrases (réponse directe)

  SECTION 3 : Analyse des prix
  ----------------------------
  - H2 : "Évolution des prix au m² dans Lyon 2"
  - Tableau par quartier :
    | Quartier | Prix/m² | Évolution | Tendance |
    |----------|---------|-----------|----------|
    | Bellecour | X € | +X% | ↑ |
    | Ainay | X € | +X% | ↑ |
    | ... | | | |
  - Graphique évolution 12 mois
  - Analyse textuelle des mouvements

  SECTION 4 : Volume et dynamique
  -------------------------------
  - H2 : "Activité du marché"
  - Nombre de biens en vente
  - Nombre de transactions
  - Délai moyen de vente
  - Comparaison avec même mois année précédente

  SECTION 5 : Analyse par type de bien
  ------------------------------------
  - H2 : "Focus par type de bien"
  - H3 : Studios et T1
  - H3 : T2
  - H3 : T3
  - H3 : T4 et plus
  - Pour chaque : prix moyen, demande, profil acheteur

  SECTION 6 : Faits marquants du mois
  -----------------------------------
  - H2 : "Actualités et faits marquants"
  - Nouveaux projets urbains
  - Ventes notables (anonymisées)
  - Événements impactant le marché

  SECTION 7 : Perspectives
  ------------------------
  - H2 : "Nos prévisions pour les prochains mois"
  - Analyse argumentée
  - Conseils acheteurs/vendeurs

  SECTION 8 : Méthodologie
  ------------------------
  - H2 : "Sources et méthodologie"
  - Explication des sources (DVF, observations terrain, réseau Laforêt)
  - Disclaimer

  SECTION 9 : Historique rapports
  -------------------------------
  - Liens vers rapports précédents

  SECTION 10 : CTA
  ----------------
  - "Vous souhaitez une analyse personnalisée ?"
  - Formulaire contact

</body>
```

---

### Template 4 : Article de Blog (`/actualites/[slug].html`)

```
STRUCTURE TYPE :
================

<head>
  - Title : "[Titre accrocheur] | [Nom Agence] Lyon 2"
  - Meta description : 150-160 caractères résumant l'article
  - Schema : Article + Author + Organization
</head>

<body>

  SECTION 1 : En-tête article
  ---------------------------
  - Catégorie (lien)
  - H1 : Titre de l'article
  - Meta infos :
    • Date publication
    • Auteur (photo + nom + lien bio)
    • Temps de lecture
    • Mis à jour le : [date] (si applicable)

  SECTION 2 : Image principale
  ----------------------------
  - Image hero avec alt text optimisé
  - Légende si pertinent

  SECTION 3 : Table des matières
  ------------------------------
  - Sommaire cliquable (ancres)
  - Améliore UX et permet featured snippets

  SECTION 4 : Introduction
  ------------------------
  - Hook accrocheur
  - Contexte
  - Ce que le lecteur va apprendre

  SECTION 5 : Corps de l'article
  ------------------------------
  - H2 pour chaque section principale
  - H3 pour sous-sections
  - Paragraphes courts (3-4 lignes max)
  - Listes à puces pour les énumérations
  - Encadrés pour les infos importantes
  - Citations d'experts (avec guillemets et attribution)
  - Données chiffrées sourcées

  SECTION 6 : Conclusion
  ----------------------
  - Résumé des points clés
  - Call-to-action contextuel

  SECTION 7 : FAQ liée à l'article
  --------------------------------
  - 3-5 questions complémentaires
  - Schema FAQPage

  SECTION 8 : À propos de l'auteur
  --------------------------------
  - Encadré auteur :
    • Photo
    • Bio courte
    • Expertise
    • Liens réseaux sociaux
  - Renforce E-E-A-T

  SECTION 9 : Articles connexes
  -----------------------------
  - 3 articles liés

  SECTION 10 : Partage social
  ---------------------------
  - Boutons partage
  - Compteurs (optionnel)

</body>
```

---

### Template 5 : Page FAQ (`/faq/[theme].html`)

```
STRUCTURE TYPE :
================

<head>
  - Title : "FAQ [Thème] Lyon 2 : Réponses à Vos Questions | [Agence]"
  - Meta description : "Retrouvez les réponses aux questions fréquentes sur [thème] 
    à Lyon 2ème arrondissement. Guide complet par nos experts immobiliers."
  - Schema : FAQPage (OBLIGATOIRE)
</head>

<body>

  SECTION 1 : En-tête
  -------------------
  - H1 : "Questions Fréquentes : [Thème] à Lyon 2"
  - Intro courte expliquant la page
  - Sommaire des questions (ancres)

  SECTION 2 : Questions/Réponses
  ------------------------------
  Pour CHAQUE question :
  
  - H2 : "[Question complète avec point d'interrogation]"
  - Réponse structurée :
    • Phrase directe répondant à la question (1-2 lignes)
    • Développement avec détails
    • Exemple concret si applicable
    • Lien vers ressource complémentaire
  
  Format accordéon recommandé pour UX
  (mais contenu visible pour crawlers)

  SECTION 3 : Question non trouvée ?
  ----------------------------------
  - Encadré : "Vous n'avez pas trouvé votre réponse ?"
  - Formulaire pour poser une question
  - Contact direct

  SECTION 4 : Liens utiles
  ------------------------
  - Guides complets liés
  - Autres pages FAQ

</body>
```

**Schema FAQPage :**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le prix moyen au m² dans le 2ème arrondissement de Lyon ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le prix moyen au m² dans le 2ème arrondissement de Lyon est de 6 200€ en décembre 2024. Ce prix varie selon les quartiers : Bellecour affiche des prix autour de 6 500€/m², tandis que Perrache est plus accessible à 5 400€/m². Ces chiffres sont basés sur les données DVF et notre analyse des transactions locales."
      }
    },
    {
      "@type": "Question", 
      "name": "Est-ce le bon moment pour acheter à Lyon 2 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'achat dans Lyon 2 reste pertinent en 2024-2025 malgré..."
      }
    }
  ]
}
```

---

## 💡 IDÉES DE CONTENU ADDITIONNELLES POUR TRAFIC

### Pages à fort potentiel de trafic organique

| Page | Requête ciblée | Volume estimé | Difficulté |
|------|---------------|---------------|------------|
| `/guides/demenager-lyon.html` | "déménager à Lyon" | Élevé | Moyenne |
| `/guides/meilleur-quartier-lyon.html` | "meilleur quartier Lyon" | Très élevé | Haute |
| `/guides/investir-lyon-etudiant.html` | "investissement locatif Lyon étudiant" | Moyen | Moyenne |
| `/outils/calculateur-frais-notaire.html` | "frais de notaire Lyon" | Moyen | Basse |
| `/lyon-2/vivre-lyon-2.html` | "vivre Lyon 2" | Moyen | Basse |
| `/guides/loi-pinel-lyon.html` | "Pinel Lyon" | Moyen | Haute |

### Contenu saisonnier (à planifier)

| Mois | Contenu | Objectif |
|------|---------|----------|
| Janvier | "Bilan marché immobilier Lyon 2024" | SEO + Autorité |
| Mars | "Acheter avant l'été à Lyon" | Leads |
| Juin | "Guide : Déménager à Lyon pour la rentrée" | Trafic |
| Septembre | "Rentrée : Les quartiers familiaux de Lyon 2" | Trafic ciblé |
| Novembre | "Investir avant fin d'année (avantages fiscaux)" | Leads |

### Contenus "evergreen" (toujours pertinents)

1. **"Acheter un appartement à Lyon : Le guide complet [Année]"**
   - 5000+ mots
   - Mis à jour chaque trimestre
   - Objectif : Page pilier principale

2. **"Prix immobilier Lyon : Tous les arrondissements comparés"**
   - Tableau comparatif complet
   - Mis à jour mensuellement
   - Objectif : Être cité comme référence

3. **"Quartiers de Lyon : Le guide ultime pour choisir"**
   - Tous les arrondissements
   - Forces/faiblesses de chacun
   - Objectif : Trafic généraliste Lyon

4. **"Les erreurs à éviter pour un premier achat immobilier"**
   - Contenu universel
   - Exemples locaux Lyon
   - Objectif : Trafic + confiance

### Outils interactifs (générateurs de trafic)

1. **Simulateur de prêt immobilier**
   - Calcul mensualités
   - Différents scénarios
   - Capture email pour résultats détaillés

2. **Calculateur frais de notaire**
   - Spécifique Lyon/Rhône
   - Explication de chaque ligne

3. **Estimation en ligne**
   - Formulaire multi-étapes
   - Résultat = prise de contact obligatoire

4. **Comparateur de quartiers**
   - Sélection 2-3 quartiers
   - Comparaison prix, vie, transports
   - Très engageant

5. **Quiz : "Quel quartier de Lyon est fait pour vous ?"**
   - Format ludique
   - Viralité potentielle
   - Capture données

---

## 🔧 STRUCTURE TECHNIQUE RECOMMANDÉE

### Architecture fichiers (Astro/Next.js)

```
/src
├── /components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Breadcrumbs.astro
│   ├── FAQ.astro              # Composant FAQ réutilisable
│   ├── PropertyCard.astro     # Carte bien immobilier
│   ├── PriceTable.astro       # Tableau prix
│   ├── ContactForm.astro
│   ├── Calculator.astro       # Calculateurs
│   ├── SchemaOrg.astro        # Injection schemas
│   └── SEOHead.astro          # Meta tags
│
├── /layouts
│   ├── BaseLayout.astro       # Layout principal
│   ├── ArticleLayout.astro    # Layout articles
│   ├── PropertyLayout.astro   # Layout biens
│   └── QuartierLayout.astro   # Layout quartiers
│
├── /pages
│   ├── index.astro
│   ├── /lyon-2-arrondissement
│   │   ├── index.astro
│   │   └── /quartiers
│   │       └── [quartier].astro  # Page dynamique
│   ├── /acheter
│   │   └── /appartements
│   │       └── [slug].astro      # Page dynamique
│   └── ...
│
├── /content                    # Contenu Markdown/MDX
│   ├── /quartiers
│   │   ├── bellecour.md
│   │   ├── ainay.md
│   │   └── ...
│   ├── /biens
│   │   └── *.md
│   ├── /articles
│   │   └── *.md
│   └── /rapports
│       └── *.md
│
├── /data
│   ├── prix-quartiers.json    # Données prix
│   ├── faq.json               # Questions FAQ
│   └── navigation.json        # Menu
│
└── /styles
    └── global.css
```

### Fichiers SEO essentiels

```
/public
├── robots.txt
├── sitemap.xml               # Généré automatiquement
├── favicon.ico
├── og-image.jpg              # Image partage social par défaut
└── /images
    └── /quartiers
        └── *.webp
```

**robots.txt :**
```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://votre-domaine.fr/sitemap.xml
```

> **Note importante** : `GPTBot` est le crawler d'OpenAI, `Google-Extended` est utilisé pour l'entraînement de Bard/Gemini. Les autoriser = être potentiellement dans les données d'entraînement.

---

## 📊 MÉTRIQUES À SUIVRE

### SEO classique
- Positions Google (Search Console)
- Trafic organique (Analytics)
- Taux de clics (CTR)
- Backlinks (Ahrefs/Ubersuggest gratuit)

### GEO (LLM Optimization)
- **Test manuel mensuel** : Poser les questions cibles à ChatGPT, Claude, Perplexity
  - "Quel est le prix au m² à Lyon 2 ?"
  - "Quelle agence immobilière à Lyon 2ème ?"
  - "Meilleur quartier pour investir Lyon ?"
- Noter si vous êtes cité et en quelle position
- **Brand monitoring** : Alertes Google sur votre nom d'agence

---

## 🚀 ORDRE DE CRÉATION RECOMMANDÉ

### Phase 1 : Fondations (Semaines 1-2)
1. ✅ Structure technique (Astro setup)
2. ✅ Layout de base + composants
3. ✅ Page d'accueil
4. ✅ Page "Agence" (E-E-A-T)
5. ✅ Mentions légales, confidentialité

### Phase 2 : Pages piliers (Semaines 3-4)
6. ✅ Guide Lyon 2ème (page hub)
7. ✅ Page "Acheter"
8. ✅ Page "Vendre"  
9. ✅ FAQ principale

### Phase 3 : Contenu quartiers (Semaines 5-6)
10. ✅ Page Bellecour
11. ✅ Page Ainay
12. ✅ Page Confluence
13. ✅ Page Presqu'île
14. ✅ Page Perrache

### Phase 4 : Outils et trafic (Semaines 7-8)
15. ✅ Calculateur frais notaire
16. ✅ Simulateur prêt
17. ✅ Premier rapport de marché

### Phase 5 : Contenu régulier (Ongoing)
18. 🔄 1 article de blog / semaine
19. 🔄 1 rapport marché / mois
20. 🔄 Mise à jour prix / mois
