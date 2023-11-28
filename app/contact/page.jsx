import { Footer } from "../components/footer";
import ContactForm from "./components/form";

export default function ContactPage() {
  return (
    <>
      <main>
        <div>
          <h1 className='text-center text-4xl uppercase'>contact me</h1>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
