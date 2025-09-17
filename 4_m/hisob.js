import os from "os"
export function hisobla(){
    let bush=(os.freemem()/1024/1024/1024).toFixed(2)
    let umum=(os.totalmem()/1024/1024/1024).toFixed(2)
    let foiz=((umum-bush/umum)*100).toFixed(2)
    return `Umumiy: ${umum}GB
    Ishlatilgan: ${ish} GB
    Ishlatilish foizi: ${foiz}`
}

