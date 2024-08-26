import React, { useState,useContext } from "react";
import { authContext } from "../../../context/authcontex";

import { Link, NavLink } from "react-router-dom";
import "./footerStyle.css";
import logo from "./amazon-logo.png";
import flag from "./egypt-flag.svg";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { lang, setLang } = useContext(authContext);

  const { t } = useTranslation();

  const changeLanguage = (language) => {
    
    i18n.changeLanguage(language);
    if(language==="ar"){
      setLang("ar")
    }else{
      setLang("en")
    }
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [show, setShow] = useState(true);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <>
      {/*  by eng.hamza mohamed  */}
      <div
        className="container-fluid p-0 "
        style={{ backgroundColor: "#232f3e" }}
      >
        {/* first section back to top button */}
        <div className="bg-secondary text-white text-center  backToTop ">
          <div className="backToTop py-2" onClick={handleScrollToTop}>
            <span className="backToTop "> {t("back.part1")}</span>
          </div>
        </div>
        {/* second section links  */}
        <div
          id="footerSection2"
          className="  container  p-4  "
          style={{ fontSize: "0.9em", backgroundColor: "#232f3e" }}
        >
          <div className=" row my-2  fw-lighter lh-lg text-info">
            <div className="col-lg-3 col-md-6  ">
              <h5 className="text-white">{t("know.part1")}</h5>

              <ul className="list-unstyled">
                <li>
                  <NavLink className="text-white text-decoration-none">
                    {t("know.part2")}
                  </NavLink>
                </li>
                <li>
                  <Link className="text-white text-decoration-none">
                    {t("know.part3")}
                  </Link>
                </li>
                <li>
                  <Link className="text-white text-decoration-none">
                    {t("know.part4")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 ">
              <h5 className="text-white"> {t("shop.part1")}</h5>
              <ul className="list-unstyled">
                <li>
                  <NavLink className="text-white text-decoration-none">
                    {t("shop.part2")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white text-decoration-none">
                    {t("shop.part3")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white text-decoration-none">
                    {t("shop.part4")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white text-decoration-none">
                    {t("shop.part5")}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 ">
              <h5 className="text-white">{t("money.part1")}</h5>
              <ul className="list-unstyled">
                <li>
                  <NavLink className="text-white text-decoration-none">
                    {t("money.part2")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white text-decoration-none">
                    {t("money.part3")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white text-decoration-none">
                    {t("money.part4")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white text-decoration-none">
                    {t("money.part5")}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 ">
              <h5 className="text-white">{t("help.part1")}</h5>
              <ul className="list-unstyled">
                <li>
                  <NavLink className="text-white  text-decoration-none">
                    {t("help.part2")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white text-decoration-none">
                    {t("help.part3")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white text-decoration-none">
                    {t("help.part4")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white text-decoration-none">
                    {t("help.part5")}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* div for creating border bottom */}
        <div className=" border  border-bottom-1 border-secondary border-opacity-25"></div>

        {/* section of language and country and logo */}
        <div className=" d-flex justify-content-center p-0 m-0 w-100">
          <div className=" pt-3 mx-2">
            <Link className="m-4 ">
              <div>
                <img
                  className=" d-none d-lg-flex"
                  width="80"
                  height="25"
                  src={logo}
                  alt="logo"
                />
              </div>
            </Link>
          </div>
          {/* ********************************** */}

          {/* language button */}

          <div className="m-4 text-white border border-secondary">
            <ul className="list-unstyled pt-1 ">
              <li className="nav-item dropdown px-2">
                <Link
                  className="nav-link dropdown-toggle px-2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-globe small "></i>
                  <span className="text small ">{t("changer.language")} </span>
                </Link>
                <ul className="dropdown-menu p-2 fs-6 ">
                  <li>
                    <input
                      type="radio"
                      id="arabic"
                      name="language"
                      onClick={() => changeLanguage("ar")}
                    />
                    <label htmlFor="arabic"> العربية- AR</label>
                  </li>
                  <hr />
                  <li>
                    <input
                      type="radio"
                      id="english"
                      name="language"
                      onClick={() => changeLanguage("en")}
                    />
                    <label htmlFor="english"> English - EN</label>
                  </li>
                  <hr />
                  <p style={{ fontSize: "0.7em" }}>
                    <img src={flag} width="25px" />
                    {t("changer.info")}
                  </p>
                  <p>
                    <Link
                      className="text-primary "
                      style={{ fontSize: "0.7em" }}
                    >
                      {t("changer.cr")}
                    </Link>
                  </p>
                </ul>
              </li>
            </ul>
          </div>

          {/* country button */}
          <div className=" my-4  border border-secondary">
            <Link className="btn  text-black  text-white ">
              <img src={flag} width="25px" className="me-2" />
              {t("changer.country")}{" "}
            </Link>
          </div>
        </div>
        {/* this section is visilble only in large screens */}
        <div
          className="m-0 "
          id="adLinks"
          style={{ fontSize: "0.7em", backgroundColor: "#131A22" }}
        >
          {/* first row of 5 main links */}
          <div className="d-none d-lg-flex justify-content-around mb-3 container pt-2">
            <div className="mx-5 mt-3 ">
              <Link className="text-decoration-none text-white">
                <span className="d-block">{t("adver.span1")}</span>
                <span className="text-secondary d-block">
                {t("adver.span2")}
                </span>
                <span className="text-secondary">{t("adver.span3")}</span>
              </Link>
            </div>
            <div className="mx-5 mt-3 ">
              <Link className="text-decoration-none text-white">
                <span className="d-block">{t("adver.span4")}</span>
                <span className="text-secondary">
                {t("adver.span5")}                
                </span>
                <span className="d-block text-secondary">
                {t("adver.span55")}    
                </span>
              </Link>
            </div>
            <div className="mx-2 mt-3">
              <Link className="text-decoration-none text-white">
                <span className="d-block">{t("adver.span6")}</span>
                <span className="text-secondary">
                {t("adver.span7")}
                  
                </span>
                <span className="d-block text-secondary">
                {t("adver.span77")}    
                </span>
              </Link>
            </div>
            <div className="mx-4 mt-3  ">
              <Link className="text-decoration-none text-white">
                <span className="d-block"> {t("adver.span8")}</span>
                <span className="text-secondary"> {t("adver.span9")}</span>
                <span className="d-block  text-secondary">
                {t("adver.span10")}
                </span>
              </Link>
            </div>
            <div className="mx-4  mt-3">
              <Link className="text-decoration-none text-white">
                <span className="d-block"> {t("adver.span11")}</span>
                <span className="text-secondary d-block">{t("adver.span12")}</span>
                <span className="text-secondary">{t("adver.span13")}</span>
              </Link>
            </div>
          </div>
          {/* end  of first row of 5 main links */}

          {/*  start second row of 5 main links d-xsm-none */}
          <div className="d-none d-lg-flex justify-content-around mt-2  container">
            <div className="">
              <Link className="text-decoration-none">
                <span className="d-block  text-white"> Audible</span>
                <span className="text-secondary d-block">{t("adver2.span1")}</span>
                <span className="text-secondary">  {t("adver2.span2")}</span>
              </Link>
            </div>
            <div className="">
              <Link className="text-decoration-none ">
                <span className="d-block text-white"> IMDb</span>
                <span className="text-secondary d-block">{t("adver2.span3")}</span>
                <span className="text-secondary">{t("adver2.span4")}</span>
              </Link>
            </div>
            <div className="ms-4">
              <Link className="text-decoration-none text-white">
                <span className="d-block">Alexa</span>
                <span className="text-secondary d-block">
                  {t("adver2.span5")}
                </span>
                <span className="text-secondary"> {t("adver2.span6")}</span>
              </Link>
            </div>
            <div className="">
              <Link className="text-decoration-none text-white">
                <span className="d-block">Shopbop</span>
                <span className="text-secondary d-block">{t("adver2.span7")}</span>
                <span className="text-secondary">{t("adver2.span8")}</span>
              </Link>
            </div>
            <div className="m-4"></div>
          </div>
        </div>
        {/* bottom of the page  */}
        <div
          className=" pt-4"
          id="copyRightsSection"
          style={{ fontSize: "0.8em", backgroundColor: "#131A22" }}
        >
          <ul className="list-unstyled d-flex justify-content-center  text-decoration-none m-0">
            <li>
              <Link className="text-white  text-decoration-none">
                {t("copyR.part1")}
              </Link>
            </li>
            <li>
              <Link className="text-white p-3 text-decoration-none">
                {t("copyR.part2")}
              </Link>
            </li>
            <li>
              <Link className="text-white  text-decoration-none">
                {t("copyR.part3")}
              </Link>
            </li>
          </ul>
          <span className="text-center text-white  d-block pb-2">
            {t("copyR.part4")}
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
