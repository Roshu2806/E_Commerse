import React, { useState } from "react";
import "./Products.css"; // Changed to same folder
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Products = () => {
  const productsData = [
    {
      id: 1,
      title: "Women Cotton Straight Kurti",
      price: 273,
      oldPrice: 499,
      rating: 4.1,
      category: "fashion",
      fabric: "Pure Cotton",
      color: "White",
      fit: "Straight",
      length: "Knee Length",
      image: "https://www.libas.in/cdn/shop/files/58246_2_ed2c4af3-e829-48a2-adcf-1e1da4a84f77.jpg?v=1757324305&width=1080",
    },
    {
      id: 2,
      title: "Floral Printed Pink Kurti",
      price: 399,
      oldPrice: 699,
      rating: 4.4,
      category: "fashion",
      fabric: "Rayon",
      color: "Pink",
      fit: "Regular Fit",
      length: "Calf Length",
      image: "https://images.jdmagicbox.com/quickquotes/images_main/chiffon-v-neck-floral-print-full-sleeve-kurti-for-women-baby-pink-2223540911-d9wpo1q6.jpg",
    },
    {
      id: 3,
      title: "Blue Anarkali Kurti",
      price: 599,
      oldPrice: 899,
      rating: 4.6,
      category: "fashion",
      fabric: "Georgette",
      color: "Blue",
      fit: "Flared",
      length: "Full Length",
      image: "https://www.royalexport.in/product-img/buy-blue-anarkali-gown-pure-ge-1734762850.jpg",
    },
    {
      id: 4,
      title: "Yellow Casual Kurti",
      price: 349,
      oldPrice: 599,
      rating: 4.2,
      category: "fashion",
      fabric: "Cotton Blend",
      color: "Yellow",
      fit: "Straight",
      length: "Full Length",
      image: "https://cdn.shopify.com/s/files/1/0572/5555/9212/files/BHKS513_1_fd68d56a-c9e5-49e0-9785-178ddfa9c36d.jpg?v=1753699550",
    },
    {
      id: 5,
      title: "Grocery",
      price: 449,
      oldPrice: 799,
      rating: 4.3,
      category: "grocery",
      Brand: "Best Product",
      quantity: "A+",
      fit: "Regular Fit",
      length: "Calf Length",
      image: "https://png.pngtree.com/png-clipart/20250103/original/pngtree-full-grocery-basket-with-assorted-items-png-image_19400735.png"
    },
    {
      id: 6,
      title: "Airburd",
      price: 699,
      oldPrice: 1099,
      rating: 4.7,
      category: "electronics",
      Brand: "Boat",
      color: "Black & red",
      fit: "perfect",
      length: "Free Size",
      image: "https://dukandwar.com/wp-content/uploads/2020/12/61rjT1TxSpL._SL1500_.jpg"
    },
    {
      id: 7,
      title: "Necklace",
      price: 599,
      oldPrice: 899,
      rating: 4.5,
      category: "jewelry",
      Brand: "Diamond",
      color: "Black",
      fit: "Jacket",
      length: "Short",
      image: "https://i.pinimg.com/originals/77/45/d7/7745d7b960c2f552b752726815b796f6.png"
    },
    {
      id: 8,
      title: "Sofa Cover",
      price: 549,
      oldPrice: 999,
      rating: 4.4,
      category: "home",
      fabric: "Chanderi",
      color: "Grey",
      fit: "Straight",
      length: "Full",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92"
    },
    {
      id: 9,
      title: "Creamy Matte Lipstick",
      price: 749,
      oldPrice: 1199,
      rating: 4.8,
      category: "beauty-care",
      Brand: "SWISS BEAUTY",
      color: "Mauve Blush",
      Finish: "Creamy Matte",
      length: "Free Size",
      image: "https://m.media-amazon.com/images/I/51tholYMvpL._SX522_.jpg"
    },
    {
      id: 10,
      title: "Liquid Eyeliner",
      price: 399,
      oldPrice: 699,
      rating: 4.2,
      category: "beauty",
      Brand: "Tender Infiniti",
      color: "black",
      fit: "Regular",
      length: "Free Size",
      image: "https://www.beautyberry.co.in/cdn/shop/files/01_671f4c01-78ff-4fe5-8ccd-fc8ad61fcdce.jpg?v=1731658188&width=713"
    },
    {
      id: 11,
      title: "Sofa Cover",
      price: 499,
      oldPrice: 799,
      rating: 4.3,
      category: "home",
      fabric: "Rayon",
      color: "Green",
      fit: "Regular",
      length: "Full Size",
      image: "https://img.fruugo.com/product/1/76/2212006761_max.jpg"
    },
    {
      id: 12,
      title: "Teddy",
      price: 579,
      oldPrice: 899,
      rating: 4.6,
      category: "toys",
      Brand: "Soft Toy",
      color: "Cream",
      fit: "Straight",
      length: "Full Length",
      image: "https://m.media-amazon.com/images/I/61fwcBkXVOL._AC_SL1000_.jpg"
    },
    {
      id: 13,
      title: "Pink Night Pant",
      price: 549,
      oldPrice: 999,
      rating: 4.5,
      category: "fashion",
      fabric: "Cotton",
      color: "Pink",
      fit: "Pant",
      length: "Full Length",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1"
    },
    {
      id: 14,
      title: "Home Accessories",
      price: 399,
      oldPrice: 699,
      rating: 4.2,
      category: "home",
      fabric: "Plastic",
      color: "Brown",
      fit: "Regular",
      length: "Free Size",
      image: "https://img.freepik.com/free-psd/still-life-modern-vase-isolated_23-2150683304.jpg?semt=ais_user_personalization&w=740&q=80"
    },
    {
      id: 15,
      title: "vivo Y19e 4G",
      price: 25000,
      oldPrice: 30000,
      rating: 4.7,
      category: "electronics",
      Brand: "Vivo",
      color: "Mint Green",
      fit: "Smooth Handle",
      length: "Free Size",
      image: "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/315020_0_kmxdls.png"
    },
    {
      id: 16,
      title: "Cushion Cover",
      price: 459,
      oldPrice: 799,
      rating: 4.4,
      category: "home",
      fabric: "Pure Cotton",
      color: "Multi Colour",
      fit: "Straight",
      length: "Free",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTLEIPS4PosUzI4x70i9TmhORFxwsltP642FWX78wy0aJwyybB5ituyKhT29Tx1WMolVNB0A1Tg0FASg3DJ_Ily6aUH18Na-Olkmsb_mlomH6tTyu89Xj63nrw"
    },
    {
      id: 17,
      title: "Flower Pot",
      price: 689,
      oldPrice: 1099,
      rating: 4.6,
      category: "home",
      color: "White",
      fit: "Regular",
      length: "Free Size",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQVWe-x6LKAD9W891fqid-y-wzuwlZOhbq_FWXMivq4r8G8Fg2dhhs92B5XSKlSsPzVY9Kite_abqkHQTu_dBU5grU1rUVtj9dLyr4Wm3FFWOp5vOdkm3r0FQ"
    },
    {
      id: 18,
      title: "Apple iPhone 13",
      price: 74999,
      oldPrice: 89999,
      rating: 4.3,
      category: "electronics",
      Brand: "Apple",
      color: "Mustard",
      fit: "Straight",
      length: "Free",
      image: "https://tiimg.tistatic.com/fp/2/007/716/6-10-inch-full-hd-display-128gb-internal-memory-a15-bionic-processor-pink-apple-iphone-13-mobile-phone--569.jpg"
    },
    {
      id: 19,
      title: "Plain Shirt",
      price: 599,
      oldPrice: 949,
      rating: 4.5,
      category: "fashion",
      fabric: "Cotton",
      color: "Brown",
      fit: "Regular",
      length: "Full Length",
      image: "https://thehouseofrare.com/cdn/shop/products/HERO_76c59c07-ac65-40f5-96e4-1de84fcdee92.jpg?v=1743587556"
    },
    {
      id: 20,
      title: "Samsung Smart LED TV",
      price: 12999,
      oldPrice: 18999,
      rating: 4.1,
      category: "electronics",
      Brand: "Samsung",
      color: "black",
      length: "Free Size",
      image: "https://m.media-amazon.com/images/I/71XA+N8Xj1L._SX522_.jpg"
    },
    {
      id: 21,
      title: "Powder Blush",
      price: 799,
      oldPrice: 1299,
      rating: 4.8,
      category: "beauty",
      Brand: "Lakme",
      color: "Pink",
      length: "Free",
      image: "https://www.lakmesalon.in/cdn/shop/files/29977_H-8909106016095.jpg?v=1730970681"
    },
    {
      id: 22,
      title: "Eyeshadow",
      price: 429,
      oldPrice: 699,
      rating: 4.2,
      category: "beauty",
      Brand: "HudaBeauty",
      color: "Light Pink",
      length: "Free",
      image: "https://images-cdn.ubuy.co.in/633e8180e7b5f96f125022d2-ubuy-online-shopping.jpg"
    },
    {
      id: 23,
      title: "Key Holder",
      price: 299,
      oldPrice: 699,
      rating: 4.6,
      category: "home",
      Brand: "Wooden",
      color: "Wine",
      length: "Free size",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdXVXyyxy4N8_OXwgXM6gjEmLSt8xNf2okpJDiBovibJLl5RCsFBWgFWGz4VPvq0h8XBCri9u7LvXf1xrmhFT20-D0WtsnKNfLablNCxsGtYKrKg7DrSVIfw"
    },
    {
      id: 24,
      title: "Foundation",
      price: 559,
      oldPrice: 899,
      rating: 4.4,
      category: "beauty",
      Brand: "Huda Beauty",
      color: "Cream",
      fit: "Regular",
      length: "Free",
      image: "https://m.media-amazon.com/images/I/41BWfl0+T5L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 25,
      title: "Sport",
      price: 479,
      oldPrice: 799,
      rating: 4.3,
      category: "sports",
      Brand: "wooden",
      color: "white & Brown",
      length: "Free Size",
      image: "https://rukminim2.flixcart.com/image/480/480/xif0q/kit/e/x/d/willow-cricket-bat-with-plastic-stump-set-2-tennis-ball-for-kids-original-imagqxvdyygq4hyk.jpeg?q=20"
    },
    {
      id: 26,
      title: "Nail Polish",
      price: 739,
      oldPrice: 1199,
      rating: 4.7,
      category: "beauty",
      Brand: "H&M",
      color: "Pinch",
      length: "Free size",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTVRRWwMRiRuJ-RrXnRcMaw6-CcHWBn3Cu9McoSAimIkYD_Ytl_tp0soXQPA2R5VmvIeU_xiBEhSH9WFZ7Eqohi4_GIEwDEMU7hWp16wNQB4DX7Jsx-7YtSEECj"
    },
    {
      id: 27,
      title: "Refrigerator",
      price: 23999,
      oldPrice: 24999,
      rating: 4.5,
      category: "electronics",
      Brand: "Whirlpool",
      color: "Silver",
      fit: "Regular",
      length: "Free Size",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTa8uuZHK3G2TujW6ikUqwXF85YXVDhjxW0WYckoCVWq7GLNe6eMzdCX8iLqy3tMizHuR7OFFrON4gJk8IDjG6xvBNaBQVAfg"
    },
    {
      id: 28,
      title: "Headphones",
      price: 859,
      oldPrice: 999,
      rating: 4.1,
      category: "electronics",
      Brand: "Boat",
      color: "Dark Blue",
      length: "Free Size",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTEolmRGVdTNwcxYOKhCIsRxQdCA1C1JmXkBPQUDtIt9n6O7KmSFtkArBmC1jvHfafjnY08jcC9aTCEkKVc4pohwyUGYhaBglqWjGOfoXhYeDJ9r3dwaaSf5Q"
    },
    {
      id: 29,
      title: "Books",
      price: 649,
      oldPrice: 999,
      rating: 4.6,
      category: "books",
      Brand: "Radha & Urmila",
      color: "A+",
      length: "Full Length",
      image: "https://payalbooks.com/cdn/shop/files/Urmila_Radha_Set_by_Samar.jpg?v=1752502052"
    },
    {
      id: 30,
      title: "Watch",
      price: 589,
      oldPrice: 949,
      rating: 4.4,
      category: "electronics",
      Brand: "Titan",
      color: "Golden",
      fit: "Regular",
      length: "Full Length",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRV7v3bGQ6mO87Jb-R5y75QahgN2XrJt4zzkoi_3h-Lev0SeM1nGltG3WVjR0tMgd3SjSnYy4huFTgLRz2B4_AZ_Cxx7-huU4XP5a8XbmqzQTMmnCxhCflXwA"
    }
  ];

  const [products, setProducts] = useState(productsData);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();

  const filterProducts = (category) => {
    let updatedCategories;

    if (selectedCategories.includes(category)) {
      updatedCategories = selectedCategories.filter((c) => c !== category);
    } else {
      updatedCategories = [...selectedCategories, category];
    }

    setSelectedCategories(updatedCategories);

    if (updatedCategories.length === 0) {
      setProducts(productsData);
    } else {
      const filtered = productsData.filter((p) =>
        updatedCategories.includes(p.category)
      );
      setProducts(filtered);
    }
  };

  const sortProducts = (type) => {
    let sorted = [...products];

    if (type === "low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (type === "high") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setProducts(sorted);
  };

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart successfully!");
  };

  return (
    <>
      <Navbar />
      <center><h2 className="page-title">Products For You</h2></center>

      <div className="container">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Filters</h3>

          {/* Sort */}
          <div className="filter-group">
            <strong>Sort by</strong>
            <select onChange={(e) => sortProducts(e.target.value)}>
              <option value="">Select</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          {/* Categories */}
          <div className="filter-group">
            <strong>Category</strong>

            <label>
              <input type="checkbox" onChange={() => filterProducts("fashion")} />
              Fashion
            </label>

            <label>
              <input type="checkbox" onChange={() => filterProducts("beauty")} />
              Beauty
            </label>

            <label>
              <input type="checkbox" onChange={() => filterProducts("home")} />
              Home
            </label>

            <label>
              <input type="checkbox" onChange={() => filterProducts("electronics")} />
              Electronics
            </label>

            <label>
              <input type="checkbox" onChange={() => filterProducts("grocery")} />
              Grocery
            </label>

            <label>
              <input type="checkbox" onChange={() => filterProducts("books")} />
              Books
            </label>

            <label>
              <input type="checkbox" onChange={() => filterProducts("sports")} />
              Sports
            </label>

            <label>
              <input type="checkbox" onChange={() => filterProducts("toys")} />
              Toys
            </label>

            <label>
              <input type="checkbox" onChange={() => filterProducts("jewelry")} />
              Jewelry
            </label>

            <label>
              <input type="checkbox" onChange={() => filterProducts("beauty-care")} />
              Beauty Care
            </label>
          </div>
        </div>

        {/* Products Section */}
        <div className="products-section">
          {selectedProduct ? (
            <div className="detail-container">
              <button className="back-btn" onClick={() => setSelectedProduct(null)}>
                ← Back to Products
              </button>

              <div className="detail-layout">
                {/* LEFT IMAGE */}
                <div className="detail-image">
                  <img src={selectedProduct.image} alt={selectedProduct.title} />
                </div>

                {/* RIGHT DETAILS */}
                <div className="detail-info">
                  <h2 className="detail-title">{selectedProduct.title}</h2>

                  <div className="detail-price-section">
                    <span className="detail-current-price">₹{selectedProduct.price}</span>
                    {selectedProduct.oldPrice && (
                      <span className="detail-old-price">₹{selectedProduct.oldPrice}</span>
                    )}
                  </div>

                  <div className="detail-rating"> {selectedProduct.rating} Ratings</div>

                  <p className="detail-description">
                    {selectedProduct.category === "fashion" && (
                      <>
                        This beautiful {selectedProduct.color} kurti is made from{' '}
                        {selectedProduct.fabric}. Designed in a{' '}
                        {selectedProduct.fit} style with{' '}
                        {selectedProduct.length}, perfect for daily wear.
                      </>
                    )}

                    {selectedProduct.category === "electronics" && (
                      <>High quality {selectedProduct.Brand} electronic product with premium build.</>
                    )}

                    {selectedProduct.category === "home" && (
                      <>Perfect home essential item designed for comfort and durability.</>
                    )}

                    {selectedProduct.category === "beauty" && (
                      <>Premium beauty product made with skin-friendly ingredients.</>
                    )}
                  </p>

                  {selectedProduct.category === "fashion" && (
                    <div className="size-selector">
                      <h4>Select Size</h4>
                      <div className="size-buttons">
                        {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="action-buttons">
                    <button
                      className="add-to-cart-btn"
                      onClick={() => {
                        addToCart(selectedProduct);
                      }}
                    >
                      Add to Cart
                    </button>

                    <button
                      className="buy-now-btn"
                      onClick={() => {
                        addToCart(selectedProduct);
                        navigate("/cart");
                      }}
                    >
                      Buy Now
                    </button>
                  </div>

                  <div className="highlights-section">
                    <h4>Product Highlights</h4>
                    <ul className="highlights-list">
                      {selectedProduct.category === "fashion" && (
                        <>
                          <li>Fabric: {selectedProduct.fabric}</li>
                          <li>Color: {selectedProduct.color}</li>
                          <li>Fit: {selectedProduct.fit}</li>
                          <li>Length: {selectedProduct.length}</li>
                        </>
                      )}

                      {selectedProduct.category === "electronics" && (
                        <>
                          <li>Brand: {selectedProduct.Brand}</li>
                          <li>Color: {selectedProduct.color}</li>
                          <li>1 Year Warranty</li>
                          <li>Free Delivery</li>
                        </>
                      )}

                      {selectedProduct.category === "home" && (
                        <>
                          <li>Material: {selectedProduct.fabric || 'Premium'}</li>
                          <li>Color: {selectedProduct.color}</li>
                          <li>Easy to Clean</li>
                          <li>7 Days Return</li>
                        </>
                      )}

                      {selectedProduct.category === "beauty" && (
                        <>
                          <li>Brand: {selectedProduct.Brand}</li>
                          <li>Color: {selectedProduct.color}</li>
                          <li>Dermatologically Tested</li>
                          <li>Free Delivery</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Similar Products */}
              <div className="similar-products">
                <h3>Similar Products</h3>
                <div className="similar-grid">
                  {products.slice(0, 4).map((item) => (
                    <img
                      key={item.id}
                      src={item.image}
                      alt={item.title}
                      onClick={() => setSelectedProduct(item)}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="product-grid">
              {products.map((product) => {
                const discount = product.oldPrice
                  ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
                  : 0;

                return (
                  <div className="product-card" key={product.id}>
                    <img
                      src={product.image}
                      alt={product.title}
                      onClick={() => setSelectedProduct(product)}
                    />

                    <div className="product-title">{product.title}</div>

                    <div>
                      <span className="price">₹{product.price}</span>
                      {product.oldPrice && (
                        <>
                          <span className="old-price">₹{product.oldPrice}</span>
                          <span className="discount">{discount}% off</span>
                        </>
                      )}
                    </div>

                    <div className="rating">{product.rating}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-animation">
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <Footer />
    </>
  );
};

export default Products;