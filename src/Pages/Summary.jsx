import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { FiCheckCircle, FiPackage, FiTruck, FiShield, FiStar } from "react-icons/fi";
import { BsShieldCheck, BsCheckCircle, BsGem, BsAward } from "react-icons/bs";
import { RiVipCrownFill, RiMedalFill } from "react-icons/ri";
import "./Summary.css";

export default function Summary() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const activeStep = 4; // Summary is step 4

  if (!state) {
    return (
      <div className="error-container">
        <h2 style={{ textAlign: "center" }}>No Order Found</h2>
        <button onClick={() => navigate("/")} className="back-home-btn">
          Back to Home
        </button>
      </div>
    );
  }

  const { method, price, margin, resell } = state;
  const final = resell ? price + margin : price;

  const handlePlaceOrder = () => {
    navigate("/thankyou", { state: { final } });
  };

  // Elegant, stable icons based on payment method
  const getTitleIcon = () => {
    if (method === 'cod') return <BsAward className="title-icon" />;
    if (method === 'online') return <BsGem className="title-icon" />;
    return <FiStar className="title-icon" />;
  };

  return (
    <div className="summary-page" style={{ backgroundColor: '#e6e9f4' }}>
      {/* HEADER WITH STEPPER - ON TOP */}
      <div className="summary-header">
        <div className="header-container">
          <Link to="/" className="header-logo">
            <div className="logo-wrapper">
              <BiShoppingBag className="logo-icon" />
              <span className="logo-brand">SpecsMart</span>
            </div>
          </Link>

          <div className="header-stepper">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="step-wrapper">
                <div className={`step-circle ${activeStep >= step ? 'active' : ''}`}>
                  {step}
                </div>
                <span className={`step-label ${activeStep >= step ? 'active' : ''}`}>
                  {step === 1 ? 'Cart' : step === 2 ? 'Address' : step === 3 ? 'Payment' : 'Summary'}
                </span>
                {step < 4 && (
                  <div className={`step-line ${activeStep > step ? 'completed' : ''}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POPUP OVERLAY AND MODAL */}
      <div className="popup-overlay">
        <div className="popup-container">
          <div className="summary-card">
            <div className="title-wrapper">
              <div className="icon-container">
                {getTitleIcon()}
                <div className="icon-glow"></div>
                <div className="icon-ring"></div>
              </div>
              <h2 className="summary-title">Order Summary</h2>
            </div>

            <div className="summary-details">
              <div className="summary-row">
                <span className="label">Payment Method</span>
                <span className="value highlight">{method.toUpperCase()}</span>
              </div>

              <div className="summary-row">
                <span className="label">Product Price</span>
                <span className="value">₹{price}</span>
              </div>

              {resell && (
                <>
                  <div className="summary-row">
                    <span className="label">Your Margin</span>
                    <span className="value profit">+ ₹{margin}</span>
                  </div>

                  <div className="summary-row">
                    <span className="label">Profit</span>
                    <span className="value profit">₹{margin}</span>
                  </div>
                </>
              )}

              <div className="summary-divider"></div>

              <div className="summary-row total">
                <span className="label">Final Amount</span>
                <span className="value final-amount">₹{final}</span>
              </div>
            </div>

            {/* PLACE ORDER BUTTON */}
            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>

            <p className="secure-note">
              <FiShield className="secure-icon" />
              <span>Secure Checkout • 100% Protected</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}