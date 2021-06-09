import './Header.css';
import HeaderSvg from './HeaderSvg';
import { Link } from 'react-router-dom';
// import MenuSvg from './MenuSvg';

const Header = () => {
  return (
    <div>
      <div className='header'>
        <HeaderSvg />
        <h1 className='header-title'>Recipe Meal Inspirations</h1>
        {/* <MenuSvg /> */}
        <div>
          <Link to='/meat'>Meat</Link>
          <Link to='/fish'>Fish</Link>
          <Link to='/vegan'>Vegan</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
