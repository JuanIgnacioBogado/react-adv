import { useState, useEffect, useRef } from 'react';

import { onChangeArgs, Product } from '../interfaces/productInterfaces';

interface useProductArgs {
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  value?: number;
}

export const useProduct = ({ product, onChange, value = 0 }: useProductArgs) => {
  const [counter, setCounter] = useState(value);
  const isControlled = useRef(!!onChange);

  const increaseBy = (countValue: number) => {
    if (isControlled.current) return onChange!({ count: countValue, product });

    setCounter(Math.max(counter + countValue, 0));
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { counter, increaseBy };
};
