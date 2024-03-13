
import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Home from "./components/Home";
import Product from "./components/Product";
import Dashboard from "./components/Dashboard";
function App() {
	return (
		<div className="App">
			<h1 className="erp">ERP System </h1>
			<Router>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route
						path="/home"
						element={<Home />}
					/>
					<Route
						path="/product"
						element={<Product />}
					/>
					<Route
						path="/create"
						element={<Create />}
					/>
					<Route
						path="/edit"
						element={<Edit />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
