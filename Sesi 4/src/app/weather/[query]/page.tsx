import React from 'react';
import { WeatherProps } from '@/types/type';

export default async function Weather({ params }: { params: Promise<{ query: string }> }) {

    const { query } = await params;

    console.log(query);

    const res = await fetch(`https://api.weatherstack.com/current?access_key=c4e23f362c5d83eb61f48601d14a8821&query=${query}`);
    const data: WeatherProps = await res.json();

    console.log(data);

    return (
        <section id="Weather" className="flex justify-center items-center h-[calc(100vh-70px)] w-full">
            <div className="bg-white rounded-lg p-6 w-96 mx-auto mt-10">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Weather at</h1>
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
                    {data.location.name}, {data.location.country}
                </h1>
                <h2 className="text-4xl font-semibold text-center text-gray-900 mb-4">
                    {data.current.temperature}°C
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    {data.current.weather_descriptions[0]}
                </p>

                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                        <p className="text-sm text-gray-500">Humidity</p>
                        <p className="text-lg font-semibold text-gray-800">{data.current.humidity}%</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500">Wind Speed</p>
                        <p className="text-lg font-semibold text-gray-800">{data.current.wind_speed} km/h</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500">Pressure</p>
                        <p className="text-lg font-semibold text-gray-800">{data.current.pressure} hPa</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500">Sunrise</p>
                        <p className="text-lg font-semibold text-gray-800">{data.current.astro.sunrise}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500">Sunset</p>
                        <p className="text-lg font-semibold text-gray-800">{data.current.astro.sunset}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}