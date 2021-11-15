import React from 'react'

export default function Usuarios({user: {email, firstName}}) {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Correo: {email}</h4>
                    <p>Nombre: {firstName}</p>
                </div>
            </div>
        </div>
    )
}
