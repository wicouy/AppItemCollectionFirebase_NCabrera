import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CustomLoader from "./CustomLoader"
import ItemList from "./ItemList"
import Page from "./Page"
import { collection, getDocs , query , where } from "firebase/firestore"
import { db } from "../firebase"
import {toast} from "react-toastify"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        if(!id){
            const productosCollection = collection(db, "productos")
            const consulta = getDocs(productosCollection)
    
            consulta
            .then(snapshot=>{
                const productos = snapshot.docs.map(doc=>{
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setProductos(productos)
                setLoading(false)
            })
            .catch(err=>{
                console.log(err)
            })
        }else{
            const productosCollection = collection(db, "Productos")
            const filtro = query(productosCollection,
                where("category","==",id),
                where("stock",">",10))
            const consulta = getDocs(filtro)
    
            consulta
            .then(snapshot=>{
                const productos = snapshot.docs.map(doc=>{
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setProductos(productos)
                setLoading(false)
            })
            .catch(err=>{
                toast.error("Error al cargar los productos")
            })
        }
    }, [id])


    if (loading) {
        return (
            <CustomLoader />
        )
    } else {
        return (
            <Page titulo="Catalogo" subtitulo="Todos los productos en un solo lugar">
                <ItemList productos={productos} />
            </Page>
        )
    }

}
export default ItemListContainer