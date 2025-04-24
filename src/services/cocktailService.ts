import type { Cocktail } from '@/types/cocktail'

const API_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1'

export const cocktailService = {
  /**
   * Fetches a random cocktail from the API
   */
  async getRandomCocktail(): Promise<Cocktail> {
    try {
      const response = await fetch(`${API_BASE_URL}/random.php`)
      const data = await response.json()
      return this.formatCocktail(data.drinks[0])
    } catch (error) {
      console.error('Error fetching random cocktail:', error)
      throw error
    }
  },

  /**
   * Fetches multiple random cocktails
   */
  async getMultipleRandomCocktails(count: number = 3): Promise<Cocktail[]> {
    try {
      // Make multiple requests in parallel for random cocktails
      const cocktailPromises = Array.from({ length: count }, () => this.getRandomCocktail())
      return Promise.all(cocktailPromises)
    } catch (error) {
      console.error('Error fetching multiple random cocktails:', error)
      throw error
    }
  },

  /**
   * Formats the raw API cocktail data into our Cocktail type
   */
  formatCocktail(rawCocktail: any): Cocktail {
    const ingredients: string[] = []
    const measurements: string[] = []

    // Extract ingredients and measurements
    for (let i = 1; i <= 15; i++) {
      const ingredient = rawCocktail[`strIngredient${i}`]
      const measure = rawCocktail[`strMeasure${i}`]

      if (ingredient) {
        ingredients.push(ingredient)
        measurements.push(measure || '')
      }
    }

    return {
      id: rawCocktail.idDrink,
      name: rawCocktail.strDrink,
      category: rawCocktail.strCategory,
      alcoholic: rawCocktail.strAlcoholic,
      glass: rawCocktail.strGlass,
      instructions: rawCocktail.strInstructions,
      thumbnail: rawCocktail.strDrinkThumb,
      ingredients,
      measurements,
    }
  },
}
