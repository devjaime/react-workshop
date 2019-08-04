import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
//ejemplos con jsx
const name = 'Jaime Hernández';
const elementh1 = <h2>Buen dia, {name}</h2>;
const num1=3;
const num2=45;
//contacto debe ser declarada antes para que funcione datosContacto como función
const contacto = {
  //los saltos de carro con \n no funcionan tampoco si pongo etiquetas de estilo
  //como asume una cadena tampoco podria dividir números numerosdivididos=45/3
  nombre:'Jaime',
  apellido:'Hernández\n',
  mail:'hernandez.hs@gmail.com',
  avatar:'https://devjaime.github.io/images/jaime.png'
};
const max=10;
const min=1
//número random entre 1 y 10 para probar funcionamiento de funciones internas de javascript 
const randomNum=Math.floor(Math.random() * (max - min) + min);
const imgandGif=<img src={contacto.avatar} />;
const elementdiv=<div>
                <h1>Probando JSX</h1>
                Este es un div con elementh1: {elementh1}, 
                multiplicar valores : <h3>{num1*num2}</h3>
                <br/>
                <h1>Objeto con función</h1>
                  Estos son mis datos : {datosContacto(contacto)}
                <h1> Elige el número mayor, condicionantes</h1>
                  Elige el número mayor random : {esMayor(randomNum)} número {randomNum}
                <h1>Incluye imagen o gif animado</h1>
                  Imagen :   {imgandGif}
                </div>

function datosContacto(contacto){
  //los saltos de carro con \n no funcionan tampoco si pongo etiquetas de estilo
  return contacto.nombre + ' y el apellido: \n' + contacto.apellido + ' mail: \n' + contacto.mail;
}
function esMayor(num){
  let devuelte='no cumple condición';
  if (num>5)
    devuelte='es mayor';
  else
    devuelte='es menor';
  return devuelte;
  
}
class App extends Component {
  render() {
    return (
       elementdiv
    );
  }
}

export default hot(module)(App);
