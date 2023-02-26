import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '@/02-component-patterns/components';

const product = {
  id: crypto.randomUUID(),
  title: 'default title'
  // img: '/coffee-mug.png'
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
      <ProductCard product={product}>
        <ProductCard.Image img="/coffee-mug.png" />

        <ProductCard.Title title={product.title} />

        <ProductCard.Buttons />
      </ProductCard>

      <ProductCard product={product}>
        <ProductImage />

        <ProductTitle />

        <ProductButtons />
      </ProductCard>
    </div>
  </div>
);
