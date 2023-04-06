import { useState, useEffect, useMemo } from 'react';

import { onChangeArgs, Product, InitialValues } from '../interfaces/productInterfaces';

interface useProductArgs {
  initialValues?: InitialValues;
  product: Product;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ product, onChange, value = 0, initialValues }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const increaseBy = (countValue: number) => {
    const count = Math.min(Math.max(counter + countValue, 0), initialValues?.maxCount || Infinity);

    setCounter(count);
    onChange && onChange({ count, product });
  };

  const reset = () => setCounter(initialValues?.count || value);

  const isMaxCountReached = useMemo(
    () => !!initialValues?.maxCount && counter === initialValues.maxCount,
    [initialValues?.maxCount, counter]
  );

  useEffect(() => {
    setCounter(initialValues?.count || value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached,
    increaseBy,
    reset
  };
};
