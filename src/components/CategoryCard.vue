<template>
  <router-link :to="`/shop/${category.slug}`" class="category-card">
    <div class="category-icon">
      <span>{{ category.icon }}</span>
    </div>
    <h3 class="category-name">{{ category.name }}</h3>
    <span class="category-arrow">→</span>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  category: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 1.5rem;
  background: var(--dark-alt);
  border: 1px solid var(--border);
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-height: 200px;
}

.category-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(255, 0, 110, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.category-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
}

.category-card:hover::before {
  opacity: 1;
}

.category-icon {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(255, 0, 110, 0.1) 100%);
  border-radius: 50%;
  margin-bottom: 1.5rem;
  transition: all 0.4s ease;
  position: relative;
  z-index: 1;
}

.category-card:hover .category-icon {
  transform: scale(1.1) rotate(5deg);
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.2) 0%, rgba(255, 0, 110, 0.2) 100%);
  box-shadow: 0 8px 24px rgba(0, 217, 255, 0.3);
}

.category-icon span {
  font-size: 3rem;
  transition: transform 0.4s ease;
}

.category-card:hover .category-icon span {
  transform: scale(1.15);
}

.category-name {
  font-family: 'Orbitron', monospace;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-light);
  text-align: center;
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
  position: relative;
  z-index: 1;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.category-card:hover .category-name {
  color: var(--primary);
}

.category-arrow {
  font-size: 1.5rem;
  color: var(--primary);
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.category-card:hover .category-arrow {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 768px) {
  .category-card {
    min-height: 180px;
    padding: 2rem 1rem;
  }

  .category-icon {
    width: 80px;
    height: 80px;
  }

  .category-icon span {
    font-size: 2.5rem;
  }

  .category-name {
    font-size: 1rem;
  }
}
</style>
