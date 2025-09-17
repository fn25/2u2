export function converAscii(arr){
    try{
        if(typeof arr=="string"){
            try{
                arr=JSON.parse(arr)
            }catch{
                arr=eval("("+arr+")")
            }
        }
        if(!Array.isArray(arr)){
            throw new Error("Massiv kirtng")
        }
    
    let res=""
    for(let i of arr){
            let code=(i-1+26)%26
            res+=String.fromCharCode(code+65)
            
        
    }

    return res
}catch(e){
        return "Xato"+e.message
       }
}