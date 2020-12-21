import React, { createContext, useState } from 'react';

export const ProductosContext = createContext();

const ProductosProvider = (props) => {
  
  const [carro, setCarro] = useState([]);

 const [total, setTotal]= useState({total:0});


  

  //const [lista, setLista] = useState([]);

const [lista, setLista] = useState([
        {codigo:1,descripcion:"Huawei Matebook D 15", precio:15899},
        {codigo:2,descripcion:"Samsung Galaxy S10", precio:13999},
        {codigo:3,descripcion:"Samsung Galaxy A01", precio:1850},
        {codigo:4,descripcion:"Xiaomi Redmi Note 9s", precio:5949},
        {codigo:5,descripcion:"Mochila Xiaomi", precio:699},
        {codigo:6,descripcion:"Teclado Primus Gaming Ballista", precio:1999},
        {codigo:7,descripcion:"Xiaomi Redmi Note 8s", precio:4989},
        {codigo:8,descripcion:"Mochila Targus", precio:999},
        {codigo:9,descripcion:"Teclado Logitech", precio:1489},
    ]);
    
    

  return (
    <ProductosContext.Provider
      value={{
        carro,
        lista,
        setCarro,
        setLista,
        total, setTotal,
        
      }}>
      {props.children}
    </ProductosContext.Provider>
  );
};

export default ProductosProvider;
