import { useProductContext } from '@/02-component-patterns/components/ProductCard';
import styles from '@/02-component-patterns/styles/styles.module.css';

export const ProductButtons = () => {
  const { increaseBy, counter } = useProductContext();

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};
