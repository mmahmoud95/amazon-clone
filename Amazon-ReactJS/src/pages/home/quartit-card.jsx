/* eslint-disable react/prop-types */
// import {useState, useEffect} from "react";
// import {instance} from "../../services/axios/instance";
import { useNavigate } from "react-router-dom";

export default function QuartitCard(props) {
  // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     instance
    //         .get(`${props.url}?limit=${props.limit}&skip=${props.skip}`)
    //         .then((res) => {
    //             console.log(res.data.data);
    //             setProducts(res.data.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);

	const navigate = useNavigate();

  return (
    <>
      <div className={props.breackPoint} >
        <div className="card px-3 py-4  mx-2 product-curser" >
          <h5 className="card-title text-truncate"
          onClick={() => {
            navigate(`/products/category/${props.navigation}`);
          }}
          >{props.title}</h5>

          <div className="row card-img-top " style={{height:'16rem'}}>
            {/* {products.map((prd)=>
            (
              <img key={prd._id} className="w-50 product-curser" src={prd.thumbnail} alt="" style={{height:'7rem'} }
              onClick={() => {
                navigate(`/products/${prd._id}`);
              }}
             />
            )
            )} */}
            <img className="w-50 pb-1" src={props.image1} alt="" style={{height:'8rem'}}
             onClick={() => {
               navigate(`/products/category/${props.navigation}`);
             }}
            />

            <img className="w-50 pb-1" src={props.image2} alt="" style={{height:'8rem'}}
             onClick={() => {
                navigate(`/products/category/${props.navigation}`);
              }}
            />

            <img className="w-50" src={props.image3} alt="" style={{height:'8rem'}}
            onClick={() => {
                navigate(`/products/category/${props.navigation}`);
              }}
            />

            <img className="w-50" src={props.image4} alt="" style={{height:'8rem'}}
            onClick={() => {
                navigate(`/products/category/${props.navigation}`);
              }}
            />
          </div>
          <div className="card-body pt-2 pb-2 product-curser">
            <a
              onClick={() => {
                navigate(`/products/category/${props.navigation}`);
              }}
              className="card-link text-decoration-none text-truncate"
            >
              {props.body}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
