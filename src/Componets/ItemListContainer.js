import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import ScreenLoad from "./ScreenLoad"
import procesadores from "../DataBase/procesadoresAMD.json"


const ItemListContainer = () => {

    const [datosProductos, setdatosProductos] = useState(null)

    useEffect(() => {
        const pidiendoDatosALaAPI = new Promise((res,rej)=>{
            setTimeout(() => { //Simula pedido a una API
                if(procesadores != null){
                    res(procesadores)
                }else{
                    rej('Error')
                }
            },2000)
        })
        pidiendoDatosALaAPI.then(res => setdatosProductos(res))
    },[])

    return (
        <>
        {datosProductos ?
            <>
                <div className="item-container_padding">
                    <ItemList info={datosProductos} />
                </div>
            </>
            :
            <ScreenLoad/>
        }
        </>
    );
}

export default ItemListContainer;