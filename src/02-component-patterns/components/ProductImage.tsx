import { useMemo } from 'react';

import { useProductContext } from '@/02-component-patterns/components/ProductCard';
import noImage from '@/02-component-patterns/assets/no-image.jpg';
import styles from '@/02-component-patterns/styles/styles.module.css';

export const ProductImage = ({ img = '' }) => {
  const { product } = useProductContext();

  const imgToShow = useMemo(() => {
    if (img) return img;
    if (product.img) return product.img;

    return noImage;
  }, [img, product.img]);

  return <img alt="Product Image" className={styles.productImg} src={imgToShow} />;
};
