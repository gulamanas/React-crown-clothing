import SignIn from '../../component/sign-in-form/SignIn';
import SignUp from '../../component/sign-up-form/SignUp';

import './authentication.styles.scss'

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
