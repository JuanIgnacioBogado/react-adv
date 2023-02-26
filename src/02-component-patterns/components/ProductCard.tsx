import { createContext, useContext } from 'react';

import { useProduct } from '@/02-component-patterns/hooks';
import { ProductContext as ProductContextInterface, ProductCardProps } from '@/02-component-patterns/interfaces';
import styles from '@/02-component-patterns/styles/styles.module.css';

const ProductContext = createContext({} as ProductContextInterface);

export const useProductContext = () => useContext(ProductContext);

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const productState = useProduct();

  return (
    <ProductContext.Provider value={{ ...productState, product }}>
      <div className={styles.productCard}>{children}</div>
    </ProductContext.Provider>
  );
};
