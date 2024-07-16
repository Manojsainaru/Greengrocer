import React, { useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

export const Navbar = ({ setShowLogin }) => {
  const { food_list, cartItems, getTotalAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link to="/" className="menu-item">Home</Link>
        <Link to="/menu" className="menu-item">Menu</Link>
        <Link to="/app-download" className="menu-item">Mobile App</Link>
        <Link to="/contact-us" className="menu-item">Contact Us</Link>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotalAmount() === 0 ? '' : 'dot'}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)} className="navbar-button">
            Sign In
          </button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}><img src={assets.bag_icon} alt="Orders" />Orders</li>
              <hr />
              <li onClick={logOut}><img src={assets.logout_icon} alt="Logout" /><p>Logout</p></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
