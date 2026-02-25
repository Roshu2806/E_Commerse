// components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiTruck, 
  FiShield,
  FiStar,
  FiClock,
  FiGift,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';
import { BsLightningCharge, BsGem } from 'react-icons/bs';
import './Style/HeroSection.css';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            id: 1,
            title: "Luxury Fashion Edit",
            subtitle: "MAHA INDIAN SALE",
            description: "Discover exquisite craftsmanship and timeless elegance. Luxury fashion curated for the modern connoisseur.",
            badge: "Limited Edition",
            discount: "70%",
            image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 2,
            title: "Designer Collection",
            subtitle: "ELEGANT & TIMELESS",
            description: "Handcrafted masterpieces from world-renowned designers. Elevate your style with our premium selection.",
            badge: "New Arrivals",
            discount: "50%",
            image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 3,
            title: "Festive Glamour",
            subtitle: "CELEBRATE IN STYLE",
            description: "Dazzling ensembles for special moments. Traditional elegance meets contemporary design.",
            badge: "Festive Special",
            discount: "60%",
            image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 4,
            title: "Ethnic Elegance",
            subtitle: "TRADITIONAL CHARM",
            description: "Celebrate heritage with our exquisite ethnic wear collection. Handcrafted with love and tradition.",
            badge: "Trending",
            discount: "55%",
            image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 5,
            title: "Modern Minimalist",
            subtitle: "CLEAN & CONTEMPORARY",
            description: "Sleek designs for the modern minimalist. Where simplicity meets sophistication.",
            badge: "New Season",
            discount: "40%",
            image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 6,
            title: "Bridal Collection",
            subtitle: "YOUR DREAM DAY",
            description: "Exquisite bridal wear for your special day. Make memories that last forever.",
            badge: "Premium",
            discount: "45%",
            image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="hero-section">
            {/* Background Images with Black Overlay */}
            <div className="hero-background">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`hero-bg-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="black-overlay"></div>
                    </div>
                ))}
            </div>

            {/* Main Content Container */}
            <div className="hero-container">
                {/* Left Content - Main Text */}
                <div className="hero-left">
                    <div className="brand-badge">
                        <span className="badge-text">SpecsMart</span>
                        <span className="badge-icon">✦</span>
                    </div>

                    <div className="hero-slide-content">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`slide-text ${index === currentSlide ? 'active' : ''}`}
                            >
                                <span className="slide-subtitle">{slide.subtitle}</span>
                                <h1 className="slide-title">{slide.title}</h1>
                                <p className="slide-description">{slide.description}</p>
                                
                                <div className="slide-badge-group">
                                    <span className="badge-label">{slide.badge}</span>
                                    <span className="badge-separator">•</span>
                                    <span className="badge-discount">{slide.discount} OFF</span>
                                </div>

                                <div className="slide-cta">
                                    <Link to="/shop" className="btn-primary">
                                        <span>Shop Now</span>
                                        <FiArrowRight className="btn-icon" />
                                    </Link>
                                    <Link to="/collections" className="btn-outline">
                                        <span>Collections</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content - Minimal Promo Cards */}
                <div className="hero-right">
                    {/* Features Card - Minimal */}
                    <div className="features-card">
                        <h3 className="features-title">Why choose us</h3>
                        <div className="features-list">
                            <div className="feature-item">
                                <BsLightningCharge className="feature-icon" />
                                <div className="feature-text">
                                    <span className="feature-label">Free Delivery</span>
                                    <span className="feature-desc">On orders ₹999+</span>
                                </div>
                            </div>
                            <div className="feature-item">
                                <BsGem className="feature-icon" />
                                <div className="feature-text">
                                    <span className="feature-label">Premium Quality</span>
                                    <span className="feature-desc">100% authentic</span>
                                </div>
                            </div>
                            <div className="feature-item">
                                <FiGift className="feature-icon" />
                                <div className="feature-text">
                                    <span className="feature-label">Gift Wrapping</span>
                                    <span className="feature-desc">Free on orders</span>
                                </div>
                            </div>
                        </div>
                        <Link to="/offers" className="features-link">
                            View offers <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Controls - Minimal */}
            <div className="hero-bottom">
                {/* Stats - Smaller and Elegant */}
                <div className="hero-stats">
                    <div className="stat-item">
                        <FiTruck className="stat-icon" />
                        <span className="stat-text">Free Shipping</span>
                    </div>
                    <div className="stat-item">
                        <FiShield className="stat-icon" />
                        <span className="stat-text">Authentic</span>
                    </div>
                    <div className="stat-item">
                        <FiClock className="stat-icon" />
                        <span className="stat-text">Easy Returns</span>
                    </div>
                </div>

                {/* Slider Controls - Small Dots at Bottom */}
                <div className="slider-controls">
                    <button 
                        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)} 
                        className="slider-arrow"
                        aria-label="Previous slide"
                    >
                        <FiChevronLeft />
                    </button>
                    <div className="slider-dots">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button 
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)} 
                        className="slider-arrow"
                        aria-label="Next slide"
                    >
                        <FiChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;