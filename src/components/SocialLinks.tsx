import { links } from "../data";

export default function SocialLinks() {
  const resumeLink =
    "https://drive.google.com/file/d/1oOx0eZnNIMJng0-CD9ao_pHc07I7wJP0/view?usp=sharing";
  return (
    <section className="flex flex-wrap justify-center sm:justify-between items-center gap-10 mx-auto mt-24">
      <div className="bg-gradient-to-r from-yellow-400 to-green-500 p-0.5 rounded-md">
        <a
          className="inline-block bg-background p-3 rounded-md font-medium text-base"
          href={resumeLink}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {links.map((link) => (
          <a
            key={link.name}
            title={link.name}
            className={`inline-block p-3 border rounded-full transition ${link.className}`}
            href={link.href}
          >
            <link.icon className="size-6" />
          </a>
        ))}
      </div>
    </section>
  );
}
