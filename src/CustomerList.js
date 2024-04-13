import React from "react";
import "./CustomerList.css";

function CustomerList({ customers, setSelectedCustomer, deleteCustomer }) {
 
  return (
    <nav className="customer-list">
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <span
              onClick={() => setSelectedCustomer(customer)}
              className="customer-name"
            >
              {customer.name}
            </span>
           
            <div className="actions">
              <button onClick={() => setSelectedCustomer(customer)}>
                Edit
              </button>
              <button onClick={() => deleteCustomer(customer.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CustomerList;
