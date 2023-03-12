import { fetchconToken } from "./api";


 
export const getAllCategories = async () => {
 
    const resp = await fetchconToken('Category');
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