import { useProductContext } from '@/02-component-patterns/components/ProductCard';
import styles from '@/02-component-patterns/styles/styles.module.css';

export const ProductTitle = ({ title = '' }) => {
  const { product } = useProductContext();

  return <span className={styles.productDescription}>{title ? title : product.title}</span>;
};
