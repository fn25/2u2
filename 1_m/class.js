// class CaesarCipher{
//     constructor(shift){
//         if(shift>0 && shift<27){
//             this.shift=shift
//         }else{
//             throw new Error("Shift qiymati [1,26] oraliqda")
//         }
//     }
//     encode(suz){
//         let res=""
//         for(let i of suz){
//             let aski=i.charCodeAt(0)
//             if(aski>=65 && aski<=90){
//                 aski+=this.shift
//                 if(aski>90){
//                     aski -=26}
//             }else if(aski>=97 && aski<=122){
//                 aski+=this.shift
//                 if(aski>122){
//                     aski-=26
//                 }
//             }
//             res +=String.fromCharCode(aski)
//         }
//         return res
//     }
//     decode(kode){
//         let result=""
//         for(let j of kode){
//             let asci=j.charCodeAt(0)
//             if(asci>=65 && asci<=90){
//                 asci -=this.shift
//                 if(asci<65){
//                     asci +=26
//                 }
//             }else if(asci>=97 && asci<=122){
//                 asci -=this.shift
//                 if(asci<97){
//                     asci +=26
//                 }
//             }
//             result +=String.fromCharCode(asci)
//         }
//         return result
//     }
// }
// module.exports=CaesarCipher

class Caesar {
  constructor(shift) {
    if (shift < 1 || shift > 26) {
      throw new Error("Shift  [1,26] bula oladi")
    }
    this.shift = shift
  }

  
  shiftChar(char, shift) {
    const katta = char >= "A" && char <= "Z"
    const kicik = char >= "a" && char <= "z"

    if (!katta && !kicik) return char

    const basic = katta ? "A".charCodeAt(0) : "a".charCodeAt(0)
    const code = char.charCodeAt(0) - basic
    const code2 = (code + shift + 26) % 26
    return String.fromCharCode(basic + code2)
  }

  encode(text) {
    return text
      .split("")
      .map((x) => this.shiftChar(x, this.shift))
      .join("")
  }

  decode(text) {
    return text
      .split("")
      .map((t) => this.shiftChar(t, -this.shift))
      .join("")
  }
  
}
module.exports = Caesar
