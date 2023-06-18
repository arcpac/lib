// import myBanner from '../assets/images/banner.jpg'

import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
      <header>
        <h1>Helios Library</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div>
        {/* <img src={myBanner} alt="Helios Library in React" /> */}
        Logo Here
      </div>
    </>
  );
}

export default Header;
