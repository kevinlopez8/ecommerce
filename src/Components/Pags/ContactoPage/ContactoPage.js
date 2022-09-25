import React, {useContext, useEffect} from 'react'
import {db} from '../../../utils/firebase'
import {doc, getDoc} from 'firebase/firestore'

export const ContactoPage = () => {

    useEffect(()=>{
        const getData = async()=>{
            //creamos la referencia
            const query = doc(db, "items", "Dt8qGYEylJUuyy7bGmes");
            //solicitud
            const response = await getDoc(query);
            console.log("response", response )
            console.log("data", response.data)
            const newProduct = {
                ...response.data(),
                id: response.id
            }
            console.log(newProduct)
        }
        getData()
    }, [])

  return (
    <div>ContactoPage</div>
  )
}
