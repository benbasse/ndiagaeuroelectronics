<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <img
              src="/logo-removebg-preview.png"
              alt="Logo NDIAGA EURO"
              class="logo-icon logo-img enhanced-logo"
            />

            <span class="logo-text">
              <span class="logo-name">NDIAGA EURO</span>
              <span class="logo-tagline">ELECTRONICS</span>
            </span>
          </div>
          <p class="footer-description">
            Votre destination premium pour l'électronique de haute qualité.
            Découvrez les dernières technologies et équipez-vous avec le
            meilleur.
          </p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">📘</a>
            <a href="#" class="social-link" aria-label="Instagram">📷</a>
            <a href="#" class="social-link" aria-label="Twitter">🐦</a>
            <a href="#" class="social-link" aria-label="LinkedIn">💼</a>
          </div>
        </div>

        <div class="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/shop">Boutique</router-link></li>
            <li><router-link to="/about">À propos</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Catégories</h4>
          <ul>
            <li>
              <router-link to="/shop/smartphones">Smartphones</router-link>
            </li>
            <li><router-link to="/shop/laptops">Laptops</router-link></li>
            <li>
              <router-link to="/shop/televisions">Télévisions</router-link>
            </li>
            <li><router-link to="/shop/audio-devices">Audio</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contact</h4>
          <ul class="contact-info">
            <li>
              <span class="icon">📞</span>
              <span>+221 77 644 99 99</span>
            </li>
            <li>
              <span class="icon">📧</span>
              <span>contact@ndiagaeuro.com</span>
            </li>
            <li>
              <span class="icon">📍</span>
              <span>Dakar, Sénégal</span>
            </li>
            <li>
              <span class="icon">🕐</span>
              <span>Lun - Sam: 9h - 19h</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>
          &copy; {{ currentYear }} Ndiaga Euro Electronics. Tous droits
          réservés.
        </p>
        <div class="footer-badges">
          <span class="badge-item">✓ Paiement Sécurisé</span>
          <span class="badge-item">✓ Livraison Rapide</span>
          <span class="badge-item">✓ Garantie Qualité</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>

/* Logo image adaptée à la taille du flash */
.logo-img {
  height: 4.5rem;
  width: 4.5rem;
  max-width: 6rem;
  max-height: 6rem;
  display: inline-block;
  vertical-align: middle;
  object-fit: cover;
  border-radius: 16px;
  border: 3px solid var(--border);
  box-shadow: var(--shadow-sm);
  margin-right: 1rem;
  background: var(--dark-lighter);
  transition: transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s;
  z-index: 2;
}
@media (max-width: 900px) {
  .logo-img {
    height: 3rem;
    width: 3rem;
    max-width: 4rem;
    max-height: 4rem;
    border-radius: 12px;
    margin-right: 0.7rem;
  }
}
.logo-img.enhanced-logo:hover {
  transform: scale(1.08) rotate(-2deg);
  box-shadow: var(--shadow-md);
}
.footer {
  background: var(--dark-alt);
  border-top: 1px solid var(--border);
  margin-top: 5rem;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(0, 217, 255, 0.1) 0%, transparent 45%),
    radial-gradient(circle at 80% 70%, rgba(255, 0, 110, 0.1) 0%, transparent 45%);
  pointer-events: none;
  z-index: 0;
}

.footer::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  z-index: 1;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
  padding: 4rem 0;
  position: relative;
  z-index: 2;
}

.footer-section h4 {
  font-family: "Orbitron", monospace;
  font-size: 1.1rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.logo-icon {
  font-size: 2rem;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo-name {
  font-family: "Orbitron", monospace;
  font-size: 1.25rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.05em;
}

.logo-tagline {
  font-family: "Orbitron", monospace;
  font-size: 0.65rem;
  font-weight: 500;
  color: var(--text-muted);
  letter-spacing: 0.15em;
  margin-top: 0.15rem;
}

.footer-description {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  max-width: 400px;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--dark-lighter);
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  border: 1px solid var(--border);
}

.social-link:hover {
  background: var(--primary);
  border-color: var(--primary);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.75rem;
}

.footer-section ul li a {
  color: var(--text-muted);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.footer-section ul li a:hover {
  color: var(--primary);
  transform: translateX(5px);
}

.contact-info li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.contact-info .icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  border-top: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 0.9rem;
  position: relative;
  z-index: 2;
}

.footer-badges {
  display: flex;
  gap: 1.5rem;
}

.badge-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--success);
  font-weight: 500;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 0;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .footer-badges {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
