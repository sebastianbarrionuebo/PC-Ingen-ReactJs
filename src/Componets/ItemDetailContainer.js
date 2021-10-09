import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    const [datosAPI, setdatosAPI] = useState(null)
    
    useEffect(() => {
        const pidiendoDatosALaAPI = new Promise((res,rej)=>{
            setTimeout(() => {
                console.log("Pidiendo datos a la API")
                //Este objeto simula ser los datos de una API
                const datosDeLaAPI  =   {id: 1, title:"Producto 1", descriptiom:"lorem10", price:"200", pictureUrl:"http://placehold.it/300x200"}
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
        {datosAPI ?
            <>
                <ItemDetail info={datosAPI} />
            </>
            :
            <div>Cargando </div>
        }
        </>
    );
}

export default ItemDetailContainer;