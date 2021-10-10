import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import Athom from "../Assets/Athom.png"
import Ryzen3 from "../Assets/Ryzen3.png"
import Ryzen5 from "../Assets/Ryzen5.png"
import Ryzen7 from "../Assets/Ryzen7.png"


const ItemListContainer = () => {
    const [datosAPI, setdatosAPI] = useState(null)
    
    useEffect(() => {
        const pidiendoDatosALaAPI = new Promise((res,rej)=>{
            setTimeout(() => {
                console.log("Pidiendo datos a la API")
                //Este array simula ser los datos de una API
                const datosDeLaAPI  =   [{id: 1, title:"AMD - Athom", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus rerum, mollitia cupiditate explicabo, fugit ratione, ipsam officiis ducimus sit voluptatem dolor ipsum ut suscipit ex vitae vel odit esse.", price:8000, pictureUrl:Athom, link:"/Item/0"},
                                        {id: 2, title:"AMD - Ryzen3", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus rerum, mollitia cupiditate explicabo, fugit ratione, ipsam officiis ducimus sit voluptatem dolor ipsum ut suscipit ex vitae vel odit esse.", price:12000, pictureUrl:Ryzen3, link:"/Item/1"},
                                        {id: 3, title:"AMD - Ryzen5", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus rerum, mollitia cupiditate explicabo, fugit ratione, ipsam officiis ducimus sit voluptatem dolor ipsum ut suscipit ex vitae vel odit esse.", price:22000, pictureUrl:Ryzen5, link:"/Item/2"},
                                        {id: 4, title:"AMD - Ryzen7", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus rerum, mollitia cupiditate explicabo, fugit ratione, ipsam officiis ducimus sit voluptatem dolor ipsum ut suscipit ex vitae vel odit esse.", price:32000, pictureUrl:Ryzen7, link:"/Item/3"}]
                
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
        {datosAPI ?
            <>
                <ItemList info={datosAPI} />
            </>
            :
            <div>
                <h2>Cargando</h2>
            </div>
        }
        </>
    );
}

export default ItemListContainer;