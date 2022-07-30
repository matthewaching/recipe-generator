# food-memories

A simple CRUD database to document culinary experiences

## Day 1 Abstraction

I want to create a fully-functioning web app that records my culinary experiences, both cooking and dining. The app will consist of an aesthetically-designed front-end comprised of React and Bootstrap and a back-end that saves my entries via Express/Node.js server that pulls from a MongoDB database. The web directory will initially consist of a landing page that renders a search bar with different filtering function as well as a table that gets the 10 most recent entries with page navigation at its footer. Opening an entry should direct to the unique page that lists information related to the entry, including but not limited to name, country of origin, date(s) experienced, whether the item was cooked or dined, pictures of the dish, recipe log of the dish, etc.

## Front-end Abstraction

I will naturally start with developing just the front-end. I will start off with a basic input bar that records its text content into a table ie similar to a "task tracker" app. Once I have that basic functionality down, I will expand into multiple inputs to record item properties and make sure an object is created each time that retains all of the information. Don't forget to assign an item id to each item.

Likely after this step, I will need to start looking into getting the back-end setup so I can start working on individual page functionality.

Design will be on the backburner for the majority of the project. Only when I actually have a barebones functioning app down should I worry about implementing Bootstrap.

For each fully-developed function, remember to commit further updates via branch as a best practice.

## Planned features

1. Search/filter functionality
2. Full list view via accordion navigation with sorting features
3. Link on each page to most relevant wikipedia article
4. Summary view when hovering over an item
