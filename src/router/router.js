import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import Hola from '../components/Hola'
import Contador from '../components/Contador';
import Listado from '../components/Listado';
import Temperatura from '../components/Temperatura';
import Formulario from '../components/Formulario';
import Listadonombres from '../components/Listadonombres';
import Card from '../components/Card';
import UseEf from '../components/useEf';
import AllUsers from '../Grahpql/AllUsers';

import Prueba from '../views/prueba';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<NavBar />}>
                    <Route exact path="/prueba" element={<Prueba />}/>
                    <Route exact path="/prueba/hola" element={<Hola />} />
                    <Route exact path="/prueba/contador" element={<Contador />} />
                    <Route exact path="/prueba/listado" element={<Listado />} />
                    <Route exact path="/prueba/temperatura" element={<Temperatura />} />
                    <Route exact path="/prueba/formulario" element={<Formulario />} />
                    <Route exact path="/prueba/listadonombre" element={<Listadonombres />} />
                    <Route exact path="/prueba/card" element={<Card imagen="https://res.cloudinary.com/dcbzwrn30/image/upload/v1/Gastronomic/upload/images/enterprises/pizza_casera_31391_600_square_eeu7tt" titulo="tareta 1" texto="texto targeta"></Card>} />
                    <Route exact path="/prueba/useEf" element={<UseEf />}>
                        <Route path=":id" element={<UseEf />} />
                    </Route>
                    <Route exact path="/prueba/Usuarios" element={<AllUsers />} />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </div >
    );
}
export default App;