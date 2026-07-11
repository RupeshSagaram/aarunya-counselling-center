import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Each <section> below has an "id" that matches a Navbar link's href (e.g. "#about"),
// which is what makes clicking a link scroll to that section.
// The remaining placeholder blocks will be replaced with real components in the next steps.
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
