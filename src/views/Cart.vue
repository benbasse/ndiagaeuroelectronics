<template>
  <div class="cart">
    <div class="container">
      <h1 class="cart-title">Votre Panier</h1>

      <div v-if="cartStore.items.length > 0" class="cart-content">
        <div class="cart-items">
          <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
            <div class="item-icon">{{ getCategoryIcon(item.category) }}</div>
            
            <div class="item-info">
              <h3 class="item-name">{{ item.name }}</h3>
              <p class="item-price">{{ formatPrice(item.price) }} FCFA / unité</p>
            </div>

            <div class="item-quantity">
              <button @click="decreaseQuantity(item)" class="qty-btn">-</button>
              <span class="qty-value">{{ item.quantity }}</span>
              <button @click="increaseQuantity(item)" class="qty-btn">+</button>
            </div>

            <div class="item-total">
              <span class="total-label">Total:</span>
              <span class="total-value">{{ formatPrice(item.price * item.quantity) }} FCFA</span>
            </div>

            <button @click="removeItem(item)" class="remove-btn" aria-label="Supprimer">
              🗑️
            </button>
          </div>
        </div>

        <div class="cart-summary">
          <div class="summary-card">
            <h2>Récapitulatif</h2>
            
            <div class="summary-details">
              <div class="summary-row">
                <span>Sous-total:</span>
                <span class="summary-value">{{ formatPrice(cartStore.cartTotal) }} FCFA</span>
              </div>
              <div class="summary-row">
                <span>Articles:</span>
                <span class="summary-value">{{ cartStore.cartCount }}</span>
              </div>
              <div class="summary-row summary-total">
                <span>Total:</span>
                <span class="total-price">{{ formatPrice(cartStore.cartTotal) }} FCFA</span>
              </div>
            </div>

            <button @click="orderViaWhatsApp" class="btn btn-accent whatsapp-btn">
              <span class="whatsapp-icon">📱</span>
              <span>Commander via WhatsApp</span>
            </button>

            <div class="summary-info">
              <div class="info-item">
                <span class="info-icon">✓</span>
                <span>Confirmation instantanée</span>
              </div>
              <div class="info-item">
                <span class="info-icon">🚚</span>
                <span>Livraison rapide</span>
              </div>
              <div class="info-item">
                <span class="info-icon">💳</span>
                <span>Paiement flexible</span>
              </div>
            </div>

            <button @click="continueShopping" class="btn btn-secondary continue-btn">
              ← Continuer mes achats
            </button>
          </div>
        </div>
      </div>

      <div v-else class="empty-cart">
        <div class="empty-icon">🛒</div>
        <h2>Votre panier est vide</h2>
        <p>Découvrez nos produits et ajoutez vos favoris au panier</p>
        <router-link to="/shop" class="btn btn-primary">
          Voir la Boutique
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'

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

const increaseQuantity = (item) => {
  cartStore.updateQuantity(item.id, item.quantity + 1)
}

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    cartStore.updateQuantity(item.id, item.quantity - 1)
  } else {
    removeItem(item)
  }
}

const removeItem = (item) => {
  if (confirm(`Voulez-vous vraiment retirer "${item.name}" du panier ?`)) {
    cartStore.removeFromCart(item.id)
  }
}

const orderViaWhatsApp = () => {
  const whatsappUrl = cartStore.generateWhatsAppMessage()
  window.open(whatsappUrl, '_blank')
}

const continueShopping = () => {
  router.push('/shop')
}
</script>

<style scoped>
.cart {
  padding: 3rem 0 5rem;
  min-height: 100vh;
}

.cart-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  text-align: center;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
}

.cart-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  align-items: start;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-item {
  display: grid;
  grid-template-columns: auto 1fr auto auto auto;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem;
  background: var(--dark-alt);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.cart-item:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-sm);
}

.item-icon {
  font-size: 3rem;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(255, 0, 110, 0.1) 100%);
  border-radius: 12px;
}

.item-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.item-name {
  font-family: 'Orbitron', monospace;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-light);
}

.item-price {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.item-quantity {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background: var(--dark-lighter);
  border: 1px solid var(--border);
  border-radius: 8px;
}

.qty-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text-light);
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.qty-btn:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--dark);
}

.qty-value {
  font-family: 'Orbitron', monospace;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-light);
  min-width: 40px;
  text-align: center;
}

.item-total {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
}

.total-label {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.total-value {
  font-family: 'Orbitron', monospace;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
}

.remove-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.remove-btn:hover {
  background: var(--secondary);
  border-color: var(--secondary);
  transform: scale(1.1);
}

.cart-summary {
  position: sticky;
  top: 100px;
}

.summary-card {
  padding: 2rem;
  background: var(--dark-alt);
  border: 2px solid var(--primary);
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
}

.summary-card h2 {
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  text-align: center;
  text-transform: uppercase;
}

.summary-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: var(--text-muted);
}

.summary-value {
  font-family: 'Orbitron', monospace;
  font-weight: 600;
  color: var(--text-light);
}

.summary-total {
  font-size: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
  margin-top: 1rem;
}

.total-price {
  font-family: 'Orbitron', monospace;
  font-size: 1.75rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.whatsapp-btn {
  width: 100%;
  font-size: 1rem;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  animation: pulse 2s ease-in-out infinite;
}

.whatsapp-icon {
  font-size: 1.5rem;
}

.summary-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--dark-lighter);
  border-radius: 8px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.info-icon {
  color: var(--success);
  font-size: 1.1rem;
}

.continue-btn {
  width: 100%;
}

.empty-cart {
  text-align: center;
  padding: 5rem 2rem;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.empty-icon {
  font-size: 6rem;
  margin-bottom: 2rem;
  opacity: 0.5;
}

.empty-cart h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-light);
}

.empty-cart p {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

@media (max-width: 1024px) {
  .cart-content {
    grid-template-columns: 1fr;
  }

  .cart-summary {
    position: static;
  }
}

@media (max-width: 768px) {
  .cart {
    padding: 2rem 0 3rem;
  }

  .cart-item {
    grid-template-columns: auto 1fr;
    gap: 1rem;
  }

  .item-icon {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }

  .item-quantity {
    grid-column: 1 / -1;
    justify-content: center;
  }

  .item-total {
    grid-column: 1 / -1;
    align-items: center;
  }

  .remove-btn {
    grid-column: 1 / -1;
    width: 100%;
  }

  .summary-card {
    padding: 1.5rem;
  }
}
</style>
