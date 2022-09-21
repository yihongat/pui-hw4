import BunBunLogo from "../../assets/logo-01.svg";

const Navbar = ({ cartItems, newItem }) => {
  return (
    <header className="siteHeader">
      <img
        src={BunBunLogo}
        className="logo"
        alt="Logo of the Bun Bun Bake Shop, an outline of a "
      />
      <div className="headerItems">
        <nav className="navbar">
          <div>
            <a href="/" className="selectedPage">
              Products
            </a>
          </div>
          <div id="cartItem">
            <a href="/">Cart</a>
            <div id="cartList">
              <div>{`${cartItems.length} items`}</div>
              <div>{`Total: $${cartItems.reduce((acc, obj) => {
                return parseFloat(parseFloat(acc) + parseFloat(obj.price)).toFixed(2);
              }, 0)}`}</div>
            </div>
            {newItem && <div id="cartPopup">
              <div>Added to cart:</div>
              <br />
              <div>
                <b>{newItem.type}</b>
              </div>
              <div>{`${newItem.glazing} glazing`}</div>
              <div>{`Pack of ${newItem.packSize}`}</div>
              <div>{`Price: $${newItem.price}`}</div>
            </div>}
          </div>
        </nav>
        <hr />
        <div className="tagline">Our hand-made cinnamon rolls</div>
      </div>
    </header>
  );
};

export default Navbar;
