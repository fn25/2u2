import os from "os"
export function ishVaqt(){
    let sec=os.uptime()
    let hour=Math.floor(sec/3600)
    sec=sec%3600
    let min=Math.floor(sec/60)
    sec=(sec%60).toFixed()
    let hh=String(hour).padStart(2,"0")
    let mm=String(min).padStart(2,"0")
    let ss=String(sec).padStart(2,"0")
    return `${hh}:${mm}:${ss}`
}