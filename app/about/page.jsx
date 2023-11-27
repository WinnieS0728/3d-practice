import { Footer } from "../components/footer";
import AboutProject from "./components/ablut project";
import AboutMe from "./components/about me";

export default function AboutPage() {
  return (
    <>
      <main className='space-y-8'>
        <AboutMe />
        <AboutProject />
      </main>
      <Footer />
    </>
  );
}
