<template>
  <div class="about">
    <section class="about-hero">
      <div class="container">
        <h1>À Propos de Ndiaga Euro Electronics</h1>
        <p class="hero-subtitle">Votre partenaire de confiance pour l'électronique premium depuis 2020</p>
      </div>
    </section>

    <section class="section about-story">
      <div class="container">
        <div class="story-content">
          <div class="story-text">
            <h2>Notre Histoire</h2>
            <p>
              Fondée en 2020 à Dakar, Ndiaga Euro Electronics est née d'une passion pour la technologie 
              et d'une vision claire : rendre l'électronique premium accessible à tous les Sénégalais.
            </p>
            <p>
              Nous avons commencé comme une petite boutique spécialisée dans les smartphones, et nous 
              sommes aujourd'hui devenus un acteur majeur de la distribution d'électronique au Sénégal, 
              offrant une gamme complète de produits de haute qualité.
            </p>
            <p>
              Notre succès repose sur trois piliers fondamentaux : l'authenticité des produits, 
              l'excellence du service client, et des prix compétitifs. Chaque produit que nous 
              vendons est soigneusement sélectionné et vérifié pour garantir la meilleure expérience 
              à nos clients.
            </p>
          </div>
          <div class="story-visual">
            <div class="visual-box box-1">
              <span class="box-icon">🏆</span>
              <h3>Excellence</h3>
            </div>
            <div class="visual-box box-2">
              <span class="box-icon">✓</span>
              <h3>Qualité</h3>
            </div>
            <div class="visual-box box-3">
              <span class="box-icon">💎</span>
              <h3>Premium</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section mission-section">
      <div class="container">
        <h2 class="section-title-main">Notre Mission</h2>
        <div class="mission-grid">
          <div class="mission-card">
            <div class="mission-icon">🎯</div>
            <h3>Notre Vision</h3>
            <p>
              Devenir la référence incontournable de l'électronique premium au Sénégal et en 
              Afrique de l'Ouest, en offrant une expérience d'achat exceptionnelle.
            </p>
          </div>
          <div class="mission-card">
            <div class="mission-icon">💼</div>
            <h3>Nos Valeurs</h3>
            <p>
              Intégrité, transparence, excellence du service, et engagement envers la satisfaction 
              client sont au cœur de tout ce que nous faisons.
            </p>
          </div>
          <div class="mission-card">
            <div class="mission-icon">🚀</div>
            <h3>Notre Engagement</h3>
            <p>
              Fournir uniquement des produits authentiques, offrir un support client réactif, 
              et garantir une livraison rapide et sécurisée.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">10,000+</div>
            <div class="stat-label">Clients Satisfaits</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">500+</div>
            <div class="stat-label">Produits Disponibles</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">50+</div>
            <div class="stat-label">Marques Partenaires</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">99%</div>
            <div class="stat-label">Taux de Satisfaction</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Prêt à Découvrir l'Excellence ?</h2>
          <p>Explorez notre catalogue et trouvez le produit parfait pour vos besoins</p>
          <div class="cta-actions">
            <router-link to="/shop" class="btn btn-primary">
              Voir la Boutique
            </router-link>
            <router-link to="/contact" class="btn btn-secondary">
              Nous Contacter
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  width: 100%;
}

.about-hero {
  padding: 6rem 0 4rem;
  background: var(--gradient-dark);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.about-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 50%, rgba(0, 217, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 70% 50%, rgba(255, 0, 110, 0.15) 0%, transparent 50%);
  pointer-events: none;
}

.about-hero h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  position: relative;
  z-index: 1;
}

.about-story {
  background: var(--dark);
}

.story-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: center;
}

.story-text h2 {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 2rem;
}

.story-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.story-visual {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  position: relative;
}

.visual-box {
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--dark-alt);
  border: 2px solid var(--border);
  border-radius: 16px;
  transition: all 0.4s ease;
}

.visual-box:hover {
  border-color: var(--primary);
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.box-1 {
  grid-column: 1 / -1;
}

.box-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.visual-box h3 {
  font-family: 'Orbitron', monospace;
  color: var(--primary);
  font-size: 1.25rem;
}

.mission-section {
  background: var(--dark-alt);
}

.section-title-main {
  font-size: 3rem;
  text-align: center;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.mission-card {
  padding: 3rem 2rem;
  background: var(--dark);
  border: 1px solid var(--border);
  border-radius: 16px;
  text-align: center;
  transition: all 0.4s ease;
}

.mission-card:hover {
  border-color: var(--primary);
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.mission-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.mission-card h3 {
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  color: var(--text-light);
  margin-bottom: 1rem;
}

.mission-card p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-muted);
}

.stats-section {
  background: var(--dark);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-card {
  text-align: center;
  padding: 3rem 2rem;
  background: var(--dark-alt);
  border: 2px solid var(--primary);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.stat-number {
  font-family: 'Orbitron', monospace;
  font-size: 3rem;
  font-weight: 900;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cta-section {
  background: var(--gradient-dark);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(255, 0, 110, 0.15) 0%, transparent 50%);
  pointer-events: none;
}

.cta-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.cta-content h2 {
  font-size: 3rem;
  color: var(--text-light);
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.25rem;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .story-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .about-hero {
    padding: 4rem 0 3rem;
  }

  .story-text h2,
  .section-title-main,
  .cta-content h2 {
    font-size: 2rem;
  }

  .mission-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stat-number {
    font-size: 2.5rem;
  }
}
</style>
