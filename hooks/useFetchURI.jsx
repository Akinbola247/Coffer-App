
import axios from "axios"
import {useQuery} from "react-query"
export default function useFetchURI(uri) {
//  const API=`https://coffer.infura-ipfs.io/api/v0/block/get?arg=QmPVbYh2fZEStA23rtEPgQGhGfeptdow7cswen8znJAK1W`

 const API=`https://ipfs.io/ipfs/${uri}/metadata.json`


 const getUri = async () =>{
    return await axios.get(API).then((res)=>res.data)
 }
//  const stringifiedUri = String(uri)
 const{data, isLoading, isError} = useQuery(['URI',uri], getUri)
 return{data, isLoading, isError}

}

