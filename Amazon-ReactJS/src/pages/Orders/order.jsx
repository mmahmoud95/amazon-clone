import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { instance } from "../../services/axios/instance";
import { authContext } from "../../context/authcontex";
import { Link, Navigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "./orderStyle.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

const Order = () => {
    document.title = `Amazon - Orders`;
    const body = document.querySelector("body");
    body.classList.remove("bg-body-tertiary");
    const { lang, setLang } = useContext(authContext);
    const { isLogin, setLogin } = useContext(authContext);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();

    const getUserOrders = async () => {
        // Fetch orders from MongoDB or your API endpoint
        await instance
            .get("/order/userOrders", {
                headers: {
                    Authorization: localStorage.getItem("userToken"),
                },
            }) // Update with your actual API endpoint
            .then((response) => {
                const responsee = response.data.reverse();
                setOrders(responsee);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching orders:", error));
    };

    const handleDeleteOrder = async (orderId) => {
        try {
            // Make an API request to delete the order by its ID
            const response = await instance.delete(`/order/${orderId}`);

            if (response) {
                // Refresh the orders list or update state to reflect the changes
                setOrders((prevOrders) =>
                    prevOrders.filter((order) => order._id !== orderId)
                );
                console.log("Order deleted successfully!");
            } else {
                console.error("Failed to delete order");
            }
        } catch (error) {
            console.error("Error deleting order:", error);
        }
    };
    useEffect(() => {
        getUserOrders();
    }, []);
    function calculateDeliveryDate(orderDate) {
        const deliveryTimeInDays = 3;
        const orderDateTime = new Date(orderDate);
        const deliveryDate = new Date(orderDateTime);
        deliveryDate.setDate(orderDateTime.getDate() + deliveryTimeInDays);
        const formattedDeliveryDate = deliveryDate
            .toISOString()
            .substring(0, 10);
        return formattedDeliveryDate;
    }

    return (
        <>
            {isLogin ? (
                loading ? (
                    <div className='m-auto d-flex vh-100'>
                        <Spinner
                            style={{ color: "#FF9900" }}
                            className='m-auto'
                            animation='border'
                            role='status'
                        ></Spinner>
                    </div>
                ) : (
                    <div className='container mt-4 background-body'>
                        <div className='text-center'>
                            <h2 className='mb-4'>{t("order.part1")}</h2>
                        </div>
                        <div className='row'>
                            {orders.length > 0 ? (
                                orders.map((order) => (
                                    <div
                                        key={order._id}
                                        className='card col-lg-10 col-md-10 col-sm-12 mx-auto my-3'
                                    >
                                        <div className='card-body'>
                                            <div className='bg-light p-2 rounded-2 shadow-sm'>
                                                <div className='d-flex justify-content-between p-0'>
                                                    <h4 className='card-title fs-3 ps-3 d-inline'>
                                                        {t("order.part2")}
                                                    </h4>
                                                    {/* <button
                                                        className='btn btn-warning'
                                                        onClick={() =>
                                                            handleDeleteOrder(
                                                                order._id
                                                            )
                                                        }
                                                    >
                                                        {t("order.part3")}
                                                    </button> */}
                                                </div>
                                                <div className='row'>
                                                    <div className='fs-5 p-4 pt-0 col-md-4 col-6'>
                                                        <h4 className='fs-4'>
                                                            {t("order.part4")}
                                                        </h4>
                                                        <p className='fs-6 mb-1'>
                                                            {/* {t("order.part16")} : */}
                                                            {order.name}
                                                        </p>
                                                        <p className='fs-6 mb-1'>
                                                            {
                                                                order
                                                                    .shippingAddress
                                                                    .street
                                                            }
                                                        </p>
                                                        <p className='fs-6 mb-1'>
                                                            {
                                                                order
                                                                    .shippingAddress
                                                                    .city
                                                            }
                                                        </p>
                                                        <p className='fs-6 mb-0'>
                                                            {
                                                                order
                                                                    .shippingAddress
                                                                    .province
                                                            }
                                                        </p>
                                                        <p className='fs-6 mb-1'>
                                                            {
                                                                order
                                                                    .shippingAddress
                                                                    .country
                                                            }
                                                        </p>
                                                        <p className='fs-6 mb-1'>
                                                            {t("order.part15")}{" "}
                                                            :
                                                            {
                                                                order
                                                                    .shippingAddress
                                                                    .zip
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className='fs-5 p-4 pt-0 col-md-4 col-6'>
                                                        <h4 className='fs-4'>
                                                            {t("order.part17")}
                                                        </h4>
                                                        <p className='card-text fs-6 mb-1'>
                                                            {t("order.part5")}:
                                                            {
                                                                order.totalOrderPrice
                                                            }{" "}
                                                            EGP
                                                        </p>
                                                        <p className='card-text fs-6 mb-1'>
                                                            {t("order.part6")}:
                                                            {
                                                                order.paymentMethodType
                                                            }
                                                        </p>{" "}
                                                        <p className='card-text fs-6 mb-1'>
                                                            {t("order.part13")}
                                                            {order.isPaid ? (
                                                                <span className='text-success fs-5'>
                                                                    <FaCheckCircle />
                                                                </span>
                                                            ) : (
                                                                <span className='text-danger fs-5'>
                                                                    <IoMdCloseCircleOutline />
                                                                </span>
                                                            )}{" "}
                                                        </p>
                                                        <p className='card-text fs-6 mb-1'>
                                                            {t("order.part14")}
                                                            {order.isDelivered ? (
                                                                <span className='text-success fs-5'>
                                                                    <FaCheckCircle />
                                                                </span>
                                                            ) : (
                                                                <span className='text-danger fs-5'>
                                                                    <IoMdCloseCircleOutline />
                                                                </span>
                                                            )}
                                                        </p>
                                                    </div>{" "}
                                                    <div className='p-4 pt-4 col-md-4 col-12'>
                                                        <p className='fs-5'>
                                                            {t("order.part20")}{" "}
                                                            :{" "}
                                                            {order.createdAt.substring(
                                                                0,
                                                                10
                                                            )}
                                                        </p>
                                                        <p className='fs-5'>
                                                            {t("order.part21")}:{" "}
                                                            {calculateDeliveryDate(
                                                                order.createdAt
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className='card-title ps-4 fs-2 pt-4 pb-0 item'>
                                                {t("order.part7")}
                                            </h3>
                                            <div>
                                                {order.cartItems?.map(
                                                    (item) => (
                                                        <div
                                                            key={item._id}
                                                            className=' d-flex row border p-1 shadow-sm m-2 rounded-3 align-items-center'
                                                        >
                                                            <div className='col-8'>
                                                                {/* <p className='fs-3'>
                                                        {t("order.part8")}:
                                                        {lang === "en"
                                                            ? item.productId?.en
                                                                  .title
                                                            : item.productId?.ar
                                                                  .title}
                                                    </p> */}
                                                                <Link
                                                                    className='text-decoration-none'
                                                                    to={`/products/${item.productId._id}`}
                                                                >
                                                                    <p className='fs-5 mb-1 fw-bold'>
                                                                        {/* {t("order.part9")}: */}
                                                                        {lang ===
                                                                        "en"
                                                                            ? item
                                                                                  .productId
                                                                                  ?.en
                                                                                  .description
                                                                            : item
                                                                                  .productId
                                                                                  ?.ar
                                                                                  .description}
                                                                    </p>
                                                                </Link>
                                                                <p className='fs-5 m-1'>
                                                                    {/* {t("order.part10")}: */}
                                                                    {item.price}{" "}
                                                                    EGP
                                                                </p>
                                                                <p className='fs-5 mb-1'>
                                                                    {t(
                                                                        "order.part11"
                                                                    )}{" "}
                                                                    :{" "}
                                                                    {
                                                                        item.quantity
                                                                    }
                                                                </p>
                                                            </div>

                                                            <div className='col-4'>
                                                                <img
                                                                    src={
                                                                        item
                                                                            .productId
                                                                            ?.thumbnail
                                                                    }
                                                                    alt={
                                                                        item
                                                                            .productId
                                                                            ?.en
                                                                            .title
                                                                    }
                                                                    className='img-fluid'
                                                                    style={{
                                                                        width: "200px",
                                                                        height: "150px",
                                                                        // objectFit:
                                                                        //     "contain",
                                                                        marginRight:
                                                                            "10px",
                                                                        borderRadius:
                                                                            "12px",
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <h1 className='col-12 text-center'>
                                    {t("order.part12")}
                                </h1>
                            )}
                        </div>
                    </div>
                )
            ) : (
                <div className='container p-4'>
                    <h1 className='col-12 text-center mb-5'>
                        {t("order.part18")}
                    </h1>
                    <div className='d-flex justify-content-center'>
                        <Link to={"../login"} className='account-login shadow'>
                            {t("order.part19")}
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};
export default Order;
