import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
import './Nav.css';

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className='nav-container'>
        <NavLink className="logo" to="/">FinMate</NavLink>
        <div className='nav-link-1'>
            <NavLink className="nav-item" to="/home">Home</NavLink>
            <NavLink className="nav-item" to="/about">About</NavLink>
        </div>
        {user ? (
          <div className='nav-links'>
            <NavLink className="nav-item" to="/showproducts">Products</NavLink>
            <NavLink className="nav-item" to="/addProduct">Add Products</NavLink>
            <NavLink className='nav-logout' to="/" onClick={handleLogout}>Logout</NavLink>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Nav;
