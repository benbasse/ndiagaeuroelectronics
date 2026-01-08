# Ndiaga Euro Electronics - Vue.js E-Commerce Project

## 🚀 Premium Electronics Store

A modern, high-quality Vue.js e-commerce application for selling electronic devices. Built with Vue 3, Vite, Composition API, Vue Router, and Pinia.

## ✨ Features

- **Modern Design**: Premium, tech-oriented aesthetic with smooth animations
- **Responsive Layout**: Fully responsive design for desktop, tablet, and mobile
- **Product Catalog**: 28 products across 7 categories
- **Shopping Cart**: Full cart management with Pinia state management
- **WhatsApp Integration**: Direct ordering via WhatsApp
- **Multiple Pages**: Home, Shop, Product Details, Cart, About, Contact
- **Category Filtering**: Browse by category and search functionality
- **Product Sorting**: Sort by price and name

## 📦 Categories

1. Smartphones
2. Laptops
3. Televisions
4. Audio Devices
5. Computer Accessories
6. Gaming Equipment
7. Home Electronics

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript Framework
- **Vite** - Next Generation Frontend Tooling
- **Vue Router** - Official Router for Vue.js
- **Pinia** - Vue Store (State Management)
- **Composition API** - Modern Vue.js approach

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
ndiaga-euro-electronics/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.js
│   ├── App.vue
│   ├── assets/
│   │   └── styles/
│   │       └── main.css
│   ├── components/
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   │   ├── Hero.vue
│   │   ├── ProductCard.vue
│   │   └── CategoryCard.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── Shop.vue
│   │   ├── ProductDetails.vue
│   │   ├── Cart.vue
│   │   ├── About.vue
│   │   └── Contact.vue
│   ├── stores/
│   │   └── cart.js
│   ├── router/
│   │   └── index.js
│   └── data/
│       └── products.js
```

## 🎨 Design Features

- **Premium Color Scheme**: Cyan (#00d9ff), Pink (#ff006e), Yellow (#ffbe0b)
- **Typography**: Orbitron (headers), Outfit (body text)
- **Animations**: Smooth transitions, hover effects, and micro-interactions
- **Gradients**: Modern gradient backgrounds and text effects
- **Icons**: Emoji icons for categories and features

## 🛒 Cart & Checkout

The cart system is managed with Pinia and includes:
- Add/remove products
- Update quantities
- Real-time total calculation
- WhatsApp checkout integration

### WhatsApp Checkout

When users click "Commander via WhatsApp" in the cart, they are redirected to WhatsApp with a pre-formatted message containing:
- Store name: Ndiaga Euro Electronics
- List of products with quantities and prices
- Total amount
- Store phone number: +221 77 288 96 73

## 📱 Contact Information

- **Phone**: +221 77 288 96 73
- **Email**: contact@ndiagaeuro.com
- **Location**: Dakar, Sénégal

## 🎯 Pages

1. **Home** - Hero section, featured products, categories, and features
2. **Shop** - All products with filtering, sorting, and search
3. **Product Details** - Detailed product view with add to cart
4. **Cart** - Shopping cart with WhatsApp checkout
5. **About** - Company story and mission
6. **Contact** - Contact form (WhatsApp integration)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- This is a frontend-only application
- All product data is mock data
- Images are represented by emoji placeholders and gradients
- WhatsApp is used for order processing (no backend needed)

## 🚀 Deployment

This project can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build the project with `npm run build` and deploy the `dist` folder.

## 📄 License

Copyright © 2026 Ndiaga Euro Electronics. All rights reserved.

---

**Built with ❤️ using Vue 3 and Vite**
