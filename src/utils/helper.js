function compareTime(timeString1, timeString2) {
    let dateTime1 = new Date(timeString1);
    let dateTime2 = new Date(timeString2);
    console.log(timeString1);
    console.log(timeString2);
    if(dateTime1.getTime() > dateTime2.getTime()){
        return true;
    }

    return false
}

module.exports = {
    compareTime
}