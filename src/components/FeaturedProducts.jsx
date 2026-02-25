// components/FeaturedProducts.jsx
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiShoppingBag, 
  FiTrendingUp,
  FiHeart,
  FiEye,
  FiStar
} from 'react-icons/fi';
import './Style/FeaturedProducts.css';

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  
  // Refs for horizontal scroll
  const brandRowRef = useRef(null);
  const categoryRowRef = useRef(null);
  const productRowRef = useRef(null);

  // Scroll functions
  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Brand Logos Data
  const brands = [
  { id: 1, name: 'Nike', logo: 'https://1000logos.net/wp-content/uploads/2017/02/Nike-Logo-500x281.png' },
  { id: 2, name: 'Adidas', logo: 'https://1000logos.net/wp-content/uploads/2016/10/Adidas-logo-500x325.png' },
  { id: 3, name: 'Zara', logo: 'https://1000logos.net/wp-content/uploads/2017/02/Zara-Logo-500x281.png' },
  { id: 4, name: 'H&M', logo: 'https://1000logos.net/wp-content/uploads/2017/02/HM-Logo-500x313.png' },
  { id: 5, name: "Levi's", logo: 'https://1000logos.net/wp-content/uploads/2017/05/Levis-Logo-500x313.png' },
  { id: 6, name: 'Puma', logo: 'https://1000logos.net/wp-content/uploads/2017/05/Puma-logo-500x313.png' },
  { id: 7, name: 'Raymond', logo: 'https://www.raymond.in/cdn/shop/files/logo_150x.png' },
  { id: 8, name: 'Tanishq', logo: 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw9b4c4b7f/images/logo.svg' },

  { id: 9, name: 'Gucci', logo: 'https://1000logos.net/wp-content/uploads/2017/05/Gucci-logo-500x281.png' },
  { id: 10, name: 'Louis Vuitton', logo: 'https://1000logos.net/wp-content/uploads/2017/05/Louis-Vuitton-logo-500x281.png' },
  { id: 11, name: 'Under Armour', logo: 'https://1000logos.net/wp-content/uploads/2017/05/Under-Armour-logo-500x281.png' },
  { id: 12, name: 'Reebok', logo: 'https://1000logos.net/wp-content/uploads/2017/05/Reebok-logo-500x281.png' },
  { id: 13, name: 'Fila', logo: 'https://1000logos.net/wp-content/uploads/2017/05/Fila-logo-500x281.png' },
  { id: 14, name: 'Tommy Hilfiger', logo: 'https://1000logos.net/wp-content/uploads/2017/05/Tommy-Hilfiger-logo-500x281.png' },
  { id: 15, name: 'Calvin Klein', logo: 'https://1000logos.net/wp-content/uploads/2017/05/Calvin-Klein-logo-500x281.png' },
  { id: 16, name: 'Forever 21', logo: 'https://1000logos.net/wp-content/uploads/2017/05/Forever-21-logo-500x281.png' },
  { id: 17, name: 'Mango', logo: 'https://1000logos.net/wp-content/uploads/2017/05/Mango-logo-500x281.png' },
  { id: 18, name: 'Uniqlo', logo: 'https://1000logos.net/wp-content/uploads/2017/05/Uniqlo-logo-500x281.png' }
];
  // Categories Data
  const categories = [
    { id: 1, name: "Fashion", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", items: "15k+ items" },
    { id: 2, name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", items: "8k+ items" },
    { id: 3, name: "Jewelry", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", items: "5k+ items" },
    { id: 4, name: "Footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", items: "10k+ items" },
    { id: 5, name: "Beauty", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", items: "7k+ items" },
    { id: 6, name: "Home", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", items: "6k+ items" }
  ];

  // Featured Products Data
  const featuredProducts = [
    {
      id: 1,
      name: "Designer Kurta Set",
      price: 1899,
      originalPrice: 2999,
      discount: 37,
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      hoverImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4.5,
      reviews: 128,
      brand: "Biba",
      category: "Fashion"
    },
    {
      id: 2,
      name: "Sports Running Shoes",
      price: 2499,
      originalPrice: 3999,
      discount: 38,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      hoverImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      reviews: 256,
      brand: "Nike",
      category: "Footwear"
    },
    {
      id: 3,
      name: "Gold Plated Necklace",
      price: 12999,
      originalPrice: 18999,
      discount: 32,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      reviews: 89,
      brand: "Tanishq",
      category: "Jewelry"
    },
    {
      id: 4,
      name: "Wireless Earbuds",
      price: 2999,
      originalPrice: 4999,
      discount: 40,
      image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      hoverImage: "https://images.unsplash.com/photo-1590658268037-6bf5e60e6a0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4.6,
      reviews: 312,
      brand: "Boat",
      category: "Electronics"
    },
    {
      id: 5,
      name: "Women's Handbag",
      price: 1899,
      originalPrice: 2999,
      discount: 37,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      hoverImage: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4.4,
      reviews: 167,
      brand: "Hidesign",
      category: "Accessories"
    },
    {
      id: 6,
      name: "Men's Formal Shirt",
      price: 1299,
      originalPrice: 1999,
      discount: 35,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      hoverImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4.3,
      reviews: 203,
      brand: "Louis Philippe",
      category: "Fashion"
    }
  ];

  // Toggle wishlist
  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  // Render stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FiStar 
        key={i} 
        className={`star ${i < Math.floor(rating) ? 'filled' : ''}`} 
      />
    ));
  };

  return (
    <div className="featured-page" style={{ backgroundColor: '#e6e9f4' }}>
      {/* ===== HERO BANNER SECTION - STATIC NO ANIMATION ===== */}
      <section className="hero-banner-section">
        <div className="hero-banner-image" style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
        }}>
          <div className="hero-banner-overlay"></div>
          <div className="hero-banner-content">
            <div className="hero-text">
              <h1 className="hero-title">Up to <span className="highlight">70% Off</span></h1>
              <p className="hero-subtitle">Summer Sale 2026 – Fashion, Electronics & More</p>
              <button className="hero-cta" onClick={() => navigate('/products')}>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SHOP BY BRAND SECTION ===== */}
      <section className="brands-section">
        <div className="container">
          <div className="section-header">
            <h2>Shop by <span className="gradient-text">Brands</span></h2>
            <Link to="/brands" className="view-all">View All</Link>
          </div>
          <div className="horizontal-scroll-wrapper">
            <button className="scroll-arrow left" onClick={() => scrollLeft(brandRowRef)}>
              ‹
            </button>
            <div className="brands-row" ref={brandRowRef}>
              {brands.map(brand => (
                <div key={brand.id} className="brand-item" onClick={() => navigate(`/brand/${brand.name.toLowerCase()}`)}>
                  <div className="brand-logo">
                    <img src={brand.logo} alt={brand.name} />
                  </div>
                  <span className="brand-name">{brand.name}</span>
                </div>
              ))}
            </div>
            <button className="scroll-arrow right" onClick={() => scrollRight(brandRowRef)}>
              ›
            </button>
          </div>
        </div>
      </section>

      {/* ===== POPULAR CATEGORIES SECTION ===== */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Popular <span className="gradient-text">Categories</span></h2>
            <Link to="/categories" className="view-all">View All</Link>
          </div>
          <div className="horizontal-scroll-wrapper">
            <button className="scroll-arrow left" onClick={() => scrollLeft(categoryRowRef)}>
              ‹
            </button>
            <div className="categories-row" ref={categoryRowRef}>
              {categories.map(category => (
                <div 
                  key={category.id} 
                  className="category-card"
                  onClick={() => navigate(`/category/${category.name.toLowerCase()}`)}
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="category-overlay"></div>
                  <div className="category-info">
                    <h3>{category.name}</h3>
                    <span>{category.items}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="scroll-arrow right" onClick={() => scrollRight(categoryRowRef)}>
              ›
            </button>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS SECTION ===== */}
      <section className="featured-products-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured <span className="gradient-text">Products</span></h2>
            <Link to="/products" className="view-all">View All</Link>
          </div>
          <div className="horizontal-scroll-wrapper">
            <button className="scroll-arrow left" onClick={() => scrollLeft(productRowRef)}>
              ‹
            </button>
            <div className="products-row" ref={productRowRef}>
              {featuredProducts.map(product => (
                <div 
                  key={product.id} 
                  className="product-card"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="product-image">
                    <img 
                      src={hoveredProduct === product.id && product.hoverImage ? product.hoverImage : product.image} 
                      alt={product.name} 
                    />
                    <span className="product-discount">-{product.discount}%</span>
                    <button 
                      className={`wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                    >
                      <FiHeart />
                    </button>
                  </div>
                  <div className="product-details">
                    <span className="product-brand">{product.brand}</span>
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-rating">
                      <div className="stars">{renderStars(product.rating)}</div>
                      <span className="reviews">({product.reviews})</span>
                    </div>
                    <div className="product-price">
                      <span className="current-price">₹{product.price}</span>
                      <span className="original-price">₹{product.originalPrice}</span>
                    </div>
                    <button className="add-to-cart" onClick={() => navigate('/cart')}>
                      <FiShoppingBag /> Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="scroll-arrow right" onClick={() => scrollRight(productRowRef)}>
              ›
            </button>
          </div>
        </div>
      </section>

      {/* ===== DISCOUNT OFFER SECTION ===== */}
      <section className="deals-section">
        <div className="container">
          <div className="deals-grid">
            <div className="deal-card large" style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'
            }}>
              <div className="deal-overlay"></div>
              <div className="deal-content">
                <span className="deal-tag">FLASH SALE</span>
                <h3>50% Off</h3>
                <p>On Electronics</p>
                <button className="deal-cta" onClick={() => navigate('/sale/electronics')}>
                  Shop Now <FiArrowRight />
                </button>
              </div>
            </div>
            <div className="deal-card medium" style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'
            }}>
              <div className="deal-overlay"></div>
              <div className="deal-content">
                <span className="deal-tag">WEEKEND OFFER</span>
                <h3>30% Off</h3>
                <p>On Fashion</p>
                <button className="deal-cta" onClick={() => navigate('/sale/fashion')}>
                  Shop Now <FiArrowRight />
                </button>
              </div>
            </div>
            <div className="deal-card small" style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'
            }}>
              <div className="deal-overlay"></div>
              <div className="deal-content">
                <span className="deal-tag">GIFT CARDS</span>
                <h3>20% Off</h3>
                <p>Limited Time</p>
                <button className="deal-cta" onClick={() => navigate('/sale/gifts')}>
                  Shop Now <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRENDING NOW SECTION ===== */}
      <section className="trending-section">
        <div className="container">
          <div className="section-header">
            <h2>Trending <span className="gradient-text">Now</span></h2>
            <Link to="/trending" className="view-all">View All</Link>
          </div>
          <div className="trending-grid">
            <div className="trending-item">
              <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Oversized T-shirts" />
              <div className="trending-info">
                <h4>Oversized T-shirts</h4>
                <span className="trend-badge">+245%</span>
              </div>
            </div>
            <div className="trending-item">
              <img src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Cargo Pants" />
              <div className="trending-info">
                <h4>Cargo Pants</h4>
                <span className="trend-badge">+189%</span>
              </div>
            </div>
            <div className="trending-item">
              <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Statement Necklaces" />
              <div className="trending-info">
                <h4>Statement Necklaces</h4>
                <span className="trend-badge">+156%</span>
              </div>
            </div>
            <div className="trending-item">
              <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="White Sneakers" />
              <div className="trending-info">
                <h4>White Sneakers</h4>
                <span className="trend-badge">+134%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PREMIUM BRAND SHOWCASE ===== */}
      <section className="brand-showcase-section">
        <div className="container">
          <h2 className="brand-showcase-title">Premium <span className="gradient-text">Brands</span></h2>
          <div className="brand-showcase-grid">
            {brands.slice(0, 6).map(brand => (
              <div key={brand.id} className="brand-showcase-card">
                <img src={brand.logo} alt={brand.name} />
                <span>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts;