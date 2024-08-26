import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
    removFromCart,
    totalPriceAction,
    udateQuantity,
} from "../../Store/Slice/Cart";
import { ProductCard } from "../../components/category-product/productCard";
import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { authContext } from "../../context/authcontex";
import { useTranslation } from "react-i18next";
// import { instance } from "../../services/axios/instance";
import { instance } from "../../services/axios/instance";
import Spinner from "react-bootstrap/Spinner";
import { Sugessions } from "../../components/sugesstion-producta/sugessions";
import { ProductsSide } from "../../components/pairWitCart/products-pairs";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

export const Cart = () => {
    const navigate = useNavigate();

    const [totalPrice, setTotalPrice] = useState(0);
    let cartPageRedux = useSelector((state) => state.Cart.cart);
    const { lang, setLang } = useContext(authContext);
    const [loading, setLoading] = useState(true);

    // console.log(cartPageRedux[0].quantity);
    // const countRed = useSelector((state) => state.counter.counter);
    const [count, setCount] = useState(1);
    const { isLogin, setLogin } = useContext(authContext);
    const dispatch = useDispatch();
    var handelRemoveRedux = (id) => {
        // console.log(id);
        dispatch(removFromCart(id));
    };
    var handelincreasRedux = (index) => {
        const quantity = cartPageRedux[index].quantity;
        // console.log(quantity);
        let updatequantity = quantity + 1;

        dispatch(udateQuantity({ updatequantity, index }));
        setCount(cartPageRedux[index].quantity);
    };
    var handeldecresRedux = (index) => {
        const quantity = cartPageRedux[index].quantity;
        // console.log(quantity);
        let updatequantity = quantity;
        if (updatequantity > 1) {
            updatequantity = quantity - 1;
            dispatch(udateQuantity({ updatequantity, index }));
            setCount(cartPageRedux[index].quantity);
        }
        // localStorage.setItem("cart", JSON.stringify(cartPage));
        // console.log(JSON.parse(localStorage.getItem("cart")));
        // console.log(updatequantity);
    };
    let total = 0;
    for (const i in cartPageRedux) {
        let price = cartPageRedux[i].product?.price;
        let quantity = cartPageRedux[i].quantity;
        total += price * quantity;
    }

    // console.log(total);
    // let cartPagee;
    /////right side//

    const [cartPage, setCartPage] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const { categoryname } = useParams();
    const [cartProducts, setCartProducts] = useState([]);
    const [cartId, setcartId] = useState("");
    useEffect(() => {
        document.title = `Amazon - Cart`;
        if (isLogin) {
            instance
                .get("cart", {
                    headers: {
                        Authorization: localStorage.getItem("userToken"),
                    },
                })
                .then((res) => {
                    // priductsitemsid = res.data.data[0].items;
                    // console.log(res.data.data.items);
                    setCartPage(res.data.data.items);
                    setcartId(res.data.data._id);
                    // console.log(res.data.data.items);
                    setCartProducts(res.data.data.items);
                    // console.log(cartProducts);
                    setTotalPrice(res.data.data.totalPrice);
                    setLoading(false);
                })
                .catch((error) => {
                    setCartProducts([]);
                    setLoading(false);
                });
        }
    }, [categoryname]);

    var handelincreas = (productId, quantity) => {
        // console.log(productId, quantity);
        if (isLogin) {
            instance
                .patch(
                    `cart/`,
                    {
                        productId: productId,
                        quantity: quantity + 1,
                    },
                    {
                        headers: {
                            Authorization: localStorage.getItem("userToken"),
                        },
                    }
                )
                .then((res) => {
                    // priductsitemsid = res.data.data[0].items;
                    // console.log(res.data.data.items);
                    setTotalPrice(res.data.data.totalPrice);
                    setCartPage(res.data.data.items);
                    // console.log(cartPage);
                });
        }
    };

    var handeldecres = (productId, quantity) => {
        // console.log(productId, quantity);
        if (isLogin && quantity > 1) {
            instance
                .patch(
                    `cart/`,
                    {
                        productId: productId,
                        quantity: quantity - 1,
                    },
                    {
                        headers: {
                            Authorization: localStorage.getItem("userToken"),
                        },
                    }
                )
                .then((res) => {
                    // dispatch(totalPriceAction());
                    setTotalPrice(res.data.data.totalPrice);
                    // priductsitemsid = res.data.data[0].items;
                    // console.log(res.data.data.items);
                    setCartPage(res.data.data.items);
                    // console.log(cartPage);
                });
        }
    };
    const handelRemove = (productId) => {
        if (isLogin) {
            setLoading(true);
            instance
                .delete(`cart/${productId}`, {
                    headers: {
                        Authorization: localStorage.getItem("userToken"),
                    },
                })
                .then((res) => {
                    dispatch(totalPriceAction());
                    // Assuming res.data.data.items is the updated cart after removal
                    const updatedCart = res.data.data.items;
                    setCartPage(updatedCart);
                    setCartProducts(res.data.data.items);
                    setTotalPrice(res.data.data.totalPrice);
                    // Update the local state with the updated cart
                    setLoading(false);

                    console.log(res.data.data.items);
                    // You may also want to update cartProducts if it's derived from cartPage
                    // setCartProducts(updatedCart.map(item => fetchProductData(item.productId)));

                    // Optional: You can log the updated cart for debugging
                    // console.log(updatedCart);
                })
                .catch((error) => {
                    console.error("Error removing product:", error);
                });
        }
    };

    // console.log(cartProducts);

    /////
    const { t } = useTranslation();
    return (
        <>
            {isLogin ? (
                <section className='container-fluid bg-light p-4'>
                    <div className='row'>
                        <div className='col-md-8 bg-white p-5 pt-3 shadow'>
                            {isLogin ? (
                                <span>
                                    <div className='head-cart mb-0'>
                                        <h3>{t("cart.part2")}</h3>
                                        <a
                                            href='#'
                                            className='deselect text-decoration-none'
                                        >
                                            {/* {t("cart.part3")} */}
                                        </a>
                                    </div>
                                    <hr />
                                </span>
                            ) : null}

                            {isLogin ? (
                                loading ? (
                                    <div className='m-auto d-flex vh-100'>
                                        <Spinner
                                            className='m-auto'
                                            animation='border'
                                            role='status'
                                            style={{ color: "#ff9900" }}
                                        ></Spinner>
                                    </div>
                                ) : cartProducts?.length > 0 ? (
                                    cartProducts?.map((item, index) => (
                                        <div className='row' key={index}>
                                            <div className='item col-md-3 col-sm-12 d-flex align-items-center'>
                                                <div className='mt-3 mb-3'>
                                                    <Link
                                                        to={`/products/${item.productId._id}`}
                                                    >
                                                        <img
                                                            className='w-100'
                                                            width='500px'
                                                            src={
                                                                item?.productId
                                                                    ?.thumbnail
                                                            }
                                                        />
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className='col-md-7 col-sm-12 justify-content-center flex-column mt-3 mb-3'>
                                                <h5>
                                                    <Link
                                                        className='text-black text-decoration-none fw-bold'
                                                        to={`/products/${item.productId._id}`}
                                                    >
                                                        {lang === "en"
                                                            ? item.productId.en
                                                                  ?.description
                                                            : item.productId.ar
                                                                  ?.description}
                                                    </Link>
                                                </h5>
                                                <p className='price h5'>
                                                    EGP: {item.price}
                                                </p>

                                                <p className='stock'>
                                                    DiscountPercentage:
                                                    {
                                                        item.productId
                                                            .discountPercentage
                                                    }
                                                </p>
                                                <p className='stock'>
                                                    stock:
                                                    {
                                                        item.productId
                                                            .quantityInStock
                                                    }
                                                </p>
                                                <div className='mt-3'>
                                                    <ul className='list-unstyled d-flex flex-row list align-items-center'>
                                                        <li className='h-100'>
                                                            <div>
                                                                <button
                                                                    className='btn btn-dark'
                                                                    aria-label='Increment value'
                                                                    onClick={() =>
                                                                        handelincreas(
                                                                            item
                                                                                .productId
                                                                                ._id,
                                                                            cartPage[
                                                                                index
                                                                            ]
                                                                                .quantity
                                                                        )
                                                                    }
                                                                >
                                                                    +
                                                                </button>
                                                                <span>
                                                                    {" "}
                                                                    {t(
                                                                        "cart.part5"
                                                                    )}{" "}
                                                                    {cartPage?.length >
                                                                    0
                                                                        ? cartPage[
                                                                              index
                                                                          ]
                                                                              ?.quantity
                                                                        : "0"}{" "}
                                                                </span>{" "}
                                                                <button
                                                                    className='btn btn-dark'
                                                                    aria-label='Decrement value'
                                                                    onClick={() =>
                                                                        handeldecres(
                                                                            item
                                                                                .productId
                                                                                ._id,
                                                                            cartPage[
                                                                                index
                                                                            ]
                                                                                .quantity
                                                                        )
                                                                    }
                                                                >
                                                                    -
                                                                </button>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className='text-decoration-none me-2'
                                                                onClick={() =>
                                                                    handelRemove(
                                                                        item
                                                                            .productId
                                                                            ._id
                                                                    )
                                                                }
                                                            >
                                                                {t(
                                                                    "cart.part4"
                                                                )}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <p className='total-price fw-bold'>
                                                        {/* {t("cart.part8")} : EGP{" "} */}
                                                    </p>
                                                </div>
                                            </div>

                                            <hr />
                                        </div>
                                    ))
                                ) : (
                                    <p
                                        className='text-center mt-5'
                                        style={{ fontSize: "22px" }}
                                    >
                                        {t("cart.part1")}
                                    </p>
                                )
                            ) : (
                                <div className='text-center mt-5'>
                                    <h4>{t("cart.part1")}</h4>
                                    <Link
                                        to='/login'
                                        className='btn rounded-pill bg-warning'
                                    >
                                        <span className='pe-2'>
                                            {t("cart.part9")}
                                        </span>
                                    </Link>
                                    <Link
                                        to='/signup'
                                        className='btn rounded-pill bg-light'
                                    >
                                        <span className='pe-2'>
                                            {t("cart.part10")}
                                        </span>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* right side */}
                        <div className='col-md-3 p-0 mx-md-4 my-2 my-md-0'>
                            {isLogin ? (
                                cartPage?.length > 0 ? (
                                    <div className='shadow p-3 bg-white mb-2'>
                                        <p className='total-cart'>
                                            <IoCheckmarkCircleSharp className='text-primary fs-5' />
                                            {t("cart.part11")}
                                            <a href='#'>{t("cart.part12")}</a>
                                        </p>
                                        {/* {cartPage .map((product, index) => ( */}
                                        <p className='total-price'>
                                            {t("cart.part8")} ({cartPage.length}
                                            {t("cart.part13")}) :{" "}
                                            <span className='price'>
                                                {totalPrice}
                                            </span>
                                        </p>
                                        {/* // ))} */}
                                        <button
                                            className='to-buy d-inline-block text-decoration-none text-info'
                                            onClick={() =>
                                                navigate("/checkout", {
                                                    state: {
                                                        product: cartPage,
                                                        totalPrice: totalPrice,
                                                        cartID: cartId,
                                                    },
                                                })
                                            }
                                        >
                                            {t("cart.part14")}
                                        </button>
                                    </div>
                                ) : null
                            ) : null}
                            <div className='shadow p-3 bg-white'>
                                <h5>
                                    <strong>{t("sugesstion.part1")}</strong>
                                </h5>
                                {/* <div className='row'> */}
                                <ProductsSide />
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <section className='container-fluid bg-light p-4'>
                    <div className='row'>
                        <div className='col-md-8 bg-white p-5 pt-3 shadow'>
                            <span>
                                <div className='head-cart mb-0'>
                                    <h3>{t("cart.part2")}</h3>
                                    <a
                                        href='#'
                                        className='deselect text-decoration-none'
                                    >
                                        {t("cart.part3")}
                                    </a>
                                </div>
                                <hr />
                            </span>
                            {cartPageRedux?.length > 0 ? (
                                cartPageRedux.map((item, index) => (
                                    <div className='row' key={index}>
                                        <div className='item col-md-3 col-sm-12 d-flex align-items-center'>
                                            <div className='mt-3 mb-3'>
                                                <Link
                                                    className='text-black text-decoration-none fw-bold'
                                                    to={`/products/${item.product?._id}`}
                                                >
                                                    <img
                                                        className='w-100'
                                                        width='500px'
                                                        src={
                                                            item.product
                                                                ?.thumbnail
                                                        }
                                                    />
                                                </Link>
                                            </div>
                                        </div>

                                        <div className='col-md-7 col-sm-12 justify-content-center flex-column mt-3 mb-3'>
                                            <h5>
                                                <Link
                                                    className='text-black text-decoration-none fw-bold'
                                                    to={`/products/${item.product?._id}`}
                                                >
                                                    {lang === "en"
                                                        ? item.product?.en
                                                              .description
                                                        : item.product?.ar
                                                              .description}
                                                </Link>
                                            </h5>
                                            <p className='price h5'>
                                                EGP: {item.product?.price}
                                            </p>

                                            <p className='stock'>
                                                DiscountPercentage:
                                                {
                                                    item.product
                                                        ?.discountPercentage
                                                }
                                            </p>
                                            <p className='stock'>
                                                stock:
                                                {item.product?.quantityInStock}
                                            </p>
                                            <div className='mt-3'>
                                                <ul className='list-unstyled d-flex flex-row list align-items-center'>
                                                    <li className='h-100'>
                                                        <div>
                                                            <button
                                                                className='btn btn-dark'
                                                                aria-label='Increment value'
                                                                onClick={() =>
                                                                    handelincreasRedux(
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                +
                                                            </button>
                                                            <span>
                                                                {" "}
                                                                {t(
                                                                    "cart.part5"
                                                                )}
                                                                {
                                                                    cartPageRedux[
                                                                        index
                                                                    ].quantity
                                                                }{" "}
                                                            </span>
                                                            <button
                                                                className='btn btn-dark'
                                                                aria-label='Decrement value'
                                                                onClick={() =>
                                                                    handeldecresRedux(
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                -
                                                            </button>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href='#'
                                                            className='text-decoration-none me-2'
                                                            onClick={() =>
                                                                handelRemoveRedux(
                                                                    item.product
                                                                )
                                                            }
                                                        >
                                                            {t("cart.part4")}
                                                        </a>
                                                    </li>
                                                </ul>
                                                <p className='total-price fw-bold'>
                                                    {/* {t("cart.part8")}: EGP{" "} */}
                                                    {/* {item.product?.price *
                                                        cartPageRedux[index]
                                                            .quantity} */}
                                                </p>
                                            </div>
                                        </div>

                                        <hr />
                                    </div>
                                ))
                            ) : (
                                <p
                                    className='text-center mt-5'
                                    style={{ fontSize: "22px" }}
                                >
                                    {t("cart.part1")}
                                </p>
                            )}
                        </div>

                        {/* right side */}
                        <div className='col-md-3 p-0 mx-md-4 my-2 my-md-0'>
                            {cartPageRedux?.length > 0 ? (
                                <div className='shadow p-3 bg-white mb-2'>
                                    <p className='total-cart'>
                                        <IoCheckmarkCircleSharp className='text-primary fs-5' />{" "}
                                        {t("cart.part11")}{" "}
                                        <a href='#'>{t("cart.part12")}</a>
                                    </p>
                                    {/* {cartPage .map((product, index) => ( */}
                                    <p className='total-price'>
                                        {t("cart.part8")} (
                                        {cartPageRedux.length}{" "}
                                        {t("cart.part13")}) :
                                        <span className='price'>{total}</span>
                                    </p>
                                    {/* // ))} */}
                                    <button
                                        className='to-buy d-inline-block text-decoration-none text-info'
                                        onClick={() => navigate("/login")}
                                        // disabled={!isLogin}
                                    >
                                        {t("cart.part14")}
                                    </button>
                                </div>
                            ) : null}
                            {
                                <div className='shadow p-3 bg-white'>
                                    <h3>{t("sugesstion.part1")}</h3>
                                    <ProductsSide />
                                </div>
                            }
                        </div>
                    </div>
                </section>
            )}
            <Sugessions number={8} col={3} />
        </>
    );
};
