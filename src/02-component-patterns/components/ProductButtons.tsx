import { useProductContext } from '../components/ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className = '', style }: Props) => {
  const { increaseBy, counter, isMaxCountReached } = useProductContext();

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${isMaxCountReached ? styles.disabled : ''}`}
        disabled={isMaxCountReached}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
