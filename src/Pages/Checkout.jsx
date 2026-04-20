import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../CSS/Checkout.css";

const Checkout = () => {
  const cartItems = useSelector((store) => store.cart.cart);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.discountPrice * (item.qty || 1),
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.pincode
    ) {
      alert("Please fill all details!");
      return;
    }

    alert("Order Placed Successfully 🎉");
    console.log("Order Data:", { formData, cartItems, totalPrice });
  };

  return (
   <div className="checkoutContainer">

   <div className="singleBox">
    <div className="formBox">
      <h2>Shipping Details</h2>

      <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} />
      <textarea name="address" placeholder="Full Address" onChange={handleChange}></textarea>
      <input type="text" name="city" placeholder="City" onChange={handleChange} />
      <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} />
    </div>

    <div className="summaryBox">
      <h2>Order Summary</h2>

      {cartItems.map((item) => (
        <div key={item._id} className="summaryItem">
          <p>{item.name} × {item.qty || 1}</p>
          <p>₹{item.discountPrice * (item.qty || 1)}</p>
        </div>
      ))}

      <hr />

      <h3>Total: ₹{totalPrice}</h3>

      <button className="placeOrderBtn" onClick={handleOrder}>
        Place Order
      </button>
    </div>

  </div>
</div> 
)
};

export default Checkout;