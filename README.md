# TheWeather

**TheWeather** is a weather application that provides up-to-date information about the weather in various locations. This application uses OpenWeatherMap to offer accurate and detailed forecasts.

## Features

- **Real-time updates:** Get the latest weather information.
- **Detailed forecasts:** Includes temperature, humidity, wind, and more.
- **User-friendly interface:** Intuitive design and easy to use.

## Technologies Used

- **Frontend:**
  - [React.js](https://reactjs.org/)
- **Weather API:**
  - [OpenWeatherMap](https://openweathermap.org/)
- **Version Control:**
  - [Git](https://git-scm.com/)

## Prerequisites

Before you start, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/adrian-gg/theweather.git
   ```

2. Navigate to the project directory:

   ```bash
   cd theweather
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Generate an API Key at [OpenWeatherMap API](https://openweathermap.org/price) and add it to `./utils/httpClient.js`.

## Usage

To start the application in development mode, run:

```bash
npm start
```

Open http://localhost:3000 in your browser to see the application.

## Contribution

If you want to contribute to the project, follow these steps:

1. Fork the project.
2. Create a new branch (git checkout -b feature/new-feature).
3. Make your changes and commit (git commit -m 'Add new feature').
4. Push your changes (git push origin feature/new-feature).
5. Open a Pull Request.
