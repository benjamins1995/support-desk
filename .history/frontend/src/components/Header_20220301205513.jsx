import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'> Support Desk</Link>
      </div>
      <ul>
        <Link to='/login'>
          <FaSignInAlt /> Login
        </Link>
      </ul>
    </header>
  );
}

export default Header;
