import axios from 'axios';

const gets = (url,params)=>{
    return new Promise((resolve,reject)=>{
        axios.get(url,params).then((res)=>{
            resolve(res.data)
        }).catch((err)=>{
            reject(err)
        })
    })
}


export default{
    gets
}
