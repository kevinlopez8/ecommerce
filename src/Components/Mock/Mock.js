const productos = [
    {id:'0',
    nombre:'procesador',
    img:'#',
    detalle:"",
    precio:1800,
    stock:30},

    {id:'1',
    nombre:'procesador',
    img:'#',
    detalle:"",
    precio:3000,
    stock:20},

    {id:'2',
    nombre:'procesador',
    img:'#',
    detalle:"",
    precio:2500,
    stock:6},

    {id:'3',
    nombre:'procesador',
    img:'#',
    detalle:"",
    precio:1500,
    stock:10},
    
]

const getFetch = new Promise((respuesta, reject)=>{
    let url = "www.digital-madness.com.ar"

    if (url === 'www.degital-madness.com.ar'){

        setTimeout(()=>{
            respuesta(productos);
        }, 2000);
    }else{
        reject('400 not found')
    }
})

export default getFetch