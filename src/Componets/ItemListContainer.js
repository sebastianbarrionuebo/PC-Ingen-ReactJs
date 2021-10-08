import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import Athom from "../Assets/Athom.png"
import Ryzen3 from "../Assets/Ryzen3.png"
import Ryzen5 from "../Assets/Ryzen5.png"
import Ryzen7 from "../Assets/Ryzen7.png"
import { useParams } from "react-router-dom"



const arr2 = [{id: 1, title:"AMD - Athom", description:"lorem20000", price:8000, pictureUrl:Athom},
{id: 2, title:"AMD - Ryzen3", description:"lorem20000", price:12000, pictureUrl:Ryzen3},
{id: 3, title:"AMD - Ryzen5", description:"lorem20000", price:22000, pictureUrl:Ryzen5},
{id: 4, title:"AMD - Ryzen7", description:"lorem20000", price:32000, pictureUrl:Ryzen7}]

const ItemListContainer = () => {
    const [datosAPI, setdatosAPI] = useState(null)
    
    useEffect(() => {
        const pidiendoDatosALaAPI = new Promise((res,rej)=>{
            setTimeout(() => {
                console.log("Pidiendo datos a la API")
                //Este array simula ser los datos de una API
                const datosDeLaAPI  =   [{id: 1, title:"Producto 1", description:"lorem20000", price:200, pictureUrl:"http://placehold.it/300x200"},
                                        {id: 2, title:"Producto 2", description:"lorem20000", price:200, pictureUrl:"http://placehold.it/300x200"},
                                        {id: 3, title:"Producto 3", description:"lorem20000", price:200, pictureUrl:"http://placehold.it/300x200"},
                                        {id: 4, title:"Producto 4", description:"lorem20000", price:200, pictureUrl:"http://placehold.it/300x200"}]
                if(datosDeLaAPI != null){
                    res(datosDeLaAPI)
                }else{
                    rej('Error')
                }
            },2000)
        })
        pidiendoDatosALaAPI.then(res => setdatosAPI(res))
    },[])

    {/*const resultado = useParams()
    const {id} = resultado
    useEffect(() => {

    },[id])*/}

    return (
        <>
            <ItemList info={arr2} />
        </>
    );
}

export default ItemListContainer;