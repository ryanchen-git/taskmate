import Logo from '../assets/logo.svg';

export const Header = () => {
  return (
    <header>
      <div className='logo'>
        <img src={Logo} alt='Taskmate Logo' />
        <span>Taskmate</span>
      </div>
      <div className='themeSelector'></div>
    </header>
  );
};
