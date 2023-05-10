import ConfirmationText from './ConfirmationText';
const CakeConfirmation = ({ form }) => {
  return (
    <div>
      <h1 className="mb-3">Please verify the information given</h1>
      <div className="grid grid-cols-1 gap-3 text-sm 2xl:text-base">
        <ConfirmationText>Name: {form.name}</ConfirmationText>
        <ConfirmationText>Email: {form.email}</ConfirmationText>
        <ConfirmationText>Phone: {form.phone}</ConfirmationText>
        {form.date && (
          <ConfirmationText>
            Date:{' '}
            {form.date.toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </ConfirmationText>
        )}

        <ConfirmationText>
          Flavour:{' '}
          {form.cake.flavour
            .map(flavour => flavour.value)
            .toString()
            .replace(/,/g, ', ')}
        </ConfirmationText>
        <ConfirmationText>Shape: {form.cake.shape}</ConfirmationText>
        <ConfirmationText>Size: {form.cake.size}</ConfirmationText>
        <ConfirmationText>Quantity: {form.cake.quantity}</ConfirmationText>
        {form.cake.customQuantity > 0 && (
          <ConfirmationText>
            Custom Quantity: {form.cake.customQuantity}
          </ConfirmationText>
        )}
        <ConfirmationText>Message: {form.message}</ConfirmationText>
      </div>
    </div>
  );
};

export default CakeConfirmation;
