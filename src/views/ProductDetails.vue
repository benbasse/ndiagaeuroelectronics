<template>
  <div class="product-details" v-if="product">
    <div class="container">
      <button class="back-btn" @click="goBack">
        ← Retour
      </button>

      <div class="product-content">
        <div class="product-image-section">
          <div class="product-image-main">
            <div class="image-placeholder">
              <span class="placeholder-icon">{{ getCategoryIcon(product.category) }}</span>
            </div>
          </div>
          <div class="product-badges">
            <span class="badge" v-if="product.stock < 10">Stock Limité</span>
            <span class="badge badge-success" v-if="product.stock > 20">En Stock</span>
          </div>
        </div>

        <div class="product-info-section">
          <h1 class="product-name">{{ product.name }}</h1>
          
          <div class="product-category">
            <span class="category-icon">{{ getCategoryIcon(product.category) }}</span>
            <span>{{ getCategoryName(product.category) }}</span>
          </div>

          <div class="product-price-section">
            <div class="price-main">
              <span class="price">{{ formatPrice(product.price) }}</span>
              <span class="currency">FCFA</span>
            </div>
            <div class="stock-info">
              <span class="stock-icon">📦</span>
              <span>{{ product.stock }} en stock</span>
            </div>
          </div>

          <p class="product-description">{{ product.description }}</p>

          <div class="product-features-section">
            <h3>Caractéristiques</h3>
            <ul class="features-list">
              <li v-for="(feature, index) in product.features" :key="index">
                <span class="feature-check">✓</span>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>

          <div class="product-actions">
            <div class="quantity-selector">
              <button @click="decreaseQuantity" class="quantity-btn">-</button>
              <input type="number" v-model.number="quantity" min="1" :max="product.stock" class="quantity-input" />
              <button @click="increaseQuantity" class="quantity-btn">+</button>
            </div>
            <button @click="addToCart" class="btn btn-primary add-cart-btn">
              <span class="btn-icon">🛒</span>
              <span>Ajouter au Panier</span>
            </button>
          </div>

          <div class="product-meta">
            <div class="meta-item">
              <span class="meta-icon">🚚</span>
              <div>
                <strong>Livraison Rapide</strong>
                <p>Livraison à Dakar sous 24-48h</p>
              </div>
            </div>
            <div class="meta-item">
              <span class="meta-icon">✓</span>
              <div>
                <strong>Garantie Qualité</strong>
                <p>Produit authentique garanti</p>
              </div>
            </div>
            <div class="meta-item">
              <span class="meta-icon">💬</span>
              <div>
                <strong>Support Client</strong>
                <p>Assistance disponible 7j/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="related-products">
        <h2>Produits Similaires</h2>
        <div class="grid grid-4">
          <ProductCard v-for="prod in relatedProducts" :key="prod.id" :product="prod" />
        </div>
      </section>
    </div>
  </div>

  <div v-else class="not-found">
    <div class="container">
      <h1>Produit non trouvé</h1>
      <p>Désolé, ce produit n'existe pas ou n'est plus disponible.</p>
      <router-link to="/shop" class="btn btn-primary">
        Retour à la Boutique
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'
import ProductCard from '../components/ProductCard.vue'
import { products, categories } from '../data/products'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()

const quantity = ref(1)

const product = computed(() => {
  return products.find(p => p.id === parseInt(route.params.id))
})

const relatedProducts = computed(() => {
  if (!product.value) return []
  return products
    .filter(p => p.category === product.value.category && p.id !== product.value.id)
    .slice(0, 4)
})

const getCategoryIcon = (category) => {
  const icons = {
    'smartphones': '📱',
    'laptops': '💻',
    'televisions': '📺',
    'audio-devices': '🎧',
    'computer-accessories': '⌨️',
    'gaming-equipment': '🎮',
    'home-electronics': '🏠'
  }
  return icons[category] || '📦'
}

const getCategoryName = (slug) => {
  const category = categories.find(c => c.slug === slug)
  return category ? category.name : slug
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-FR').format(price)
}

const increaseQuantity = () => {
  if (quantity.value < product.value.stock) {
    quantity.value++
  }
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const addToCart = () => {
  for (let i = 0; i < quantity.value; i++) {
    cartStore.addToCart(product.value)
  }
  quantity.value = 1
}

const goBack = () => {
  router.back()
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.product-details {
  padding: 3rem 0 5rem;
  min-height: 100vh;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--dark-alt);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-light);
  font-family: 'Orbitron', monospace;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
}

.back-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: translateX(-5px);
}

.product-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 5rem;
}

.product-image-section {
  position: relative;
}

.product-image-main {
  background: var(--dark-alt);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 1;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.05) 0%, rgba(255, 0, 110, 0.05) 100%);
}

.placeholder-icon {
  font-size: 10rem;
  opacity: 0.6;
}

.product-badges {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
}

.badge {
  display: inline-flex;
  padding: 0.5rem 1rem;
  background: var(--secondary);
  color: var(--text-light);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
}

.badge-success {
  background: var(--success);
  color: var(--dark);
}

.product-info-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.product-name {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--text-light);
}

.product-category {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--dark-alt);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-family: 'Orbitron', monospace;
  font-weight: 600;
  color: var(--primary);
  width: fit-content;
}

.category-icon {
  font-size: 1.5rem;
}

.product-price-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: var(--dark-alt);
  border: 2px solid var(--primary);
  border-radius: 12px;
}

.price-main {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.price {
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.currency {
  font-size: 1rem;
  color: var(--text-muted);
  font-weight: 600;
}

.stock-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-weight: 500;
}

.stock-icon {
  font-size: 1.5rem;
}

.product-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-muted);
}

.product-features-section h3 {
  font-family: 'Orbitron', monospace;
  font-size: 1.25rem;
  color: var(--primary);
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.features-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--dark-alt);
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.features-list li:hover {
  border-color: var(--primary);
}

.feature-check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: var(--success);
  color: var(--dark);
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.product-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.quantity-selector {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--dark-alt);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.5rem;
}

.quantity-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark-lighter);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text-light);
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.quantity-btn:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--dark);
}

.quantity-input {
  width: 60px;
  text-align: center;
  background: transparent;
  border: none;
  color: var(--text-light);
  font-family: 'Orbitron', monospace;
  font-size: 1.25rem;
  font-weight: 700;
}

.add-cart-btn {
  flex: 1;
  font-size: 1rem;
  padding: 1.25rem 2rem;
}

.product-meta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--dark-alt);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.meta-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.meta-icon {
  font-size: 1.75rem;
  flex-shrink: 0;
}

.meta-item strong {
  display: block;
  font-family: 'Orbitron', monospace;
  color: var(--text-light);
  margin-bottom: 0.25rem;
}

.meta-item p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.related-products {
  margin-top: 5rem;
}

.related-products h2 {
  font-size: 2rem;
  text-align: center;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
}

.not-found {
  padding: 5rem 0;
  text-align: center;
  min-height: 60vh;
  display: flex;
  align-items: center;
}

.not-found h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.not-found p {
  font-size: 1.25rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

@media (max-width: 1024px) {
  .product-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .placeholder-icon {
    font-size: 8rem;
  }
}

@media (max-width: 768px) {
  .product-details {
    padding: 2rem 0 3rem;
  }

  .product-name {
    font-size: 1.75rem;
  }

  .price {
    font-size: 2rem;
  }

  .product-actions {
    flex-direction: column;
  }

  .quantity-selector {
    width: 100%;
    justify-content: center;
  }

  .add-cart-btn {
    width: 100%;
  }

  .placeholder-icon {
    font-size: 6rem;
  }
}
</style>
