import { DarkModeToggle } from "./components/DarkModeToggle";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <main className="mx-auto sm:p-0 px-5 container">
      <Hero />

      <Skills />

      <SocialLinks />

      <DarkModeToggle />

      <Footer />
    </main>
  );
}

export default App;
