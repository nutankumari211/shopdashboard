import React, { useState, useEffect } from "react";

function Details({ selectedCustomer, editCustomer, addCustomer }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    purchases: "",
    amount: "",
  });
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);

  useEffect(() => {
    if (selectedCustomer) {
      setFormData(selectedCustomer);
    } else {
      setFormData({ id: "", name: "", purchases: "", amount: "" });
    }
  }, [selectedCustomer]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any field is empty
    if (!formData.name || !formData.purchases || !formData.amount) {
      setShowErrorNotification(true);
      setTimeout(() => {
        setShowErrorNotification(false);
      }, 2000);
      return;
    }
    if (selectedCustomer) {
      editCustomer(formData);
      setShowSuccessNotification(true);
    } else {
      addCustomer(formData);
      setShowSuccessNotification(true);
      // Reset form data
      setFormData({ id: "", name: "", purchases: "", amount: "" });
    }
    setTimeout(() => {
      setShowSuccessNotification(false);
      window.location.href = "#";
    }, 2000);
  };

  return (
    <div className="customer-details add-customer-form">
      <h2>{selectedCustomer ? "Edit Customer" : "Add Customer"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>No of Purchases:</label>
        <input
          type="number"
          name="purchases"
          value={formData.purchases}
          onChange={handleChange}
        />
        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <button type="submit">{selectedCustomer ? "Update" : "Add"}</button>
      </form>
      {selectedCustomer && (
        <div className="more-details">
          <h3>Customer Details</h3>
          <p>Name: {selectedCustomer.name}</p>
          <p>Purchases: {selectedCustomer.purchases}</p>
          <p>Amount: ${selectedCustomer.amount}</p>
        </div>
      )}
      {showSuccessNotification && (
        <div className="notification success-notification">
          Customer {selectedCustomer ? "updated" : "added"} successfully.
        </div>
      )}
      {showErrorNotification && (
        <div className="notification error-notification">
          Please fill in all fields.
        </div>
      )}
    </div>
  );
}

export default Details;
