import Category from '../category/Category';
import './Directory.style.scss';

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map(category => {
        return <Category key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
