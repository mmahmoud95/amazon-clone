import "./help.css";
export const Help = () => {
    return (
        <>
            <section id='sec1' className='pb-5'>
                <div className='p-1 d-flex sec11'>
                    <a href='help.html' className='p-3'>
                        {" "}
                        Customer Service{" "}
                    </a>
                    <div className='div'></div>
                    <a
                        href='../index.html'
                        className='p-3 text-decoration-underline'
                    >
                        Home
                    </a>
                    <a href='help.html' className='p-3'>
                        Digital Services and Device Support
                    </a>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12 info'>
                            <p className='m-2'>
                                <i className='fa-solid fa-circle-info'></i>{" "}
                                <br />
                                Our phone lines are open from 8:00 am to 12
                                midnight Egypt time. You can call us directly at
                                08000262966 to talk to our team. You can also
                                track your orders and deliveries, return a
                                product, and manage your Prime account by
                                clicking on the help resources below.
                            </p>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-12 ques'>
                            <h1
                                style={{ fontSize: "24px" }}
                                className='fw-bold mb-3'
                            >
                                Welcome to your Amazon Customer Service Center
                            </h1>
                            <h2 style={{ fontSize: "18px" }}>
                                What would you like help with today? You can
                                quickly take care of most things here, or
                                connect with us when needed.
                            </h2>
                        </div>
                    </div>
                    <section id='sec2 '>
                        <div className='row mt-4'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <p className='px-1 first'>
                                    <img src='./images/11 fshub_order_v2.png' />
                                    A delivery, order or return
                                </p>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <p className='px-1 first'>
                                    <img src='./images/22fshub_account_v2.png' />
                                    Account Settings and Privacy
                                </p>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <p className='px-1 first'>
                                    <img src='./images/33fshub_prime_v2.png' />
                                    Prime Related,Prime Related
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <p className='px-1 first'>
                                    <img src='./images/44fshub_device_v2.png' />
                                    Kindle,Other Amazon Devices
                                </p>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <p className='px-1 first'>
                                    <img src='./images/45fshub_primevideo_firetv.png' />
                                    Prime Video, Amazon Music
                                </p>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <p className='px-1 first'>
                                    <img src='./images/46fshub_games_software.png' />
                                    Prime Gaming,Prime Gaming
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <p className='px-1 first'>
                                    <img
                                        src='./images/74souq.png '
                                        style={{ width: "20%" }}
                                    />
                                    Souq order related
                                </p>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <p className='px-1 first'>
                                    <img src='./images/77fshub_somethingelse_v3.png' />
                                    Pre-Order Questions
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <section id='sec3'>
                <div className='container pb-5'>
                    <div className='form-outline pt-5 pb-5'>
                        <label
                            className='form-label fw-bolder'
                            for='datatable-search-input'
                        >
                            Search our help library
                        </label>
                        <input
                            type='search'
                            className='form-control'
                            id='datatable-search-input'
                            placeholder="
            Type something like, 'Where's my stuff'"
                        />
                    </div>
                    <h5 className='fw-bold pb-3'>All help topics</h5>
                    <div className='row'>
                        <div className='col-sm-12 col-md-5 col-lg-3'>
                            <ul className='list-group'>
                                <li className='list-group-item'>
                                    <button type='submit' id='vvv'>
                                        Recommended Topics
                                    </button>
                                </li>
                                <li className='list-group-item'>
                                    <button type='submit' id='vvv2'>
                                        Where's my stuff
                                    </button>
                                </li>
                                <li className='list-group-item'>
                                    <button type='submit' id='vvv3'>
                                        Shipping and Delivery
                                    </button>
                                </li>
                                <li className='list-group-item'>
                                    <button type='submit' id='vvv4'>
                                        Returns and Refunds
                                    </button>
                                </li>
                                <li className='list-group-item'>
                                    <button type='submit' id='vvv5'>
                                        Ordering
                                    </button>
                                </li>
                                <li className='list-group-item'>
                                    <button type='submit' id='vvv6'>
                                        Managing Your Account
                                    </button>
                                </li>
                                <li className='list-group-item'>
                                    <button type='submit' id='vvv7'>
                                        Security & Privacyy
                                    </button>
                                </li>
                                <li className='list-group-item'>
                                    <button type='submit' id='vvv8'>
                                        Payment, Pricing and Promotions
                                    </button>
                                </li>
                                <li className='list-group-item'>
                                    <button type='submit' id='vvv9'>
                                        Devices & Digital Solutions
                                    </button>
                                </li>
                                <li className='list-group-item'>
                                    <button type='submit' id='vvv10'>
                                        Other topics & Help sites
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-9 col-md-7 col-sm-12'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-6 mb-4'>
                                    <div className='px-1 first2' id='div1'>
                                        <h3 id='head'>
                                            Check the Status of Your Refund
                                        </h3>
                                        <p id='para'>
                                            You can check the status of your
                                            refund in Your Account
                                        </p>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6 mb-4'>
                                    <div className='px-1 first2' id='div2'>
                                        <h3 id='head2'>
                                            Check the Status of Your Refund
                                        </h3>
                                        <p id='para2'>
                                            You can check the status of your
                                            refund in Your Account
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-6 mb-4'>
                                    <div className='px-1 first2' id='div3'>
                                        <h3 id='head3'>Track your package</h3>
                                        <p id='para3'>
                                            You can find tracking information in
                                            your order details. If an order
                                            includes multiple items, each may
                                            have separate delivery dates and
                                            tracking
                                        </p>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6 mb-4'>
                                    <div className='px-1 first2' id='div4'>
                                        <h3 id='head4'>Cash on Delivery</h3>
                                        <p id='para4'>
                                            You can find tracking information in
                                            your order details. If an order
                                            includes multiple items, each may
                                            have separate delivery dates and
                                            tracking
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-6 mb-4'>
                                    <div className='px-1 first2' id='div5'>
                                        <h3 id='head5'>
                                            Return Items You Ordered
                                        </h3>
                                        <p id='para5'>
                                            You can return many items sold on
                                            Amazon. When you return an item, you
                                            may see different return options
                                            depending on the seller, item, or
                                            reason for return.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6 mb-4'>
                                    <div className='px-1 first2' id='div6'>
                                        <h3 id='head6'>
                                            About Free Shipping by Amazon
                                        </h3>
                                        <p id='para6'>
                                            You can return many items sold on
                                            Amazon. When you return an item, you
                                            may see different return options
                                            depending on the seller, item, or
                                            reason for return.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-6 mb-4'>
                                    <div className='px-1 first2' id='div7'>
                                        <h3 id='head7'>Replace an item</h3>
                                        <p id='para7'>
                                            If you received a damaged,
                                            defective, or incorrect item sold by
                                            Amazon, you can request a
                                            replacement for a small number of
                                            eligible items through Your
                                        </p>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6 mb-4'>
                                    <div className='px-1 first2' id='div8'>
                                        <h3 id='head8'>Print an Invoice</h3>
                                        <p id='para8'>
                                            If you received a damaged,
                                            defective, or incorrect item sold by
                                            Amazon, you can request a
                                            replacement for a small number of
                                            eligible items through Your
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-6'>
                                    <div className='px-1 mt-4' id='div9'>
                                        <button id='last'>
                                            More in Where's my Stuff
                                        </button>
                                        <button id='last2'>
                                            More information on Shipping and
                                            Delivery
                                        </button>
                                        <button id='last3'>
                                            More in Returns and Refunds
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
