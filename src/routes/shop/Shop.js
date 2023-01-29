import './shop.styles.scss';
import { useContext } from 'react';
import ProductCard from '../../component/product-card/ProductCard';

import { ProductsContext } from '../../contexts/ProductsContext';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className='products-container'>
      {products.map(product => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
