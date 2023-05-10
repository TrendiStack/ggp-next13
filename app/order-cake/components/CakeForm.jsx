'use client';

import { cakes, gelato, sorbet } from '../../../data';
import { useEffect } from 'react';
import ErrorText from '@/app/components/ErrorText';
import UserInput from '@/app/components/ui/UserInput';

const CakeForm = ({ page, form, setForm, error }) => {
  const gelatoFlavours = gelato.map(flavour => flavour.name);
  const sorbetFlavours = sorbet.map(flavour => flavour.name);
  const flavours = cakes.flavours;
  const excludedFlavours = cakes.excluded;
  const allFlavours = [...flavours, ...gelatoFlavours, ...sorbetFlavours]
    .filter(flavour => !excludedFlavours.includes(flavour))
    .map(flavour => (flavour = { value: flavour, label: flavour }));
  const shapes = cakes.shapes.map(
    shape => (shape = { value: shape, label: shape })
  );
  const sizes = cakes.sizes.map((size, i) => ({
    value: size,
    label: size,
    isDisabled:
      (form.shape === 'rectangle' && size !== `10" x 14"`) ||
      (form.shape !== 'rectangle' && size === `10" x 14"`),
  }));

  const numbers = Array.from({ length: 10 }, (_, i) => i + 1)
    .concat('other')
    .map(number => (number = { value: number, label: number }));

  const handleSelect = selectedValue => {
    const { value } = selectedValue;
    setForm(prev => ({ ...prev, cake: { ...prev.cake, quantity: value } }));
    if (value === 'other' || form.quantity.length > 1) {
      setForm(prev => ({
        ...prev,
        cake: { ...prev.cake, customQuantity: '' },
      }));
    }
  };
  const handleCustomQuantity = e => {
    setForm(prev => ({
      ...prev,
      cake: { ...prev.cake, customQuantity: e.target.value },
    }));
  };

  const handleFlavour = selectedValue => {
    if (selectedValue && selectedValue.length <= 2) {
      setForm(prev => ({
        ...prev,
        cake: { ...prev.cake, flavour: selectedValue },
      }));
    }
  };

  useEffect(() => {
    if (form.shape === 'rectangle') {
      setForm(prev => ({ ...prev, cake: { ...prev.cake, size: '10" x 14"' } }));
    } else {
      setForm(prev => ({ ...prev, cake: { ...prev.cake, size: '' } }));
    }
  }, [form.shape, setForm]);

  return (
    <div className={`${page === 1 ? 'grid' : 'hidden'} grid-cols-1 gap-5`}>
      <div>
        {error.flavour && <ErrorText>{error.flavour}</ErrorText>}
        <label htmlFor="cakeFlavor">
          Flavours - <span className="text-[70%]">Pick up to two*</span>
        </label>
        <UserInput
          id="cakeFlavour"
          inputType="select"
          onChange={handleFlavour}
          options={allFlavours}
          value={form.flavour}
          length={form.flavour.length}
          error={error.flavour}
        />
      </div>
      <div>
        {error.shape && <ErrorText>{error.shape}</ErrorText>}
        <label htmlFor="cakeShape">Shape</label>
        <UserInput
          id="cakeShape"
          inputType="select"
          onChange={value =>
            setForm(prev => ({
              ...prev,
              cake: { ...prev.cake, shape: value.value },
            }))
          }
          options={shapes}
          value={form.shape}
          error={error.shape}
        />
      </div>
      <div>
        {error.size && <ErrorText>{error.size}</ErrorText>}
        <label htmlFor="cakeSize">Sizes</label>
        <UserInput
          id="cakeSize"
          inputType="select"
          onChange={value =>
            setForm(prev => ({
              ...prev,
              cake: { ...prev.cake, size: value.value },
            }))
          }
          options={sizes}
          value={form.size}
          error={error.size}
        />
      </div>
      <div>
        {error.quantity && <ErrorText>{error.quantity}</ErrorText>}
        <label htmlFor="cakeQuantity">Quantity</label>
        <UserInput
          id="cakeQuantity"
          value={form.quantity}
          onChange={handleSelect}
          inputType="select"
          options={numbers}
          error={error.quantity}
        />
      </div>
      {error.customQuantity && <ErrorText>{error.customQuantity}</ErrorText>}
      {form.quantity === 'other' && (
        <UserInput
          id="customQuantity"
          inputType="input"
          max="100"
          min="1"
          onChange={handleCustomQuantity}
          type="number"
          value={form.customQuantity}
          className="mt-1"
          error={error.customQuantity}
        />
      )}
    </div>
  );
};

export default CakeForm;
