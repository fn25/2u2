let CaesarCipher=require('./class.js')

const ls=process.argv.slice(2)
if(ls.length<3){
    console.log("Kirtish: node app.js <encode|decode> matn shift")
    process.exit(1)
}
let [cd,matn,son]=ls
try{
    let obj=new CaesarCipher(son)
    if(cd=="encode"){
        console.log(obj.encode(matn))
    }else if(cd="decode"){
        console.log(obj.decode(matn))
    }else{
        console.log("buruq faqat encode|decode")
    }
}catch(err){
    console.error("Xatolik:",err.message)
}