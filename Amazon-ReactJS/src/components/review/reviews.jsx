/* eslint-disable react/prop-types */
import ReactStarRating from "react-star-ratings-component";
import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { instance } from "../../services/axios/instance";
import toast from "react-hot-toast";
import { authContext } from "../../context/authcontex";
import { useContext } from "react";
import { Stars } from "../stars/stars";
import Spinner from "react-bootstrap/Spinner";

export const Reviews = (props) => {
    const [loading, setLoading] = useState(true);

    const { isLogin } = useContext(authContext);
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState();
    const [error, setErrors] = useState("");
    const [reloadData, setReloadData] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [key, setKey] = useState(0);
    const [totalRating, setTotalRating] = useState(null); // Set initial totalRating to null
    // const [loading, setLoading] = useState(true);
    const { t } = useTranslation();
    const onChangeHandler = (e) => {
        setErrors(
            e.target.value.length == 0
                ? "review is Required"
                : e.target.value.length < 4
                ? "review must be at least 4 characters"
                : ""
        );
        setMessage(e.target.value);
    };
    const addReview = (e, productId) => {
        e.preventDefault();
        if (isLogin) {
            if (message.length >= 4 && rating != undefined && rating != null) {
                instance
                    .post(
                        "/review",
                        { productId, reviewMessage: message, ratings: rating },
                        {
                            headers: {
                                Authorization:
                                    localStorage.getItem("userToken"),
                            },
                        }
                    )
                    .then((res) => {
                        setMessage("");
                        setKey((prevKey) => prevKey + 1);

                        if (
                            res.data.message ===
                            "You Already added review for this product"
                        ) {
                            toast.error(res.data.message);
                            setKey((prevKey) => prevKey + 1);
                        } else {
                            setReloadData(!reloadData);
                        }
                    });
            } else {
                toast.error(
                    "review must be at least 4 characters and Add rating"
                );
            }
        } else {
            toast.error("You must be login to add a review");
            setKey((prevKey) => prevKey + 1);
            setMessage("");
        }
    };

    useEffect(() => {
        setLoading(true);
        instance.get(`/review/${props.productId}`).then((res) => {
            setReviews(res.data);
            setTotalRating(res.data.rating);
            setLoading(false);
        });
    }, [props.productId, reloadData]);
    return (
        <div key={key}>
            <div className='container p-2 '>
                <h3 className='fw-bold'>{t("ask.part1")}</h3>
                <div className='py-2'>
                    <input
                        type='search'
                        className='form-control'
                        placeholder={t("ask.part2")}
                    ></input>
                </div>
                <ul className='list-unstyled fs-5 text-muted'>
                    <li>{t("ask.part3")}:</li>
                    <li>-{t("ask.part4")} </li>
                    <li>- {t("ask.part5")}</li>
                    <li>-{t("ask.part6")} </li>
                </ul>
            </div>
            <div className='border-top row'>
                <h1 className="mb-0 mt-2">Customer Reviews</h1>
                {/*  third section for ratings and comments  */}
                <div className='col-lg-5 col-md-3 fs-3 p-4'>
                    {/*   rating section   */}
                    {loading ? (
                        <Spinner
                            animation='border'
                            role='status'
                            style={{ color: "#FF9900" }}
                        ></Spinner>
                    ) : (
                        !loading &&
                        totalRating !== null && (
                            <span className='d-inline-block'>
                                <Stars
                                    productRating={Math.round(totalRating)}
                                    starSize={40}
                                />
                            </span>
                        )
                    )}
                    <span className='p-4'>
                        {reviews.rating == null
                            ? ""
                            : `${reviews.rating + " " + t("rev.part15")} 5`}
                    </span>
                    <p className='fs-3'>
                        {reviews.numberOfRatings} {t("rev.part14")}
                    </p>
                    {/* <div className='product-rating p-2'>
                        <h1>{t("rev.part1")}</h1>
                        <i
                            className='fa-solid fa-star'
                            style={{ color: " #f4d84e" }}
                        ></i>
                        <i
                            className='fa-solid fa-star'
                            style={{ color: " #f4d84e" }}
                        ></i>
                        <i
                            className='fa-solid fa-star'
                            style={{ color: " #f4d84e" }}
                        ></i>
                        <i
                            className='fa-solid fa-star'
                            style={{ color: " #f4d84e" }}
                        ></i>
                        <i
                            className='fa-solid fa-star-half-alt'
                            style={{ color: " #f4d84e" }}
                        ></i>
                        <span>4.5 of 5</span>
                        <p className='text-muted small mb-0'>
                            500 - {t("rev.part2")}
                        </p>
                    </div> */}
                    {/* <div className='p-2  pb-4'>
                        <span>5 {t("rev.part3")}:</span>
                        <div className='progress mb-2'>
                            <div
                                className='progress-bar  '
                                role='progressbar'
                                style={{
                                    width: "60%",
                                    backgroundColor: "#FFA41C",
                                }}
                                aria-valuenow='100'
                                aria-valuemin='0'
                                aria-valuemax='100'
                            >
                                60%
                            </div>
                        </div>

                        <span>4 {t("rev.part3")}:</span>
                        <div className='progress mb-2'>
                            <div
                                className='progress-bar  '
                                role='progressbar'
                                style={{
                                    width: "20%",
                                    backgroundColor: "#FFA41C",
                                }}
                                aria-valuenow='80'
                                aria-valuemin='0'
                                aria-valuemax='100'
                            >
                                20%
                            </div>
                        </div>
                        <span>3 {t("rev.part3")}:</span>
                        <div className='progress mb-2'>
                            <div
                                className='progress-bar  '
                                role='progressbar'
                                style={{
                                    width: "7%",
                                    backgroundColor: "#FFA41C",
                                }}
                                aria-valuenow='60'
                                aria-valuemin='0'
                                aria-valuemax='100'
                            >
                                7%
                            </div>
                        </div>
                        <span>2 {t("rev.part3")}:</span>
                        <div className='progress mb-2'>
                            <div
                                className='progress-bar  '
                                role='progressbar'
                                style={{
                                    width: "8%",
                                    backgroundColor: "#FFA41C",
                                }}
                                aria-valuenow='40'
                                aria-valuemin='0'
                                aria-valuemax='100'
                            >
                                8%
                            </div>
                        </div>
                        <span>1 {t("rev.part3")}:</span>
                        <div className='progress '>
                            <div
                                className='progress-bar  '
                                role='progressbar'
                                style={{
                                    width: "5%",
                                    backgroundColor: "#FFA41C",
                                }}
                                aria-valuenow='20'
                                aria-valuemin='0'
                                aria-valuemax='100'
                            >
                                5%
                            </div>
                        </div>
                    </div> */}
                    {/*  */}
                    {/* <div className='border-top mt-2 p-2'>
                        <div>
                            <h4>{t("rev.part4")}</h4>
                            <p className='text-secondary'>{t("rev.part5")}</p>
                        </div>
                        <Link className='btn bg-light border-dark'>
                            {t("rev.part6")}
                        </Link>
                    </div> */}
                </div>
                {/*  comments section  */}
                <div className='col-lg-7'>
                    {/* <select className='my-2'>
                        <option>{t("rev.part7")}</option>
                        <option>{t("rev.part8")}</option>
                    </select> */}
                    {/*   user comment   */}
                    <div className='m-2 p-2'>
                        <form>
                            <ReactStarRating
                                numberOfStar={5}
                                numberOfSelectedStar={0}
                                colorFilledStar='#ff9900'
                                colorEmptyStar='#eee'
                                starSize='40px'
                                spaceBetweenStar='5px'
                                disableOnSelect={false}
                                onSelectStar={(val) => {
                                    setRating(val);
                                }}
                            />
                            <textarea
                                className='p-1 col-8'
                                cols={50}
                                placeholder='enter your review'
                                value={message}
                                onChange={(e) => {
                                    onChangeHandler(e);
                                }}
                            ></textarea>
                            <p className='text-danger'>{error}</p>
                            <button
                                className='btn btn-success'
                                type='submit'
                                onClick={(e) => {
                                    addReview(e, props.productId);
                                }}
                            >
                                {t("rev.part13")}
                            </button>
                        </form>
                        {loading ? (
                            <Spinner
                                animation='border'
                                style={{ color: "#FF9900" }}
                            />
                        ) : (
                            reviews.data?.length > 0 &&
                            reviews.data.map((review, index) => {
                                return (
                                    <div className='d-block p-3' key={index}>
                                        <h6 className='text-dark p-0 m-0 mt-3'>
                                            <p className='d-flex flex-start-0 fw-bold'>
                                                <i className='fa-solid fa-user fa-lg pe-1'></i>
                                                {review.userId.name}
                                            </p>
                                        </h6>
                                        {/* <p className='text-muted small mb-0'>
                                            {t("rev.part9")}
                                        </p> */}

                                        <Stars
                                            starSize={24}
                                            productRating={Math.round(
                                                review.ratings
                                            )}
                                        />
                                        <p className='mt-1 mb-4 fs-5'>
                                            {review.reviewMessage}
                                        </p>
                                        <div className='small d-flex justify-content-start'>
                                            <a
                                                href='#'
                                                className='d-flex align-items-center me-3'
                                                target='_blank'
                                            >
                                                <i className='far fa-thumbs-up me-2'></i>
                                                <p className='mb-0'>
                                                    {t("rev.part10")}
                                                </p>
                                            </a>
                                            <a
                                                href='#'
                                                className='d-flex align-items-center me-3'
                                                target='_blank'
                                            >
                                                <i className='far fa-comment-dots me-2'></i>
                                                <p className='mb-0'>
                                                    {t("rev.part11")}
                                                </p>
                                            </a>
                                            <a
                                                href='#'
                                                className='d-flex align-items-center me-3'
                                                target='_blank'
                                            >
                                                <i className='far fa-comment-dots me-2'></i>
                                                <p className='mb-0'>
                                                    {t("rev.part12")}
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
