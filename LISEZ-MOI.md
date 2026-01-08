# 🚀 Ndiaga Euro Electronics - Projet Vue.js Complet

## 📦 C'EST QUOI CE PROJET ?

Un site e-commerce **complet et fonctionnel** pour vendre des produits électroniques. 
Tout est prêt à l'emploi : pages, composants, panier, système de commande WhatsApp !

## ⚡ DÉMARRAGE RAPIDE (3 minutes)

### Étape 1 : Ouvrir le terminal
- **Windows** : Ouvrez PowerShell ou CMD dans le dossier du projet
- **Mac/Linux** : Ouvrez Terminal dans le dossier du projet

### Étape 2 : Installer les dépendances
```bash
npm install
```
⏱️ Cela prend 1-2 minutes

### Étape 3 : Lancer le site
```bash
npm run dev
```

### Étape 4 : Ouvrir dans le navigateur
Le terminal va afficher quelque chose comme :
```
Local: http://localhost:5173
```
Cliquez sur le lien ou copiez-le dans votre navigateur !

## 🎯 CE QUI EST INCLUS

✅ **7 Pages complètes**
- Accueil (avec hero animé)
- Boutique (avec filtres et recherche)
- Détails produit
- Panier
- À propos
- Contact

✅ **28 Produits dans 7 catégories**
- Smartphones
- Laptops
- Télévisions
- Audio
- Accessoires informatiques
- Gaming
- Électronique maison

✅ **Fonctionnalités avancées**
- Panier avec Pinia (ajout/suppression/modification)
- Filtrage par catégorie
- Recherche de produits
- Tri par prix/nom
- Commande via WhatsApp
- Design responsive (mobile/tablet/desktop)
- Animations fluides

## 🎨 DESIGN

- **Style** : Moderne, tech, premium
- **Couleurs** : Cyan (#00d9ff), Rose (#ff006e), Jaune (#ffbe0b)
- **Typographies** : Orbitron + Outfit
- **Animations** : Hover effects, transitions, micro-interactions

## 📱 INTÉGRATION WHATSAPP

Le panier génère automatiquement un message WhatsApp avec :
- Nom du magasin
- Liste des produits et quantités
- Prix total
- Envoi vers : +221 77 288 96 73

## 🛠️ PERSONNALISATION

### Changer le numéro WhatsApp
Fichier : `src/stores/cart.js` (ligne 48)
```javascript
const phoneNumber = '+221772889673' // Changez ici
```

### Modifier les produits
Fichier : `src/data/products.js`
Ajoutez/modifiez les produits dans l'array

### Changer les couleurs
Fichier : `src/assets/styles/main.css`
Modifiez les variables CSS :
```css
:root {
  --primary: #00d9ff;    /* Couleur principale */
  --secondary: #ff006e;  /* Couleur secondaire */
  --accent: #ffbe0b;     /* Couleur d'accent */
}
```

### Ajouter de vraies images
1. Placez vos images dans le dossier `public/images/`
2. Dans `src/data/products.js`, ajoutez :
```javascript
image: '/images/mon-produit.jpg'
```

## 📂 STRUCTURE DU PROJET

```
ndiaga-euro-electronics/
├── index.html              # Page HTML principale
├── package.json            # Dépendances npm
├── vite.config.js         # Configuration Vite
├── src/
│   ├── main.js            # Point d'entrée
│   ├── App.vue            # Composant racine
│   ├── assets/
│   │   └── styles/
│   │       └── main.css   # Styles globaux
│   ├── components/        # Composants réutilisables
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   │   ├── Hero.vue
│   │   ├── ProductCard.vue
│   │   └── CategoryCard.vue
│   ├── views/             # Pages
│   │   ├── Home.vue
│   │   ├── Shop.vue
│   │   ├── ProductDetails.vue
│   │   ├── Cart.vue
│   │   ├── About.vue
│   │   └── Contact.vue
│   ├── stores/            # État global (Pinia)
│   │   └── cart.js
│   ├── router/            # Routes
│   │   └── index.js
│   └── data/              # Données
│       └── products.js
└── public/                # Fichiers statiques
```

## 🚀 COMMANDES DISPONIBLES

```bash
npm run dev      # Lancer en mode développement
npm run build    # Compiler pour la production
npm run preview  # Prévisualiser le build
```

## 🌐 DÉPLOIEMENT

### Option 1 : Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Option 2 : Netlify
1. Compilez : `npm run build`
2. Glissez-déposez le dossier `dist` sur netlify.com

### Option 3 : GitHub Pages
1. Compilez : `npm run build`
2. Uploadez le contenu de `dist` sur votre repo GitHub

## 🆘 PROBLÈMES COURANTS

### "npm not found"
➡️ Installez Node.js depuis nodejs.org

### "Module not found"
➡️ Supprimez `node_modules` et réinstallez :
```bash
rm -rf node_modules package-lock.json
npm install
```

### Le port est occupé
➡️ Vite choisira automatiquement un autre port disponible

### Erreur lors du build
➡️ Vérifiez votre version de Node.js :
```bash
node --version  # Doit être >= 16
```

## 📚 DOCUMENTATION

- **README.md** : Documentation complète en anglais
- **INSTALLATION.md** : Guide d'installation détaillé
- **QUICKSTART.md** : Démarrage rapide
- **DESIGN.md** : Aperçu du design et de l'architecture
- **LISEZ-MOI.md** : Ce fichier (guide en français)

## 🎓 TECHNOLOGIES

- **Vue 3** : Framework JavaScript moderne
- **Vite** : Build tool ultra-rapide
- **Vue Router** : Système de navigation
- **Pinia** : Gestion d'état (remplaçant de Vuex)
- **Composition API** : API moderne de Vue 3

## ✨ FONCTIONNALITÉS TECHNIQUES

- ⚡ Hot Module Replacement (HMR)
- 📱 Responsive Design
- 🎨 Animations CSS performantes
- 🔍 SEO-friendly
- ♿ Accessible
- 🚀 Optimisé pour la production

## 💡 PROCHAINES ÉTAPES

1. ✅ Installez les dépendances (`npm install`)
2. ✅ Lancez le serveur (`npm run dev`)
3. 🎨 Personnalisez les couleurs et les produits
4. 📸 Ajoutez vos propres images
5. 📱 Changez le numéro WhatsApp
6. 🚀 Déployez sur Vercel/Netlify

## 📞 CONTACT

Pour toute question sur le projet :
- Consultez les fichiers de documentation
- Lisez les commentaires dans le code
- Tous les composants sont bien commentés

## 🎉 BON DÉVELOPPEMENT !

Le projet est **100% fonctionnel** dès maintenant.
Testez toutes les fonctionnalités, puis personnalisez selon vos besoins !

---

**Créé avec ❤️ pour Ndiaga Euro Electronics**
