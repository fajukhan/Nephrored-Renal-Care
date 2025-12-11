import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "bootstrap"; // Bootstrap Carousel JS
import banner1 from "../assets/sa1.jpg";
import banner2 from "../assets/sa2.jpg";
import banner3 from "../assets/sa3.jpg";
import banner4 from "../assets/sa4.jpg";
import {
  FaUserMd,
  FaUserCheck,
  FaTint,
  FaBuilding,
  FaBookMedical,
  FaClipboardCheck,
  FaUserFriends,
  FaShieldVirus,
  FaAmbulance,
  FaPrescriptionBottleAlt,
  FaHandsHelping,
  FaUserShield,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import img7 from "../assets/img7.jpeg";
import img6 from "../assets/img6.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";
import * as bootstrap from "bootstrap";
import img10 from "../assets/img10.jpeg";
import img11 from "../assets/img11.jpeg";
import img12 from "../assets/img12.jpeg";
import img13 from "../assets/img13.jpeg";
import img14 from "../assets/img14.jpeg";
import ytIcon from "../assets/symbol.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import GFR from "../assets/GFR.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import brand1 from "../assets/rghs.png";
import brand2 from "../assets/echs.jpg";
import brand3 from "../assets/aayushman.jpg";
import First from "../assets/first.jpeg";
import { Link, useNavigate } from "react-router-dom";
const faqData = [
  { q: "डायलिसिस क्या है?", a: "डायलिसिस एक प्रक्रिया है जिसमें मशीन खून से अपशिष्ट पदार्थ और अतिरिक्त पानी को निकालती है जब किडनी इसे स्वयं नहीं कर पाती।" },

  { q: "डायलिसिस कब शुरू करना पड़ता है?", a: "जब किडनी की कार्यक्षमता 10–15% से कम रह जाती है और शरीर में विषाक्त पदार्थ जमा होने लगते हैं।" },

  { q: "भारत में डायलिसिस के कौन–कौन से प्रकार उपलब्ध हैं?", a: "मुख्यतः दो प्रकार: 1) हीमोडायलिसिस (HD), 2) पेरिटोनियल डायलिसिस (PD)" },

  { q: "हीमोडायलिसिस क्या है?", a: "यह मशीन द्वारा खून की सफाई है जिसमें मरीज को हफ्ते में 2–3 बार अस्पताल या डायलिसिस सेंटर जाना होता है।" },

  { q: "पेरिटोनियल डायलिसिस क्या है?", a: "यह पेट की झिल्ली (पेरिटोनियम) का उपयोग करके घर पर ही की जाने वाली डायलिसिस तकनीक है।" },

  { q: "भारत में डायलिसिस की लागत कितनी होती है?", a: "प्राइवेट सेंटरों में प्रति सत्र ₹1,500–₹4,000 और सरकारी अस्पतालों में अक्सर कम लागत या मुफ्त।" },

  { q: "क्या डायलिसिस दर्दनाक होता है?", a: "आमतौर पर नहीं, बस हीमोडायलिसिस में सुई लगने पर थोड़ी चुभन हो सकती है।" },

  { q: "डायलिसिस सत्र कितने समय का होता है?", a: "एक हीमोडायलिसिस सत्र लगभग 3–4 घंटे का होता है।" },

  { q: "डायलिसिस कितने दिन करना पड़ता है?", a: "आमतौर पर हफ्ते में 2–3 बार।" },

  { q: "क्या डायलिसिस से किडनी ठीक हो जाती है?", a: "नहीं, लेकिन डायलिसिस किडनी फेलियर में जीवन बनाए रखने में मदद करती है।" },

  { q: "क्या डायलिसिस घर पर की जा सकती है?", a: "हाँ, पेरिटोनियल डायलिसिस (PD) घर पर होती है; होम हीमोडायलिसिस भी कुछ जगहों पर उपलब्ध है।" },

  { q: "भारत में होम डायलिसिस की लागत कितनी होती है?", a: "यह प्रकार और उपकरण पर निर्भर करता है; आमतौर पर प्रति माह ₹20,000–₹40,000।" },

  { q: "क्या डायलिसिस मरीज सामान्य जीवन जी सकते हैं?", a: "हाँ, यदि समय पर डायलिसिस और सही आहार-दवा का पालन करें।" },

  { q: "डायलिसिस से थकान क्यों होती है?", a: "तरल परिवर्तन और ब्लड प्रेशर बदलने के कारण।" },

  { q: "क्या डायलिसिस के साइड इफेक्ट होते हैं?", a: "हाँ: थकान, रक्तचाप में गिरावट, मितली, पैरों में ऐंठन आदि।" },

  { q: "डायलिसिस मरीज कितना पानी पी सकते हैं?", a: "डॉक्टर आमतौर पर प्रतिदिन 500–1000 ml तक सीमित पानी की सलाह देते हैं।" },

  { q: "क्या डायलिसिस मरीज नमक खा सकते हैं?", a: "बहुत कम; नमक सीमित रखना जरूरी है।" },

  { q: "डायलिसिस मरीज क्या खा सकते हैं?", a: "कम नमक, कम पोटैशियम, कम फॉस्फोरस वाला भोजन।" },

  { q: "क्या डायलिसिस में खून की कमी होती है?", a: "हाँ, इसलिए एरिथ्रोपॉयटिन (EPO) इंजेक्शन दिए जाते हैं।" },

  { q: "क्या डायलिसिस मरीज यात्रा कर सकता है?", a: "हाँ, यदि यात्रा से पहले गंतव्य पर डायलिसिस स्लॉट बुक कर लिया जाए।" },

  { q: "AV फिस्टुला क्या है?", a: "यह एक प्रकार का सर्जिकल कनेक्शन है जो डायलिसिस में आसानी से खून निकालने-डालने में मदद करता है।" },

  { q: "AV फिस्टुला बनने में कितना समय लगता है?", a: "यूज़ होने लायक बनने में 4–8 सप्ताह।" },

  { q: "क्या बिना फिस्टुला के डायलिसिस हो सकती है?", a: "हाँ, लेकिन इसे अस्थायी कैथेटर (neck catheter) से किया जाता है जो कम सुरक्षित होता है।" },

  { q: "क्या डायलिसिस के दौरान संक्रमण का खतरा होता है?", a: "हाँ, लेकिन स्वच्छता और सही तकनीक से यह कम है।" },

  { q: "क्या डायलिसिस से ब्लड प्रेशर गिर सकता है?", a: "हाँ, यह सामान्य दुष्प्रभाव है।" },

  { q: "क्या डायलिसिस के दौरान खून पतला करने की दवा दी जाती है?", a: "हाँ, हीपरिन का उपयोग हो सकता है ताकि खून जम न जाए।" },

  { q: "क्या डायलिसिस से वजन बढ़ता है?", a: "तरल जमा होने से वजन में बदलाव हो सकता है।" },

  { q: "क्या डायलिसिस मरीज व्यायाम कर सकते हैं?", a: "हाँ, हल्का-फुल्का व्यायाम लाभदायक है।" },

  { q: "क्या डायलिसिस मरीज काम कर सकते हैं?", a: "हाँ, यदि उनका स्वास्थ्य इसकी अनुमति दे।" },

  { q: "क्या डायबिटीज वाले मरीज भी डायलिसिस करा सकते हैं?", a: "हाँ, और भारत में सबसे अधिक डायलिसिस मरीज डायबिटिक ही होते हैं।" },

  { q: "क्या डायलिसिस और किडनी ट्रांसप्लांट दोनों साथ-साथ चल सकते हैं?", a: "हाँ, ट्रांसप्लांट तक डायलिसिस जारी रहता है।" },

  { q: "क्या डायलिसिस के दौरान खून दिया जाता है?", a: "जरूरी नहीं। केवल जरूरत पड़ने पर।" },

  { q: "क्या डायलिसिस से उम्र कम हो जाती है?", a: "नहीं, सही इलाज और diet से जीवन लंबा और स्वस्थ रह सकता है।" },

  { q: "क्या डायलिसिस रोकना संभव है?", a: "सिर्फ तभी जब किडनी अचानक खराब हुई हो और बाद में ठीक हो जाए—अन्यथा नहीं।" },

  { q: "क्या डायलिसिस मशीन सुरक्षित है?", a: "हाँ, अस्पतालों में मानक मशीनें और सुरक्षा प्रोटोकॉल होते हैं।" },

  { q: "क्या बच्चे भी डायलिसिस करा सकते हैं?", a: "हाँ, बच्चों के लिए पेडियाट्रिक डायलिसिस उपलब्ध है।" },

  { q: "भारत में डायलिसिस केंद्र पर्याप्त हैं?", a: "बड़े शहरों में बहुत, ग्रामीण क्षेत्रों में तेजी से बढ़ रहे हैं।" },

  { q: "डायलिसिस के लिए कौन–से डॉक्टर जिम्मेदार होते हैं?", a: "नेफ्रोलॉजिस्ट (किडनी विशेषज्ञ)।" },

  { q: "क्या डायलिसिस के दौरान खाना खा सकते हैं?", a: "हल्का भोजन लिया जा सकता है, लेकिन डॉक्टर की सलाह पर।" },

  { q: "क्या डायलिसिस के दौरान टीवी देख सकते हैं?", a: "हाँ, मरीज सामान्य गतिविधियाँ कर सकता है।" },

  { q: "क्या डायलिसिस मरीज को दवाइयाँ जीवनभर लेनी पड़ती हैं?", a: "हाँ, विशेष रूप से BP, फॉस्फोरस बाइंडर और EPO इंजेक्शन।" },

  { q: "क्या डायलिसिस मरीज गर्भधारण कर सकती हैं?", a: "काफी जोखिम होता है, लेकिन संभव है—विशेष निगरानी ज़रूरी।" },

  { q: "क्या धूम्रपान डायलिसिस मरीज के लिए खतरनाक है?", a: "हाँ, यह किडनी और हृदय दोनों को नुकसान पहुंचाता है।" },

  { q: "क्या शराब पीना डायलिसिस मरीजों के लिए सुरक्षित है?", a: "नहीं, इसकी सख्त मनाही है।" },

  { q: "क्या डायलिसिस में हड्डियाँ कमजोर हो सकती हैं?", a: "हाँ, फॉस्फोरस बढ़ने से हड्डियाँ कमजोर हो सकती हैं।" },

  { q: "क्या डायलिसिस महंगी है?", a: "प्राइवेट में हाँ, लेकिन सरकारी योजनाएँ लागत कम करती हैं।" },

  { q: "भारत की कौन-सी सरकारी योजनाएँ डायलिसिस मुफ्त देती हैं?", a: "प्रधानमंत्री राष्ट्रीय डायलिसिस कार्यक्रम, आयुष्मान भारत, राज्य स्वास्थ्य योजनाएँ।" },

  { q: "क्या डायलिसिस के दौरान भूख कम लगती है?", a: "हाँ, लेकिन उचित पोषण जरूरी है।" },

  { q: "क्या डायलिसिस हमेशा समय पर कराना जरूरी है?", a: "हाँ, समय पर न कराने से शरीर में विषाक्त पदार्थ जमा हो जाते हैं।" },

  { q: "क्या डायलिसिस के बाद किडनी ट्रांसप्लांट करवाना बेहतर है?", a: "अधिकतर मामलों में हाँ—यह दीर्घकालिक समाधान है।" },
];


const testimonials = [
  {
    name: "AANYA",
    place: "",
    review:
      "My experience with the dialysis unit of Neerja hospital was very good as my mother was suffering from CKD. The team helped us a lot.",
    stars: 5,
  },
  {
    name: "VISHAL",
    place: "",
    review:
      "I am taking continuous dialysis sessions at Balaji Hospital, Sikar. The staff is well experienced.",
    stars: 5,
  },
  {
    name: "Rahul",
    place: "",
    review:
      "Great experience with the team. Also the unit is very hygienic. Fully satisfied.",
    stars: 5,
  },
  {
    name: "Anita",
    place: "",
    review:
      "At previous hospital in winters I used to have breathing problems, but after taking sessions in Petamed Hospital, Sikar now I am feeling very healthy and confident. Thank you team, you guys are doing a great job.",
    stars: 5,
  },
];




const newsData = [
  {
    img: img6,
    text: "NEERJA HOSPITAL, Bagrang Kanta, Sikar",
  },
  {
    img: img7,
    text: "BALAJI HOSPITAL, Piprali Road, Sikar",
  },
  {
    img: img8,
    text: "MANAVATA HOSPITAL, Todi Nagar, Sikar",
  },
  {
    img: img9,
    text: "K.R. MEMORIAL HOSPITAL, Chomu",
  },
  {
    img: img10,
    text: "BALAJI CURE & CARE HOSPITAL Sirsi Road , Jaipur",
  },
  {
    img: img11,
    text: "TAGORE HOSPITAL Jaipur",
  },
  {
    img: img12,
    text: "PRIYA HOSPITAL Baran",
  },

    {
    img: img13,
    text: "CKRDM HOSPITAL Jhunjhunu",
  },

    {
    img: img14,
    text: "BHARAT HOSPITAL Shardarshahar",
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
    icon: <FaUserMd />,
    title: "Expert Nephrologist Oversight",
    desc: "Every patient’s treatment plan is supervised by experienced nephrologists to ensure accurate decisions & better outcomes.",
  },
  {
    icon: <FaUserCheck />,
    title: "Competent & Certified Team",
    desc: "Our medical and technical staff undergo continuous skill-based training ensuring precise and safe dialysis care.",
  },
  {
    icon: <FaTint />,
    title: "Advanced Water Purification System",
    desc: "Our multi-stage RO & ultrapure water systems meet global standards for maximum safety & superior dialysis quality.",
  },
  {
    icon: <FaBuilding />,
    title: "Advanced Infrastructure",
    desc: "World-class dialysis machines and monitoring systems ensure precision, safety and comfort for every patient.",
  },
  {
    icon: <FaBookMedical />,
    title: "Evidence-Based Protocols",
    desc: "All treatments strictly follow globally accepted clinical guidelines ensuring safe and validated dialysis care.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Continuous Quality Monitoring",
    desc: "Internal & external audits ensure consistent adherence to clinical standards across all treatment sessions.",
  },
  {
    icon: <FaUserFriends />,
    title: "Personalized Dialysis Care",
    desc: "Each patient receives a custom dialysis plan based on condition, dry weight & comorbidities for better outcomes.",
  },
  {
    icon: <FaShieldVirus />,
    title: "Infection-Free Environment",
    desc: "Strict infection-control protocols, sterilization cycles & separate equipment for infected cases ensure safety.",
  },
  {
    icon: <FaAmbulance />,
    title: "Emergency-Ready Dialysis Support",
    desc: "Equipped to handle urgent dialysis with immediate response protocols and 24×7 support where required.",
  },
  {
    icon: <FaPrescriptionBottleAlt />,
    title: "Premium Consumables Only",
    desc: "Certified high-quality dialyzers & consumables reduce complications and ensure superior patient well-being.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Compassion-Driven Patient Experience",
    desc: "We provide empathy & emotional support along with treatment to ensure comfort throughout the dialysis journey.",
  },
  {
    icon: <FaUserShield />,
    title: "Patient Welfare / Safety First",
    desc: "Exclusive machines, staff & supplies are assigned to positive patients ensuring highest isolation & safety.",
  },
];



const slides = [
  {
    image: banner1,
    title: "Best Dialysis Center for Advanced Kidney Care",
    highlight: "Near You.",
    button: "Book Dialysis Appointment",
  },
  {
    image: banner2,
    title: "Expert Nephrologists & Hygienic Dialysis",
    highlight: "Trusted Results.",
    button: "Meet Our Specialists",
  },
  {
    image: banner3,
    title: "Safe & Sterile Kidney Dialysis Treatment",
    highlight: "24×7 Support.",
    button: "Explore Our Facilities",
  },
  {
    image: banner4,
    title: "Compassionate Kidney Care for Every Patient",
    highlight: "Anytime.",
    button: "Start Your Care Journey",
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

  const navigate = useNavigate();

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
            <Link  to="/setup#contact" className="btn btn-outline-light btn-lg cs_hero_btn">
              {slides[activeIndex].button}
            </Link>
          </div>
        </div>
      </section>

   {/* ===== Section 2 Stats ===== */}
<section className="stats-section py-5" ref={sectionRef}>
  <div className="container">
    <div className="stats-box mx-auto p-5">
      <div className="row justify-content-center align-items-center text-center g-5">

        {/* 1️⃣ Operational Centres */}
        <div className="col-6 col-md-3">
          <h2 className="stat-number count" data-target="25">0</h2>
          <p className="stat-title m-0">Operational Centres</p>
        </div>

        {/* 2️⃣ Satisfied Patients */}
        <div className="col-6 col-md-3">
          <h2 className="stat-number count" data-target="13256">0</h2>
          <p className="stat-title m-0">Satisfied Patients</p>
        </div>

        {/* 3️⃣ Sessions Completed */}
        <div className="col-6 col-md-3">
          <h2 className="stat-number count" data-target="260565">0</h2>
          <p className="stat-title m-0">Sessions Completed (Till Nov 2025)</p>
        </div>

        {/* 4️⃣ Active Patients */}
        <div className="col-6 col-md-3">
          <h2 className="stat-number count" data-target="3567">0</h2>
          <p className="stat-title m-0">Active Patients</p>
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
              <h2 className="section-title mb-5">Our Standards</h2>{" "}
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
                      <h6 className="value-title mt-3">{val.title}</h6>
                      <p className="value-desc mt-3">{val.desc}</p>

                      {/* improved spacing */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==== Section 4 — Our About ==== */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {/* left image */}
            <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
              <img src={First} alt="About" className="about-image" />
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
            Some Of Our Centers
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
             {/* LEFT TEXT */}
        <div className="col-lg-6 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
          <h2
            className="fw-bold"
            style={{
              color: "#D72323",
              fontSize: "45px",
              lineHeight: "55px",
              transition: "0.4s",
            }}
          >
            Find About Your Kidney <br /> Health Now !
          </h2>

          <button
            onClick={() => navigate("/gfr")}
            className="mt-4 px-4 py-3"
            style={{
              background: "linear-gradient(90deg, #004AAD, #1E73BE)",
              color: "#fff",
              borderRadius: "50px",
              border: "none",
              fontSize: "18px",
              transition: "0.4s",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) =>
              (e.target.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.target.style.transform = "scale(1)")
            }
          >
            Go to GFR Calculator
          </button>
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

          <p className="text-center empanel-desc mb-5">
  Nephrored Renal Care is trusted by leading government panels, TPAs and insurance providers, 
  ensuring <b>best dialysis care</b> for patients across India. Our empanelments make it easier
  for patients to access <b>hygienic dialysis</b>, <b>kidney care</b> and expert <b>nephrology services</b>
  at a center near them.
</p>

  <div className="row justify-content-center g-4">
  {[
    brand1,
    brand2,
    brand3,
    "OTHER_TPA", // 👈 new (special item)
  ].map((logo, i) => (
    <div
      key={i}
      className="col-6 col-md-3 d-flex justify-content-center align-items-center"
    >
      <div className="brand-logo-card">
        {logo === "OTHER_TPA" ? (
          <span className="other-tpa-text">Other TPA</span>
        ) : (
          <img src={logo} alt="brand-logo" className="brand-logo-img" />
        )}
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
