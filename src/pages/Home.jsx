import Analytics from "../components/Analytics/Analytics"
import Hero from "../components/Hero/Hero"
import MarqueeComponent from "../components/MarqueeComponent/MarqueeComponent"
import RamosSection from "../components/RamosSection/RamosSection"
import Monitoring from "../components/Monitoring/Monitoring"
import GetStarted from "../components/GetStarted/GetStarted"
import Footer from "../components/Footer/Footer"


const Home = () => {
  return (
    <section>
      <Hero />
      <Analytics />
      <MarqueeComponent />
      <RamosSection />
      <Monitoring />
      <GetStarted />
      <Footer />
    </section>
  )
}

export default Home