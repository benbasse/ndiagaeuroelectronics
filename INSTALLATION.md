# 📦 Installation Guide - Ndiaga Euro Electronics

## Prérequis

- Node.js 16+ installé sur votre machine
- npm ou yarn

## Étapes d'installation

### 1. Télécharger le projet

Téléchargez et extrayez le dossier du projet sur votre ordinateur.

### 2. Installer les dépendances

Ouvrez un terminal dans le dossier du projet et exécutez :

```bash
npm install
```

Cette commande va installer :
- Vue 3
- Vue Router
- Pinia
- Vite
- @vitejs/plugin-vue

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible à l'adresse : `http://localhost:5173` (ou le port indiqué dans le terminal)

### 4. Build pour la production

Quand vous êtes prêt à déployer :

```bash
npm run build
```

Cela créera un dossier `dist/` avec tous les fichiers optimisés prêts pour le déploiement.

## Dépannage

### Problème : "Module not found"
**Solution :** Supprimez le dossier `node_modules` et `package-lock.json`, puis réinstallez :
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problème : Port déjà utilisé
**Solution :** Le port par défaut est occupé. Vite utilisera automatiquement un autre port disponible.

### Problème : Erreur de build
**Solution :** Assurez-vous d'avoir Node.js 16+ :
```bash
node --version
```

## Structure du projet

```
ndiaga-euro-electronics/
├── index.html              # Point d'entrée HTML
├── package.json            # Dépendances du projet
├── vite.config.js         # Configuration Vite
├── src/
│   ├── main.js            # Point d'entrée JavaScript
│   ├── App.vue            # Composant racine
│   ├── assets/            # Styles globaux
│   ├── components/        # Composants réutilisables
│   ├── views/             # Pages de l'application
│   ├── stores/            # Store Pinia (état global)
│   ├── router/            # Configuration Vue Router
│   └── data/              # Données mock
└── public/                # Fichiers statiques
```

## Commandes disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Compile pour la production
- `npm run preview` - Prévisualise le build de production

## Technologies utilisées

- **Vue 3** - Framework JavaScript progressif
- **Vite** - Build tool ultra-rapide
- **Vue Router** - Routage pour Vue.js
- **Pinia** - Gestion d'état moderne pour Vue
- **Composition API** - Approche moderne de Vue 3

## Prochaines étapes

1. Personnalisez les couleurs dans `src/assets/styles/main.css`
2. Modifiez les produits dans `src/data/products.js`
3. Changez le numéro WhatsApp dans `src/stores/cart.js`
4. Ajoutez vos propres images dans `public/`

## Déploiement

Le projet peut être déployé sur :
- **Vercel** (recommandé) - Configuration automatique
- **Netlify** - Simple drag & drop
- **GitHub Pages** - Gratuit pour les projets open source
- N'importe quel hébergement statique

### Exemple de déploiement sur Vercel :

```bash
npm install -g vercel
vercel
```

## Support

Pour toute question, consultez :
- README.md - Documentation complète
- QUICKSTART.md - Guide de démarrage rapide
- DESIGN.md - Aperçu du design

Bon développement ! 🚀
