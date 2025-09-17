export function converArray(obj) {
    try {
        if (typeof obj === "string") {
            try {
                obj = JSON.parse(obj)
            } catch {
                obj = eval("(" + obj + ")")
            }
        }
        if (obj === null || typeof obj !== "object") {
            throw new Error("Object kiriting")
        }
        return Object.entries(obj)
    } catch (er) {
        return "Notogri object"
    }
}
