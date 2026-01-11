<template>
  <div class="shop">
    <section class="shop-header">
      <div class="container">
        <h1>{{ pageTitle }}</h1>
        <p class="shop-subtitle">{{ pageSubtitle }}</p>
      </div>
    </section>

    <section class="shop-content">
      <div class="container">
        <!-- Catégories en pills -->
        <div class="categories-section">
          <div class="categories-header">
            <h3 class="categories-title">Catégories</h3>
            <div class="categories-line"></div>
          </div>
          <div class="categories-scroll">
            <button
              class="category-pill"
              :class="{ active: selectedCategory === '' }"
              @click="selectedCategory = ''"
            >
              Tous les produits
            </button>
            <button
              v-for="category in categories"
              :key="category.id"
              class="category-pill"
              :class="{ active: selectedCategory === category.slug }"
              @click="selectedCategory = category.slug"
            >
              {{ category.name }}
            </button>
          </div>
        </div>

        <!-- Barre de recherche -->
        <div class="search-bar">
          <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            v-model="searchQuery"
            @input="filterProducts"
            placeholder="Rechercher un produit..."
          />
        </div>

        <div class="products-count">
          {{ filteredProducts.length }} produit(s) trouvé(s)
        </div>

        <div v-if="filteredProducts.length > 0" class="products-grid">
          <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
        </div>

        <div v-else class="no-products">
          <div class="no-products-icon">🔍</div>
          <h3>Aucun produit trouvé</h3>
          <p>Essayez de modifier vos critères de recherche</p>
          <router-link to="/shop" class="btn btn-primary">
            Voir tous les produits
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'

import { categories, products } from '../data/products'
const route = useRoute()

const getCategoryIcon = (slug) => {
  const category = categories.find(c => c.slug === slug)
  return category?.icon || '📦'
}
const selectedCategory = ref('')
const sortBy = ref('default')
const searchQuery = ref('')
// Toujours synchronisé avec products, et prix par défaut si manquant
const displayProducts = computed(() => products.map(p => ({ ...p, price: p.price ?? 0 })))

const pageTitle = computed(() => {
  if (selectedCategory.value) {
    const category = categories.find(c => c.slug === selectedCategory.value)
    return category ? category.name : 'Boutique'
  }
  return 'Boutique'
})

const pageSubtitle = computed(() => {
  if (selectedCategory.value) {
    return 'Découvrez notre sélection dans cette catégorie'
  }
  return 'Découvrez tous nos produits électroniques premium'
})

const filteredProducts = computed(() => {
  let result = [...displayProducts.value]

  // Filter by category
  if (selectedCategory.value) {
    result = result.filter(p => p.category === selectedCategory.value)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query) ||
      p.features.some(f => f.toLowerCase().includes(query))
    )
  }

  // Sort
  if (sortBy.value === 'price-asc') {
    result.sort((a, b) => a.price - b.price)
  } else if (sortBy.value === 'price-desc') {
    result.sort((a, b) => b.price - a.price)
  } else if (sortBy.value === 'name') {
    result.sort((a, b) => a.name.localeCompare(b.name))
  }

  return result
})

const filterProducts = () => {
  // Trigger reactivity
}

const sortProducts = () => {
  // Trigger reactivity
}

// Watch for route changes
watch(() => route.params.category, (newCategory) => {
  if (newCategory) {
    selectedCategory.value = newCategory
  } else {
    selectedCategory.value = ''
  }
}, { immediate: true })

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.shop {
  width: 100%;
  min-height: 100vh;
}

.shop-header {
  padding: 5rem 0 3rem;
  background: var(--gradient-dark);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.shop-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 50%, rgba(255, 0, 110, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.shop-header h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.shop-subtitle {
  font-size: 1.15rem;
  color: var(--text-muted);
  position: relative;
  z-index: 1;
}

.shop-content {
  padding: 3rem 0 5rem;
}

/* Catégories Section */
.categories-section {
  margin-bottom: 2rem;
}

.categories-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
}

.categories-title {
  font-family: 'Orbitron', monospace;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: nowrap;
}

.categories-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, var(--primary) 0%, transparent 100%);
}

.categories-scroll {
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding: 0.5rem 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.categories-scroll::-webkit-scrollbar {
  display: none;
}

.category-pill {
  flex-shrink: 0;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-muted);
  font-family: 'Outfit', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.category-pill::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.category-pill:hover {
  border-color: var(--primary);
  color: var(--text-light);
  background: rgba(0, 217, 255, 0.05);
}

.category-pill:hover::before {
  transform: scaleX(1);
}

.category-pill.active {
  background: var(--gradient-primary);
  border-color: transparent;
  color: white;
  font-weight: 600;
}

.category-pill.active::before {
  display: none;
}

/* Barre de recherche */
.search-bar {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.search-bar .search-icon {
  position: absolute;
  left: 1.25rem;
  color: var(--text-muted);
  pointer-events: none;
  transition: color 0.3s ease;
}

.search-bar input {
  width: 100%;
  padding: 1rem 1.25rem 1rem 3.5rem;
  background: var(--dark-alt);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text-light);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-bar input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(0, 217, 255, 0.1);
  outline: none;
}

.search-bar input:focus + .search-icon,
.search-bar:focus-within .search-icon {
  color: var(--primary);
}

.search-bar input::placeholder {
  color: var(--text-muted);
}

.products-count {
  font-family: 'Orbitron', monospace;
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}

.no-products {
  text-align: center;
  padding: 5rem 2rem;
}

.no-products-icon {
  font-size: 5rem;
  margin-bottom: 1.5rem;
  opacity: 0.5;
}

.no-products h3 {
  font-family: 'Orbitron', monospace;
  font-size: 1.75rem;
  color: var(--text-light);
  margin-bottom: 1rem;
}

.no-products p {
  color: var(--text-muted);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

/* Grille de produits améliorée */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  animation: fadeInGrid 0.6s ease-out;
}

@keyframes fadeInGrid {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.products-grid > * {
  animation: fadeInCard 0.5s ease-out backwards;
}

.products-grid > *:nth-child(1) { animation-delay: 0.1s; }
.products-grid > *:nth-child(2) { animation-delay: 0.15s; }
.products-grid > *:nth-child(3) { animation-delay: 0.2s; }
.products-grid > *:nth-child(4) { animation-delay: 0.25s; }
.products-grid > *:nth-child(5) { animation-delay: 0.3s; }
.products-grid > *:nth-child(6) { animation-delay: 0.35s; }

@keyframes fadeInCard {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 768px) {
  .shop-header {
    padding: 3rem 0 2rem;
  }

  .categories-header {
    margin-bottom: 1rem;
  }

  .category-pill {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }

  .search-bar input {
    padding: 0.875rem 1rem 0.875rem 3rem;
    font-size: 0.95rem;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .category-pill {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}
</style>
