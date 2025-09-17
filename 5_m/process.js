export function getProcess(){
    return {
        pid: process.pid,
        platform: process.platform,
        nodeVersion: process.version,
        cwd: process.cwd()
    }
}