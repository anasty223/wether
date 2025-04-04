# Weather App

### 🚀 Project Setup

Install dependencies

``` 
npm install
```
Create a .env file

Create a .env file in the root directory and add your OpenWeather API key:

``` 
VITE_API_KEY=your_actual_api_key
```

Then restart the server:

```
npm run dev
```

Start the development server

```
npm run dev
```

Build the project

```
npm run build
```

Run linting

```
npm run lint
```

Run tests

```
npm run test
```

### 📜 File Descriptions

WeatherApp.tsx — Main application component.

WeatherForm.tsx — Form for entering a city name.

ErrorMessage.tsx — Component for displaying errors.

fetchWeather.ts — Function to fetch weather data from OpenWeather API.

### ⚙️ Technologies

React 19

TypeScript

Vite

Chakra UI

Axios

Jest (for testing)

### 🛠 Possible Errors

API key not set → Check the .env file.

Error 404 "City not found" → Enter a valid city name.

CORS or network errors → Check DevTools (F12 → Network).

### 📝 This project was created for educational purposes.

