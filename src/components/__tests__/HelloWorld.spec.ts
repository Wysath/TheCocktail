import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CocktailCard from '../CocktailCard.vue'
import type { Cocktail } from '@/types/cocktail'

describe('CocktailCard', () => {
  it('renders cocktail details correctly', () => {
    const cocktail: Cocktail = {
      id: '1',
      name: 'Mojito',
      category: 'Cocktail',
      alcoholic: 'Alcoholic',
      glass: 'Highball glass',
      instructions:
        'Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish with mint leaves and a lime wedge.',
      thumbnail: 'https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg',
      ingredients: ['Light rum', 'Lime', 'Sugar', 'Mint', 'Soda water'],
      measurements: ['2-3 oz', 'Juice of 1', '2 tsp', '2-4', 'Top'],
    }

    const wrapper = mount(CocktailCard, {
      props: { cocktail },
    })

    expect(wrapper.find('h2').text()).toBe('Mojito')
    expect(wrapper.find('.cocktail-details').text()).toContain('Category: Cocktail')
    expect(wrapper.find('.cocktail-details').text()).toContain('Type: Alcoholic')
    expect(wrapper.find('.cocktail-details').text()).toContain('Glass: Highball glass')

    // Check ingredients
    const ingredients = wrapper.findAll('.cocktail-ingredients li')
    expect(ingredients.length).toBe(5)
    expect(ingredients[0].text()).toContain('2-3 oz Light rum')

    // Check instructions
    expect(wrapper.find('.cocktail-instructions p').text()).toBe(cocktail.instructions)

    // Check image
    const img = wrapper.find('.cocktail-image img')
    expect(img.attributes('src')).toBe(cocktail.thumbnail)
    expect(img.attributes('alt')).toBe(cocktail.name)
  })
})
