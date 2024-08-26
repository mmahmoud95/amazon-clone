/* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
// import { instance } from "../../services/axios/instance";
import { useNavigate } from "react-router-dom";

import CaraouselItem from "./caraousel-item";

export default function SecondSlider(props) {
  
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid px-4  py-2  d-none d-lg-block d-xl-block">
        <div
          id={props.id}
          className="carousel slide position-relative bg-white ms-2 ">
          <h5 className="px-4 pt-3 fw-bold product-curser">
            <span className="pe-3 fs-4"
            
            onClick={() => {
              navigate(props.navigation);
          }}
          >{props.title1}</span>
            <span>
              <a  className="text-decoration-none fs-5"
               onClick={() => {
                navigate(props.navigation);
            }}
              >
                {props.title2}
               
              </a>
            </span>
          </h5>

          <div className="carousel-inner">
          <div className="carousel-item active">
          <CaraouselItem
          url={props.url}
          skip={props.skip1}
          limit={props.limit1}
            />
          </div>

          <div className="carousel-item">
          <CaraouselItem
          url={props.url}
           skip={props.skip2}
           limit={props.limit2}
            />
          </div>
          <div className="carousel-item">
          <CaraouselItem
          url={props.url}
          skip={props.skip3}
          limit={props.limit3}
            />
          </div>
            
          </div>


          <button
            className="carousel-control-prev position-absolute top-50 start-0 translate-middle btn-slider ms-3 mt-4 "
            type="button"
            data-bs-target={"#"+props.id}
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon slider2-PrevIcon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next position-absolute top-50 end-0 translate-middle-y btn-slider mt-4"
            type="button"
            data-bs-target={"#"+props.id}
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon slider2-NextIcon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
