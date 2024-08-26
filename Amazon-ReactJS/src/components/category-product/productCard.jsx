/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Stars } from "../../components/stars/stars";

import "./productCard.css";
export const ProductCard = (props) => {
    const { t } = useTranslation();

    const navigate = useNavigate();
    return (
        <div className='col-lg-3 col-md-4 col-sm-6  col-12'>
            <div className='card text-black my-3 shadow p-3 pb-0'>
                <Link
                    className='text-black text-decoration-none text-left category-product'
                    onClick={() => {
                        navigate(`/products/${props.productID}`);
                    }}
                >
                    <div className='img-container bg-white'>
                        <img
                            src={props.productThumbnail}
                            // style={{
                            //     height: "160px",
                            // }}
                            style={{
                                height: "16rem",
                                // width: "14rem",
                            }}
                            className='card-img-top d-block m-auto pb-2'
                            alt='...'
                        />
                    </div>
                    <div className='card-body p-1 pt-2'>
                        <h5 className='fifty-chars-title '>
                            {props.productTitle}
                        </h5>
                        <div className='product-rating'>
                            {/* {t("categoryPage.part1")}: &nbsp; */}
                            <span>
                                <Stars
                                    starSize={18}
                                    productRating={Math.round(
                                        props.productRating
                                    )}
                                />
                            </span>
                        </div>
                        <p className='price mt-2 d-inline-block p-0'>
                            <sup> EGP </sup>
                            {props.productPrice}
                            <sup> 00</sup>
                            <p
                                className='fw-bold'
                                style={{
                                    color: "red",
                                }}
                            >
                                -{props.productDiscount}
                                &nbsp;%
                            </p>
                        </p>
                        {/* <p className='fifty-chars-description'>
							{props.productDescription}
						</p> */}
                        <p className='text-success fw-bold fs-6'>
                            {" "}
                            {props.productBrand}
                        </p>
                        {/* <Link
                            className='btn btn-success text-decoration-none'
                            to={`/products//${props.id}`}
                        >
                            more Details
                        </Link> */}
                        {/* <button onClick={()=>handelAdd(props)} >jjj</button> */}
                    </div>
                </Link>
            </div>
        </div>
    );
};
