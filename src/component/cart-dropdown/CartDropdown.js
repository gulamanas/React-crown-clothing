import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button
        onClick={goToCheckoutHandler}
        style={{ fontWeight: '400', fontSize: '12px' }}
      >
        Go to Checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
