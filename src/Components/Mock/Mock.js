import intelI9 from '../../Images/MockImg/intelI9.jpg'
import intelI7 from '../../Images/MockImg/intelI7.jpg'
import intelI5 from '../../Images/MockImg/intelI5.jpg'
import intelI3 from '../../Images/MockImg/intelI3.jpg'
import ryzen9 from '../../Images/MockImg/ryzen9.jpg'
import ryzen7 from '../../Images/MockImg/ryzen7.jpg'
import ryzen5 from '../../Images/MockImg/ryzen5.jpg'
import ryzen3 from '../../Images/MockImg/ryzen3.jpg'


const productos = [
    {id:'0', nombre:'Procesador intel Core I9' , img: intelI9 , detalle:"" , precio:"156,240.00" , stock:30},
    {id:'1', nombre:'Procesador intel Core I7 ' , img: intelI7 , detalle:"" , precio:"99,289.00" , stock:20},
    {id:'2', nombre:'Procesador intel Core I5' , img: intelI5 , detalle:"" , precio:"69,899.00" , stock:6},
    {id:'3', nombre:'Porcesador intel Core I3' , img: intelI3 , detalle:"" , precio:'27,460.00' , stock:10},
    {id:'4', nombre:'Procesador AMD Ryzen 9' , img: ryzen9 , detalle:"" , precio:"145,000.00" , stock:15},
    {id:'5', nombre:'Procesador AMD Ryzen 7' , img: ryzen7 , detalle:"" , precio:"92,300.00" , stock:20},
    {id:'6', nombre:'Procesador AMD Ryzen 5' , img: ryzen5 , detalle:"" , precio:"56,500.00" , stock:6},
    {id:'7', nombre:'Procesador AMD Ryzen 3' , img: ryzen3 , detalle:"" , precio:'21,250.00' , stock:10},
    {id:'8', nombre:'procesador' , img: intelI9 , detalle:"" , precio:"156,240.00" , stock:30},
    {id:'9', nombre:'procesador' , img: intelI7 , detalle:"" , precio:"99,289.00" , stock:20},
    {id:'10', nombre:'procesador' , img: intelI5 , detalle:"" , precio:"69,899.00" , stock:6},
    {id:'11', nombre:'procesador' , img: intelI3 , detalle:"" , precio:'27,460.00' , stock:10},
    {id:'12', nombre:'procesador' , img: intelI9 , detalle:"" , precio:"156,240.00" , stock:30},
    {id:'13', nombre:'procesador' , img: intelI7 , detalle:"" , precio:"99,289.00" , stock:20},
    {id:'14', nombre:'procesador' , img: intelI5 , detalle:"" , precio:"69,899.00" , stock:6},
    {id:'15', nombre:'procesador' , img: intelI9 , detalle:"" , precio:"156,240.00" , stock:30},
    {id:'16', nombre:'procesador' , img: intelI7 , detalle:"" , precio:"99,289.00" , stock:20},
    {id:'17', nombre:'procesador' , img: intelI5 , detalle:"" , precio:"69,899.00" , stock:6},
    {id:'18', nombre:'procesador' , img: intelI3 , detalle:"" , precio:'27,460.00' , stock:10},
    {id:'19', nombre:'procesador' , img: intelI9 , detalle:"" , precio:"156,240.00" , stock:30},
]

const getFetch = new Promise((respuesta, reject)=>{
    let url = "www.digital-madness.com"

    if (url === 'www.digital-madness.com'){

        setTimeout(()=>{
            respuesta(productos);
        }, 3000);
    }else{
        reject('400 not found')
    }
})

export default getFetch