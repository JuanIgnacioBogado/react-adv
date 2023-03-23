import { createContext, useContext } from 'react';

import { useProduct } from '../hooks';
import { ProductContext as ProductContextInterface, Product } from '../interfaces';
import styles from '../styles/styles.module.css';

const ProductContext = createContext({} as ProductContextInterface);

export const useProductContext = () => useContext(ProductContext);

export interface Props {
  product: Product;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductCard = ({ children, product, className = '', style }: Props) => {
  const productState = useProduct();

  return (
    <ProductContext.Provider value={{ ...productState, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </ProductContext.Provider>
  );
};
