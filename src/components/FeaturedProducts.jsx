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
    { id: 1, name: 'Nike', logo: 'https://i.redd.it/ask-add-name-to-nike-logo-v0-r0guj97blnyc1.jpg?width=866&format=pjpg&auto=webp&s=4a7538b78dae27c86b2d265c80fc3999817307fe' },
    { id: 2, name: 'Adidas', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ96JV-lrmp-BmIoG5SVmxxLrMYPkZ_bGvnBQ&s' },
    { id: 3, name: 'Zara', logo: 'https://logomakerr.ai/blog/wp-content/uploads/2022/08/2019-to-Present-Zara-logo-design.jpg' },
    { id: 4, name: 'H&M', logo: 'https://1000logos.net/wp-content/uploads/2017/02/HM-Logo-500x313.png' },
    { id: 5, name: "Levi's", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ZwT3ue_C711rtaDPIOV0UOcZm8jUdftWWw&s' },
    { id: 6, name: 'Puma', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAHH3gxsSY-pUUTxush0X-skJmlwFTQU6Tw&s' },
    { id: 7, name: 'Raymond', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXDvlwKy4AYi0LfgHd69JJ3QAOIBwV2Uuwew&s' },
    { id: 8, name: 'Tanishq', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72bMqK0ML8r8ez1X6DfGyNrOhgwubvQCfGA&s' },
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

  // Products Data
  const productsData = [
    {
      id: 1,
      title: "Women Cotton Straight Kurti",
      price: 273,
      oldPrice: 499,
      rating: 4.1,
      reviews: 128,
      category: "fashion",
      fabric: "Pure Cotton",
      color: "White",
      fit: "Straight",
      length: "Knee Length",
      image: "https://www.libas.in/cdn/shop/files/58246_2_ed2c4af3-e829-48a2-adcf-1e1da4a84f77.jpg?v=1757324305&width=1080",
      brand: "Biba"
    },
    {
      id: 2,
      title: "Floral Printed Pink Kurti",
      price: 399,
      oldPrice: 699,
      rating: 4.4,
      reviews: 256,
      category: "fashion",
      fabric: "Rayon",
      color: "Pink",
      fit: "Regular Fit",
      length: "Calf Length",
      image: "https://images.jdmagicbox.com/quickquotes/images_main/chiffon-v-neck-floral-print-full-sleeve-kurti-for-women-baby-pink-2223540911-d9wpo1q6.jpg",
      brand: "Biba"
    },
    {
      id: 3,
      title: "Blue Anarkali Kurti",
      price: 599,
      oldPrice: 899,
      rating: 4.6,
      reviews: 89,
      category: "fashion",
      fabric: "Georgette",
      color: "Blue",
      fit: "Flared",
      length: "Full Length",
      image: "https://www.royalexport.in/product-img/buy-blue-anarkali-gown-pure-ge-1734762850.jpg",
      brand: "Biba"
    },
    {
      id: 4,
      title: "Yellow Casual Kurti",
      price: 349,
      oldPrice: 599,
      rating: 4.2,
      reviews: 203,
      category: "fashion",
      fabric: "Cotton Blend",
      color: "Yellow",
      fit: "Straight",
      length: "Full Length",
      image: "https://cdn.shopify.com/s/files/1/0572/5555/9212/files/BHKS513_1_fd68d56a-c9e5-49e0-9785-178ddfa9c36d.jpg?v=1753699550",
      brand: "Biba"
    },
    {
      id: 5,
      title: "Grocery Basket",
      price: 449,
      oldPrice: 799,
      rating: 4.3,
      reviews: 167,
      category: "grocery",
      brand: "Best Product",
      image: "https://png.pngtree.com/png-clipart/20250103/original/pngtree-full-grocery-basket-with-assorted-items-png-image_19400735.png"
    },
    {
      id: 6,
      title: "Airburd Headphones",
      price: 699,
      oldPrice: 1099,
      rating: 4.7,
      reviews: 312,
      category: "electronics",
      brand: "Boat",
      image: "https://dukandwar.com/wp-content/uploads/2020/12/61rjT1TxSpL._SL1500_.jpg"
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
      {/* ===== HERO BANNER SECTION ===== */}
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

      {/* ===== SHOP BY BRANDS SECTION ===== */}
      <div className="shop-by-brands-section">
        <div className="section-header">
          <h2 className="section-title">Shop by Brands</h2>
        </div>

        <div className="brands-row-wrapper">
        
          <div className="brands-row" ref={brandRowRef}>
            {brands.map((brand) => (
              <div className="brand-item" key={brand.id} onClick={() => navigate(`/brand/${brand.name.toLowerCase()}`)}>
                <img src={brand.logo} alt={brand.name} />
                <p>{brand.name}</p>
              </div>
            ))}
          </div>
     
        </div>
      </div>

      {/* ===== POPULAR CATEGORIES SECTION ===== */}
      <div className="category-section">
        <div className="section-header">
          <h2 className="section-title">Popular Categories</h2>
     
        </div>

        <div className="category-slider-wrapper">
          <button className="scroll-arrow left" onClick={() => scrollLeft(categoryRowRef)}>‹</button>
          <div className="category-slider" ref={categoryRowRef}>
            {categories.map((category) => (
              <div className="category-card" key={category.id} onClick={() => navigate(`/category/${category.name.toLowerCase()}`)}>
                <img src={category.image} alt={category.name} />
                <div className="category-overlay">
                  <h3>{category.name}</h3>
                  <p>{category.items}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="scroll-arrow right" onClick={() => scrollRight(categoryRowRef)}>›</button>
        </div>
      </div>

      {/* ===== FEATURED PRODUCTS SECTION ===== */}
      <div className="featured-section">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <button className="view-all-btn" onClick={() => navigate('/products')}>View All</button>
        </div>

        <div className="products-slider-wrapper">
          <button className="scroll-arrow left" onClick={() => scrollLeft(productRowRef)}>‹</button>
          <div className="products-slider" ref={productRowRef}>
            {productsData.map((product) => (
              <div 
                className="product-card" 
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                  {product.oldPrice && (
                    <span className="product-discount">
                      -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                    </span>
                  )}
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
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <div className="product-rating">
                    <div className="stars">{renderStars(product.rating)}</div>
                    <span className="reviews">({product.reviews})</span>
                  </div>
                  <div className="product-price">
                    <span className="current-price">₹{product.price}</span>
                    {product.oldPrice && (
                      <span className="old-price">₹{product.oldPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="scroll-arrow right" onClick={() => scrollRight(productRowRef)}>›</button>
        </div>
      </div>

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

     <div className="trending-section">

  {/* HEADER */}

  {/* GRID */}
  <div className="trending-grid">
    {/* your existing trending items */}
  </div>

</div>
    </div>
  );
}

export default FeaturedProducts;