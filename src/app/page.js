import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Introduction from "./components/Introduction";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="uk-position-relative">
        <SocialLinks/>
        <Introduction/>
        <Resume/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}
