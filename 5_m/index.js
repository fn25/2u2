import {space} from "./memory.js"
import {getProcess} from "./process.js"
import {ishVaqt} from "./uptime.js"
export function Allfunction(){
    return {
        memory: space(),
        Process: getProcess(),
        Runtime:  ishVaqt()
    }
}
