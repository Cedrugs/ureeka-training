# Sesi 3

A weather application that fetches and displays weather data using the WeatherStack API. This project is developed with Next.js and styled with Tailwind CSS, providing a modern and responsive user interface.

## Overview

The Weather App allows users to search for weather information by city or country. It retrieves data from the WeatherStack API and displays current weather conditions in a user-friendly format.

## Features

- **Home Page (/):** 
  - The landing page where users can access the weather search functionality.

- **Weather Details Page (/weather/{city/country}):**
  - Displays detailed weather information for the specified city or country. Users can enter a location to view current weather conditions, including temperature, humidity, and other relevant data.

## Technologies Used

- **Next.js** - A React framework for building server-side rendered applications.
- **Tailwind CSS** - A utility-first CSS framework for custom styling.
- **WeatherStack API** - To fetch weather data for various locations.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Cedrugs/ureeka-training
   ```

2. Navigate to the project directory:
   ```bash
   cd ureeka-training/Week 4
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the app.

## Endpoints

- **Home:** 
  - `/` - The main page for accessing weather functionality.
  
- **Weather Details:** 
  - `/weather/{city/country}` - Replace `{city/country}` with the desired city or country to view detailed weather information.

## Screenshots

1. **Home Page:**
   ![Home Page Screenshot](https://example.com/home-screenshot.png)

2. **Weather Details Page:**
   ![Weather Details Screenshot](https://example.com/weather-screenshot.png)

## Notes

- Ensure to sign up for a WeatherStack account to obtain your API key and configure it in the project.
- Make sure to handle API errors gracefully and provide user feedback when searches yield no results.