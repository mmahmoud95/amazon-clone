import { Outlet } from "react-router-dom";
import { Header } from "../Navbar/navbar";
import Footer from "../AmazonFooter/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { totalPriceAction } from "../../../Store/Slice/Cart";

const Applayout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(totalPriceAction());
    }, []);
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Applayout;
