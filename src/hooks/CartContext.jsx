import { useContext, useState, createContext, useEffect } from "react";
import React from "react";

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((pdr) => pdr.id === product.id)

    let newProductInCart = []

    if (cartIndex >= 0) {
      newProductInCart = cartProducts

      newProductInCart[cartProducts].quantity =
        newProductInCart[cartIndex].quantity + 1
    } else {
      product.quantity = 1
      newProductInCart = [...cartProducts, product]
      setCartProducts(newProductInCart)
    }

    updataLocalStorage(newProductInCart)
  }

  const clearCart = () => { }

  const deleteProduct = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id !== productId)

    setCartProducts(newCart)
    updataLocalStorage(deleteProduct)
  }

  const increaseProduct = (productId) => {
    const newCart = cartProducts.map((prd) => {
      return prd.id === productId ?
        { ...prd, quantity: prd.quantity + 1 } : prd
    })

    setCartProducts(newCart)
    updataLocalStorage(newCart)
  }

  const decreaseProduct = (productId) => {
    const cartIndex = cartProducts.findIndex((pdr) => pdr.id === productId)

    if (cartProducts[cartIndex].quantity >= 0) {
      const newCart = cartProducts.map((prd) => {
        return prd.id === productId ?
          { ...prd, quantity: prd.quantity - 1 } : prd
      })

      setCartProducts(newCart)
      updataLocalStorage(newCart)
    } else {
      decreaseProduct(productId)
    }
  }

  const updataLocalStorage = (product) => {
    localStorage.setItem('devBurger:dataInfo', JSON.stringify(product))
  }

  useEffect(() => {
    const clientInfoData = localStorage.getItem('devBurger:dataInfo')

    if (clientInfoData) {
      setCartProducts(JSON.parse(clientInfoData))
    }
  }, [])

  return (
    <CartContext.Provider value={{
      cartProducts,
      putProductInCart,
      clearCart,
      deleteProduct,
      increaseProduct,
      decreaseProduct
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with a context')
  }

  return context
}