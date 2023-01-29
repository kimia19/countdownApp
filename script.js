let dayBox = document.getElementById("day");
let hourBox = document.getElementById("hour");
let minBox = document.getElementById("minute");
let secBox = document.getElementById("seconds");
let endDate = new Date(2024,6,4,14,20);
let endTime = endDate.getTime();

function countdown(){
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remain = endTime - todayTime;
    //1sec=1000 milliseconds 
    let oneMinute = 60* 1000;
    let oneHour = 60* oneMinute;
    let oneDay = 24 * oneHour;

    let addZeroes = num => num < 10 ? `0${num}` : num;
    if (endTime< todayTime){
        clearInterval(i);
        document.querySelector(".countdown").innerHTML = `<h1>countdown has finished.</h1>`
    }
    else{
        let daysLeft = Math.floor(remain/oneDay);
        let hoursLeft = Math.floor((remain%oneDay)/oneHour);
        let minsLeft = Math.floor((remain%oneHour)/oneMinute);
        let secLeft = Math.floor((remain%oneMinute)/1000);
        //displaying up value in the appropriate section
        dayBox.textContent = addZeroes(daysLeft);
        hourBox.textContent = addZeroes(hoursLeft);
        minBox.textContent = addZeroes(minsLeft);
        secBox.textContent = addZeroes(secLeft);
    }
}
let i = setInterval(countdown,1000);
countdown();