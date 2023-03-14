import { fetchconToken } from "./api";

export const getAllProviders = async () => {
 
    const resp = await fetchconToken('Provider');
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