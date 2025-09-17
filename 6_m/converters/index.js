import { ConvertObject } from "./arrayToObject.js"
import { converArray } from "./objectToArray.js"
import { ConvertBoolean } from "./stringToBoolean.js"

export function index() {
    return {
        ArrayToObject: ConvertObject,
        ObjectToArray: converArray,
        StringToBoolean: ConvertBoolean
    }
}
