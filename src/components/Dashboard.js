import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
const Dashboard = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/home" > Hello</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
                </li>
            </ul>
        </>
    )
}
export default Dashboard;