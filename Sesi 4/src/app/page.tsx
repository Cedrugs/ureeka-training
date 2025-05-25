import Link from "next/link";
import { CodeBlock } from "@/components/ui/code-block";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
	style: ['normal', 'italic'],
	display: 'swap',
})

export default function Home() {
	const code = `async function fetchWeatherData(city) {
	const url = \`https://localhost:3000/api/weather/\${city}\`;
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(\`HTTP error! status: \${response.status}\`);
		}
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error('Error fetching weather data:', error);
	}
}`;

	return (
		<>
			<section id="Hero" className="flex flex-row h-[calc(100vh-70px)] justify-evenly items-center">
				<div className="flex flex-col items-start gap-4">
					<div className="flex flex-col gap-2 text-left">
						<h1 className="text-white text-6xl font-semibold">Weather App</h1>
						<h2 className="text-white text-xl font-semibold">Made using Next.js</h2>
					</div>
					<Link href="/weather/jakarta" className="px-6 py-2 bg-white rounded-lg font-bold border-white hover:bg-black hover:text-white hover:border-white border-2 ease-in-out duration-300">Start Using</Link>

					<h2 className="text-white text-xl font-semibold mt-4">Or use the live site version:</h2>
					<Link href="/weather/jakarta" className={`text-white px-6 py-3 bg-neutral-800 rounded-lg ${jetbrainsMono.className}`}>https://localhost:3000/weather/jakarta</Link>
				</div>
				<CodeBlock
					language="js"
					filename="Weather.js"
					code={code}
				/>
			</section>
		</>
	);
}
