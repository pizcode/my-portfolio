import { skills } from "../data";

export default function Skills() {
  return (
    <section className="mt-12">
      <h2 className="mb-3 font-extrabold font-sans text-xl md:text-2xl lg:text-3xl">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center sm:justify-start gap-5 w-full">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="bg-element px-4 py-2 rounded-md">{skill}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
