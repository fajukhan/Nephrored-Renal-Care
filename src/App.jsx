import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Carrer from "./pages/Carrer";
import ForDoctors from "./pages/ForDoctors";
import ForHospital from "./pages/ForHospital";
import Setup from "./pages/Setup";
import "bootstrap/dist/css/bootstrap.min.css";
import Outsource from "./pages/Outsource";
import Find from "./pages/Find";
import Feedback from "./pages/Feedback";
import Blog from "./pages/Blog";
import Privacay from "./pages/Privacay";
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  return (
    <>
   <ScrollToTop />
      <Navbar />   {/* Navbar top me dikhayega */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          <Route path="/carrer" element={<Carrer />} />
          <Route path="/fordocotrs" element={<ForDoctors />} />
           <Route path="/forhospital" element={<ForHospital />} />
            <Route path="/setup" element={<Setup />} />
             <Route path="/outsource" element={<Outsource />} />
             <Route path="/find" element={<Find />} />
             <Route path="/feedback" element={<Feedback />} />
               <Route path="/blog" element={<Blog />} />
                 <Route path="/privacy" element={<Privacay />} />
      </Routes>

      <Footer/>
    </>
  );
};

export default App;
