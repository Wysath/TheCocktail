import { ref } from 'vue'
import { defineStore } from 'pinia'
import { cocktailService } from '@/services/cocktailService'
import type { Cocktail } from '@/types/cocktail'

export const useCocktailStore = defineStore('cocktail', () => {
  const cocktails = ref<Cocktail[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchRandomCocktails(count: number = 3) {
    loading.value = true
    error.value = null

    try {
      cocktails.value = await cocktailService.getMultipleRandomCocktails(count)
    } catch (err) {
      error.value = 'Failed to fetch cocktails. Please try again.'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return { cocktails, loading, error, fetchRandomCocktails }
})
