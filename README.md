# Meet App
For my Meet App, I will be using serverless functions to build my app. This will allow me to ensure my app remains responsive because it is important for the app to have a real-time responsiveness. Also the app will be able to handle heavy amounts of data on its server. I will also be using the Google Calendar API to fetch upcoming events. Using the serverless functions will also allow me to easily integrate the geolocation service of the location of the user's interest as well as handling authentication.

## Tech Stack
- Serverless
- Google Calendar API
- React
- Jest
- Puppeteer
- Recharts

## Live Link
[View Meet Online](https://rpark199.github.io/meet-app/)

## Features
1. Filter Events by City
-Scenario 1: When user hasn't searched for a city, show upcoming events from all cities.
  -Given: The user is viewing a map. And the user views list of upcoming events.
  -When: The user views the list of event that's next to a map.
  -Then: The user are able to click on the event details.

-Scenario 2: User should see a list of suggestions when they search for a city.
  -Given: The user is viewing a map with a search engine with a filter.
  -When: The user searches name of city in search engine.
  -Then: The user views a list of events in the city they searched for.

-Scenario 3: User can select a city from the suggested list.
  -Given: The user views the list of events from the city they searched.
  -When: The user clicks on a city.
  -Then: There will be see a list of events from the suggested list.

Feature 2: Show/Hide Event Details
Scenario 1: An event element is collapsed by default.
Given: The user has not selected an event.
When: The user views a list of event.
Then: The event elements are collapsed.

Scenario 2: User can expand an event to see its details.
Given: The user is viewing the event details page.
When: The user clicks on a button for a specific function.
Then: The event details section either expands or collapses, showing or hiding additional information about the events.

Scenario 3: User can collapse an event to hide its details.
Given: The user see events has been expanded.
When: The user clicks to collapse the event.
Then: It is back to it's default element.

Feature 3: Specify Number of Events
Scenario 1: When user hasn't specified a number, 32 events are shown by default.
Given: The user is on the events listing page.
When: The page displayed the list of events.
Then: The events listing page shown as 32 (default).

Scenario 2: User can change the number of events displayed.
Given: The user is on the events listing page that has 32 events shown.
When: The user inputs different number in the search engine.
Then: The events listing page refreshes, displaying the specified number they input.

Feature 4: Use the App When Offline
Scenario 1: Show cached data when there's no internet connection
Given: The user has accessed the app while on internet connection before. 
When: The user loses the internet connection.
Then: The event application displays a message that the user is offline and only previously viewed events and cached data are still accessible.

Scenario 2: Show error when user changes search settings.
Given: The user changes search setting.
When: The error message comes up.
Then: Displays a message that the use is offline and displays only previously viewed events.

Feature 5: Add an App Shortcut to the Home Screen
Scenario 1: User can install the meet app as a shortcut on their device home screen.
Given: The user has installed the app on their phone.
When: The user presses add shortcut button to home screen.
Then: The app will be shown on the home screen.

Feature 6: Display Charts Visualizing Event Details
Scenario 1: Show a chart with a number of upcoming events in each city.
Given: The user is viewing the event list page.
When: The user taps on a "View Charts" button.
Then: A chart will render showing details of the event
