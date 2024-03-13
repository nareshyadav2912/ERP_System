// Filename - components/Home.js

import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";

function Home() {
	let history = useNavigate();
	function setID(id, name, price,category) {
		localStorage.setItem("id", id);
		localStorage.setItem("Name", name);
		localStorage.setItem("Price", price);
		localStorage.setItem("Category",category);
	}
	function deleted(id) {
		let index = array
			.map(function (e) {
				return e.id;
			})
			.indexOf(id);
		array.splice(index, 1);
		history("/home");
	}
	return (
		<div style={{ margin: "3rem" }}>
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Category</th>
						<th>Quantity</th>
					</tr>
				</thead>
				<tbody>
					{array.map((item) => {
						return (
							<tr>
								<td>{item.Name}</td>
								<td>{item.Price}</td>
								<td>{item.Category}</td>
								<td>{item.Quantity}</td>	
								<td>
									<Link to={`/edit`}>
										<Button
											onClick={(e) =>
												setID(
													item.id,
													item.Name,
													item.Price,
													item.Category,
													item.Quantity
												)
											}
											variant="info"
										>
											Update
										</Button>
									</Link>
								</td>
								<td>
									<Button
										onClick={(e) =>
											deleted(item.id)
										}
										variant="danger"
									>
										Delete
									</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
			<Link className="d-grid gap-3" to="/create">
				<Button variant="warning" size="lg">
					Add New Product
				</Button>
			</Link>
		</div>
	);
}

export default Home;
