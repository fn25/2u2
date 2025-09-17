export function ConvertObject(ls) {
    try {
        let arr
        if (typeof ls === "string") {
            try {
                arr = eval("(" + ls + ")")  
            } catch {
                throw new Error("Eval xato variant")
            }
        } else {
            arr = ls
        }

        if (!Array.isArray(arr)) throw new Error("Massiv emas")
        return Object.fromEntries(arr)
    } catch (e) {
        return  "node main.js Array '[['name','val']]' "
    }
}
