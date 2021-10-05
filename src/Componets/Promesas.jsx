//Promesas: Es un objeto que representa una operacion a futuro con su estado y valo

//const promesa = fetch()

//Estado: Todas las promesas tienen un estado, que puede ser: 
//  Pending: CUandola promesa esta pendiente de ser resuelta o rechazada
//  Resolve/Fulfilled: cuando la promesa se resuelve
//  Rejected: cuando la promesa se rechaza
//Valor/Resultado: Si la promesa termina, el valor/resultado es el valor que se obtiene (puede ser un error tambien el resultado)

/*
const promesa_uno = new Promise((res,rej)=>{
    //res([1,2,3,4,5])
    //rej(new Error("Error"))

    const a = 1
    const b = 2
    const suma = a + b
    if (suma > 2){
            res(suma)
        }else{
            rej("Error")
        }
})
*/

/*
promesa.then((resultado)=>{
    console.log(resultado)
}) //Avisa cuando elcambiosea faborable (pasas a fulfilled)

promesa.catch((error)=>{
    console.log(error)
}) //Avisa cuando pasa a rejected (Rechazado)

promesa.finally(()=>{
    console.log("Finalizado")
}) //Se ejecuta siempre y es cuando termina la promesa
*/









//Callback Hell / Pyramid of Doom:
/*
promesa_uno
.then((resultado)=>{
    const promesa_dos = new Promise((res,rej)=>{
        res(resultado + 1)
    })

    promesa_dos
        .then(()=>{
            const promesa_tres = new Promise((res,rej)=>{
                res(resultado + 1)
            })
            promesa_tres
                .then(...)
        })
        .cath(()=>{

        })
}) 
*/









//Sincronico: Se ejecuta en el mismo momento y bloquea el stack durante toda su ejecucion (bloqueante)

/*Stack 
console.log("")
console.log("")
sincronico() //10" Funcion que deborara 10 seg y despues de eso podra segir ejecutando las siguientes lineas de codigo.
console.log("")
console.log("")
*/ 

//Asincronico: Se ejecuta en diferido y no bloquea el stack(no bloqueante). Todas se ejecutan almismotiempo en paralelo dentro de las WEB APIs

/*Stack                         WEB APIs
console.log("")
console.log("")
    =>                   /*asincronica() //10" JS automaticamente detecta que es una funcion asincronica, la quita y la lleva a otro 
                                       //lugar que no le pertenece a JS(un segundo hilo que le pertenece al navegador) donde se 
                                       //ejecutara esta funcion
console.log("")
console.log("")
*/
/*
//Task Queue  (Cola de espera donde vendran las funciones que teminan de ejecutarse en la WEB APIs y permaneceran aqui hasta que termine de
            // ejecutarse todas las lineas del Stack)
asincronico() => sincronico()

//Task Queue        Stack  
sincronico()  =>    sincronico()*/






/*
//Asincronicos: Son implementados por: Trigger(eventos) - Timers - Requests
//Bucle de eventos (Event Loop): Es el siclo de vida de una aplicacion web

//Timers
setTimeout(()=>{
    console.log("1")
},5000)
setTimeout(()=>{
    console.log("2")
},15000)
setTimeout(()=>{
    console.log("3")
},1000)
console.log("4")
// Se mostrara porpantalla: 4 3 1 2

setTimeout(()=>{
    console.log("1")
},0)
console.log("2")
// Se ejecutara primero el 2
*/






