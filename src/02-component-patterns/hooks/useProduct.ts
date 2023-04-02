import { useState, useEffect } from 'react';

import { onChangeArgs, Product } from '../interfaces/productInterfaces';

interface useProductArgs {
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  value?: number;
}

export const useProduct = ({ product, onChange, value = 0 }: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  const increaseBy = (countValue: number) => {
    const count = Math.max(counter + countValue, 0);

    setCounter(count);
    onChange && onChange({ count, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { counter, increaseBy };
};
