export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center mt-24">
      <h1 className="group mb-8 font-sriracha font-extrabold text-3xl md:text-4xl lg:text-6xl text-center">
        <span className="inline-flex group-hover:animate-bounce">👋</span>
        Hey, I&apos;m{" "}
        <span className="bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500 text-transparent text-nowrap">
          Priyank Pancholi
        </span>
      </h1>

      

      <div className="text-gray-500 text-md dark:text-gray-400 md:text-lg lg:text-xl">
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
