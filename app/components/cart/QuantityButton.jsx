import { BiMinus } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';

const QuantityButton = ({
  quantity,
  increaseQuantity,
  decreaseQuantity,
  className,
}) => {
  return (
    <div
      className={`${className} flex items-center gap-3 border-white border-[1px] px-2 py-1 font-semibold rounded-lg`}
    >
      <BiMinus onClick={decreaseQuantity} className="cursor-pointer text-xl" />
      <p>{quantity}</p>
      <BsPlus onClick={increaseQuantity} className="cursor-pointer text-xl" />
    </div>
  );
};

export default QuantityButton;
