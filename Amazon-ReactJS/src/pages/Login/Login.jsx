import amzonlogo from "../../assets/download.png";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { NavLink } from "react-router-dom";
// import { login } from "../../services/auth";
// import { instance } from "../../services/axios/instance";
import { login } from "../../services/auth";
import { useTranslation } from "react-i18next";

const Login = () => {
    document.title = `Amazon - Login`;
    const body = document.querySelector("body");
    body.classList.remove("bg-body-tertiary");
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
    });
    const navigate = useNavigate();
    const handelChange = (eve) => {
        var regex = /^[a-zA-Z0-9]{2,}(@)(gmail)(.com)$/;

        if (eve.target.name == "email") {
            setUser({ ...user, email: eve.target.value });
            setErrors({
                ...errors,
                emailError:
                    eve.target.value.length == 0
                        ? "Email is Required"
                        : regex.test(eve.target.value)
                        ? ""
                        : "Invalid Email (must contain @ and .come)",
            });
        }
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (errors.emailError || errors.passwordError) {
            toast.error("Validation error, try again", {
                position: "top-center",
            });
        } else {
            try {
                const res = await login(user, { email: user.email });
                if (res.data.message === "valid Email") {
                    // Email exists, navigate to 'loginStep2'
                    navigate("./loginStep2", { state: { Email: user.email } });
                    console.log(res);
                } else {
                    toast.error("Email not found. Please sign up", {
                        position: "top-center",
                    });
                }
            } catch (err) {
                // toast.error("Error during email check or server crashed", {
                //   position: "top-center",
                // });
            }
        }
    };
    const { t } = useTranslation();

    return (
        <>
            <div className='vh-100 '>
                <div className='mask d-flex align-items-center gradient-custom-3'>
                    <div className='container '>
                        <div className='row d-flex justify-content-center '>
                            <NavLink to='/'>
                                <div className='text-center'>
                                    <img src={amzonlogo} className='rounded' />
                                </div>
                            </NavLink>
                        </div>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 '>
                                <div
                                    className='card'
                                    style={{ borderRadius: " 15px" }}
                                >
                                    <div className='card-body'>
                                        <h2>{t("SignIn.part1")}</h2>

                                        <form
                                            autoComplete='off'
                                            onSubmit={(e) => {
                                                handleSubmit(e);
                                            }}
                                        >
                                            <div className='form-outline mb-3'>
                                                <label
                                                    className='form-label '
                                                    htmlFor='form3Example3cg'
                                                    style={{ fontSize: "16px" }}
                                                >
                                                    {t("SignIn.part2")}
                                                </label>
                                                <input
                                                    type='email'
                                                    className={`form-control ${
                                                        errors.emailError
                                                            ? "border-danger shadow-none"
                                                            : ""
                                                    }`}
                                                    id='formGroupExampleInput2'
                                                    name='email'
                                                    required
                                                    placeholder={t(
                                                        "SignIn.part3"
                                                    )}
                                                    value={user.email}
                                                    onChange={(e) => {
                                                        handelChange(e);
                                                    }}
                                                />
                                                <p
                                                    className='text-danger'
                                                    style={{ color: "red" }}
                                                >
                                                    {errors.emailError}
                                                </p>
                                            </div>
                                            <div className='form-outline mb-5'>
                                                <input
                                                    type='submit'
                                                    id='form3Example4cdg'
                                                    className='form-control submit'
                                                    value={t("signUp.part6")}
                                                />
                                            </div>
                                            <div className='form-check d-flex justify-content-center mb-3 ptn'>
                                                <p>
                                                    {t("SignIn.part4")}
                                                    <a href=''>
                                                        {t("signUp.part8")}
                                                    </a>
                                                    <a href=''>
                                                        {t("signUp.part9")}
                                                    </a>
                                                    .
                                                </p>
                                            </div>
                                            <a id='lab'>
                                                <i className='fa-solid fa-arrow-right'></i>
                                                {t("SignIn.part5")}
                                            </a>
                                            <a
                                                id='para'
                                                style={{ display: "none" }}
                                            >
                                                Forgot your password?
                                            </a>
                                            <a
                                                id='par2'
                                                style={{ display: "none" }}
                                            >
                                                Other issues with Sign-In
                                            </a>
                                        </form>
                                        <Toaster />
                                    </div>
                                </div>
                                <h6 id='tex' className='mt-5'>
                                    <span>{t("SignIn.part6")}</span>
                                </h6>
                                <NavLink to='/signUp'>
                                    <button
                                        className='sub p-2 col-12 '
                                        type='submit'
                                    >
                                        {t("SignIn.part7")}
                                    </button>
                                </NavLink>
                                <div className='row'>
                                    <div className='foot mt-5 d-flex pt-3 col-12'>
                                        <a href='../help-page/help.html'>
                                            {" "}
                                            {t("signUp.part12")}
                                        </a>
                                        <a href='../help-page/help.html'>
                                            {" "}
                                            {t("signUp.part13")}{" "}
                                        </a>
                                        <a href='../help-page/help.html'>
                                            {" "}
                                            {t("signUp.part14")}{" "}
                                        </a>
                                    </div>
                                </div>
                                <p
                                    style={{
                                        fontWeight: " lighter",
                                        fontSize: "12px",
                                    }}
                                    className='text-center mt-4'
                                >
                                    {t("signUp.part15")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
