import axios from 'axios'
import { useState, useEffect } from "react"

const useApi = (link,parameter,users) => {
    const apiLink = link
    const info = users
    const [data, setData] = useState()
    if(parameter==='get'){
        useEffect(() => {
            axios.get(apiLink)
                .then(res=>{setData(res.data)})
                .catch(err => console.log(err))
        }, [])
        
    }
    if(parameter==='post'){
        useEffect(() => {
            axios.post(apiLink,info)
                .then(res=> console.log(res.data))
                .catch(err => console.log(err))
        }, [])
    }


    return {data}

}

export default useApi