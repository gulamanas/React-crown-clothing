import { Route, Routes } from 'react-router-dom';
import Category from '../../component/category/Category';
import CategoriesPreview from '../categories-preview/CategoriesPreview';
import './shop.styles.scss';


const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
    );
};

export default Shop;
