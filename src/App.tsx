import { Intro } from "./components/Intro.tsx";
import { Topbar } from "@/components/Topbar.tsx";
import { Theme } from "react-daisyui";
import { Skills } from "./components/Skills.tsx";
import { Contact } from "./components/Contact.tsx";

function App() {
  return (
    <>
      <Theme dataTheme={"dark"}>
        <Topbar />
        <Intro />
        <Skills />
        <Contact />
      </Theme>
    </>
  );
}

export default App;
