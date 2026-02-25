// Cart.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { FiClock, FiHeart, FiUser, FiSearch, FiShoppingCart } from "react-icons/fi";
import { MdLocalOffer } from "react-icons/md";
import "./Cart.css";

const initialItems = [
  {
    id: 1,
    title: "BIRDE Stylish Comfortable Walking Wear Sports Shoes For Men's",
    price: 456,
    oldPrice: 1424,
    discount: 67,
    seller: "Birde",
    qty: 1,
    size: "IND-8",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    mall: true,
  },
  {
    id: 2,
    title: "Premium Cotton Saree with Blouse Piece",
    price: 5499,
    oldPrice: 7999,
    discount: 30,
    seller: "Tanti",
    qty: 1,
    size: "Free Size",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    mall: true,
  },
  {
    id: 3,
    title: "Men's Formal Blazer",
    price: 3999,
    oldPrice: 5999,
    discount: 25,
    seller: "Arrow",
    qty: 1,
    size: "L",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    mall: false,
  }
];

export default function Cart() {
  const navigate = useNavigate();
  const [items, setItems] = useState(initialItems);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [activeStep, setActiveStep] = useState(1); // 1 = Cart
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(items.length);

  // Handle scroll effect for navbar
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

  const totalPrice = items.reduce((a, i) => a + i.oldPrice * i.qty, 0);
  const discount = items.reduce((a, i) => a + (i.oldPrice - i.price) * i.qty, 0);
  const total = totalPrice - discount;

  const openModal = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const confirmRemove = () => {
    setItems(items.filter(i => i.id !== selectedId));
    setCartCount(prev => prev - 1);
    setShowModal(false);
  };

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setItems(items.map(item => 
      item.id === id ? { ...item, qty: newQty } : item
    ));
  };

  return (
    <div className="page">
      {/* Attractive Navbar */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <div className="logo-wrapper">
              <BiShoppingBag className="logo-icon" />
              <span className="logo-brand">SpecsMart</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="nav-search">
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="search-input"
            />
            <FiSearch className="search-icon" />
          </div>

          {/* Nav Icons */}
          <div className="nav-icons">
            <Link to="/offers" className="nav-icon-link">
              <MdLocalOffer className="nav-icon" />
              <span className="nav-icon-label">Offers</span>
            </Link>
            <Link to="/wishlist" className="nav-icon-link">
              <FiHeart className="nav-icon" />
              <span className="nav-icon-label">Wishlist</span>
            </Link>
            <Link to="/login" className="nav-icon-link">
              <FiUser className="nav-icon" />
              <span className="nav-icon-label">Account</span>
            </Link>
            <Link to="/cart" className="nav-icon-link cart-icon">
              <FiShoppingCart className="nav-icon" />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              <span className="nav-icon-label">Cart</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Stepper with Logo */}
      <div className="stepper-container">
        <div className="stepper-with-logo">
          <div className="stepper">
            <div className="step-item">
              <div className={`step-circle ${activeStep >= 1 ? 'active' : ''}`}>1</div>
              <span className={`step-label ${activeStep >= 1 ? 'active' : ''}`}>Cart</span>
              <div className={`step-line ${activeStep > 1 ? 'completed' : ''}`}></div>
            </div>
            
            <div className="step-item">
              <div className={`step-circle ${activeStep >= 2 ? 'active' : ''}`}>2</div>
              <span className={`step-label ${activeStep >= 2 ? 'active' : ''}`}>Address</span>
              <div className={`step-line ${activeStep > 2 ? 'completed' : ''}`}></div>
            </div>
            
            <div className="step-item">
              <div className={`step-circle ${activeStep >= 3 ? 'active' : ''}`}>3</div>
              <span className={`step-label ${activeStep >= 3 ? 'active' : ''}`}>Payment</span>
              <div className={`step-line ${activeStep > 3 ? 'completed' : ''}`}></div>
            </div>
            
            <div className="step-item">
              <div className={`step-circle ${activeStep >= 4 ? 'active' : ''}`}>4</div>
              <span className={`step-label ${activeStep >= 4 ? 'active' : ''}`}>Summary</span>
            </div>
          </div>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="emptyCart">
          <img src="/shop img.png" alt="empty cart" className="emptyImg" />
          <h2>Your cart is empty</h2>
          <p>Just relax, let us help you find some first-class products</p>
          <button onClick={() => navigate("/products")} className="continue-btn">
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="product-details-header">Product Details</div>
          
          <div className="container">
            {/* LEFT SECTION - PRODUCTS (SCROLLABLE) */}
            <div className="left scrollable">
              {items.map(item => (
                <div className="cart-product-card" key={item.id}>
                  <div className="cart-product-left">
                    <img src={item.img} alt={item.title} className="cart-product-image" />
                    {item.mall && (
                      <div className="cart-mall-badge">
                        <img 
                          src="https://images.meesho.com/images/marketing/mall_badge.webp" 
                          alt="Mall"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="cart-product-right">
                    <div className="cart-product-header">
                      <p className="cart-product-title">{item.title}</p>
                      <button className="cart-edit-btn">EDIT</button>
                    </div>

                    <div className="cart-price-row">
                      <span className="cart-current-price">₹{item.price}</span>
                      <span className="cart-old-price">₹{item.oldPrice}</span>
                      <span className="cart-discount">{item.discount}% Off</span>
                    </div>

                    <div className="cart-product-meta">
                      <span className="cart-size">Size: {item.size}</span>
                      <div className="cart-qty-selector">
                        <span>Qty: </span>
                        <select 
                          value={item.qty} 
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          className="qty-select"
                        >
                          {[1,2,3,4,5].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button className="cart-remove-btn" onClick={() => openModal(item.id)}>
                      ✕ REMOVE
                    </button>

                    <div className="cart-seller-row">
                      <span className="cart-seller">
                        Sold by: <strong>{item.seller}</strong>
                      </span>
                      <span className="cart-delivery">Free Delivery</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SECTION - PRICE DETAILS */}
            <div className="right sticky">
              <h3>Price Details ({items.length} Items)</h3>

              <div className="price-item">
                <span className="label">Product Price</span>
                <span className="value">₹{totalPrice}</span>
              </div>

              <div className="price-item discount">
                <span className="label">Total Discounts</span>
                <span className="value">- ₹{discount}</span>
              </div>

              <div className="price-divider"></div>

              <div className="price-item total">
                <span className="label">Order Total</span>
                <span className="value">₹{total}</span>
              </div>

              <div className="discount-message">
                Yay! Your total discount is ₹{discount}
              </div>

              <div className="note-text">
                Clicking on 'Continue' will not deduct any money
              </div>

              <button className="continue-btn" onClick={() => navigate("/address")}>
                Continue
              </button>

              <div className="meesho-safe">
                <div className="safe-icon">🛡️</div>
                <div className="safe-content">
                  <strong>Your Safety, Our Priority</strong>
                  <p>We make sure that your package is safe at every point of contact.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* MODAL */}
      {showModal && (
        <div className="modalOverlay">
          <div className="modalBox">
            <button className="closeBtn" onClick={() => setShowModal(false)}>✕</button>
            <h3>{items.find(i => i.id === selectedId)?.title}</h3>
            <p>Do you want to remove this product from cart?</p>
            <div className="modalActions">
              <button className="cancel" onClick={() => setShowModal(false)}>CANCEL</button>
              <button className="removeBtn" onClick={confirmRemove}>REMOVE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}