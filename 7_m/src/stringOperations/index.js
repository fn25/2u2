import { UpperCase } from "./changeCase.js"
import { LowerCase } from "./changeCase.js"
import { converAscii } from "./convertToASCII.js"
export function index2(){
    return {
        uppercase : UpperCase,
        lowercase:  LowerCase,
        convertAscii : converAscii
    }
}