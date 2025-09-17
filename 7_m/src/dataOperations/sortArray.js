export function sortArray(arr){
    arr=JSON.parse(arr)
    return arr.sort((a,b)=>a-b)
}