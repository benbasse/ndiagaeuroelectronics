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
        <div class="shop-filters">
          <div class="filter-group">
            <label>Catégorie:</label>
            <select v-model="selectedCategory" @change="filterProducts">
              <option value="">Toutes les catégories</option>
              <option v-for="category in categories" :key="category.id" :value="category.slug">
                {{ category.name }}
              </option>
            </select>
          </div>

          <div class="filter-group">
            <label>Trier par:</label>
            <select v-model="sortBy" @change="sortProducts">
              <option value="default">Par défaut</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="name">Nom A-Z</option>
            </select>
          </div>

          <div class="filter-group search-group">
            <input 
              type="text" 
              v-model="searchQuery" 
              @input="filterProducts"
              placeholder="Rechercher un produit..."
            />
          </div>
        </div>

        <div class="products-count">
          {{ filteredProducts.length }} produit(s) trouvé(s)
        </div>

        <div v-if="filteredProducts.length > 0" class="grid grid-3">
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

.shop-filters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 2rem;
  background: var(--dark-alt);
  border-radius: 16px;
  border: 1px solid var(--border);
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter-group label {
  font-family: 'Orbitron', monospace;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.search-group {
  grid-column: 1 / -1;
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

@media (max-width: 768px) {
  .shop-header {
    padding: 3rem 0 2rem;
  }

  .shop-filters {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }

  .search-group {
    grid-column: auto;
  }
}
</style>
