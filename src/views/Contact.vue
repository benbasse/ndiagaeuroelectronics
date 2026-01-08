<template>
  <div class="contact">
    <section class="contact-hero">
      <div class="container">
        <h1>Contactez-Nous</h1>
        <p class="hero-subtitle">Nous sommes là pour répondre à toutes vos questions</p>
      </div>
    </section>

    <section class="section contact-content">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-form-section">
            <h2>Envoyez-nous un Message</h2>
            <p class="form-intro">
              Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
            </p>

            <form @submit.prevent="sendWhatsAppMessage" class="contact-form">
              <div class="form-group">
                <label for="name">Nom Complet *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required 
                  placeholder="Votre nom"
                />
              </div>

              <div class="form-group">
                <label for="phone">Téléphone *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone" 
                  required 
                  placeholder="+221 XX XXX XX XX"
                />
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  placeholder="votre@email.com"
                />
              </div>

              <div class="form-group">
                <label for="subject">Sujet *</label>
                <select id="subject" v-model="form.subject" required>
                  <option value="">Sélectionnez un sujet</option>
                  <option value="Information produit">Information sur un produit</option>
                  <option value="Commande">Question sur une commande</option>
                  <option value="Support technique">Support technique</option>
                  <option value="Partenariat">Opportunité de partenariat</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required 
                  rows="6"
                  placeholder="Décrivez votre demande..."
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary submit-btn">
                <span class="btn-icon">📱</span>
                <span>Envoyer via WhatsApp</span>
              </button>
            </form>
          </div>

          <div class="contact-info-section">
            <div class="info-card">
              <h3>Coordonnées</h3>
              <div class="info-items">
                <div class="info-item">
                  <div class="info-icon">📞</div>
                  <div class="info-details">
                    <strong>Téléphone</strong>
                    <a href="tel:+221772889673">+221 77 288 96 73</a>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">📧</div>
                  <div class="info-details">
                    <strong>Email</strong>
                    <a href="mailto:contact@ndiagaeuro.com">contact@ndiagaeuro.com</a>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">📍</div>
                  <div class="info-details">
                    <strong>Adresse</strong>
                    <p>Dakar, Sénégal</p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">🕐</div>
                  <div class="info-details">
                    <strong>Horaires d'Ouverture</strong>
                    <p>Lundi - Samedi: 9h - 19h</p>
                    <p>Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="social-card">
              <h3>Suivez-Nous</h3>
              <p>Restez connectés pour les dernières nouveautés</p>
              <div class="social-links">
                <a href="#" class="social-link">
                  <span>📘</span>
                  <span>Facebook</span>
                </a>
                <a href="#" class="social-link">
                  <span>📷</span>
                  <span>Instagram</span>
                </a>
                <a href="#" class="social-link">
                  <span>🐦</span>
                  <span>Twitter</span>
                </a>
                <a href="#" class="social-link">
                  <span>💼</span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div class="whatsapp-card">
              <div class="whatsapp-icon-large">💬</div>
              <h3>Contact Direct WhatsApp</h3>
              <p>Besoin d'une réponse rapide ? Contactez-nous directement sur WhatsApp</p>
              <a 
                href="https://wa.me/221772889673" 
                target="_blank" 
                class="btn btn-accent"
              >
                <span>📱</span>
                <span>Ouvrir WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: ''
})

const sendWhatsAppMessage = () => {
  const phoneNumber = '+221772889673'
  
  let message = `*Nouveau Message de Contact*%0A%0A`
  message += `*Nom:* ${form.value.name}%0A`
  message += `*Téléphone:* ${form.value.phone}%0A`
  
  if (form.value.email) {
    message += `*Email:* ${form.value.email}%0A`
  }
  
  message += `*Sujet:* ${form.value.subject}%0A%0A`
  message += `*Message:*%0A${form.value.message}`
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
  window.open(whatsappUrl, '_blank')
  
  // Reset form
  form.value = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
.contact {
  width: 100%;
}

.contact-hero {
  padding: 6rem 0 4rem;
  background: var(--gradient-dark);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.contact-hero::before {
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

.contact-hero h1 {
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

.contact-content {
  padding: 4rem 0 6rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
}

.contact-form-section h2 {
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.form-intro {
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-family: 'Orbitron', monospace;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.submit-btn {
  margin-top: 1rem;
  font-size: 1rem;
  padding: 1.25rem 2rem;
}

.contact-info-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card,
.social-card,
.whatsapp-card {
  padding: 2rem;
  background: var(--dark-alt);
  border: 1px solid var(--border);
  border-radius: 16px;
}

.info-card h3,
.social-card h3,
.whatsapp-card h3 {
  font-family: 'Orbitron', monospace;
  font-size: 1.25rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.info-icon {
  font-size: 1.75rem;
  flex-shrink: 0;
}

.info-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.info-details strong {
  font-family: 'Orbitron', monospace;
  color: var(--text-light);
  font-size: 0.95rem;
}

.info-details a {
  color: var(--primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-details a:hover {
  color: var(--primary-dark);
}

.info-details p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.5;
}

.social-card p {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--dark-lighter);
  border: 1px solid var(--border);
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-light);
  font-weight: 500;
  transition: all 0.3s ease;
}

.social-link:hover {
  border-color: var(--primary);
  transform: translateX(5px);
}

.social-link span:first-child {
  font-size: 1.5rem;
}

.whatsapp-card {
  text-align: center;
  border-color: var(--accent);
}

.whatsapp-icon-large {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.whatsapp-card p {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .contact-hero {
    padding: 4rem 0 3rem;
  }

  .contact-content {
    padding: 3rem 0 4rem;
  }

  .contact-form-section h2 {
    font-size: 1.75rem;
  }
}
</style>
