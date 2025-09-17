import * as amal from "./math.js"
import someName from "./math.js"
let arr=process.argv.slice(2)
if(arr.length<3){
    console.log("Bunda amal(+ * / -) son1 son2 kirtilsin")
    process.exit(1)
}

const [command,n1,n2] =arr
let son1=Number(n1)
let son2=Number(n2)
try{
    if(command=="+"){
        console.log(amal.add(son1,son2))
    }else if(command=="/"){
        console.log(amal.divide(son1,son2))
    }else if(command=="*"){
        console.log(amal.multiply(son1,son2))
    }else if(command=="-"){
        console.log(amal.minus(son1,son2))
    }else{
        console.log(someName(son1,son2))
    }
}catch(err){
    console.error("Xatolik:",err.message)
}