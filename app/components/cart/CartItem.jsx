'use client';

import { IoCloseOutline } from 'react-icons/io5';
import { useCartStore } from '../../../stores/cartStore';
import QuantityButton from './QuantityButton';
import Image from 'next/image';

const CartItem = ({ item }) => {
  const { name, flavour, price, shape, size, quantity } = item;
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore(
    state => state
  );

  const addItem = () => {
    increaseQuantity(item);
  };
  const removeItem = () => {
    decreaseQuantity(item);
  };
  const deleteItem = () => {
    removeFromCart(item.id);
  };

  return (
    <article className="flex gap-5 bg-[#a3a380] rounded-lg p-2">
      <Image
        src="https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-delivery-icons/ggp-cake-nobg.png"
        alt="cake"
        className="min-w-[9rem] max-w-[9rem] p-4"
        width={100}
        height={100}
      />
      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between">
          <div>
            <h1>{name}</h1>
            <p>{flavour}</p>
            <p>{shape}</p>
            <p>{size}</p>
          </div>
          <IoCloseOutline
            onClick={deleteItem}
            className="text-xl cursor-pointer"
          />
        </div>
        <div className="flex justify-between items-end">
          <p className="font-semibold">C${price * quantity}</p>
          <QuantityButton
            className=""
            quantity={quantity}
            increaseQuantity={addItem}
            decreaseQuantity={removeItem}
          />
        </div>
      </div>
    </article>
  );
};

export default CartItem;
