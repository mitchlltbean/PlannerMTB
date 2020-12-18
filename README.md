# PlannerMTB
comments in readme code 
<!-- comements in green -->
## Your Task
Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

<!--  -->
## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```


## Acceptance Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
 <!-- Current Time is displayed below the header dynamical created from a javascript and place in the currentDay  of ptag id of "currentday"-->
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
<!-- each time Blaock and page style with bootstrap(row and 3 columns)  -->
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
<!-- each time block has its own text area field inside of a column this allows for the dynamic change of the field to change color  according to the time of the user. Using a for loop to grab the data- from each text area and comparing it to the time currently giving if and else if staements to define the textarea color by adding a class css to the element-->
WHEN I click into a time block
THEN I can enter an event
<!-- events are saved in the textarea -->
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
<!-- this data is stored using a click event on button, when a button is click it hass a specific key value that information in that specific tect area is saved. -->
WHEN I refresh the page
THEN the saved events persist
<!-- data saved is then replicated in the same spot on the page using a for loop to check specifically for the textarea id's between 9-18 then placing the local storage id of that key to the page(?) i believe thats how i think it works  -->