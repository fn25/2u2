import {hisobla} from "./hisob.js"
let list1=process.argv.slice(2)
let buyruq=list1[0]
try{
    if(buyruq=="check-memory"){
        console.log(hisobla())
    }else{
        console.log("Commanda: node app.js check-memory bulsin")
    }
}catch(err){
    console.error("Xatolik:",err.message)
}