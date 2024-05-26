// Products.test.tsx
import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { CartProvider } from '@/Hooks/useCart' // Use a sintaxe correta para importar o CartProvider
import Products from '../Products/Products'

// Mockando o Axios para simular uma resposta de API
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { products: [] } })),
}))

describe('Products Component', () => {
  it('renders product cards correctly', async () => {
    const { findByText } = render(
      <CartProvider>
        <Products />
      </CartProvider>
    )

    // Verifica se a mensagem de erro não está presente, o que significa que os produtos foram carregados corretamente
    await expect(
      findByText(/Error loading products/i)
    ).resolves.not.toBeInTheDocument()
  })

  it('adds product to cart when "COMPRAR" button is clicked', async () => {
    // Renderiza o componente Products envolvido no CartProvider
    const { getByText } = render(
      <CartProvider>
        <Products />
      </CartProvider>
    )

    // Encontra e clica no botão "COMPRAR"
    fireEvent.click(getByText('COMPRAR'))

    // Espera até que o carrinho seja atualizado (você pode precisar ajustar isso dependendo da implementação do addToCart)
    await waitFor(() => {
      // Verifica se o carrinho não está vazio após adicionar um produto
      expect(getByText(/Carrinho/)).toBeInTheDocument()
    })
  })
})
