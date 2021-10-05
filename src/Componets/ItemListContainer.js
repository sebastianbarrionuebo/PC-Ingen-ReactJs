import ItemList from "./ItemList"
import { useState, useEffect } from "react"

const ItemListContainer = () => {
    const [datosAPI, setdatosAPI] = useState(null)
    
    useEffect(() => {
        const pidiendoDatosALaAPI = new Promise((res,rej)=>{
            setTimeout(() => {
                console.log("Pidiendo datos a la API")
                //Este array simula ser los datos de una API
                const datosDeLaAPI  =   [{title:"Producto 1", description:"lorem20000", price:"{200}", pictureUrl:"http://placehold.it/300x200"},
                                        {title:"Producto 2", description:"lorem20000", price:"{200}", pictureUrl:"http://placehold.it/300x200"},
                                        {title:"Producto 3", description:"lorem20000", price:"{200}", pictureUrl:"http://placehold.it/300x200"},
                                        {title:"Producto 4", description:"lorem20000", price:"{200}", pictureUrl:"http://placehold.it/300x200"}]
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