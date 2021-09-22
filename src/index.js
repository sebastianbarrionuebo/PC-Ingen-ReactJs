// 1)Me traigo la libreria de React
import React from 'react';  //<= (1)

// 2)Me traigo la libreria de React DOM
import ReactDOM from 'react-dom';   //<= (2)

// 3)Genero un componente
import App from './App';
import "./CSS/style.css"

// 4)Renderizo el componente
ReactDOM.render(
  <App/>,
  document.getElementById("root")
)