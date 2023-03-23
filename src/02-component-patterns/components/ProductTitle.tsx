import styles from '../styles/styles.module.css';

import { useProductContext } from './ProductCard';

export interface Props {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductTitle = ({ title, style, className = '' }: Props) => {
  const { product } = useProductContext();

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  );
};
