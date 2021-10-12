import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom';
import procesadores from "../DataBase/procesadoresAMD.json"
import Athom from "../Assets/Athom.png"
import Ryzen3 from "../Assets/Ryzen3.png"
import Ryzen5 from "../Assets/Ryzen5.png"
import Ryzen7 from "../Assets/Ryzen7.png"

const ItemDetailContainer = () => {
    {/*const [datosAPI, setdatosAPI] = useState(null)
    useEffect(() => {
        const pidiendoDatosALaAPI = new Promise((res,rej)=>{
            setTimeout(() => {
                console.log("Pidiendo datos a la API")
                //Este objeto simula ser los datos de una API
                const datosDeLaAPI  =   {id: 1, title:"AMD - Athom", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus rerum, mollitia cupiditate explicabo, fugit ratione, ipsam officiis ducimus sit voluptatem dolor ipsum ut suscipit ex vitae vel odit esse.", price:8000, pictureUrl:Athom, link:"/Item/1"}
                if(datosDeLaAPI != null){
                    res(datosDeLaAPI)
                }else{
                    rej('Error')
                }
            },2000)
        })
        pidiendoDatosALaAPI.then(res => setdatosAPI(res))
    },[])*/}




    const [datosProducto, setdatosProducto] = useState(null)

    const {id} = useParams()

    useEffect(() => {
        const pidiendoDatosALaAPI = new Promise((res,rej)=>{
            setTimeout(() => { //Simula pedido a una API
                const producto = procesadores.find(producto => producto.id == id)
                res(producto)
            },2000)
        })
        pidiendoDatosALaAPI.then(producto => setdatosProducto(producto))
    },[id])

    return (
        <>
            {datosProducto ?
                <>
                    <ItemDetail info={datosProducto} />
                </>
                :
                <div>Cargando </div>
            }
        </>
    );
}

export default ItemDetailContainer;