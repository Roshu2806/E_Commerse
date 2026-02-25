import React, { useState } from "react";
import "./Address.css";
import "./Payment";
import { BiShoppingBag } from "react-icons/bi";
import { FiMapPin, FiPhone, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export default function Address() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [activeStep] = useState(2); // 2 = Address (since Cart is 1)

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Manisha Vijay Nikam",
      address:
        "Sr no 19/1 plot no 33 Fule colony navvasahat Soygaon, Malegaon Maharashtra 423203",
      phone: "7385169946"
    },
    {
      id: 2,
      name: "Roshani Deore",
      address:
        "401 silver apartment, Swami Vivekananda nagar famous chauk new sangavi pimpari chinchwad Pune Maharashtra 411027",
      phone: "9876543210"
    }
  ]);

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveAddress = () => {
    if (!form.name || !form.address || !form.phone)
      return alert("Fill all fields");

    if (editId) {
      setAddresses(
        addresses.map(a =>
          a.id === editId ? { ...a, ...form } : a
        )
      );
      setEditId(null);
    } else {
      setAddresses([
        ...addresses,
        { id: Date.now(), ...form }
      ]);
    }

    setForm({ name: "", address: "", phone: "" });
    setShowForm(false);
  };

  const editAddress = (a) => {
    setForm(a);
    setEditId(a.id);
    setShowForm(true);
  };

  // Sample price data
  const totalPrice = 15422;
  const totalDiscount = 5468;
  const orderTotal = 9954;

  return (
    <div className="addressPage">
      {/* HEADER WITH STEPPER */}
      <div className="topbar">
        <Link to="/" className="navbar-logo">
          <div className="logo-wrapper">
            <BiShoppingBag className="logo-icon" />
            <span className="logo-brand">SpecsMart</span>
          </div>
        </Link>

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

      {/* MAIN CONTENT WITH TWO COLUMNS AND DIVIDER */}
      <div className="address-content-wrapper">
        {/* LEFT COLUMN - ADDRESS SECTION */}
        <div className="address-left-column">
          {/* TITLE WITH LOCATION ICON */}
          <div className="addressHeader">
            <h2>
              <FiMapPin className="title-icon" />
              Select Delivery Address
            </h2>
            <span className="add" onClick={() => setShowForm(true)}>
              + ADD NEW ADDRESS
            </span>
          </div>

          {/* ADDRESS LIST WITH ICONS */}
          <div className="addressList">
            {addresses.map(a => (
              <div
                key={a.id}
                className={`addressCard ${selected === a.id ? "active" : ""}`}
                onClick={() => setSelected(a.id)}
              >
                <div className="topRow">
                  <input
                    type="radio"
                    name="addressSelect"
                    checked={selected === a.id}
                    onChange={() => setSelected(a.id)}
                  />
                  <div className="name-with-icon">
                    <FiUser className="field-icon" />
                    <h3>{a.name}</h3>
                  </div>
                  <span
                    className="edit"
                    onClick={(e) => {
                      e.stopPropagation();
                      editAddress(a);
                    }}
                  >
                    EDIT
                  </span>
                </div>

                <div className="address-with-icon">
                  <FiMapPin className="field-icon" />
                  <p className="addressText">{a.address}</p>
                </div>

                <div className="phone-with-icon">
                  <FiPhone className="field-icon" />
                  <p className="phoneText">{a.phone}</p>
                </div>

                {selected === a.id && (
                  <button
                    className="deliverBtn"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/payment");
                    }}
                  >
                    Deliver to this Address
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER LINE */}
        <div className="address-divider"></div>

        {/* RIGHT COLUMN - PRICE DETAILS BOX (EXACTLY LIKE SCREENSHOT) */}
        <div className="price-details-box">
          <h3 className="price-details-title">Price Details (3 Items)</h3>
          
          <div className="price-details-row">
            <span className="price-label">Product Price</span>
            <span className="price-value">₱{totalPrice}</span>
          </div>
          
          <div className="price-details-row discount-row">
            <span className="price-label">Total Discounts</span>
            <span className="price-value discount-value">- ₱{totalDiscount}</span>
          </div>
          
          <div className="price-divider"></div>
          
          <div className="price-details-row order-total-row">
            <span className="price-label order-total-label">Order Total</span>
            <span className="price-value order-total-value">₱{orderTotal}</span>
          </div>
          
          <div className="discount-message-box">
            🎉 Yay! Your total discount is ₱{totalDiscount}
          </div>
          
          <div className="continue-note">
            Clicking on 'Continue' will not deduct any money
          </div>
          
          <button className="continue-button" onClick={() => navigate("/payment")}>
            Continue
          </button>
          
          <div className="safety-box">
            <div className="safety-icon">🛡️</div>
            <div className="safety-text">
              <strong>Your Safety, Our Priority</strong>
              <p>We make sure that your package is safe at every point of contact.</p>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showForm && (
        <div className="modalOverlay" onClick={() => setShowForm(false)}>
          <div className="addressModal" onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <h3>{editId ? "EDIT ADDRESS" : "ADD DELIVERY ADDRESS"}</h3>
              <span className="close" onClick={() => setShowForm(false)}>✕</span>
            </div>

            <div className="modalBody">
              <label>Name</label>
              <div className="input-with-icon">
                <FiUser className="input-field-icon" />
                <input
                  name="name"
                  placeholder="Enter name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <label>Contact Number</label>
              <div className="input-with-icon">
                <FiPhone className="input-field-icon" />
                <input
                  name="phone"
                  placeholder="Enter phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <label>Address</label>
              <div className="input-with-icon textarea-icon">
                <FiMapPin className="input-field-icon" />
                <textarea
                  name="address"
                  placeholder="Enter full address"
                  value={form.address}
                  onChange={handleChange}
                  rows="4"
                />
              </div>

              <button className="saveAddressBtn" onClick={saveAddress}>
                Save Address and Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}