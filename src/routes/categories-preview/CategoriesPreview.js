import { useContext } from 'react';

import { CategoriesContext } from '../../contexts/CategoriesContext';
import CategoryPreview from '../../component/category-preview/CategoryPreview';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
