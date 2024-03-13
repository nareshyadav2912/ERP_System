import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
	const [name, setname] = useState("");
	const [price, setprice] = useState("");
	const [category,setcategory]=useState("");
	const [quantity,setquantity]=useState("");
	let history = useNavigate();
	const handelSubmit = (e) => {
		e.preventDefault(); 

		const ids = uuid();
		let uni = ids.slice(0, 8);

		let a = name,
			b = price,
			c = category,
			d= quantity;
		if (name == "" || price == "" || category=="" || quantity=="") {
			alert("invalid input");
			return;
		}
		array.push({ id: uni, Name: a, Price: b, Category: c, Quantity:d });
		history("/home");
	};
	return (
		<div>
			<Form
				className="d-grid gap-2"
				style={{ margin: "5rem" }}
			>
				<Form.Group
					className="mb-3"
					controlId="formBasicName"
				>
					<Form.Control
						onChange={(e) =>
							setname(e.target.value)
						}
						type="text"
						placeholder="Enter Name"
						required
					/>
				</Form.Group>
				<Form.Group
					className="mb-3"
					controlId="formBasicAge"
				>
					<Form.Control
						onChange={(e) =>
							setprice(e.target.value)
						}
						type="number"
						placeholder="Price"
						required
					/>
				</Form.Group>
				<Form.Group
					className="mb-3"
					controlId="formBasicAge"
				>
					<Form.Control
						onChange={(e) =>
							setcategory(e.target.value)
						}
						type="text"
						placeholder="Category"
						required
					/>
				</Form.Group>
				<Form.Group
					className="mb-3"
					controlId="formBasicName"
				>
					<Form.Control
						onChange={(e) =>
							setquantity(e.target.value)
						}
						type="number"
						placeholder="Quantity"
						required
					/>
				</Form.Group>
				<Button
					onClick={(e) => handelSubmit(e)}
					variant="primary"
					type="submit"
				>
					Submit
				</Button>
				<Link className="d-grid gap-2" to="/">
					<Button variant="info" size="lg">
						Home
					</Button>
				</Link>
			</Form>
		</div>
	);
}

export default Create;
