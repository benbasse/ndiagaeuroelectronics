import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // Récupérer le thème sauvegardé ou utiliser 'dark' par défaut
  const savedTheme = localStorage.getItem('theme') || 'dark'
  const theme = ref(savedTheme)

  // Appliquer le thème au document
  const applyTheme = (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  // Toggle entre dark et light
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    applyTheme(theme.value)
  }

  // Définir un thème spécifique
  const setTheme = (newTheme) => {
    theme.value = newTheme
    applyTheme(newTheme)
  }

  // Vérifier si c'est le mode dark
  const isDark = () => theme.value === 'dark'

  // Appliquer le thème initial
  applyTheme(theme.value)

  return {
    theme,
    toggleTheme,
    setTheme,
    isDark
  }
})
