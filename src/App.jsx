import Header from "./components/Header";
import Companies from "./components/Companies";
import Residens from "./components/Residens";
import Value from "./components/Value";
import Contact from "./components/Contact";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { useRef } from "react";
function App() {
  const residensRef = useRef(null);
  const valueRef = useRef(null);
  const contactRef = useRef(null);
  const getStartRef = useRef(null);
  return (
    <div className="relative overflow-hidden">
      <div className="bg-black relative">
        <div className="absolute w-[20rem] h-[20rem] bg-yellow-50 rounded-full blur-[150px] z-0" />
        <div className="relative z-10">
          <Header
            scrollToResidens={() => {
              residensRef.current.scrollIntoView({ behavior: "smooth" });
            }}
            scrollToValue={() =>
              valueRef.current.scrollIntoView({ behavior: "smooth" })
            }
            scrollToContact={() =>
              contactRef.current.scrollIntoView({ behavior: "smooth" })
            }
            scrollToStarted={() =>
              getStartRef.current.scrollIntoView({ behavior: "smooth" })
            }
          />
          <Hero />
        </div>
      </div>
      <Companies />
      <div ref={residensRef}>
        <Residens />
      </div>
      <div ref={valueRef}>
        <Value />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div ref={getStartRef}>
        <GetStarted />
      </div>
      <Footer />
    </div>
  );
}

export default App;
