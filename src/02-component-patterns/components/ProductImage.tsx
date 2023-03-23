import { useMemo } from 'react';

import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

import { useProductContext } from './ProductCard';

export interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className = '', style }: Props) => {
  const { product } = useProductContext();

  const imgToShow = useMemo(() => {
    if (img) return img;
    if (product.img) return product.img;

    return noImage;
  }, [img, product.img]);

  return (
    <img
      alt="Product Image"
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      style={style}
    />
  );
};
