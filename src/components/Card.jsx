import React from 'react'

const Card = (props) => {
    const {imagen, titulo, texto} = props
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={imagen} className="card-img-top img-thumbnail" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{texto}</p>
                <a href="https://res.cloudinary.com/dcbzwrn30/image/upload/v1/Gastronomic/upload/images/enterprises/pizza_casera_31391_600_square_eeu7tt" className="btn btn-primary">Ver mas</a>
            </div>
        </div>
    )
}
export default Card
