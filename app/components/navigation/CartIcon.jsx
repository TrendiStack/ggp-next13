'use client';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCartStore } from '../../../stores/cartStore';
import Button from '../ui/Button';
import useMenu from '../../../stores/menuStore';
import ClientOnly from '../hydration/ClientOnly';

const CartIcon = () => {
  const { menu } = useMenu();
  const { cart, toggleCart } = useCartStore(state => state);

  return (
    <Button noAni ariaLabel="Cart Icon" className="max-lg:hidden relative">
      <ClientOnly>
        {cart.length > 0 && (
          <div className="absolute right-0 top-0 w-3 h-3 rounded-full bg-red-500"></div>
        )}
        <AiOutlineShoppingCart
          onClick={toggleCart}
          className={`
        ${menu ? 'text-white' : 'text-[#252422] '}
        max-md:text-xl text-3xl cursor-pointer`}
        />
      </ClientOnly>
    </Button>
  );
};

export default CartIcon;
