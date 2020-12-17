//TODO:Create a funtion? using moment.js to given current day and year underneath header

var date = moment().format("MMM Do YYYY");
console.log(date)
$("#currentDay").text(date)



//TODO:create the HTML elements make up. bootstrap row and coulums to contain an area for time(static text) an area for textinput(in a form to be saved later) and a button area(for form submit and local storage)
var currentTime = moment().format('H')
console.log(currentTime)

var timeToday = $("textarea")

for (var i = 0 ; i < timeToday.length ; i++) {

    //Get element i's ID as a string
    var textId = timeToday[i].id;
    console.log(textId)
    //get element by ID
    var manipID = document.getElementById(timeToday[i].id)

    //remove any old classes from element
    

    // apply new class if task is present/past/future
    if (textId < currentTime) {
        $(manipID).addClass("past");
    } else if (textId > currentTime) {
        $(manipID).addClass("future");
    } else {
        $(manipID).addClass("present");
    }
}



//TODO:use functions? to dynamically change the color of each form element based on current time. 