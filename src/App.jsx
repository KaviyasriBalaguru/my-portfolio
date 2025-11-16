import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Resume from "./component/Resume";
import Projects from "./component/Projects";
import Contact from "./component/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="resume"><Resume /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}
