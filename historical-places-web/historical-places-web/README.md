# Historical Places Application

![App Screenshot 1](https://dl.dropboxusercontent.com/s/0zq3a4ozzw8ijls09zvt7/Screenshot-2024-08-28-081108.png?rlkey=vx7px8ooc2fz9et3azsl8tur2&st=ar97833g&dl=0)
![App Screenshot 2](https://dl.dropboxusercontent.com/s/vkdeaf33f9w119k7jq7bt/Screenshot-2024-08-28-081133.png?rlkey=1to5s6370h82w6pfd29qfxryq&st=ttgrifur&dl=0)

## Overview

The Historical Places Application is a React-based web app designed to display and interact with a collection of historical places. Users can view a list of places, mark them as visited, and get random suggestions for places to explore.

## Features

- **Place List:** Browse and mark historical places as visited.
- **Place Details:** View detailed information about each place.
- **Random Suggestion:** Get a random place suggestion at the click of a button.

## Getting Started

To set up and run this application locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/dostontech/historical-places-app.git
cd historical-places-app/historical-places-web
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the JSON Server

The app uses a local JSON server to mock API data. To start the JSON server, install it globally (if you haven't already) and run it:

```bash
npm install -g json-server
json-server --watch db.json --port 5000
```

### 4. Start the Application

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).
