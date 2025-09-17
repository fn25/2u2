import { indexmain } from "./src/index.js"
let data=process.argv.slice(2)
if(data.length<2){
    console.log("node main.js <filter|sort|ascii|uppercase|lowercase> [1,2,3] shunaqa kirtng")
    process.exit(1)
}
try{
    if(data[0]=="filter"){
        console.log(indexmain().index().filterArray(data[1]))
    }else if(data[0]=="sort"){
        console.log(indexmain().index().sortArray(data[1]))
    }else if(data[0]=="ascii"){
        console.log(indexmain().index2().convertAscii(data[1]))
    }else if(data[0]=="uppercase"){
        console.log(indexmain().index2().uppercase(data[1]))

    }else if(data[0]=="lowercase"){
        console.log(indexmain().index2().lowercase(data[1]))
    }

    }catch(e){
        console.error(e)
    }

