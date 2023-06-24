'use client';

import { CartProvider } from '../../stores/cartStore';
import Cart from './cart/Cart';

const CartWrapper = () => {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
};

export default CartWrapper;
