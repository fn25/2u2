import test from "node:test"
import { index } from "./converters/index.js"

let ls = process.argv.slice(2)
let qism = index()

try {
    if (ls[0] === "Object") {
        console.log(qism.ObjectToArray(ls[1]))
    } else if (ls[0] === "Array") {
        console.log(qism.ArrayToObject(ls[1]))
    } else if (ls[0] === "String") {
        console.log(qism.StringToBoolean(ls[1]))
    } else if (ls[0] === "Boolean") {
        console.log(qism.StringToBoolean(ls[1]))
    } else {
        console.log("node main.js argument kiritng")
    }
} catch (er) {
    console.error("Xatolik:", er.message)
}
// test
// node main.js Array "[['name','val']]"
// node main.js Object "{name:'John'}"
// node main.js String "0"

