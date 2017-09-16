import Axios from 'axios';
export default{
    get(url,callback){
        Axios.get(url).then(res=>{
            callback(res);
        }).catch(err=>{
            console.debug(err)
        })
    }
}