import React from 'react'


var axios = require("axios")

function coletar(){
  axios.get('https://sheetdb.io/api/v1/x8d3ojug32zca', {
      "auth": {
        "username": "4t25lu1l",
        "password": "gdehwaqkwcoiv8flyi15"
      }
  })
   .then( response => {
        console.log(response.data);
    });
}

function Item() {
    return (

        
        <li>
        <h2>OVO M</h2>
        <span>R$ 10,00</span>
        <button>ADICIONAR</button>
        </li>
    )
}

export default Item