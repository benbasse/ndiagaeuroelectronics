<template>
  <div class="product-card" @click="goToProduct">
    <!-- Effet de brillance au survol -->
    <div class="card-shine"></div>

    <!-- Badge Stock Limité -->
    <div class="product-badge" v-if="product.stock < 10">
      <span class="badge-pulse"></span>
      <span class="badge-text">Stock Limité</span>
    </div>

    <!-- Image du produit -->
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

      <!-- Overlay avec bouton rapide -->
      <div class="image-overlay">
        <button class="quick-view-btn" @click.stop="goToProduct">
          <span>Voir détails</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Informations du produit -->
    <div class="product-info">
      <!-- Catégorie -->
      <span class="product-category">{{ formatCategory(product.category) }}</span>

      <!-- Nom du produit -->
      <h3 class="product-name">{{ product.name }}</h3>

      <!-- Description -->
      <p class="product-description">{{ truncateDescription(product.description) }}</p>

      <!-- Caractéristiques -->
      <div class="product-features">
        <span v-for="(feature, index) in product.features.slice(0, 2)" :key="index" class="feature-tag">
          <span class="feature-dot"></span>
          {{ feature }}
        </span>
      </div>

      <!-- Footer avec bouton -->
      <div class="product-footer">
        <button class="add-to-cart-btn" @click.stop="addToCart">
          <span class="btn-content">
            <svg class="cart-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span class="btn-text">Ajouter</span>
          </span>
          <span class="btn-ripple"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const imgError = ref(false)
const router = useRouter()
const cartStore = useCartStore()

import { categories } from '../data/products'

const getCategoryIcon = (slug) => {
  const category = categories.find(c => c.slug === slug)
  return category?.icon || '📦'
}

const formatCategory = (slug) => {
  const category = categories.find(c => c.slug === slug)
  return category?.name || slug
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-FR').format(price)
}

const truncateDescription = (desc) => {
  return desc.length > 70 ? desc.substring(0, 70) + '...' : desc
}

const goToProduct = () => {
  router.push(`/product/${props.product.id}`)
}

const addToCart = () => {
  cartStore.addToCart(props.product)
}
</script>

<style scoped>
.product-card {
  position: relative;
  background: var(--dark-alt);
  border-radius: 20px;
  border: 1px solid var(--border);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  backdrop-filter: blur(10px);
}

.product-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.08) 0%, rgba(255, 0, 110, 0.08) 100%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 0;
}

.product-card:hover {
  transform: translateY(-12px) scale(1.02);
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
}

.product-card:hover::before {
  opacity: 1;
}

/* Effet de brillance */
.card-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: left 0.8s ease;
  pointer-events: none;
  z-index: 10;
}

.product-card:hover .card-shine {
  left: 100%;
}

/* Badge Stock Limité */
.product-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #ff006e 0%, #ff4d94 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.7rem;
  font-weight: 700;
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  box-shadow: 0 4px 15px rgba(255, 0, 110, 0.5);
  z-index: 5;
  overflow: hidden;
}

.badge-pulse {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);
  animation: badgePulse 2s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.badge-text {
  position: relative;
  z-index: 1;
}

/* Image du produit */
.product-image {
  position: relative;
  width: 100%;
  height: 220px;
  background: var(--dark-lighter);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.product-card:hover .product-img {
  transform: scale(1.08);
}

.image-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.05) 0%, rgba(255, 0, 110, 0.05) 100%);
}

.placeholder-icon {
  font-size: 4.5rem;
  opacity: 0.5;
  transition: all 0.5s ease;
  filter: grayscale(0.3);
}

.product-card:hover .placeholder-icon {
  opacity: 0.8;
  transform: scale(1.15) rotate(5deg);
  filter: grayscale(0);
}

/* Overlay sur l'image */
.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, var(--dark) 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1.5rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.product-card:hover .image-overlay {
  opacity: 1;
}

.quick-view-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: var(--dark-alt);
  backdrop-filter: blur(10px);
  border: 1px solid var(--primary);
  border-radius: 30px;
  color: var(--text-light);
  font-family: 'Outfit', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.product-card:hover .quick-view-btn {
  transform: translateY(0);
  opacity: 1;
}

.quick-view-btn:hover {
  background: var(--primary);
  border-color: var(--primary);
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.5);
}

/* Informations du produit */
.product-info {
  padding: 1.5rem;
  position: relative;
  z-index: 1;
}

.product-category {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.product-name {
  font-family: 'Orbitron', monospace;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-light);
  margin-bottom: 0.6rem;
  line-height: 1.3;
  transition: color 0.3s ease;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-card:hover .product-name {
  color: var(--primary);
}

.product-description {
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  min-height: 40px;
  opacity: 0.8;
}

/* Caractéristiques */
.product-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.feature-tag {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--dark-lighter);
  color: var(--text-muted);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.7rem;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.feature-dot {
  width: 4px;
  height: 4px;
  background: var(--primary);
  border-radius: 50%;
  opacity: 0.6;
}

.product-card:hover .feature-tag {
  border-color: var(--primary);
  color: var(--primary);
  background: var(--dark-lighter);
}

.product-card:hover .feature-dot {
  opacity: 1;
  box-shadow: 0 0 6px var(--primary);
}

/* Footer */
.product-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

/* Bouton ajouter au panier */
.add-to-cart-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.85rem 1.5rem;
  background: var(--gradient-primary);
  border: none;
  border-radius: 12px;
  color: white;
  font-family: 'Orbitron', monospace;
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: var(--shadow-md);
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  z-index: 1;
}

.cart-icon {
  transition: transform 0.3s ease;
}

.add-to-cart-btn:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

.add-to-cart-btn:hover .cart-icon {
  transform: scale(1.1) rotate(-5deg);
}

.btn-ripple {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: translateX(-100%);
}

.add-to-cart-btn:hover .btn-ripple {
  animation: rippleEffect 0.6s ease;
}

@keyframes rippleEffect {
  to { transform: translateX(100%); }
}

/* Responsive */
@media (max-width: 768px) {
  .product-card {
    border-radius: 16px;
  }

  .product-card:hover {
    transform: translateY(-6px) scale(1.01);
  }

  .product-image {
    height: 180px;
  }

  .placeholder-icon {
    font-size: 3.5rem;
  }

  .product-info {
    padding: 1.2rem;
  }

  .product-name {
    font-size: 1rem;
  }

  .product-description {
    min-height: auto;
    font-size: 0.8rem;
  }

  .product-features {
    margin-bottom: 1rem;
  }

  .feature-tag {
    font-size: 0.65rem;
    padding: 0.3rem 0.6rem;
  }

  .add-to-cart-btn {
    padding: 0.75rem 1rem;
    font-size: 0.75rem;
  }

  .image-overlay {
    display: none;
  }

  .product-badge {
    padding: 0.4rem 0.8rem;
    font-size: 0.6rem;
  }
}

@media (max-width: 480px) {
  .product-image {
    height: 160px;
  }

  .product-info {
    padding: 1rem;
  }
}
</style>
