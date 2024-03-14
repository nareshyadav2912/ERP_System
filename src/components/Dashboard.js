// Dashboard.js
import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
//import ProductDetails from "./ProductDetails";
//import OrderDetails from "./OrderDetails";
import array from "./array";

const Dashboard = () => {
  return (
    <div className="container">
      <h1 className="heading">Welcome to ERP System</h1>
      <div className="link-container">
        <Link to="/home">Home</Link>
        <Link to="/product">Product</Link>
      </div>
      <div className="details-container">
        <div className="details-card">
          <h1>Product Details</h1>
          <p>No. of Products: {array.length}</p>
          <p>Total Quantity: {array.reduce((acc, curr) => acc + parseInt(curr.Quantity), 0)}</p>
          <p>Total Amount: ${array.reduce((acc, curr) => acc + parseInt(curr.Price.replace(/,/g, "")), 0).toLocaleString()}</p>
          <Link to="/home">Know More</Link>
        </div>
        <div className="details-card">
          <h1>Order Details</h1>
          <p>No. of Customers: {array.length}</p>
          <p>Total Amount: ${array.reduce((acc, curr) => acc + parseInt(curr.Price.replace(/,/g, "")), 0).toLocaleString()}</p>
          <Link to="/product">Know More</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
