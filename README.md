# Spreadsheet-to-Calendar
A script to automate the creation & update of events in your calendar from a spreadsheet

All you have to do is complete the variables, from `eventName` to `calendarId`, according to your spreadsheet. To give you an idea, the numbers in the script match this spreadsheet:

![screenshot](https://cloud.githubusercontent.com/assets/4700883/9087743/c826d492-3b8c-11e5-9662-24544e8b0171.png)

As you can see on this screenshot, a button called "Events Calendar" is automatically created in the toolbar of the spreadsheet. All you have to do to update the calendar is click on "Events Calendar > Update Calendar".

## Adding the script to your spreadsheet:
* On your spreadsheet, click "Tools > Script Editor", create a blank project, copy paste the script code, update the variables, save & you're done. 

## Adding an event:
* Events are added to the calendar when you click on "Events Calendar > Update Calendar", if the "Added to Calendar" cell of the event is empty.
* When an event is added to the calendar, the "Added to Calendar" cell is filled with a "y", preventing it from being added several times.

## Deleting an event:
* To delete an event, insert "n" in the "Added to Calendar" cell of this event.
* When an event is deleted from the calendar, the "Added to Calendar" cell will be filled with a "d", letting you know it was deleted and preventing it from being re-added.
