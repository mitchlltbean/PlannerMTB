//TODO:Create a funtion? using moment.js to given current day and year underneath header

var date = moment().format("MMM Do YYYY");
console.log(date)
$("#currentDay").text(date)


//TODO:use functions? to dynamically change the color of each form element based on current time. 

var currentTime = moment().format('H')
console.log(currentTime)

var timeToday = $("textarea")
console.log(timeToday)
for (var i = 0 ; i < timeToday.length ; i++) {

    //Get element i's ID as a string
    var textId = parseInt($(timeToday[i]).attr("data-h"));
    console.log(textId + "looking here")
    //get element by ID
    
    //console.log(manipID + "hereeeeee")
    //remove any old classes from element
    

    // apply new class if task is present/past/future
    if (textId < currentTime) {
        $(timeToday[i]).addClass("past");
        
    } else if (textId > currentTime) {
        $(timeToday[i]).addClass("future");
    } else {
        $(timeToday[i]).addClass("present");
    }
}







//console.log()

//TODO: a button area(for form submit and local storage)
$("button").click(function(){
    var currentH = $(this).siblings(".col-8").attr("data-h");
    console.log(currentH)

    var saveItem = $("textarea").val();
    

    localStorage.setItem(currentH, saveItem)



})


