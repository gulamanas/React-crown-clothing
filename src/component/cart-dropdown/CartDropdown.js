import Button from '../button/Button'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items"></div>
        <Button style={{fontWeight: '400', fontSize: '12px'}}>Go to Checkout</Button>
    </div>
  )
}

export default CartDropdown