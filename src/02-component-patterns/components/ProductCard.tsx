import { createContext, useContext } from 'react';

import { useProduct } from '../hooks';
import { ProductContext as ProductContextInterface, Product, onChangeArgs } from '../interfaces';
import styles from '../styles/styles.module.css';

const ProductContext = createContext({} as ProductContextInterface);

export const useProductContext = () => useContext(ProductContext);

export interface Props {
  children?: React.ReactNode;
  className?: string;
  product: Product;
  style?: React.CSSProperties;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({
  children,
  className = '',
  product,
  style,
  value = 0,
  onChange
}: Props) => {
  const productState = useProduct({ product, onChange, value });

  return (
    <ProductContext.Provider value={{ ...productState, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </ProductContext.Provider>
  );
};
