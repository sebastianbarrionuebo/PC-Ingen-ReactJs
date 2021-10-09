import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom';
import Athom from "../Assets/Athom.png"
import Ryzen3 from "../Assets/Ryzen3.png"
import Ryzen5 from "../Assets/Ryzen5.png"
import Ryzen7 from "../Assets/Ryzen7.png"

const ItemDetailContainer = () => {
    const [datosAPI, setdatosAPI] = useState(null)
    
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
    },[])



    const [datosProd, setdatosProd] = useState(null)
    const resultado = useParams()
    const {id} = resultado
    {/*useEffect(() => {
        switch (resultado.id) {
            case "1":
                setdatosProd(datosAPI[0])
            break;
            case "2":
                setdatosProd(datosAPI[1])
            break;
            case "3":
                setdatosProd(datosAPI[2])
            break;
            case "4":
                setdatosProd(datosAPI[3])
            break;
        
            default:
        break;
        }
    },[id])*/}


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