export interface WeatherProps {
    location: {
        name: string;
        country: string;
    };
    current: {
        temperature: number;
        weather_descriptions: string[];
        astro: {
            sunrise: string;
            sunset: string;
        };
        humidity: number;
        wind_speed: number;
        pressure: number;
    };
}