// components/Payment.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiShoppingBag, 
  FiCreditCard, 
  FiSmartphone,
  FiGift,
  FiShield,
  FiClock,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiAward,
  FiStar,
  FiTrendingUp,
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi';
import { 
  BsQrCode, 
  BsWallet2, 
  BsLightningCharge, 
  BsGem,
  BsShieldCheck,
  BsGraphUp,
  BsTags
} from 'react-icons/bs';
import { 
  SiPhonepe, 
  SiPaytm, 
  SiGooglepay, 
  SiAmazonpay 
} from 'react-icons/si';
import "./Payment.css";

const Payment = () => {
  const [method, setMethod] = useState(null);
  const [resell, setResell] = useState(false);
  const [margin, setMargin] = useState(0);
  const [error, setError] = useState("");
  const [activeStep] = useState(3); // 3 = Payment
  const [upiOption, setUpiOption] = useState("qr");
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [showOffers, setShowOffers] = useState(false); // State for offers dropdown
  const navigate = useNavigate();

  const priceCOD = 441;
  const priceOnline = 399;

  const selectedPrice =
    method === "online" ? priceOnline :
    method === "cod" ? priceCOD :
    0;

  const handleMarginChange = (e) => {
    const val = Number(e.target.value);
    setMargin(val);

    if (val < selectedPrice || val > 2597) {
      setError(`Enter amount ≥ ₹${selectedPrice} and ≤ ₹2597`);
    } else {
      setError("");
    }
  };

  const handleContinue = () => {
    if (!method) {
      alert("Please select payment method");
      return;
    }
    navigate("/summary", {
      state: {
        method,
        price: selectedPrice,
        margin,
        resell
      }
    });
  };

  // Sample data for the page
  const totalPrice = 1424;
  const discount = 935;
  const orderTotal = 489;

  return (
    <div className="payment-page">
      {/* Animated Background */}
      <div className="payment-bg">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
        <div className="grid-pattern"></div>
      </div>

      {/* HEADER */}
      <div className="payment-header">
        <div className="header-container">
          <Link to="/" className="header-logo">
            <div className="logo-wrapper">
              <div className="logo-glow"></div>
              <FiShoppingBag className="logo-icon" />
              <span className="logo-brand">SpecsMart</span>
            </div>
          </Link>

          <div className="header-stepper">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="step-wrapper">
                <div className={`step-circle ${activeStep >= step ? 'active' : ''}`}>
                  {activeStep > step ? '✓' : step}
                </div>
                <span className={`step-label ${activeStep >= step ? 'active' : ''}`}>
                  {step === 1 ? 'Cart' : step === 2 ? 'Address' : step === 3 ? 'Payment' : 'Summary'}
                </span>
                {step < 4 && (
                  <div className={`step-line ${activeStep > step ? 'completed' : ''}`}>
                    <div className="step-line-progress"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

        
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="payment-content">
        <div className="content-wrapper">
          {/* LEFT SECTION */}
          <div className="payment-left">
            <h2 className="section-title">
              <FiCreditCard className="title-icon" />
              Select Payment Method
            </h2>

            {/* Bank Offers Banner */}
            <div className="offer-card">
              <div className="offer-content">
                <span className="offer-icon">🏷️</span>
                <div className="offer-text">
                  <strong>Extra discount with bank offers</strong>
                </div>
              </div>
            </div>

            {/* View Offers Button */}
            <button 
              className="view-offers-main-btn"
              onClick={() => setShowOffers(!showOffers)}
            >
              <BsTags className="btn-icon" />
              View Offers
              {showOffers ? <FiChevronUp className="chevron-icon" /> : <FiChevronDown className="chevron-icon" />}
            </button>

            {/* UPI Section - Hidden inside View Offers */}
            {showOffers && (
              <>
                <div className="payment-section">
                  <div className="section-header">
                    <div className="header-left">
                      <BsQrCode className="section-icon" />
                      <span>UPI Payment</span>
                    </div>
                    <span className="badge-offer">Offers Available</span>
                  </div>
                  
                  {/* UPI Options Toggle */}
                  <div className="upi-toggle">
                    <button 
                      className={`toggle-option ${upiOption === 'qr' ? 'active' : ''}`}
                      onClick={() => setUpiOption('qr')}
                    >
                      <BsQrCode /> QR Code
                    </button>
                    <button 
                      className={`toggle-option ${upiOption === 'id' ? 'active' : ''}`}
                      onClick={() => setUpiOption('id')}
                    >
                      <FiSmartphone /> UPI ID
                    </button>
                  </div>

                  {/* QR Code Box */}
                  {upiOption === 'qr' && (
                    <div className="qr-card">
                      <div className="qr-content">
                        <div className="qr-placeholder">
                          <BsQrCode className="qr-icon-large" />
                        </div>
                        <div className="qr-info">
                          <strong>Scan & Pay</strong>
                          <p>Scan QR code with any UPI app</p>
                          <span className="qr-view-text">View QR Code →</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* UPI ID Input */}
                  {upiOption === 'id' && (
                    <div className="upi-id-card">
                      <input 
                        type="text" 
                        placeholder="Enter UPI ID (e.g., name@okhdfcbank)"
                        className="upi-input"
                      />
                      <button className="verify-btn">Verify</button>
                    </div>
                  )}

                  {/* Add UPI ID */}
                  <button className="add-upi-btn">
                    <span>+ Add New UPI ID</span>
                  </button>
                </div>

                {/* Wallet Section */}
                <div className="payment-section">
                  <div className="section-header">
                    <div className="header-left">
                      <BsWallet2 className="section-icon" />
                      <span>Wallet</span>
                    </div>
                    <span className="badge-offer">Offers Available</span>
                  </div>
                  
                  <div className="wallet-grid">
                    <div className="wallet-item">
                      <input type="radio" name="wallet" id="phonepe" />
                      <label htmlFor="phonepe" className="wallet-label">
                        <SiPhonepe className="wallet-icon phonepe" />
                        <span>PhonePe</span>
                        
                      </label>
                    </div>
                    <div className="wallet-item">
                      <input type="radio" name="wallet" id="paytm" />
                      <label htmlFor="paytm" className="wallet-label">
                        <SiPaytm className="wallet-icon paytm" />
                        <span>Paytm</span>
                        
                      </label>
                    </div>
                    <div className="wallet-item">
                      <input type="radio" name="wallet" id="googlepay" />
                      <label htmlFor="googlepay" className="wallet-label">
                        <SiGooglepay className="wallet-icon" style={{ color: '#4285f4' }} />
                        <span>Google Pay</span>
                        
                      </label>
                    </div>
                    <div className="wallet-item">
                      <input type="radio" name="wallet" id="amazonpay" />
                      <label htmlFor="amazonpay" className="wallet-label">
                        <SiAmazonpay className="wallet-icon amazon" />
                        <span>Amazon Pay</span>
                        
                      </label>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Payment Options - Always Visible */}
            <div className="payment-options">
              {/* COD Option */}
              <div
                className={`payment-card ${method === "cod" ? "active" : ""}`}
                onClick={() => setMethod("cod")}
              >
                <div className="card-left">
                  <div className="payment-icon">💵</div>
                  <div className="payment-details">
                    <span className="payment-label">Cash on Delivery</span>
                    <span className="payment-desc">Pay when you receive</span>
                  </div>
                </div>
                <div className="card-right">
                  <span className="payment-price">₹{priceCOD}</span>
                  <div className={`payment-radio ${method === "cod" ? "checked" : ""}`} />
                </div>
              </div>

              {/* Online Payment Option */}
              <div
                className={`payment-card ${method === "online" ? "active" : ""}`}
                onClick={() => setMethod("online")}
              >
                <div className="card-left">
                  <div className="payment-icon">💳</div>
                  <div className="payment-details">
                    <span className="payment-label">Pay Online</span>
                    <span className="payment-desc">Save ₹{priceCOD - priceOnline}</span>
                  </div>
                </div>
                <div className="card-right">
                  <span className="payment-price green">₹{priceOnline}</span>
                  <div className={`payment-radio ${method === "online" ? "checked" : ""}`} />
                </div>
              </div>
            </div>

            {/* Resell Box */}
            <div className="resell-card">
              <div className="resell-content">
                <div className="resell-icon">🔄</div>
                <div className="resell-text">
                  <strong>Reselling the order?</strong>
                  <p>Click 'Yes' to add your margin</p>
                </div>
              </div>
              <div className="resell-toggle">
                <button
                  className={`toggle-btn ${!resell ? "active" : ""}`}
                  onClick={() => setResell(false)}
                >
                  No
                </button>
                <button
                  className={`toggle-btn ${resell ? "active" : ""}`}
                  onClick={() => setResell(true)}
                >
                  Yes
                </button>
              </div>
            </div>

            {/* Collect Box */}
            {resell && (
              <div className="collect-card">
                <h4>💰 Cash to be Collected</h4>
                <div className="collect-row">
                  <span>Order Total</span>
                  <span className="amount">₹{selectedPrice}</span>
                </div>
                <div className="collect-row">
                  <span>Your Margin</span>
                  <input
                    type="number"
                    value={margin}
                    className={`margin-input ${error ? "error" : ""}`}
                    onChange={handleMarginChange}
                    placeholder="Enter amount"
                  />
                </div>
                {error && <p className="error-message">{error}</p>}
                <div className="collect-row total">
                  <span>Final Amount</span>
                  <span className={`final-amount ${margin < 0 ? "negative" : ""}`}>
                    ₹{selectedPrice + margin}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* DIVIDER LINE */}
          <div className="payment-divider"></div>

          {/* RIGHT SECTION */}
          <div className="payment-right">
            <div className="price-card">
              <h3>Price Details</h3>
              
              <div className="price-breakdown">
                <div className="price-item">
                  <span>Product Price</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="price-item discount">
                  <span>Total Discounts</span>
                  <span>- ₹{discount}</span>
                </div>
                
                <div className="price-divider" />
                
                <div className="price-item total">
                  <span>Order Total</span>
                  <span className="total-amount">₹{orderTotal}</span>
                </div>
              </div>

              <div className="savings-badge">
                🎉 You save ₹{discount}
              </div>

              <button
                className="continue-button"
                disabled={!method}
                onClick={handleContinue}
              >
                Continue
              </button>

              <p className="secure-note">
                🔒 Clicking 'Continue' won't deduct any money
              </p>

        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;