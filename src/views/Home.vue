<template>
  <div class="home">
    <Hero />

    <section class="section categories-section">
      <div class="container">
        <div class="section-title">
          <h2>Explorez Nos Catégories</h2>
          <p>Découvrez notre large gamme de produits électroniques premium</p>
        </div>
        <div class="grid grid-4">
          <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
        </div>
      </div>
    </section>

    <section class="section featured-section">
      <div class="container">
        <div class="section-title">
          <h2>Produits Populaires</h2>
          <p>Les produits les plus demandés par nos clients</p>
        </div>
        <div class="grid grid-3">
          <ProductCard v-for="product in featuredProducts" :key="product.id" :product="product" />
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

const featuredProducts = computed(() => {
  return products.slice(0, 6)
})
</script>

<style scoped>
.home {
  width: 100%;
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

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .feature-card {
    padding: 2rem 1rem;
  }
}
</style>
