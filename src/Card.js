import React from 'react';

const Card = ({image,title,description}) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt="Card image" style={{height:"200px"}} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                   {description}
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default Card;
