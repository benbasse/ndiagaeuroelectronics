<template>
  <section class="hero">
    <div class="hero-background"></div>
    <div class="container hero-container">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-icon">⚡</span>
          <span>Nouvelle Collection 2026</span>
        </div>
        <h1 class="hero-title">
          L'Excellence en
          <span class="gradient-text">Électronique</span>
        </h1>
        <p class="hero-description">
          Découvrez notre sélection premium d'appareils électroniques de dernière génération. 
          Des smartphones aux équipements gaming, nous avons tout ce dont vous avez besoin.
        </p>
        <div class="hero-actions">
          <router-link to="/shop" class="btn btn-primary">
            <span>Explorer la Boutique</span>
            <span class="btn-arrow">→</span>
          </router-link>
          <router-link to="/contact" class="btn btn-secondary">
            <span>Nous Contacter</span>
          </router-link>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-value">500+</span>
            <span class="stat-label">Produits</span>
          </div>
          <div class="stat">
            <span class="stat-value">10K+</span>
            <span class="stat-label">Clients</span>
          </div>
          <div class="stat">
            <span class="stat-value">5★</span>
            <span class="stat-label">Satisfaction</span>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="visual-circle circle-1"></div>
        <div class="visual-circle circle-2"></div>
        <div class="visual-circle circle-3"></div>
        <div class="visual-content">
          <div class="floating-card card-1">
            <span class="card-icon">📱</span>
            <span class="card-text">Smartphones</span>
          </div>
          <div class="floating-card card-2">
            <span class="card-icon">💻</span>
            <span class="card-text">Laptops</span>
          </div>
          <div class="floating-card card-3">
            <span class="card-icon">🎧</span>
            <span class="card-text">Audio</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 8rem 0 6rem;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 0, 110, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  animation: fadeInUp 0.8s ease-out;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(255, 0, 110, 0.1) 100%);
  border: 1px solid var(--primary);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 2rem;
  animation: pulse 2s ease-in-out infinite;
}

.badge-icon {
  font-size: 1.25rem;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--text-light);
}

.gradient-text {
  display: block;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.15rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn-arrow {
  transition: transform 0.3s ease;
}

.btn:hover .btn-arrow {
  transform: translateX(5px);
}

.hero-stats {
  display: flex;
  gap: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-value {
  font-family: 'Orbitron', monospace;
  font-size: 2rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hero-visual {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-circle {
  position: absolute;
  border-radius: 50%;
  border: 2px solid;
  animation: rotate 20s linear infinite;
}

.circle-1 {
  width: 400px;
  height: 400px;
  border-color: rgba(0, 217, 255, 0.2);
  animation-duration: 20s;
}

.circle-2 {
  width: 300px;
  height: 300px;
  border-color: rgba(255, 0, 110, 0.2);
  animation-duration: 15s;
  animation-direction: reverse;
}

.circle-3 {
  width: 200px;
  height: 200px;
  border-color: rgba(255, 190, 11, 0.2);
  animation-duration: 10s;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.visual-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.floating-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: var(--dark-alt);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  animation: float 3s ease-in-out infinite;
}

.card-icon {
  font-size: 2rem;
}

.card-text {
  font-family: 'Orbitron', monospace;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-light);
}

.card-1 {
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.card-2 {
  bottom: 20%;
  right: 5%;
  animation-delay: 1s;
}

.card-3 {
  top: 50%;
  left: 0;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-visual {
    height: 400px;
  }

  .circle-1 {
    width: 350px;
    height: 350px;
  }

  .circle-2 {
    width: 250px;
    height: 250px;
  }

  .circle-3 {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 5rem 0 4rem;
  }

  .hero-stats {
    gap: 2rem;
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .hero-visual {
    height: 300px;
  }

  .circle-1 {
    width: 280px;
    height: 280px;
  }

  .circle-2 {
    width: 200px;
    height: 200px;
  }

  .circle-3 {
    width: 120px;
    height: 120px;
  }

  .floating-card {
    padding: 0.75rem 1rem;
  }

  .card-icon {
    font-size: 1.5rem;
  }

  .card-text {
    font-size: 0.85rem;
  }
}
</style>
