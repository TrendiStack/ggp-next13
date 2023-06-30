'use client';

import { cakes, gelato, sorbet } from '../../../data';
import { useEffect } from 'react';
import UserInput from '../../components/ui/UserInput';
import CakeLabel from './CakeLabel';

const CakeForm = ({ form, setForm, error }) => {
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
      (form.shape !== 'rectangle' && size === `10" x 14"`) ||
      (form.shape === 'log' && size !== '9"') ||
      (form.shape !== 'log' && size === '9"') ||
      (form.shape === 'heart' && size !== '10"'),
  }));

  const numbers = Array.from({ length: 10 }, (_, i) => i + 1)
    // .concat('other')
    .map(number => (number = { value: number, label: number }));

  const handleSelect = selectedValue => {
    const { value } = selectedValue;
    setForm('quantity', value);
    if (value === 'other' || form.quantity.length > 1) {
      setForm('customQuantity', '');
    }
  };
  // const handleCustomQuantity = e => {
  //   setForm('customQuantity', e.target.value);
  // };

  const handleFlavour = selectedValue => {
    if (selectedValue && selectedValue.length <= 2) {
      setForm('flavour', selectedValue);
    }
  };

  useEffect(() => {
    if (form.shape === 'rectangle') {
      setForm('size', '10" x 14"');
    } else if (form.shape === 'log') {
      setForm('size', '9"');
    } else if (form.shape === 'heart') {
      setForm('size', '10"');
    } else {
      setForm('size', '');
    }
  }, [form.shape, setForm]);

  return (
    <form className="grid grid-cols-1 gap-5">
      <div>
        <CakeLabel htmlFor="cakeFlavor" title="Flavours">
          Flavours - <span className="text-[70%]">Pick up to two*</span>
        </CakeLabel>
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
        <CakeLabel htmlFor="cakeShape" title="Shape">
          Shape
        </CakeLabel>
        <UserInput
          id="cakeShape"
          inputType="select"
          onChange={value => setForm('shape', value.value)}
          options={shapes}
          value={form.shape}
          error={error.shape}
        />
      </div>
      <div>
        <CakeLabel htmlFor="cakeSize" title="Size">
          Size
        </CakeLabel>
        <UserInput
          id="cakeSize"
          inputType="select"
          onChange={value => setForm('size', value.value)}
          options={sizes}
          value={form.size}
          error={error.size}
        />
      </div>
      <div>
        <CakeLabel htmlFor="cakeQuantity" title="Quantity">
          Quantity
        </CakeLabel>
        <UserInput
          id="cakeQuantity"
          value={form.quantity}
          onChange={handleSelect}
          inputType="select"
          options={numbers}
          error={error.quantity}
        />
      </div>
      {/* {form.quantity === 'other' && (
        <UserInput
          id="customQuantity"
          inputType="input"
          max="100"
          min="1"
          onChange={handleCustomQuantity}
          type="number"
          value={form.customQuantity}
          placeholder="Enter quantity..."
          className="mt-1"
          error={error.customQuantity}
        />
      )} */}
    </form>
  );
};

export default CakeForm;
