import toast from "react-hot-toast";
import { instance } from "./axios/instance";
import { addToCart, removFromCart } from "../Store/Slice/Cart";
// import { useDispatch, useSelector } from "react-redux";

export const login = (data) => {
    return instance.post("api/user/checkEmail", data).catch((error) => {
        if (error.response.status === 404) {
            toast.error("Email not found. Please sign up", {
                position: "top-center",
            });
        }
        throw error;
    });
};

export const registerr = (data) => {
    return instance.post("/api/user/signup", data);
};
