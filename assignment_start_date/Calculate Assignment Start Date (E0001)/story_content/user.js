window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  // Initiate communication between Javascript and Storyline.
var player = GetPlayer();

// Get the final Month, Day, and Year values entered by the user in Storyline.
var finalMonth = player.GetVar("MonthFinal");
var finalDay = player.GetVar("DayFinal");
var finalYear = player.GetVar("YearFinal");

// Combine the final Month, Day, and Year values into a full final date (e.g., '8/1/2016')
var finalDate = new Date(finalYear, finalMonth - 1, finalDay);

// Prep some variables to hold the unformatted calculated dates.
// Subtract 6 weeks (42 days) from the final date to get the start date.
var date10WksBack = new Date(finalDate); date10WksBack.setDate(date10WksBack.getDate() - 42);

// Prepare an array to hold the names of the month.
var monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// Get the name of the month for the start date.
var month10WksBack = date10WksBack.getMonth();
var monthName10WksBack = monthArray[month10WksBack];

// Get the number of the day for the start date.
var day10WksBack = date10WksBack.getDate();

// Get the year for the start date.
var year10WksBack = date10WksBack.getFullYear();

// Build the full date string for the start date.
var dateString10WksBack = day10WksBack + " " + monthName10WksBack + " " + year10WksBack;

// Send the string back to Storyline.
player.SetVar("Date10WeeksBack", dateString10WksBack);
}

};
