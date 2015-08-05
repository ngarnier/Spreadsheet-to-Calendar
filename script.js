function pushToCalendar() 
{
//spreadsheet variables
var sheet = SpreadsheetApp.getActiveSheet();
var lastRow = sheet.getLastRow(); 
var range = sheet.getRange(2,1,lastRow,30);
var values = range.getValues();
var eventName = 0; // insert (before semi-colon) the number of the column where your event name is. Count starts at 0
var eventDescription = 1; // insert (before semi-colon) the number of the column where your event description is. Count starts at 0
var startDate = 2; // insert (before semi-colon) the number of the column where your start date is. Count starts at 0
var endDate = 3; // insert (before semi-colon) the number of the column where your end date is. Count starts at 0
var eventLocation = 4; // insert (before semi-colon) the number of the column where your event description is. Count starts at 0
var addedToCalendar = 5; // insert (before semi-colon) the number of the column where your will insert "y" when an event has been added to the calendar. Count starts at 0
var eventId = 6; // insert (before semi-colon) the number of the column where your will insert the ID of an event after it is created in the calendar. Count starts at 0
var calendarId = "Your calendar ID"; // insert (between quotes) the ID of your calendar. You'll find it in "Calendar Settings"/"Calendar Address"/"Calendar ID".
  
// calendar variables
var comingCalendar = CalendarApp.getCalendarById(calendarId);
var numValues = 0;

  for (var i = 0; i < values.length-1; i++) 
  {
	if (values[i][addedToCalendar] == "") //checking if this event must be added to the calendar
	{
      var newEventTitle = values[i][eventName]; // create the event name
      var newEvent = comingCalendar.createEvent(newEventTitle,
      new Date(values[i][startDate].setHours(9,0,0,0)), // start time. Here : 9:00.
      new Date(values[i][endDate].setHours(19,0,0,0)), // end time. Here: 19:00.
      {location:values[i][eventLocation], description:values[i][eventDescription]});
      var newEventId = newEvent.getId(); // get the ID of the event we just created
      sheet.getRange(i+2,addedToCalendar+1).setValue('y'); //mark as entered in the calendar
      sheet.getRange(i+2,eventId+1).setValue(newEventId); // enter the ID of the event so we can retrieve it if needed
    }
    else if ((values[i][addedToCalendar] == 'n')&&(values[i][eventId].length > 1)) {
       sheet.getRange(i+2,addedToCalendar+1).setValue('d');
       comingCalendar.getEventSeriesById(values[i][eventId]).deleteEventSeries();
       sheet.getRange(i+2,eventId+1).setValue("");
    }
Logger.log(values[i][addedToCalendar]);
numValues++;
  } // closing the loop
} // closing pushToCalendar();

// this will automatically add a menu to your spreadsheet
function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var menuEntries = [];  
  menuEntries.push({name: "Update calendar", functionName: "pushToCalendar"}); 
  sheet.addMenu("Events calendar", menuEntries);  
}
