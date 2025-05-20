export default function Home() {
  return (
    <>
      <section id="Hero" className="flex justify-center items-center h-[100vh] bg-[url(/hero.jpg)] bg-cover">
        <div className="flex flex-col justify-center items-center gap-2 group">
          <h2 className="text-white text-3xl z-1">Hey I&apos;m </h2>
          <h1 className="text-white text-7xl z-1 font-semibold">Samuel Cedric</h1>
          <h2 className="text-white text-3xl z-1">a Fullstack Developer</h2>
        </div>
		<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0 backdrop-blur-sm" />
      </section>
    </>
  );
}
