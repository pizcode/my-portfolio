import CodePenIcon from "./components/icons/CodePenIcon";
import GitHubIcon from "./components/icons/GitHubIcon";
import InstagramIcon from "./components/icons/InstagramIcon";
import LinkedInIcon from "./components/icons/LinkedInIcon";
import MailIcon from "./components/icons/MailIcon";

export const links = [
  {
    name: "GitHub",
    href: "https://github.com/pizcode",
    icon: GitHubIcon,
    className:
      "dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white",
  },
  {
    name: "CodePen",
    href: "https://codepen.io/pizcode",
    icon: CodePenIcon,
    className: "dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white",  
  },
  {
    name: "LinkedIn",
    href: "https://in.linkedin.com/in/pancholipriyank",
    icon: LinkedInIcon,
    className: "hover:border-[#0a66c2] hover:bg-[#0a66c2] hover:text-white",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/pancholipriyank33",
    icon: InstagramIcon,
    className: "hover:border-[#f02849] hover:bg-[#f02849] hover:text-white",
  },
  {
    name: "Mail",
    href: "mailto:pancholipriyank33@gmail.com",
    icon: MailIcon,
    className: "hover:border-green-600  hover:bg-green-600 hover:text-white",
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "JQuery",
  "PHP",
  "Laravel",
  "Node.js",
  "Express",
  "Adonis",
  "MySQL",
  "Angular",
  "Vue",
  "React",
  "Bootstrap",
  "Tailwind CSS",
  "Material UI",
  "AWS",
  "GIT",
  "Firebase",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "VSCode",
  "Postman",
];

export default {
  links,
  skills,
};
