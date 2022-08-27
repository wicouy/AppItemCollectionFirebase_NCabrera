import Contador from "./Contador"
const ItemDetail = ({ item }) => {

    const { agregarProducto } = useCarrito()

    const onAdd = (contador) => {
        item.cantidad = contador
        agregarProducto(item)
    }

    return (
        <> 
        <h1>El repartidor se comio la comida pero de regalo le vamos a dar esta cosa </h1>
        <p>---------------------------------------------------------------------------------</p>
        <div className="detail-image-contenedor" >
            <h1>{item.title}</h1>
            <img className="detail-image" src={item.image} alt="" />
            <p>{item.description}</p>
            <Contador onAdd={onAdd} />
        </div>
        </>
    )
}


export default ItemDetail