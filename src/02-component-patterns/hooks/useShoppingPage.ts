import { useState } from 'react';

import { Product, ProductInCart } from '../interfaces/productInterfaces';

export const useShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ product, count }: { product: Product; count: number }) => {
    setShoppingCart(prevProds => {
      if (!count) {
        delete prevProds[product.id];

        return { ...prevProds };
      }

      return { ...prevProds, [product.id]: { ...product, count } };
    });
  };

  return {
    shoppingCart,
    onProductCountChange
  };
};
