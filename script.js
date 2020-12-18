//TODO:Create a funtion? using moment.js to given current day and year underneath header


var currentHour = new Date().getHours()
//console.log(date)
//$("#currentDay").text(date)


//TODO:use functions? to dynamically change the color of each form element based on current time. 

var date = new Date().toLocaleDateString()
$("#currentDay").text(date)
//console.log(currentTime)

var timeToday = $("button")
console.log(timeToday)



for (var i = 9 ; i < 18 ; i++) {
    

    if (i < currentHour) {
        $("#id-" + i).addClass("past");
        
    } else if (i >currentHour) {
        $("#id-" + i).addClass("future");
    } else {
        $("#id-" + i).addClass("present");
    }
}







//console.log()

//TODO: a button area(for form submit and local storage)
$("button").click(function(){
    var currentH = $(this).attr("data-h");
    console.log(currentH)

    var saveItem = $("#id-" + currentH).val();
    

    localStorage.setItem(currentH, saveItem)



})


for (var i=9; i < 18; i++){
$("#id-" + i).val(localStorage.getItem(i))

}
