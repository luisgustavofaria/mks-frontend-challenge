import { IProduct } from '@/components/Product/Product'
import { ReactNode, createContext } from 'react'
import { useState, useEffect } from 'react'

export interface CartContextType {
  cartItems: IProduct[]
  addToCart: (product: IProduct) => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
}

export const CartContext = createContext({} as CartContextType)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([])

  const addToCart = (product: IProduct) => {
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id
    )

    if (existingProductIndex !== -1) {
      // Se o produto já está no carrinho, aumenta a quantidade
      const updatedCartItems = [...cartItems]
      updatedCartItems[existingProductIndex].quantity++
      setCartItems(updatedCartItems)
    } else {
      // Se o produto não está no carrinho, adiciona-o com quantidade 1
      const newCartItem: IProduct = { ...product, quantity: 1 }
      setCartItems((prevItems) => [...prevItems, newCartItem])
    }
  }
  console.log(cartItems)

  const increaseQuantity = (id: number) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
    })
  }

  const decreaseQuantity = (id: number) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
    })
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
