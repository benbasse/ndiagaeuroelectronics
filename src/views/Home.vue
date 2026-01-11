<template>
  <div class="home">
    <Hero />

    <section class="section categories-section categories-mobile-hide">
      <div class="container">
        <div class="section-title">
          <h2>Explorez Nos Catégories</h2>
          <p>Découvrez notre large gamme de produits électroniques premium</p>
        </div>
        <ul class="categories-list">
          <li v-for="category in categories" :key="category.id" class="category-text">
            {{ category.name || category.nom || category.titre || category.label || category.id }}
          </li>
        </ul>
      </div>
    </section>


    <section class="section featured-section">
      <div class="container">
        <div class="section-title">
          <h2>Nos Produits</h2>
          <p>Découvrez tous nos produits classés par catégorie</p>
        </div>
        <div v-for="(products, category) in groupedAllProducts" :key="category" class="category-group">
          <h3 class="category-title">{{ formatCategoryName(category) }}</h3>
          <div class="products-grid">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
          </div>
        </div>
        <div class="section-cta">
          <router-link to="/shop" class="btn btn-primary">
            Voir Tous Les Produits
            <span>→</span>
          </router-link>
        </div>
      </div>
    </section>

    <section class="section features-section">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🚚</div>
            <h3>Livraison Rapide</h3>
            <p>Livraison express à Dakar et dans tout le Sénégal</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">✓</div>
            <h3>Garantie Qualité</h3>
            <p>Tous nos produits sont garantis authentiques</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💳</div>
            <h3>Paiement Sécurisé</h3>
            <p>Plusieurs options de paiement disponibles</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎧</div>
            <h3>Support Client</h3>
            <p>Assistance disponible 7j/7 pour vous aider</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Hero from '../components/Hero.vue'
import CategoryCard from '../components/CategoryCard.vue'
import ProductCard from '../components/ProductCard.vue'
import { categories, products } from '../data/products'

// Grouper les produits du catalogue principal par catégorie
const groupedAllProducts = computed(() => {
  const groups = {}
  products.forEach(prod => {
    const cat = prod.category || prod.categorie || 'Autre'
    if (!groups[cat]) groups[cat] = []
    groups[cat].push(prod)
  })
  return groups
})

// Formater le nom de la catégorie
const formatCategoryName = (slug) => {
  const category = categories.find(c => c.slug === slug)
  return category?.name || slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')
}
</script>

<style scoped>
.home {
  width: 100%;
}
/* Responsive : masquer les catégories sur mobile */
@media (max-width: 768px) {
  .categories-mobile-hide {
    display: none !important;
  }
}

.categories-section {
  background: var(--dark);
}

.featured-section {
  background: var(--dark-alt);
}

.section-cta {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.features-section {
  background: var(--dark);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2.5rem 1.5rem;
  background: var(--dark-alt);
  border: 1px solid var(--border);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1) rotate(5deg);
}

.feature-card h3 {
  font-family: 'Orbitron', monospace;
  font-size: 1.25rem;
  color: var(--text-light);
  margin-bottom: 0.75rem;
}

.feature-card p {
  color: var(--text-muted);
  line-height: 1.6;
}

.categories-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin: 2rem 0 1rem 0;
  padding: 0;
  list-style: none;
}

.category-text {
  font-size: 1.1rem;
  color: var(--primary);
  background: var(--dark-alt);
  padding: 0.7rem 1.5rem;
  border-radius: 20px;
  border: 1px solid var(--border);
  transition: background 0.2s;
  cursor: pointer;
  text-transform: capitalize;
}

.category-text:hover {
  background: var(--primary);
  color: #fff;
}

.category-group {
  margin-bottom: 3rem;
}

.category-title {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  font-family: 'Orbitron', monospace;
  color: var(--text-light);
  position: relative;
  padding-left: 1rem;
}

.category-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 70%;
  background: var(--gradient-primary);
  border-radius: 2px;
}

.category-title::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, var(--border) 0%, transparent 100%);
  margin-left: 1rem;
  min-width: 50px;
}

/* Grille de produits améliorée */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .feature-card {
    padding: 2rem 1rem;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .category-title {
    font-size: 1.2rem;
  }

  .category-group {
    margin-bottom: 2rem;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}
</style>
