import { fetchconToken } from "./api";

export const getAllAddress = async () => {
 
    const resp = await fetchconToken('User/adresses');
    //console.log(resp);
    
        if (resp.status === 200) {
            const body = await resp.data;
            //console.log(body);
 
            return body;
        }
        else {
            return null;
        }
    
        
    
}