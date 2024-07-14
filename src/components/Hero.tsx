export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center mt-24">
      <h1 className="mb-8 font-extrabold font-sriracha text-3xl text-center md:text-4xl lg:text-6xl group">
        <span className="inline-flex group-hover:animate-bounce">👋</span>
        Hey, I&apos;m{" "}
        <span className="bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500 text-nowrap text-transparent">
          Priyank Pancholi
        </span>
      </h1>

      <div className="text-gray-500 text-md md:text-lg lg:text-xl dark:text-gray-400">
        <p>
          I am a web developer with a passion for building scalable and
          performant web applications. My expertise lies in the areas of
          frontend development, backend development, and full stack development.
          I am currently learning react and excited to apply my knowledge to
          create innovative and user-friendly web applications.
        </p>
        <p>
          I&apos;m always excited to connect and create something amazing
          together!
        </p>
      </div>
    </section>
  );
}
