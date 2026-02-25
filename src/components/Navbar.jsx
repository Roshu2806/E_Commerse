import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  FaShoppingCart, 
  FaUser, 
  FaBars, 
  FaTimes,
  FaSearch
} from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi';
import { MdLocalOffer } from 'react-icons/md';
import { GiSpectacles } from 'react-icons/gi';
import './Style/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [cartCount, setCartCount] = useState(3);
    const [logoHover, setLogoHover] = useState(false);
    const [searchHover, setSearchHover] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close mobile menu when link is clicked
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Left Side - Logo */}
                <div className="nav-left">
                    <Link 
                        to="/" 
                        className="navbar-logo" 
                        onClick={closeMenu}
                        onMouseEnter={() => setLogoHover(true)}
                        onMouseLeave={() => setLogoHover(false)}
                    >
                        <div className="logo-wrapper">
                            <div className="logo-icon-container">
                                <div className="logo-glow"></div>
                                <BiShoppingBag className={`logo-icon ${logoHover ? 'spin' : ''}`} />
                                <GiSpectacles className="logo-icon-overlay" />
                            </div>
                            <div className="logo-text-container">
                                <span className="logo-brand">SpecsMart</span>
                                <span className="logo-tagline">Premium Eyewear</span>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Center Space - Navigation Links */}
                <div className="nav-center">
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                onClick={closeMenu}
                            >
                                <span className="nav-link-text">Home</span>
                                <span className="nav-link-hover"></span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/shop" 
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                onClick={closeMenu}
                            >
                                <span className="nav-link-text">Products</span>
                                <span className="nav-link-hover"></span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/about" 
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                onClick={closeMenu}
                            >
                                <span className="nav-link-text">About</span>
                                <span className="nav-link-hover"></span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/offers" 
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                onClick={closeMenu}
                            >
                                <MdLocalOffer className="nav-icon" />
                                <span className="nav-link-text">Offers</span>
                                <span className="offer-badge">New</span>
                                <span className="nav-link-hover"></span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Right Side - Search and Icons */}
                <div className="nav-right">
                    {/* Interactive Search */}
                    <div 
                        className={`search-container ${searchHover ? 'expanded' : ''}`}
                        onMouseEnter={() => setSearchHover(true)}
                        onMouseLeave={() => setSearchHover(false)}
                    >
                        <FaSearch className="search-icon" />
                        <input 
                            type="text" 
                            placeholder="Search for eyewear..." 
                            className="search-input"
                        />
                        <div className="search-glow"></div>
                    </div>

                    {/* Desktop Right Icons */}
                    <div className="nav-icons desktop-only">
                    
                        <NavLink to="/login" className="icon-link" title="Login / Sign Up">
                            <FaUser className="icon" />
                            <span className="icon-tooltip">Account</span>
                        </NavLink>
                        <NavLink to="/cart" className="icon-link cart-icon" title="Shopping Cart">
                            <FaShoppingCart className="icon" />
                            {cartCount > 0 && (
                                <>
                                    <span className="cart-badge">{cartCount}</span>
                                    <span className="cart-pulse"></span>
                                </>
                            )}
                            <span className="icon-tooltip">Cart</span>
                        </NavLink>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="menu-toggle" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                <ul className="mobile-nav-menu">
                    <li className="mobile-nav-item">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}
                            onClick={closeMenu}
                        >
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li className="mobile-nav-item">
                        <NavLink 
                            to="/shop" 
                            className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}
                            onClick={closeMenu}
                        >
                            <span>Shop</span>
                        </NavLink>
                    </li>
                    <li className="mobile-nav-item">
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}
                            onClick={closeMenu}
                        >
                            <span>About</span>
                        </NavLink>
                    </li>
                    <li className="mobile-nav-item">
                        <NavLink 
                            to="/offers" 
                            className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}
                            onClick={closeMenu}
                        >
                            <span>Offers</span>
                            <span className="offer-badge">New</span>
                        </NavLink>
                    </li>
                    <li className="mobile-nav-item">
                        <NavLink 
                            to="/login" 
                            className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}
                            onClick={closeMenu}
                        >
                            <FaUser className="mobile-icon" />
                            <span>Login</span>
                        </NavLink>
                    </li>
                    <li className="mobile-nav-item">
                        <NavLink 
                            to="/cart" 
                            className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}
                            onClick={closeMenu}
                        >
                            <FaShoppingCart className="mobile-icon" />
                            <span>Cart</span>
                            {cartCount > 0 && <span className="cart-badge-mobile">{cartCount}</span>}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;