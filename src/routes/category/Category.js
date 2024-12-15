import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../component/product-card/ProductCard';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className='category-container'>
      {products &&
        products.map(product => (
          <ProductCard key={product.id} product={product.product} />
        ))}
    </div>
  );
};

export default Category;
