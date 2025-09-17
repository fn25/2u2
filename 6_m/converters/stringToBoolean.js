export function ConvertBoolean(kirish) {
    if (typeof kirish !== "string") return "Notog‘ri string"
    const lowerh = kirish.toLowerCase()
    if (lowerh === "true" || kirish === "1") return true
    if (lowerh === "false" || kirish === "0") return false
    return "This isn't changible"
}
