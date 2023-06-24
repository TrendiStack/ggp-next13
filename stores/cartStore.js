import { calculateTotal } from '../utils/calculateCartTotal';
import { createContext, useEffect } from 'react';
import { create } from 'zustand';

export const useCartStore = create(set => {
  let initialCart = [];

  if (typeof window !== 'undefined') {
    const storedCart = localStorage.getItem('cart');
    initialCart = storedCart ? JSON.parse(storedCart) : [];
  }

  return {
    cart: initialCart,
    total: 0,
    cartOpen: false,
    addToCart: item => {
      set(state => {
        const newItemFlavours = item.flavour.sort();
        const existingItem = state.cart.find(
          cartItem =>
            cartItem.flavour.sort().join(',') === newItemFlavours.join(',') &&
            cartItem.size === item.size &&
            cartItem.shape === item.shape
        );

        if (existingItem) {
          return {
            cart: state.cart.map(cartItem =>
              cartItem.flavour.sort().join(',') === newItemFlavours.join(',')
                ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                : cartItem
            ),
          };
        } else {
          return {
            cart: [...state.cart, { ...item, id: state.cart.length + 1 }],
          };
        }
      });
    },
    removeFromCart: id => {
      set(state => ({
        cart: state.cart.filter(item => item.id !== id),
      }));
    },
    clearCart: () => {
      set(() => ({
        cart: [],
        total: 0,
      }));
    },
    increaseQuantity: product => {
      set(state => {
        const existingItem = state.cart.find(item => item.id === product.id);
        const increasedQuantity = state.cart.map(cartItem =>
          cartItem.id === product.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );

        return existingItem
          ? { cart: increasedQuantity, total: state.total }
          : {
              cart: [...state.cart, { ...product, quantity: 1 }],
            };
      });
    },
    decreaseQuantity: product => {
      set(state => {
        const existingItem = state.cart.find(item => item.id === product.id);
        const removeItem = state.cart.filter(item => item.id !== product.id);
        const decreasedQuantity = state.cart.map(cartItem =>
          cartItem.id === product.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              }
            : cartItem
        );

        return existingItem?.quantity === 1
          ? { cart: removeItem, total: state.total }
          : existingItem
          ? { cart: decreasedQuantity, total: state.total }
          : { cart: state.cart, total: state.total };
      });
    },
    setTotal: total => {
      set(() => ({
        total,
      }));
    },
    toggleCart: () => {
      set(state => ({
        cartOpen: !state.cartOpen,
      }));
    },

    setPaymentIntent: paymentIntent => {
      set(() => ({
        paymentIntent,
      }));
    },
  };
});

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { cart, setTotal } = useCartStore();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));

    const handleCartTotal = () => {
      const cartTotal = calculateTotal(cart).toFixed(2);

      setTotal(cartTotal);
    };

    handleCartTotal();
  }, [cart, setTotal]);

  const value = {
    cart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
