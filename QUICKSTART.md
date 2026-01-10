# 🚀 Quick Start Guide - Ndiaga Euro Electronics

## Getting Started in 3 Minutes

### Step 1: Install Dependencies
```bash
cd ndiaga-euro-electronics
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Step 3: Explore the Site

**Navigate through:**
- **Home Page** - See the hero section, featured products, and categories
- **Shop** - Browse all products with filtering and search
- **Product Details** - Click any product to see details
- **Cart** - Add products and test the WhatsApp checkout
- **About** - Learn about the company
- **Contact** - See the contact form (WhatsApp integration)

## 🎨 Key Features to Test

### 1. Shopping Experience
- Browse products by category
- Use the search bar to find products
- Sort products by price or name
- Click on a product to see full details
- Add products to cart with quantity selection

### 2. Cart Functionality
- View cart by clicking the cart icon (top right)
- Update quantities (+ / -)
- Remove items from cart
- Click "Commander via WhatsApp" to send order via WhatsApp

### 3. Responsive Design
- Resize your browser to see mobile menu
- All pages are fully responsive
- Test on different screen sizes

### 4. Animations & Interactions
- Hover over product cards
- Hover over category cards
- Scroll through pages to see animations
- Click buttons to see smooth transitions

## 📱 WhatsApp Integration

The WhatsApp checkout automatically formats a message with:
- Store name
- All cart items with quantities
- Individual prices
- Total price
- Sends to: +221 77 288 96 73

## 🎯 What's Included

✅ 28 mock products across 7 categories
✅ Full shopping cart with Pinia state management
✅ Responsive navigation with mobile menu
✅ Product filtering and search
✅ Product sorting by price/name
✅ WhatsApp checkout integration
✅ Premium, modern design
✅ Smooth animations and transitions
✅ Multiple pages with Vue Router

## 🛠️ Customization Tips

### Change Store Phone Number
Edit `src/stores/cart.js` line 48:
```javascript
const phoneNumber = '+221776449999' // Change this
```

### Add More Products
Edit `src/data/products.js` and add to the products array

### Modify Colors
Edit `src/assets/styles/main.css` CSS variables:
```css
:root {
  --primary: #00d9ff;
  --secondary: #ff006e;
  --accent: #ffbe0b;
  /* ... */
}
```

### Change Typography
Edit `index.html` to change Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap">
```

## 📦 Production Build

When ready to deploy:
```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

## 🚀 Deployment Options

Deploy the `dist` folder to:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop the `dist` folder
- **GitHub Pages**: Push to gh-pages branch
- **Any static hosting**: Upload the `dist` folder

## 💡 Pro Tips

1. **Development**: Use Vue DevTools browser extension for debugging
2. **State**: Cart state persists during development (not in production)
3. **Router**: Uses history mode - configure your server for SPA routing
4. **Images**: Replace emoji placeholders with real images in `/public`

## 🆘 Need Help?

- Check the main README.md for detailed documentation
- Review the component files in `src/components/`
- All views are in `src/views/`
- Cart logic is in `src/stores/cart.js`

## 🎉 You're All Set!

The project is fully functional and ready to use. Customize it to match your needs and deploy when ready!

---

**Enjoy building with Ndiaga Euro Electronics! ⚡**
