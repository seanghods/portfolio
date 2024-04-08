import { Intro } from "./components/Intro.tsx";
import { Projects } from "@/components/Projects.tsx";
import { Topbar } from "@/components/Topbar.tsx";
import { Resume } from "@/components/Resume.tsx";
import { ThemeToggler } from "@/components/ThemeToggler.tsx";
import { Theme, useTheme } from "react-daisyui";
import { Skills } from "./components/Skills.tsx";
import { Contact } from "./components/Contact.tsx";

function App() {
  const { theme } = useTheme();

  return (
    <>
      <Theme dataTheme={"dark"}>
        <Topbar />
        <Intro />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <ThemeToggler />
      </Theme>
    </>
  );
}

export default App;
