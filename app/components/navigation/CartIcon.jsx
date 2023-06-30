'use client';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCartStore } from '../../../stores/cartStore';
import Button from '../ui/Button';
import ClientOnly from '../hydration/ClientOnly';

const CartIcon = () => {
  const { cart, toggleCart } = useCartStore(state => state);

  return (
    <Button noAni ariaLabel="Cart Icon" className="relative">
      <ClientOnly>
        {cart.length > 0 && (
          <div className="absolute right-0 top-0 w-2 h-2 rounded-full bg-red-500"></div>
        )}
        <AiOutlineShoppingCart
          onClick={toggleCart}
          className="text-white hover:text-accent text-xl cursor-pointer"
        />
      </ClientOnly>
    </Button>
  );
};

export default CartIcon;
