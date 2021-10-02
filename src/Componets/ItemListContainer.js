import ItemList from "./ItemList"
import { useState, useEffect } from "react"

const ItemListContainer = () => {
    const [datosAPI, setdatosAPI] = useState(null)
    
    useEffect(() => {
        const pidiendoDatosALaAPI = new Promise((res,rej)=>{
            setTimeout(() => {
                console.log("Pidiendo datos a la API")
                //Este array simula ser los datos de una API
                const datosDeLaAPI  =   [{id: 1, name:"Producto 1"},
                            {id: 1, name:"Producto 2"},
                            {id: 1, name:"Producto 3"},
                            {id: 1, name:"Producto 4"}]
                if(datosDeLaAPI != null){
                    res(datosDeLaAPI)
                }else{
                    rej('Error')
                }
            },2000)
        })
        pidiendoDatosALaAPI.then(res => setdatosAPI(res))
    },[])


    return (
        <>
            <ItemList props={datosAPI} />
        </>
    );
}

export default ItemListContainer;