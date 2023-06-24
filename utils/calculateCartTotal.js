export const calculateTotal = cart => {
  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  return total;
};
