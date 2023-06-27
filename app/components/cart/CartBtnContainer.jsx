import Button from '../ui/Button';

const CartBtnContainer = ({
  cart,
  cartOpen,
  total,
  page,
  setPage,
  checkout,
}) => {
  return (
    <div
      className={`
${cartOpen ? 'translate-x-0' : 'translate-x-full'}
fixed bottom-5 right-0 max-md:w-full max-xl:w-1/2 w-2/6 z-[2000] transition-all duration-500 ease-in-out`}
    >
      <div className="px-[5%] lg:px-[2%]">
        <div className="flex justify-between md:text-xl">
          <p>
            Subtotal:{' '}
            <span className="text-zinc-400">({`${cart.length} items`})</span>
          </p>
          <p>
            C$<span className="font-semibold">{total}</span>
          </p>
        </div>
        {page === 1 && (
          <Button
            ariaLabel="Continue Checkout"
            style="cartBtn"
            className="mt-5 w-full bg-white"
            onClick={() => {
              cart.length !== 0 && setPage(2);
            }}
            disabled={cart.length === 0}
          >
            Checkout
          </Button>
        )}
      </div>
      {page === 2 && (
        <div className="px-[5%] lg:px-[2%]">
          <Button
            ariaLabel="Pay with Stripe"
            style="cartBtn"
            className="bg-red-500 mt-5 w-full text-white"
            onClick={() => {
              checkout();
            }}
          >
            Pay with Stripe
          </Button>
        </div>
      )}

      {page > 1 && (
        <div className="px-[5%] lg:px-[2%]">
          <Button
            ariaLabel="Go back"
            style="cartBtn"
            className="w-full mt-3 bg-white"
            onClick={() => {
              setPage(prev => prev - 1);
            }}
          >
            Go back
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartBtnContainer;
