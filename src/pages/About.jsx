import React, { useState, useEffect ,  useRef } from "react";
import doctorImg from "../assets/dd45.webp";
import whyImg from "../assets/dt10.jpeg";
import { FaUserMd, FaHospitalAlt, FaUserFriends, FaStethoscope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import vite1 from "../assets/dt8.jpg";
import vite2 from "../assets/dt7.jpg";
import vite3 from "../assets/dt3.jpg";
import vite4 from "../assets/dt1.jpg";
import vite5 from "../assets/dt4.jpg";
import { FaExpand } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";




const About = () => {








    const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });

    const handleScroll = () => {
      const rect = videoRef.current?.getBoundingClientRect();
      if (rect && rect.top >= 0 && rect.bottom <= window.innerHeight) {
        videoRef.current.play();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  




  const text = "We Make Quality Dialysis Accessible";
  const words = text.split(" ");
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [removing, setRemoving] = useState(false);

  useEffect(() => {
    let interval;

    if (!removing) {
      interval = setInterval(() => {
        setDisplayText((prev) => prev + (index > 0 ? " " : "") + words[index]);
        setIndex((prev) => prev + 1);

        // all words typed ⇒ start removing after short pause
        if (index >= words.length - 1) {
          clearInterval(interval);
          setTimeout(() => setRemoving(true), 1000);
        }
      }, 450);
    } else {
      // deleting animation
      interval = setInterval(() => {
        const newText = displayText.split(" ");
        newText.pop();
        setDisplayText(newText.join(" "));
        if (newText.length === 0) {
          setRemoving(false);
          setIndex(0);
        }
      }, 250);
    }

    return () => clearInterval(interval);
  }, [index, removing, displayText, words]);

  return (
   <div>
    {/* // SECTION-1 */}
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <img src={doctorImg} className="img-fluid about-img" alt="Doctor" />
          </div>
          <div className="col-lg-6 col-md-12">
            <h1 className="about-title">
              Welcome to <br /> Nephrored Renal Care Medlife
            </h1>
            <p className="about-para mt-3">{displayText}</p>
          </div>
        </div>
      </div>
    </section>


{/* //  SECTION-2 */}
<section className="why-section py-5">
  <div className="container">
    <h2 className="text-center why-title mb-5">
      Why Choose Us
    </h2>
    <div className="row align-items-center">

      {/* Left Image */}
      <div className="col-lg-5 col-md-12 mb-4 mb-lg-0 text-center">
        <img
          src={whyImg}
          alt="Why choose Nephrored Renal Care"
          className="img-fluid why-img"
        />
      </div>

      {/* Right Cards */}
      <div className="col-lg-7 col-md-12">
        <div className="row g-4">

          <div className="col-md-6">
            <div className="why-card">
              <FaUserMd className="why-icon" />
              <h4>Experienced Nephrology Professionals</h4>
              <p>
                Our nephrologists and dialysis experts ensure safe and
                personalised <b>kidney dialysis</b> making us one of the
                <b> best dialysis centers</b> for patients seeking long-term renal care.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="why-card">
              <FaHospitalAlt className="why-icon" />
              <h4>Comprehensive Kidney Care Services</h4>
              <p>
                From CRRT and SLED to plasmapheresis and blood transfusion,
                we offer complete <b>kidney care</b> under one roof ensuring patients
                don’t need to travel across multiple facilities.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="why-card">
              <FaUserFriends className="why-icon" />
              <h4>Patient-Focused Treatment</h4>
              <p>
                We ensure every patient gets a comfortable and
                hygienic dialysis experience in a supportive environment — making
                us a trusted <b>nearby dialysis center</b> for families across India.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="why-card">
              <FaStethoscope className="why-icon" />
              <h4>Advanced and Hygienic Dialysis Facilities</h4>
              <p>
                Our centers use modern machines and follow strict infection-control
                protocols to deliver <b>hygenic dialysis</b> with world-class care and
                long-term patient safety.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


{/* SECTION-3 */}
      <section className="founder-section py-5">
        <div className="container text-center">
          <h2
            className="founder-title mb-4"
            data-aos="fade-down"
          >
            A message from our Founder
          </h2>

          <div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/KZ4NJok8-vY"
    title="Our Founder's Message"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>
        </div>
      </section>


      {/* SECTION-4 Facilities */}
  <section className="facilities-section py-5">
      <div className="container">
        <h2 className="facilities-title mb-5" data-aos="fade-down">
          Our Facilities
        </h2>

        <div className="row g-4 align-items-end">

          {/* First Row ─ 3 Images */}
          <div className="col-lg-4 col-md-6">
            <div className="facility-card large-h">
              <img src={vite1} alt="facility1" />
              <div className="hover-icon"><i className="bi bi-zoom-in"></i></div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="facility-card large-h">
              <img src={vite2} alt="facility2" />
              <div className="hover-icon"><i className="bi bi-zoom-in"></i></div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="facility-card extra-large-h">
              <img src={vite3} alt="facility3" />
              <div className="hover-icon"><i className="bi bi-zoom-in"></i></div>
            </div>
          </div>

          {/* Second Row ─ 2 Images */}
          <div className="col-lg-8 col-md-6">
            <div className="facility-card wide-h">
              <img src={vite4} alt="facility4" />
              <div className="hover-icon"><i className="bi bi-zoom-in"></i></div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="facility-card wide-small-h">
              <img src={vite5} alt="facility5" />
              <div className="hover-icon"><i className="bi bi-zoom-in"></i></div>
            </div>
          </div>

        </div>
      </div>
    </section>  










  </div>
  );
};

export default About;
