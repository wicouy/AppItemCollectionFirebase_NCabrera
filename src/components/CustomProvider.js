import { createContext, useContext, useState } from "react";

const contexto = createContext();
const { Provider } = contexto;

export const useCarrito = () => {
    const valor_del_contexto = useContext(contexto)
    return valor_del_contexto
}

const CustomProvider = (props) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([
        {
            id: 1,
            nombre: "Producto 1",
            precio: 100
        }
    ]);
    const [precioTotal, setPrecioTotal] = useState(0);

    const agregarProducto = (producto) => {
        console.log("Soy el contexto!")
        console.log(producto)
        setCantidad(cantidad + producto.cantidad)
        //setPrecioTotal()
    }

    const eliminarProducto = () => { }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const estaEnCarrito = (id) => { }

    const valorDelContexto = {
        cantidad: cantidad,
        carrito: carrito,
        setCantidad,
        setCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}


export default CustomProvider;

// import { createContext, useState } from "react";

// export const contexto = createContext(); 
// const { Provider } = contexto; 


// const CustomProvider = (props) => {

//     /* let cantidad = 0; */
//     const [cantidad, setCantidad] = useState(0);
//     const [carrito, setCarrito] = useState([]);

//     const agregarProducto = (producto) => {
//         //carrito.push()
//         //si estaEnCarrito() entonces...
//         console.log("Soy el contexto!")
//         console.log(producto)
//         //cantidad = cantidad + producto.cantidad;
//         setCantidad(cantidad + producto.cantidad)
//     }

//     const eliminarProducto = () => {}

//     const vaciarCarrito = () => {
//         setCarrito([])
//     }

//     const estaEnCarrito = (id) => {
//         //retrun true/false
//     }
    
//     const valorDelContexto = {
//         cantidad: cantidad,
//         carrito : carrito,
//         agregarProducto,
//         eliminarProducto,
//     }

//     return(
//         <Provider value={valorDelContexto}>
//             {props.children}
//         </Provider>
//     )
// }


// export default CustomProvider;