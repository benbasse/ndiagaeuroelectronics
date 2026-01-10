import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const cartCount = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  const cartTotal = computed(() => {
    return items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  function addToCart(product) {
    const existingItem = items.value.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        category: product.category
      })
    }
  }

  function removeFromCart(productId) {
    const index = items.value.findIndex(item => item.id === productId)
    if (index > -1) {
      items.value.splice(index, 1)
    }
  }

  function updateQuantity(productId, quantity) {
    const item = items.value.find(item => item.id === productId)
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId)
      } else {
        item.quantity = quantity
      }
    }
  }

  function clearCart() {
    items.value = []
  }

  function generateWhatsAppMessage() {
    const storeName = 'Ndiaga Euro Electronics'
    const phoneNumber = '+221776449999'
    
    let message = `*Commande de ${storeName}*%0A%0A`
    
    items.value.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*%0A`
      message += `   Quantité: ${item.quantity}%0A`
      message += `   Prix unitaire: ${formatPrice(item.price)} FCFA%0A`
      message += `   Sous-total: ${formatPrice(item.price * item.quantity)} FCFA%0A%0A`
    })
    
    message += `*Total: ${formatPrice(cartTotal.value)} FCFA*`
    
    return `https://wa.me/${phoneNumber}?text=${message}`
  }

  function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR').format(price)
  }

  return {
    items,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    generateWhatsAppMessage,
    formatPrice
  }
})
