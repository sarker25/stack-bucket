import BrandLogo from "../../assets/brand-logo/brand-logo.svg";
import MoreMenuIcon from "../../assets/icons/more-menu.png";


function NotFound() {
  return (
    <div>
      <nav className="nav __shadow--lg">
        <div className="container nav__container">
          <div className="nav__brand">
            <img className="nav__brand-logo" src={BrandLogo} alt="Brand Logo" />
            <h1 className="nav__brand-name">Sarker Bucket</h1>
          </div>
          <div className="nav__menu nav__menu--right">
            <div className="nav__menu-items">
              <img
                className="nav__menu-icon"
                src={MoreMenuIcon}
                alt="More Menu"
              />
            </div>
          </div>
        </div>
      </nav>
      <main className="container __margin--ylg">
        <h1> 404 Not Found</h1>
      </main>
    </div>
  );
}
export default NotFound;
