function stickyCalc (operation, val1, val2){
    let val12 = Math.round(val1)
    let val22 = Math.round(val2)
    let sticky1 = val12.toString()
    let sticky2 = val22.toString()
    let sticky = sticky1 + sticky2
    let normNum = parseInt(sticky)
    
    if (operation == "+") {
        return normNum + val22
    } else if (operation == "-") {
        return normNum - val22
    } else if (operation == "*") {
        return normNum * val22
    } else if (operation == "/") {
        return Math.round(normNum / val22)
    }
}