import React, { useEffect, useState } from 'react';
import { getAllOrdersApi, updateOrderStatusApi } from '../../../apis/Api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getAllOrdersApi().then((res) => {
            console.log(res.data);
            setOrders(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const handleChangeStatus = (orderId, status) => {
        console.log(orderId, status);
        const orderStatus = { status };

        updateOrderStatusApi(orderId, orderStatus).then((res) => {
            toast.success("Order Status Updated");
            // Refresh the orders list after update
            getAllOrdersApi().then((res) => {
                setOrders(res.data);
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
            toast.error("Order Status Not Updated");
        });
    };

    return (
        <div className="container mt-3">
            <ToastContainer />
            <h3>Admin Orders</h3>
            {
                orders.map((order) => (
                    <div className="card mb-3" key={order._id}>
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6>ORDER - {order.orderNumber}</h6>
                            <div className="dropdown">
                                <button
                                    className="btn btn-primary dropdown-toggle"
                                    type="button"
                                    id={`dropdownMenuButton-${order._id}`}
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {order.status}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton-${order._id}`}>
                                    <li><button className="dropdown-item"
                                        onClick={() => handleChangeStatus(order._id, "Pending")}
                                    >Pending</button></li>
                                    <li><button className="dropdown-item"
                                        onClick={() => handleChangeStatus(order._id, "In Progress")}
                                    >In Progress</button></li>
                                    <li><button className="dropdown-item"
                                        onClick={() => handleChangeStatus(order._id, "Delivered")}
                                    >Delivered</button></li>
                                    <li><button className="dropdown-item text-danger"
                                        onClick={() => handleChangeStatus(order._id, "Delete")}
                                    >Delete</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        order.cart.map((item, index) => (
                                            <tr key={index}>
                                                <th scope="row"><img src={item.image} alt="" width="50" /></th>
                                                <td>{item.name}</td>
                                                <td>{item.category}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <div>
                                <h6>Order Date: {new Date(order.createdAt).toLocaleDateString()}</h6>
                            </div>
                            <div>
                                <h6>Shipping Info: {order.shippingAddress}</h6>
                            </div>
                            <div>
                                <h6>Total Price: ${order.totalAmount}</h6>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AdminOrders;
