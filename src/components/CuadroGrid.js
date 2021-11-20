import React, { useState } from 'react';
import './cuadro.css';

const Cuadro = (props) => {
    return (
        <div className={props.cuadro} onClick={props.onClick} />
    )
};

const CuadroGrid = () => {
    const arrayUsuario = [];
    const cuadroUno = "cuadro-1";
    const cuadroDos = "cuadro-2";
    const cuadroTres = "cuadro-3";
    const cuadroCuatro = "cuadro-4";

    return (
        <div className="container-grid container-grid-style">
            <Cuadro cuadro={cuadroUno} onClick={() => {arrayUsuario.push(cuadroUno); console.log(arrayUsuario)}} />
            <Cuadro cuadro={cuadroDos} onClick={() => {arrayUsuario.push(cuadroDos); console.log(arrayUsuario)}} />
            <Cuadro cuadro={cuadroTres} onClick={() => {arrayUsuario.push(cuadroTres); console.log(arrayUsuario)}} />
            <Cuadro cuadro={cuadroCuatro} onClick={() => {arrayUsuario.push(cuadroCuatro); console.log(arrayUsuario)}} />
        </div>
    )
};

export default CuadroGrid;
