import os from "os"
export function space(){
    let umum=(os.totalmem()/1024/1024/1024).toFixed(2)
    let bush=(os.freemem()/1024/1024/1024).toFixed(2)

    return `Umumiy:     ${umum} GB
Bush        :${bush} GB`
}