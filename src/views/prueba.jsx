import React from 'react'
import { Link, Outlet } from "react-router-dom";


function prueba() {
  return (
    <div className="prueba">
      <h2>Prueba</h2>
      <ul>
        <li><Link to="hola">hola</Link></li>
        <li><Link to="contador">Contador</Link></li>
        <li><Link to="listado">Listado</Link></li>
        <li><Link to="temperatura">Temperatura</Link></li>
        <li><Link to="formulario">Formulario</Link></li>
        <li><Link to="listadonombre">Listado nombre</Link></li>
        <li><Link to="card">Carta</Link></li>
        <li><Link to="UseEf">Efecto carga</Link></li>
        <li><Link to="Usuarios">Usuarios</Link></li>
        <Outlet />
      </ul>
    </div>
  );
}

export default prueba;