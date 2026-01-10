<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container navbar-container">
      <router-link to="/" class="logo">
        <img src="/NDE.png" alt="Logo NDIAGA EURO" class="logo-icon logo-img" />

        <span class="logo-text">
          <span class="logo-name">NDIAGA EURO</span>
          <span class="logo-tagline">ELECTRONICS</span>
        </span>
      </router-link>

      <button
        class="mobile-toggle"
        @click="toggleMobile"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="nav-links" :class="{ 'nav-links-open': mobileOpen }">
        <router-link to="/" @click="closeMobile">Accueil</router-link>
        <router-link to="/shop" @click="closeMobile">Boutique</router-link>
        <router-link to="/about" @click="closeMobile">À propos</router-link>
        <router-link to="/contact" @click="closeMobile">Contact</router-link>
      </div>

      <router-link to="/cart" class="cart-btn" @click="closeMobile">
        <span class="cart-icon">🛒</span>
        <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
      </router-link>
    </div>
 
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();
const cartCount = computed(() => cartStore.cartCount);

const isScrolled = ref(false);
const mobileOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value;
};

const closeMobile = () => {
  mobileOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(10, 14, 39, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  transition: all 0.3s ease;
}

/* Logo image adaptée à la taille du flash */
.logo-img {
  height: 2rem;
  width: auto;
  max-width: 5rem;
  display: inline-block;
  vertical-align: middle;
  object-fit: contain;
  margin-right: 0.1rem;
  animation: none;
}

.navbar-scrolled {
  box-shadow: var(--shadow-md);
  background: rgba(10, 14, 39, 0.98);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2rem;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  position: relative;
  z-index: 1001;
}

.logo-icon {
  font-size: 2rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
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

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.mobile-toggle span {
  width: 25px;
  height: 3px;
  background: var(--primary);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-links a {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  transition: color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.nav-links a::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: width 0.3s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--primary);
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

.cart-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
}

.cart-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.cart-icon {
  font-size: 1.5rem;
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--secondary);
  color: var(--text-light);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  font-family: "Orbitron", monospace;
  box-shadow: 0 2px 8px rgba(255, 0, 110, 0.4);
  animation: cartBadgePulse 0.5s ease;
}

@keyframes cartBadgePulse {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 1rem;
  }

  .mobile-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 400px;
    height: 100vh;
    background: var(--dark-alt);
    flex-direction: column;
    align-items: flex-start;
    padding: 6rem 2rem 2rem;
    gap: 1.5rem;
    border-left: 1px solid var(--border);
    transition: right 0.3s ease;
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.5);
  }

  .nav-links-open {
    right: 0;
  }

  .nav-links a {
    font-size: 1.25rem;
    width: 100%;
    padding: 0.5rem 0;
  }

  .logo-name {
    font-size: 1.1rem;
  }

  .logo-tagline {
    font-size: 0.6rem;
  }
}
</style>
