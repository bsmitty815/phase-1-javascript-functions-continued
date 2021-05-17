// Your code here
function saturdayFun(saturdayFun="roller-skate") {
   return `This Saturday, I want to ${saturdayFun}!`;
}

let mondayWork = function(workDay="go to the office") {
    return `This Monday, I will ${workDay}.`;
}  

const wrapAdjective = function(symbol="*") {
    return function(adjective="special") {
        return `You are ${symbol}${adjective}${symbol}!`;
    }
}