// Filename - Edit.js
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
	const [name, setname] = useState("");
	const [price, setprice] = useState("");
	const [category, setcategory]= useState("");
	const [quantity,setquantity]=useState("");
	const [id, setid] = useState("");
	let history = useNavigate();
	let index = array
		.map(function (e) {
			return e.id;
		})
		.indexOf(id);
	const handelSubmit = (e) => {
		e.preventDefault();
		if (name == "" || price == "" || category=="" || quantity=="") {
			alert("invalid input");
			return;
		}
		let a = array[index];
		a.Name = name;
		a.Price = price;
		a.Category=category;
		a.Quantity=quantity;
		history("/home");
	};
	useEffect(() => {
		setname(localStorage.getItem("Name"));
		setprice(localStorage.getItem("Price"));
		setcategory(localStorage.getItem("Category"));
		setquantity(localStorage.getItem("Quantity"));
		setid(localStorage.getItem("id"));
	}, []);

	return (
		<div>
			<Form
				className="d-grid gap-2"
				style={{ margin: "5rem" }}
			>
				<Form.Group
					className="mb-3"
					controlId="formBasicEmail"
				>
					<Form.Control
						value={name}
						onChange={(e) =>
							setname(e.target.value)
						}
						type="text"
						placeholder="Enter Name"
					/>
				</Form.Group>
				<Form.Group
					className="mb-3"
					controlId="formBasicPassword"
				>
					<Form.Control
						value={price}
						onChange={(e) =>
							setprice(e.target.value)
						}
						type="number"
						placeholder="Price"
					/>
				</Form.Group>
				<Form.Group
					className="mb-3"
					controlId="formBasicPassword"
				>
					<Form.Control
						value={category}
						onChange={(e) =>
							setcategory(e.target.value)
						}
						type="text"
						placeholder="Category"
					/>
				</Form.Group>
				<Form.Group
					className="mb-3"
					controlId="formBasicPassword"
				>
					<Form.Control
						value={quantity}
						onChange={(e) =>
							setquantity(e.target.value)
						}
						type="number"
						placeholder="Quantity"
					/>
				</Form.Group>
				<Button
					onClick={(e) => handelSubmit(e)}
					variant="primary"
					type="submit"
					size="lg"
				>
					Update
				</Button>
				<Link className="d-grid gap-2" to="/">
					<Button variant="warning" size="lg">
						Home
					</Button>
				</Link>
			</Form>
		</div>
	);
}

export default Edit;
