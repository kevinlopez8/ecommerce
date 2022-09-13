import intelI9 from '../../Images/MockImg/intelI9.jpg'
import intelI7 from '../../Images/MockImg/intelI7.jpg'
import intelI5 from '../../Images/MockImg/intelI5.jpg'
import intelI3 from '../../Images/MockImg/intelI3.jpg'

const productos = [
    {id:'0', nombre:'procesador' , img: intelI9 , detalle:"" , precio:"156,240.00" , stock:30},
    {id:'1', nombre:'procesador' , img: intelI7 , detalle:"" , precio:"99,289.00" , stock:20},
    {id:'2', nombre:'procesador' , img: intelI5 , detalle:"" , precio:"69,899.00" , stock:6},
    {id:'3', nombre:'procesador' , img: intelI3 , detalle:"" , precio:'27,460.00' , stock:10},
]

const getFetch = new Promise((respuesta, reject)=>{
    let url = "www.digital-madness.com"

    if (url === 'www.digital-madness.com'){

        setTimeout(()=>{
            respuesta(productos);
        }, 2000);
    }else{
        reject('400 not found')
    }
})

export default getFetch