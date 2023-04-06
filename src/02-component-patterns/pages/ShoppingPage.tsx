import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';

import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => (
  <div>
    <h1>Shopping Store</h1>
    <hr />
    <ProductCard
      key={product.id}
      className="bg-dark text-white"
      initialValues={{
        count: 4,
        maxCount: 10
      }}
      product={product}
    >
      {({ isMaxCountReached, counter, maxCount, increaseBy, reset }) => (
        <>
          <ProductImage
            className="custom-image"
            style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }}
          />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />

          <button onClick={reset}>reset</button>
          <button onClick={() => increaseBy(-2)}>-2</button>
          {!isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button>}
          <br />
          <span>
            {counter} | {maxCount}
          </span>
        </>
      )}
    </ProductCard>
  </div>
);
