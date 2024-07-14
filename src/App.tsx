import { DarkModeToggle } from "./components/DarkModeToggle";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <main className="mx-auto px-5 sm:p-0 container">
      <Hero />

      <Skills />

      <SocialLinks />

      <DarkModeToggle />

      <Footer />
    </main>
  );
}

export default App;
