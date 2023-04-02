import { useState } from 'react';

import { Product, ProductInCart } from '../interfaces/productInterfaces';

export const useShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ product, count }: { product: Product; count: number }) => {
    setShoppingCart(prevProds => {
      const productCount = prevProds[product.id]?.count || 0;
      const totalCount = Math.max(productCount + count, 0);

      if (!totalCount) {
        delete prevProds[product.id];

        return { ...prevProds };
      }

      return { ...prevProds, [product.id]: { ...product, count: totalCount } };
    });
  };

  return {
    shoppingCart,
    onProductCountChange
  };
};
