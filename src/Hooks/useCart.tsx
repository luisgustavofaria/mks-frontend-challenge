import { IProduct } from '@/components/Product/Product'
import { ReactNode, createContext } from 'react'
import { useState, useEffect } from 'react'

export interface CartContextType {
  cartItems: IProduct[]
  addToCart: (product: IProduct) => void
}

export const CartContext = createContext({} as CartContextType)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([])

  const addToCart = (product: IProduct) => {
    const productToAdd = {
      id: product.id,
      name: product.name,
      photo: product.photo,
      price: product.price,
      quantity: 1,
    }
    setCartItems((prevItems) => [...prevItems, productToAdd])
  }
  console.log(cartItems)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
