import { createContext, useContext } from 'react';

import { useProduct } from '../hooks';
import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContext as ProductContextInterface
} from '../interfaces';
import styles from '../styles/styles.module.css';

const ProductContext = createContext({} as ProductContextInterface);

export const useProductContext = () => useContext(ProductContext);

export interface Props {
  // children?: React.ReactNode;
  children: (args: ProductCardHandlers) => React.ReactNode;
  className?: string;
  initialValues?: InitialValues;
  product: Product;
  style?: React.CSSProperties;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({
  children,
  className = '',
  initialValues,
  onChange,
  product,
  style,
  value
}: Props) => {
  const productState = useProduct({ product, onChange, value, initialValues });

  return (
    <ProductContext.Provider
      value={{
        ...productState,
        product
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          ...productState,
          product
        })}
      </div>
    </ProductContext.Provider>
  );
};
