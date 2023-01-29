import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button style={{ fontWeight: '400', fontSize: '12px' }}>
        Go to Checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
