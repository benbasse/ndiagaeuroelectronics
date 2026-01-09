<template>
  <div class="product-card" @click="goToProduct">

    <div class="product-image">
      <template v-if="product.mainImage || (product.images && product.images.length > 0)">
        <img
          :src="'/' + (product.mainImage || product.images[0])"
          :alt="product.name"
          class="product-img"
          @error="imgError = true"
          v-show="!imgError"
        />
        <div class="image-placeholder" v-show="imgError">
          <span class="placeholder-icon">{{ getCategoryIcon(product.category) }}</span>
        </div>
      </template>
      <template v-else>
        <div class="image-placeholder">
          <span class="placeholder-icon">{{ getCategoryIcon(product.category) }}</span>
        </div>
      </template>
      <div class="product-badge" v-if="product.stock < 10">
        Stock Limité
      </div>
    </div>

    <div class="product-info">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-description">{{ truncateDescription(product.description) }}</p>
      
      <div class="product-features">
        <span v-for="(feature, index) in product.features.slice(0, 2)" :key="index" class="feature-tag">
          {{ feature }}
        </span>
      </div>

      <div class="product-footer">
        <div class="product-price">
          <span class="price">{{ formatPrice(product.price) }}</span>
          <span class="currency">FCFA</span>
        </div>
        
        <button class="add-to-cart-btn" @click.stop="addToCart">
          <span class="btn-icon">🛒</span>
          <span class="btn-text">Ajouter</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

import { ref } from 'vue'
const imgError = ref(false)

const router = useRouter()
const cartStore = useCartStore()

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

const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-FR').format(price)
}

const truncateDescription = (desc) => {
  return desc.length > 80 ? desc.substring(0, 80) + '...' : desc
}

const goToProduct = () => {
  router.push(`/product/${props.product.id}`)
}

const addToCart = () => {
  cartStore.addToCart(props.product)
}
</script>

<style scoped>
.product-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.product-card {
  background: var(--dark-alt);
  border-radius: 16px;
  border: 1px solid var(--border);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(255, 0, 110, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  z-index: 0;
}

.product-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
}

.product-card:hover::before {
  opacity: 1;
}

.product-image {
  position: relative;
  width: 100%;
  height: 250px;
  background: var(--dark-lighter);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.05) 0%, rgba(255, 0, 110, 0.05) 100%);
  transition: transform 0.4s ease;
}

.product-card:hover .image-placeholder {
  transform: scale(1.1);
}

.placeholder-icon {
  font-size: 5rem;
  opacity: 0.6;
  transition: all 0.4s ease;
}

.product-card:hover .placeholder-icon {
  opacity: 1;
  transform: rotate(5deg) scale(1.1);
}

.product-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--secondary);
  color: var(--text-light);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 12px rgba(255, 0, 110, 0.4);
  animation: pulse 2s ease-in-out infinite;
}

.product-info {
  padding: 1.5rem;
  position: relative;
  z-index: 1;
}

.product-name {
  font-family: 'Orbitron', monospace;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-light);
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
}

.product-card:hover .product-name {
  color: var(--primary);
}

.product-description {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  min-height: 60px;
}

.product-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.feature-tag {
  background: var(--dark-lighter);
  color: var(--text-muted);
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.product-card:hover .feature-tag {
  border-color: var(--primary);
  color: var(--primary);
}

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.product-price {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.price {
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.currency {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 600;
  text-transform: uppercase;
}

.add-to-cart-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: var(--gradient-primary);
  border: none;
  border-radius: 8px;
  color: var(--text-light);
  font-family: 'Orbitron', monospace;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: var(--shadow-sm);
}

.add-to-cart-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-icon {
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .product-image {
    height: 200px;
  }

  .placeholder-icon {
    font-size: 4rem;
  }

  .product-name {
    font-size: 1.1rem;
  }

  .product-description {
    min-height: auto;
  }

  .add-to-cart-btn {
    padding: 0.65rem 1rem;
    font-size: 0.8rem;
  }

  .btn-text {
    display: none;
  }

  .btn-icon {
    font-size: 1.25rem;
  }
}
</style>
