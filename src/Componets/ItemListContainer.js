import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import ScreenLoad from "./ScreenLoad"
import procesadores from "../DataBase/procesadoresAMD.json"


const ItemListContainer = () => {
    {/*const [datosAPI, setdatosAPI] = useState(null)
    useEffect(() => {
        const pidiendoDatosALaAPI = new Promise((res,rej)=>{
            setTimeout(() => {
                console.log("Pidiendo datos a la API")
                //Este array simula ser los datos de una API
                const datosDeLaAPI  =   [{id: 1, title:"AMD - Athom", price:8000, pictureUrl:Athom, categoria:"1", to:"/Item/0", stock:20, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus rerum, mollitia cupiditate explicabo, fugit ratione, ipsam officiis ducimus sit voluptatem dolor ipsum ut suscipit ex vitae vel odit esse."},
                                        {id: 2, title:"AMD - Ryzen3", price:12000, pictureUrl:Ryzen3, categoria:"1", to:"/Item/1", stock:30, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus rerum, mollitia cupiditate explicabo, fugit ratione, ipsam officiis ducimus sit voluptatem dolor ipsum ut suscipit ex vitae vel odit esse."},
                                        {id: 3, title:"AMD - Ryzen5", price:22000, pictureUrl:Ryzen5, categoria:"1", to:"/Item/2", stock:40, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus rerum, mollitia cupiditate explicabo, fugit ratione, ipsam officiis ducimus sit voluptatem dolor ipsum ut suscipit ex vitae vel odit esse."},
                                        {id: 4, title:"AMD - Ryzen7", price:32000, pictureUrl:Ryzen7, categoria:"1", to:"/Item/3", stock:40, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus rerum, mollitia cupiditate explicabo, fugit ratione, ipsam officiis ducimus sit voluptatem dolor ipsum ut suscipit ex vitae vel odit esse."}]
                
                if(datosDeLaAPI != null){
                    res(datosDeLaAPI)
                }else{
                    rej('Error')
                }
            },2000)
        })
        pidiendoDatosALaAPI.then(res => setdatosAPI(res))
    },[])*/}




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