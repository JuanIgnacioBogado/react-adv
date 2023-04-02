import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { useShoppingPage } from '../hooks/useShoppingPage';
import { products } from '../data/products';

import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingPage();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {products.map(product => (
          <ProductCard
            key={product.id}
            className="bg-dark text-white"
            product={product}
            value={shoppingCart[product.id]?.count}
            onChange={onProductCountChange}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      {!!Object.values(shoppingCart).length && (
        <div className="shopping-cart">
          {Object.values(shoppingCart).map(product => (
            <ProductCard
              key={product.id}
              className="bg-dark text-white"
              product={product}
              style={{ width: '100px' }}
              value={product.count}
              onChange={onProductCountChange}
            >
              <ProductImage
                className="custom-image"
                style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }}
              />
              <ProductButtons
                className="custom-buttons"
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              />
            </ProductCard>
          ))}
        </div>
      )}
    </div>
  );
};
