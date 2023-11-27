import { Footer } from "../components/footer";
import ContactMe from "../contact/components/contact me";
import Projects from "./components/project container";

export default function ProjectPage() {
  return (
    <>
      <main>
        <Projects />
        <ContactMe text={"wanna build your own 3D website?"} />
      </main>
      <Footer />
    </>
  );
}
