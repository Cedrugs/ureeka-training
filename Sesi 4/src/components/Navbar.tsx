import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex w-full items-center justify-between border-t border-b px-8 py-4 border-neutral-800">
			<div className="flex items-center gap-2">
				<h1 className="text-base font-bold md:text-2xl text-white">Weather App</h1>
			</div>
            <Link href="/weather/jakarta" className="px-5 py-1 bg-white rounded-lg font-bold border-white hover:bg-black hover:text-white hover:border-white border-2 ease-in-out duration-300">Login</Link>
		</nav>
    )
}