/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function MonoCard(props) {
    const navigate = useNavigate();

    return (
        <>
            <div className={props.breackPoint}>
                <div className='card p-3  mx-2'>
                    <h5 className='card-title text-truncate ms-1'>{props.title}</h5>
                    <a
                        onClick={() => {
                            navigate(props.navigation);
                        }}
                    >
                        <img
                            src={props.image}
                            className='card-img-top'
                            alt='...'
                            style={{ height: "16rem" }}
                        />
                    </a>
                    <div className='card-body'>
                        <a
                            onClick={() => {
                                navigate(props.navigation);
                            }}
                            className='card-link text-decoration-none'
                        >
                            {props.body}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
