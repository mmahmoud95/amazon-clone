import React from "react";

import lists from "../../assets/Account-images/11_lists._CB608110873_.png";
import mobileapp from "../../assets/Account-images/mobileapp._CB668209870_.png";
import gateAawy from "../../assets/Account-images/Gateway_icon_YA_Installment_Plan_01._CB628728316_.png";
import address from "../../assets/Account-images/YA_icon_address_01._CB657836742_.png";
import message from "../../assets/Account-images/FS_Message_Centre._CB647329578_.png";
import help from "../../assets/Account-images/YA_icon_Help_1._CB657836742_.png";
import payment from "../../assets/Account-images/payment._CB657847415_.png";
import gift from "../../assets/Account-images/gift_card._CB657847415_.png";
import security from "../../assets/Account-images/security._CB657836742_.png";
import order from "../../assets/Account-images/order._CB657847415_.png";
import contact from "../../assets/Account-images/contact_us._CB665051409_.png";

export const Account = () => {
    return (
        <div>
            <main className='container-fluid'>
                <div className='row pt-3 w-100'>
                    <h2>Your Account</h2>

                    <div className='col-lg-4 col-md-6 mt-4'>
                        <a
                            href='../orders/order.html'
                            className='text-decoration-none text-dark'
                        >
                            <div className='d-flex flex-row ms-1 box p-2'>
                                <img className='w-25 me-3 mb-2' src={order} />
                                <div className='d-flex flex-column justify-content-center'>
                                    <h5>Your Orders</h5>
                                    <p>
                                        Track, return, cancel an order, download
                                        invoice or buy again
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-4'>
                        <a
                            href='../login-page/login.html'
                            className='text-decoration-none text-dark'
                        >
                            <div className='d-flex flex-row ms-1 box p-2'>
                                <img
                                    className='w-25 me-3 mb-2'
                                    src={security}
                                />
                                <div className='d-flex flex-column justify-content-center'>
                                    <h5>Login & security</h5>
                                    <p>
                                        Manage password, email, mobile number,
                                        and security settings
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-4'>
                        <div className='d-flex flex-row ms-1 box p-2'>
                            <img className='me-3 mb-2 w-25' src={security} />
                            <div className='d-flex flex-column justify-content-center'>
                                <h5>Prime</h5>
                                <p>
                                    Manage password, email, mobile number, and
                                    security settings
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-4'>
                        <div className='d-flex flex-row ms-1 box p-2'>
                            <img className='w-25 me-3 mb-2' src={gift} />
                            <div className='d-flex flex-column justify-content-center'>
                                <h5>Your Orders</h5>
                                <p>
                                    Track, return, cancel an order, download
                                    invoice or buy again
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-4'>
                        <div className='d-flex flex-row ms-1 box p-2'>
                            <img className='w-25 me-3 mb-2' src={payment} />
                            <div className='d-flex flex-column justify-content-center'>
                                <h5>Your Orders</h5>
                                <p>
                                    Track, return, cancel an order, download
                                    invoice or buy again
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-4'>
                        <div className='d-flex flex-row ms-1 box p-2'>
                            <img className='w-25 me-3 mb-2' src={help} />
                            <div className='d-flex flex-column justify-content-center'>
                                <h5>Your Orders</h5>
                                <p>
                                    Track, return, cancel an order, download
                                    invoice or buy again
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-4'>
                        <div className='d-flex flex-row ms-1 box p-2'>
                            <img className='w-25 me-3 mb-2' src={message} />
                            <div className='d-flex flex-column justify-content-center'>
                                <h5>Your Orders</h5>
                                <p>
                                    Track, return, cancel an order, download
                                    invoice or buy again
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-4'>
                        <div className='d-flex flex-row ms-1 box p-2'>
                            <img className='w-25 me-3 mb-2' src={address} />
                            <div className='d-flex flex-column justify-content-center'>
                                <h5>Your Orders</h5>
                                <p>
                                    Track, return, cancel an order, download
                                    invoice or buy again
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-4'>
                        <div className='d-flex flex-row ms-1 box p-2'>
                            <img className='w-25 me-3 mb-2' src={gateAawy} />
                            <div className='d-flex flex-column justify-content-center'>
                                <h5>Your Orders</h5>
                                <p>
                                    Track, return, cancel an order, download
                                    invoice or buy again
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-4'>
                        <div className='d-flex flex-row ms-1 box p-2'>
                            <img className='w-25 me-3 mb-2' src={mobileapp} />
                            <div className='d-flex flex-column justify-content-center'>
                                <h5>Your Orders</h5>
                                <p>
                                    Track, return, cancel an order, download
                                    invoice or buy again
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-4'>
                        <div className='d-flex flex-row ms-1 box p-2'>
                            <img className='w-25 me-3 mb-2' src={lists} />
                            <div className='d-flex flex-column justify-content-center'>
                                <h5>Your Orders</h5>
                                <p>
                                    Track, return, cancel an order, download
                                    invoice or buy again
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-4'>
                        <div className='d-flex flex-row ms-1 box p-2'>
                            <img className='w-25 me-3 mb-2' src={contact} />
                            <div className='d-flex flex-column justify-content-center'>
                                <h5>Your Orders</h5>
                                <p>
                                    Track, return, cancel an order, download
                                    invoice or buy again
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </main>
            <section className='container-fluid some-links'>
                <div className='row p-5 pt-3 w-100 mt-2'>
                    <div className='col-lg-4 col-md-6 mt-3'>
                        <div className='ms-1 box p-3'>
                            <p className='h5'>
                                Ordering and shopping preferences
                            </p>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Payments</a>
                                </li>
                                <li>
                                    <a href='#'>Your transactions</a>
                                </li>
                                <li>
                                    <a href='#'>Manage your profiles</a>
                                </li>
                                <li>
                                    <a href='#'>Profile</a>
                                </li>
                                <li>
                                    <a href='#'>Archived orders</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-3'>
                        <div className='ms-1 box p-3'>
                            <p className='h5'>Digital content and devices</p>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href='#'>Digital and device forum</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-3'>
                        <div className='ms-1 box p-3'>
                            <p className='h5'>Email alerts and messages</p>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-3'>
                        <div className='ms-1 box p-3'>
                            <p className='h5'>Subscriptions</p>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href='#'>Email </a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-3'>
                        <div className='ms-1 box p-3'>
                            <p className='h5'>Data and Privacy</p>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-3'>
                        <div className='ms-1 box p-3'>
                            <p className='h5'>Other accounts</p>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                                <li>
                                    <a href='#'>Your Addresses</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
            </section>
        </div>
    );
};
