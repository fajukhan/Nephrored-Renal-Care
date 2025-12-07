import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "bootstrap"; // Bootstrap Carousel JS
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";
import {
  FaHospitalAlt,
  FaUsers,
  FaStethoscope,
  FaHeartbeat,
  FaUserNurse,
  FaShieldAlt,
} from "react-icons/fa";
import aboutImg from "../assets/vite8.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import betterIndia from "../assets/betterIndia.svg";
import toi from "../assets/toi.png";
import zeeNews from "../assets/zeeNews.avif";
import etNow from "../assets/et-now.svg";
import * as bootstrap from "bootstrap";
import news18 from "../assets/news18.png";
import ytIcon from "../assets/symbol.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import GFR from "../assets/GFR.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import brand1 from "../assets/brand_1.png";
import brand2 from "../assets/brand_2.png";
import brand3 from "../assets/brand_3.png";
import brand4 from "../assets/brand_4.png";
import brand5 from "../assets/brand_5.png";
import brand6 from "../assets/brand_6.png";
import brand7 from "../assets/brand_7.png";
import brand8 from "../assets/brand_8.png";

const faqData = [
  {
    q: "What services does Nephrored Renal Care offer?",
    a: "Nephrored Renal Care provides comprehensive dialysis services with modern equipment, trained staff, and compassionate care for patient comfort and safety.",
  },
  {
    q: "How do I schedule an appointment with Nephrored Renal Care?",
    a: "You can schedule an appointment by calling our helpline or booking online using our official website’s appointment portal.",
  },
  {
    q: "Can I avail dialysis under government schemes such as Ayushman Bharat, ECHS, CGHS?",
    a: "Yes, you can avail dialysis under various schemes such as Ayushman Bharat, ECHS, CGHS, NHA, SGHS, Ministry of Health and Family Welfare, NFHS and Pradhan Mantri National Dialysis Programme. Click here for more details.",
  },
  {
    q: "Do you offer SLED dialysis?",
    a: "Yes, SLED dialysis is available depending on the medical requirement and doctor's recommendation.",
  },
  {
    q: "Do you accept insurance?",
    a: "We accept government schemes and insurance from most major healthcare providers. Contact support for detailed benefits.",
  },
  {
    q: "Can I receive dialysis at home?",
    a: "Yes, home dialysis services are available in select locations depending on availability and medical approval.",
  },
  {
    q: "How long does each dialysis session take?",
    a: "A typical dialysis session takes about 4 hours depending on the treatment plan decided by the doctor.",
  },
];

const testimonials = [
  {
    name: "ANKIT",
    place: "Panipat",
    review:
      "I like that they have flexible timings for sessions. It helps me to come when I am free.",
    stars: 5,
    lang: "eng",
  },
  {
    name: "BALJINDER",
    place: "Bathinda",
    review:
      "The technicians are very good. They know how to do everything right, and I feel safe.",
    stars: 5,
    lang: "eng",
  },
  {
    name: "VIJAY",
    place: "Delhi",
    review:
      "The staff is highly trained and supportive. They guide very well throughout the treatment.",
    stars: 5,
    lang: "eng",
  },
  {
    name: "KARAN",
    place: "Chandigarh",
    review:
      "My dialysis experience has become very smooth because of Nephrored Renal Care.",
    stars: 5,
    lang: "eng",
  },
  {
    name: "RAHUL",
    place: "Haryana",
    review: "Clean centre and cooperative doctors. Highly recommended.",
    stars: 5,
    lang: "eng",
  },
  {
    name: "SUMIT",
    place: "Punjab",
    review: "Best dialysis care so far. Treatment feels safe and comfortable.",
    stars: 5,
    lang: "eng",
  },
  // Hindi testimonials
  {
    name: "ARJUN",
    place: "Delhi",
    review:
      "यहाँ के डॉक्टर और स्टाफ बहुत अच्छे हैं। मुझे यहाँ पूरी सुरक्षा महसूस होती है।",
    stars: 5,
    lang: "hin",
  },
  {
    name: "SUNIL",
    place: "Panipat",
    review:
      "डायलिसिस का समय बहुत सुविधाजनक है। मेरे खाली समय में आना आसान होता है।",
    stars: 5,
    lang: "hin",
  },
  {
    name: "MAHESH",
    place: "Haryana",
    review: "इलाज के दौरान पूरा स्टाफ सहयोग करता है। मैं पूरी तरह संतुष्ट हूँ।",
    stars: 5,
    lang: "hin",
  },
  {
    name: "AMIT",
    place: "Punjab",
    review: "विटसकेयर के कारण डायलिसिस अनुभव काफी आसान और सुरक्षित हो गया है।",
    stars: 5,
    lang: "hin",
  },
  {
    name: "SANJAY",
    place: "Ludhiana",
    review: "सेंटर साफ-सुथरा है और मशीनें आधुनिक हैं। बेहतरीन सेवा।",
    stars: 5,
    lang: "hin",
  },
  {
    name: "MUKESH",
    place: "Hisar",
    review: "यहाँ पर इलाज अच्छा है और डॉक्टर हर चीज समझाते हैं।",
    stars: 5,
    lang: "hin",
  },
];

const newsData = [
  {
    img: betterIndia,
    text: "Changing Dialysis Care & Making It More Easily Available",
  },
  {
    img: toi,
    text: "Tomorrow Capital Invests In Kidney Start Up Nephrored Renal Care",
  },
  { img: zeeNews, text: "Top 3 ways to improve kidney health" },
  {
    img: etNow,
    text: "Nephrored Renal Care partners with ET Now for kidney awareness",
  },
  {
    img: toi,
    text: "Tomorrow Capital Invests In Kidney Start Up Nephrored Renal Care",
  },
  {
    img: news18,
    text: "News18 covers Nephrored Renal Care dialysis advancement",
  },
  {
    img: betterIndia,
    text: "Changing Dialysis Care & Making It More Easily Available",
  },
  {
    img: toi,
    text: "Tomorrow Capital Invests In Kidney Start Up Nephrored Renal Care",
  },
  { img: zeeNews, text: "Top 3 ways to improve kidney health" },
  {
    img: etNow,
    text: "Nephrored Renal Care partners with ET Now for kidney awareness",
  },
  {
    img: toi,
    text: "Tomorrow Capital Invests In Kidney Start Up Nephrored Renal Care",
  },
  {
    img: news18,
    text: "News18 covers Nephrored Renal Care dialysis advancement",
  },
  {
    img: etNow,
    text: "Nephrored Renal Care partners with ET Now for kidney awareness",
  },
  {
    img: toi,
    text: "Tomorrow Capital Invests In Kidney Start Up Nephrored Renal Care",
  },
  {
    img: news18,
    text: "News18 covers Nephrored Renal Care dialysis advancement",
  },
  {
    img: etNow,
    text: "Nephrored Renal Care partners with ET Now for kidney awareness",
  },
  {
    img: toi,
    text: "Tomorrow Capital Invests In Kidney Start Up Nephrored Renal Care",
  },
  {
    img: news18,
    text: "News18 covers Nephrored Renal Care dialysis advancement",
  },
];

const servicesData = [
  {
    id: 1,
    title: "Home Dialysis",
    icon: <FaHome size={70} />,
  },
  {
    id: 2,
    title: "In-centre Dialysis",
    icon: <FaHospitalUser size={70} />,
  },
  {
    id: 3,
    title: "Nephrologist Consultation",
    icon: <MdHealthAndSafety size={70} />,
  },
];

const valuesData = [
  {
    icon: <FaHospitalAlt />,
    title: "Best Infrastructure",
    desc: "Best-in-class dialysis machines and consumables to deliver precision care as per WHO guidelines.",
  },
  {
    icon: <FaUsers />,
    title: "Skilled Team",
    desc: "Highly-skilled workforce recruited with stringent standards and continuous audits.",
  },
  {
    icon: <FaStethoscope />,
    title: "Clinical Excellence",
    desc: "Designed by top nephrologists to ensure reliable, adequate, and effective dialysis care.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Patient Safety First",
    desc: "Each session is maintained with complete hygiene & safety to protect patients.",
  },
  {
    icon: <FaUserNurse />,
    title: "Professional Care",
    desc: "Patient-centric approach with empathy & emotional support for a comfortable experience.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted By Millions",
    desc: "Transparency, ethics & best global standards make us India’s trusted dialysis brand.",
  },
];

const slides = [
  {
    image: banner1,
    title: "Making Quality Dialysis",
    highlight: "Accessible.",
    button: "See how we work",
  },
  {
    image: banner2,
    title: "Expert Care for Patients",
    highlight: "Everywhere.",
    button: "Learn More",
  },
  {
    image: banner3,
    title: "Innovation in Treatment",
    highlight: "Reliable.",
    button: "Our Services",
  },
  {
    image: banner4,
    title: "Trusted by Families",
    highlight: "Always.",
    button: "Get Started",
  },
];

const Home = () => {
  const [activeIndex1, setActiveIndex1] = useState(null);

  const toggleFaq = (i) => {
    setActiveIndex1((prev) => (prev === i ? null : i));
  };

  useEffect(() => {
    const carouselEl = document.getElementById("newsCarousel");
    if (carouselEl) {
      new bootstrap.Carousel(carouselEl, {
        interval: 3000,
        ride: "carousel",
        pause: false,
        wrap: true,
      });
    }
  }, []);

  const [active, setActive] = useState(1);

  const sliderRef = useRef(null);

  const scrollLeft = () => (sliderRef.current.scrollLeft -= 350);
  const scrollRight = () => (sliderRef.current.scrollLeft += 350);

  const sectionRef = useRef(null);
  const animated = useRef(false); // FIX: re-render ke baad bhi value safe

  const runCounter = () => {
    const counters = document.querySelectorAll(".count");
    const speed = 50;

    counters.forEach((counter) => {
      counter.innerText = "0";
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText.replace(/,/g, "");
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = new Intl.NumberFormat("en-IN").format(
            count + increment
          );
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = new Intl.NumberFormat("en-IN").format(target);
        }
      };
      updateCount();
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true; // FIX
          runCounter();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 🔥 Auto-slide logic
  useEffect(() => {
    const autoSlide = setInterval(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      // scroll next
      slider.scrollLeft += 350;

      // reached end → restart from beginning
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
        setTimeout(() => {
          slider.scrollLeft = 0;
        }, 400); // thoda smooth feel
      }
    }, 3000);

    return () => clearInterval(autoSlide);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const carouselEl = carouselRef.current;
    if (!carouselEl) return;

    // Initialize Bootstrap carousel programmatically
    const carousel = new Carousel(carouselEl, {
      interval: 5000, // 5 seconds
      ride: "carousel",
      pause: false,
      wrap: true,
    });

    // Update activeIndex for hero text
    const handleSlide = (e) => setActiveIndex(e.to);
    carouselEl.addEventListener("slid.bs.carousel", handleSlide);

    return () => {
      carouselEl.removeEventListener("slid.bs.carousel", handleSlide);
      carousel.dispose(); // clean up
    };
  }, []);

  return (
    <div>
      {/* Section-1 */}
      <section className="cs_hero cs_style_1 position-relative">
        <div id="heroCarousel" ref={carouselRef} className="carousel slide">
          {/* Indicators */}
          <div className="carousel-indicators">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to={idx}
                className={idx === 0 ? "active" : ""}
                aria-current={idx === 0 ? "true" : undefined}
              ></button>
            ))}
          </div>

          {/* Carousel Images */}
          <div className="carousel-inner">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`carousel-item ${idx === 0 ? "active" : ""}`}
              >
                <img
                  src={slide.image}
                  className="d-block w-100 carousel-image"
                  alt={`Banner ${idx + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Animated Hero Text */}
        <div className="cs_hero_text position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1
            className="cs_hero_title fw-bold fade-text"
            key={activeIndex} // trigger re-render for animation
          >
            {slides[activeIndex].title}{" "}
            <span className="text-danger">{slides[activeIndex].highlight}</span>
          </h1>
          <div
            className="cs_hero_btn_wrap mt-4 fade-text"
            key={`btn-${activeIndex}`}
          >
            <button className="btn btn-outline-light btn-lg cs_hero_btn">
              {slides[activeIndex].button}
            </button>
          </div>
        </div>
      </section>

      {/* ===== Section 2 Stats ===== */}
      <section className="stats-section py-5" ref={sectionRef}>
        <div className="container">
          <div className="stats-box mx-auto p-5">
            <div className="row text-center align-items-center">
              {/* 1️⃣ Operational Centres */}
              <div className="col-md-4 mb-4 mb-md-0">
                <h2 className="stat-number count" data-target="50">
                  0
                </h2>
                <p className="stat-title m-0">Operational Centres</p>
              </div>

              {/* 2️⃣ Satisfied Patients */}
              <div className="col-md-4 mb-4 mb-md-0">
                <h2 className="stat-number count" data-target="23357">
                  0
                </h2>
                <p className="stat-title m-0">Satisfied Patients</p>
              </div>

              {/* 3️⃣ Sessions Completed */}
              <div className="col-md-4">
                <h2 className="stat-number count" data-target="534418">
                  0
                </h2>
                <p className="stat-title m-0">Sessions Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==== Section 3 — Our Values ==== */}
      <section className="values-section py-5">
        <div className="container">
          <div className="row align-items-start">
            {/* LEFT SIDE */}
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h2 className="section-title mb-5">Our Values</h2>{" "}
              {/* spacing added */}
              <div className="d-flex gap-3 mt-5">
                <button className="nav-btn small" onClick={scrollLeft}>
                  ⟵
                </button>
                <button className="nav-btn small" onClick={scrollRight}>
                  ⟶
                </button>
              </div>
            </div>

            {/* RIGHT SIDE — Blue bg + cards */}
            <div className="col-lg-8">
              <div className="values-container p-4">
                <div className="values-slider d-flex gap-4" ref={sliderRef}>
                  {valuesData.map((val, i) => (
                    <div className="value-card p-4 text-center" key={i}>
                      <div className="value-icon">{val.icon}</div>
                      <h4 className="value-title mt-3">{val.title}</h4>
                      <p className="value-desc mt-3">{val.desc}</p>{" "}
                      {/* improved spacing */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==== Section 4 — Our Values ==== */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {/* left image */}
            <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
              <img src={aboutImg} alt="About" className="about-image" />
            </div>

            {/* right content */}
            <div className="col-lg-6 ps-lg-5">
              <h2 className="about-title mb-4">About Us</h2>

              <p className="about-text mb-4">
                <FaArrowRightLong size={49} className="about-arrow me-2" />
                Nephrored Renal Care delivers advanced dialysis services across
                India, ensuring more people can access quality treatment. With a
                strong focus on making care reachable, affordable, and
                transparent, we support patients with reliable and
                cost-effective dialysis.
              </p>

              <p className="about-text mt-3">
                <FaArrowRightLong className="about-arrow me-2" />
                Our cutting-edge centers, experienced staff, and global-standard
                practices make us a dependable choice for high-quality kidney
                care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==== Section 5 — Our Values ==== */}

      <section className="section5-wrapper py-5">
        <div className="container">
          <h2 className="text-center section5-title mb-5">Services</h2>

          <div className="row g-4">
            {servicesData.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div
                  className={`service-card ${
                    active === service.id ? "active" : ""
                  }`}
                  onMouseEnter={() => setActive(service.id)}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h5 className="service-name mt-3">{service.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==== Section 6 — Our Values ==== */}
      <section className="news-wrapper py-5">
        <div className="container">
          <h2 className="news-title text-start mb-5">
            Nephrored Renal Care In News
          </h2>

          <div
            id="newsCarousel"
            className="carousel slide my-5"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {Array.from({ length: Math.ceil(newsData.length / 3) }).map(
                (_, i) => (
                  <button
                    key={i}
                    type="button"
                    data-bs-target="#newsCarousel"
                    data-bs-slide-to={i}
                    className={i === 0 ? "active" : ""}
                  ></button>
                )
              )}
            </div>

            <div className="carousel-inner my-5">
              {Array.from({ length: Math.ceil(newsData.length / 3) }).map(
                (_, idx) => {
                  const start = idx * 3;
                  const group = newsData.slice(start, start + 3);
                  return (
                    <div
                      className={`carousel-item ${idx === 0 ? "active" : ""}`}
                      key={idx}
                    >
                      <div className="row g-4">
                        {group.map((n, i) => (
                          <div className="col-lg-4 col-md-6" key={i}>
                            <div className="news-card p-4 d-flex align-items-center">
                              <div className="news-img-box me-4">
                                <img src={n.img} alt="news" />
                              </div>
                              <p className="news-text mb-0">{n.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==== Section 7 — Our Values ==== */}
      <section className="testimonials-wrapper py-5">
        <div className="container">
          <h5 className="sec-sub">TESTIMONIALS</h5>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="sec-title">What Our Patients Say</h2>

            <div className="nav-btns">
              <button
                className="nav-arrow"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
              >
                <FaArrowLeft className="bi bi-arrow-left" />
              </button>
              <button
                className="nav-arrow ms-3"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
              >
                <FaArrowRight className="bi bi-arrow-right" />
              </button>
            </div>
          </div>

          <div
            id="testimonialCarousel"
            className="carousel slide my-5"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
                (_, index) => {
                  const start = index * 2;
                  const group = testimonials.slice(start, start + 2);
                  return (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <div className="row g-4">
                        {group.map((item, i) => (
                          <div className="col-lg-6" key={i}>
                            <div className="testimonial-card p-4">
                              <p className="review-text">{item.review}</p>
                              <p className="stars">{"⭐".repeat(item.stars)}</p>

                              <div className="d-flex align-items-center gap-3 mt-4">
                                <img
                                  src={ytIcon}
                                  alt="yt"
                                  className="yt-logo"
                                />
                                <div>
                                  <h5 className="p-name">{item.name}</h5>
                                  <p className="p-place">{item.place}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==== Section 8 — Our Values ==== */}
      <section className="gfr-wrapper my-5">
        <div className="container">
          <div className="gfr-box row align-items-center mx-auto">
            {/* ======= LEFT TEXT CONTENT ======= */}
            <div className="col-lg-6 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
              <h2 className="gfr-title">
                Find About Your Kidney <br /> Health Now !
              </h2>
              <button className="gfr-btn mt-4">Go to GFR Calculator</button>
            </div>

            {/* ======= RIGHT IMAGE ======= */}
            <div className="col-lg-6 col-md-12 text-center">
              <img src={GFR} alt="GFR scale" className="gfr-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ==== Section 9 — FAQ ==== */}
      <section className="faq-wrapper py-5">
        <div className="container">
          <h2 className="faq-title text-center mb-5">
            Frequently Asked Questions
          </h2>

          <div className="faq-container mx-auto">
            {faqData?.length > 0 &&
              faqData.map((item, i) => (
                <div
                  key={i}
                  className={`faq-card ${activeIndex1 === i ? "active" : ""}`}
                >
                  <div
                    className="faq-question d-flex justify-content-between align-items-center"
                    onClick={() => toggleFaq(i)}
                  >
                    <span className="fw-semibold">{item.q}</span>
                    {activeIndex === i ? (
                      <FaChevronUp className="faq-icon" />
                    ) : (
                      <FaChevronDown className="faq-icon" />
                    )}
                  </div>

                  <div
                    className="faq-answer-wrapper"
                    style={{
                      maxHeight: activeIndex1 === i ? "400px" : "0px",
                      overflow: "hidden",
                      transition: "all 0.4s ease",
                    }}
                  >
                    <p className="faq-answer mt-3">{item.a}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ==== Section 10 — Empanelments Supported ==== */}
      <section className="empanel-wrapper py-5">
        <div className="container">
          <h2 className="empanel-title text-center mb-5">
            Empanelments Supported
          </h2>

          <div className="row justify-content-center g-4">
            {[
              brand1,
              brand2,
              brand3,
              brand4,
              brand5,
              brand6,
              brand7,
              brand8,
            ].map((logo, i) => (
              <div
                key={i}
                className="col-6 col-md-3 d-flex justify-content-center align-items-center"
              >
                <div className="brand-logo-card">
                  <img src={logo} alt="brand-logo" className="brand-logo-img" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
