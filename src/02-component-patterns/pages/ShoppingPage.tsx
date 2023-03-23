import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';

const product = {
  id: crypto.randomUUID(),
  title: 'default title',
  img: '/coffee-mug.png'
};

export const ShoppingPage = () => (
  <div>
    <h1>Shopping Store</h1>
    <hr />

    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      <ProductCard className="bg-dark text-white" product={product}>
        <ProductCard.Image className="custom-image" img="/coffee-mug.png" />
        <ProductCard.Title className="text-bold" title={product.title} />
        <ProductCard.Buttons className="custom-buttons" />
      </ProductCard>

      <ProductCard className="bg-dark text-white" product={product}>
        <ProductImage
          className="custom-image"
          style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }}
        />
        <ProductTitle className="text-bold" />
        <ProductButtons className="custom-buttons" />
      </ProductCard>

      <ProductCard product={product} style={{ backgroundColor: '#01D8FF' }}>
        <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }} />
        <ProductTitle style={{ fontWeight: 'bold' }} />
        <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
      </ProductCard>
    </div>
  </div>
);
