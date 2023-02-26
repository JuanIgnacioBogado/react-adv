export interface ProductCardProps {
  product: Product;
  children?: React.ReactNode;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContext {
  product: Product;
  increaseBy: (value: number) => void;
  counter: number;
}

export interface ProductCardHOCProps {
  (props: ProductCardProps): JSX.Element;
  Title: ({ title = '' }) => JSX.Element;
  Image: ({ img = '' }) => JSX.Element;
  Buttons: () => JSX.Element;
}
