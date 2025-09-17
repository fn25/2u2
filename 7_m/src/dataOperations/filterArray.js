export function filterArray(arr) {
    arr=JSON.parse(arr)
    return arr.filter(x=>x>=4)
}