import React, { useState } from "react";
import CustomerList from "./CustomerList";
import Details from "./Details";
import Header from "./Header";
import "./App.css";

function App() {
  const [customers, setCustomers] = useState([
    { id: 1, name: "John Doe", purchases: 5, amount: 100 },
    { id: 2, name: "Jane Smith", purchases: 3, amount: 75 },
   
  ]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showCustomerList, setShowCustomerList] = useState(false);

  const toggleCustomerList = () => {
    setShowCustomerList(!showCustomerList);
  };

  const addCustomer = (customer) => {
    customer.id = customers.length + 1;
    setCustomers([...customers, customer]);
    
    
  };

  const editCustomer = (updatedCustomer) => {
    setCustomers(
      customers.map((customer) =>
        customer.id === updatedCustomer.id ? updatedCustomer : customer
      )
    );
    setSelectedCustomer(null);
  };

  const deleteCustomer = (customerId) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      setCustomers(customers.filter((customer) => customer.id !== customerId));
      setSelectedCustomer(null);
    }
  };

  return (
    <div className="app">
      <Header toggleCustomerList={toggleCustomerList} />
      <main>
        {showCustomerList && (
          <CustomerList
            customers={customers}
            setSelectedCustomer={setSelectedCustomer}
            deleteCustomer={deleteCustomer}
          />
        )}
        {selectedCustomer ? (
          <Details
            selectedCustomer={selectedCustomer}
            editCustomer={editCustomer}
          />
        ) : (
          <div>
            
            <Details addCustomer={addCustomer} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;