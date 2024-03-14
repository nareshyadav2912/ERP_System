import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import orders from './orders'
const Product = () => {
    let history = useNavigate();
    function deleted(id) {
        let index = orders
            .map(function (e) {
                return e.id;
            })
            .indexOf(id);
        orders.splice(index, 1);
        history("/product");
    }
    return (
        <div>
            <div style={{ margin: "3rem" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Customer Id</th>
                            <th>Customer Name</th>
                            <th>OrderDate</th>
                            <th>Status</th>
                            <th>TotalAmount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((item) => {
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.customerName}</td>
                                    <td>{item.orderDate}</td>
                                    <td>{item.status}</td>
                                    <td>{item.totalAmount}</td>
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
            </div>
        </div>
    );
}
export default Product;
