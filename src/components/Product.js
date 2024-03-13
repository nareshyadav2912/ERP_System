import React from 'react';
import { Table } from 'react-bootstrap';
const Product = () => {
    const orders = [
        {
            id: 1,
            customerName: 'John Doe',
            orderDate: '12-03-2024',
            status: 'Shipped',
            totalAmount: 150
        },
        {
            id:2,
            customerName:'Alice',
            orderDate:'13-03-2024',
            status:'Ordered',
            totalAmount:120
        },
        {
            id:3,
            customerName:'Bob',
            orderDate:'14-03-2024',
            status:'Ordered',
            totalAmount:150
        }

    ];

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
