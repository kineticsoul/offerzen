import Logo from './../assets/logo.svg';
import './header-bar.scss';

const HeaderBar = () => {
  return(
   <div className='header-bar-container'>
      <img src={Logo} alt='Logo' className='logo'/>
   </div>
  )
}

export default HeaderBar;