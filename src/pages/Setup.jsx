import React, { useEffect, useState } from "react";
import AOS from "aos";
import Carousel from "react-bootstrap/Carousel";  // <-- 🔥 REQUIRED IMPORT
import Accordion from "react-bootstrap/Accordion";
// React Icons
import { FaMoneyCheckAlt, FaUserCog, FaTools } from "react-icons/fa";
import { MdInventory, MdHealthAndSafety } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { TbReportMoney, TbDeviceHeartMonitor } from "react-icons/tb";
import emailjs from "emailjs-com";



const Setup = () => {



  const [form, setForm] = useState({
    hospitalName: "",
    state: "",
    city: "",
    name: "",
    phone: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !form.hospitalName ||
      !form.state ||
      !form.city ||
      !form.name ||
      !form.phone ||
      !form.email ||
      !form.description
    ) {
      alert("⚠️ Please fill all required fields!");
      return;
    }

    const templateParams = {
      hospitalName: form.hospitalName,
      state: form.state,
      city: form.city,
      name: form.name,
      phone: form.phone,
      email: form.email,
      description: form.description,
    };

    emailjs
      .send(
        "service_k5ehrlk",        // ⭐ Service ID
        "template_dofbdg9",       // ⭐ Template ID
        templateParams,
        "EL8sKokOs44IziXn-"       // ⭐ Public Key
      )
      .then(() => {
        alert("🎉 Message Sent Successfully!");
        setForm({
          hospitalName: "",
          state: "",
          city: "",
          name: "",
          phone: "",
          email: "",
          description: "",
        });
      })
      .catch(() => {
        alert("❌ Something went wrong! Try again");
      });
  };










  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);


   
  const cards = [
    {
      title: "CAPEX INVESTMENT",
      text: "Upto 1 crore depending on scale of operations and potential to invest further with growth.",
      icon: <FaMoneyCheckAlt />,
    },
    {
      title: "INVENTORY CONTROL",
      text: "No single supplier of all consumables; requires managing 25 vendors each with different MOQ & delivery timelines.",
      icon: <MdInventory />,
    },
    {
      title: "CLINICAL & BEHAVIORAL TRAINING",
      text: "Clinical & behavioral training by experts to enable high quality patient care and retention.",
      icon: <MdHealthAndSafety />,
    },
    {
      title: "HOLISTIC SOLUTION",
      text: "Billing support and management + Nephrologist tie-up.",
      icon: <TbReportMoney />,
    },
    {
      title: "COMPLETE SOURCING",
      text: "Equipment & consumables (25+ unique consumables required per session).",
      icon: <TbDeviceHeartMonitor />,
    },
    {
      title: "HUMAN RESOURCE",
      text: "Onboarding, skilling & regular refresher training of technicians and nurses.",
      icon: <RiTeamFill />,
    },
    {
      title: "EQUIPMENT MAINTENANCE",
      text: "Preventive & reactive maintenance by dedicated biomedical team.",
      icon: <FaTools />,
    },
    {
      title: "END-TO-END SPENDS MANAGEMENT",
      text: "Full financial management to ensure smooth operations.",
      icon: <FaUserCog />,
    },
  ];


  const accordionItems = [
  {
    title: "High CAPEX load",
    desc: "Setting up a dialysis center demands heavy investment in equipment, infrastructure & biomedical support.",
  },
  {
    title: "Supply chain management",
    desc: "Sourcing 25+ unique consumables regularly, managing vendors, quality & compliance becomes operationally heavy.",
  },
  {
    title: "Skilled manpower challenge",
    desc: "Hiring, training & retaining skilled dialysis technicians and nurses is a constant challenge.",
  },
  {
    title: "Biomedical & equipment upkeep",
    desc: "Machines need preventive + reactive maintenance to ensure uninterrupted treatment and safety.",
  },
  {
    title: "Documentation & audits",
    desc: "Maintaining NABH, infection control and procedural audits requires standardized processes.",
  },
];








  const circleSlides = [
    "ICU/IPD REVENUES",
    "F&B REVENUES",
    "PATHOLOGY REVENUES",
    "CHRONIC CARE REVENUES",
    "DIALYSIS REVENUES",
    "INPATIENT REVENUES",
  ];

  return (

    <div>

      {/* SECTION-1 */}
    <section className="setup-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE TEXT */}
          <div className="col-md-6 text-start">
            <h1 className="setup-title">
              BOOST YOUR BOTTOM <br />
              LINE WITH <span className="text-red">Nephrored Renal Care!</span>
            </h1>
            <div className="line mt-3 mb-3"></div>
            <h5 className="setup-subtext">
              Unlock <span className="text-red">MULTIPLE</span> Revenue streams
            </h5>
          </div>

          {/* RIGHT SIDE CAROUSEL */}
          <div className="col-md-6 d-flex justify-content-center">
            <Carousel controls={false} indicators={false} interval={2000} pause={false}>
              {circleSlides.map((item, i) => (
                <Carousel.Item key={i}>
                  <div className="circle-slide d-flex justify-content-center align-items-center">
                    <h3 className="circle-heading">{item}</h3>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

        </div>
      </div>
    </section>


    
    {/* // SECTION-2 */}
    <section className="choose-section py-5">
      <div className="container">
        <div className="row align-items-center py-5">

          {/* LEFT SIDE HEADING */}
          <div className="col-md-6 pe-md-5">
            <h1 className="choose-title">
              STARTING AND MANAGING A <span className="text-red">DIALYSIS CENTER</span> REMAINS
              <br /> CHALLENGING FOR <span className="text-red">› 73%</span> OF PRIVATE
              <br /> HOSPITALS OF <span className="text-red">INDIA</span>
            </h1>
          </div>

          {/* RIGHT SIDE ACCORDION */}
          <div className="col-md-6">
            <Accordion defaultActiveKey="0" className="choose-accordion">
              {accordionItems.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index} className="acc-item">
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>{item.desc}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>


    {/* SECTION-3 */}
   <section className="setup-section py-5">
      <div className="container">

       <div className="text-center mb-5" data-aos="fade-up">
  <p className="top-subtitle">HOW DO WE DO IT?</p>
  <h2 className="main-heading">
    Hassle Free <span>END-TO-END</span>
  </h2>
  <p className="">
    SPENDS & MANAGEMENT OF THE CENTER — Designed for hospitals and nephrologists looking to build a
    <b> hygienic dialysis unit</b> with complete operational support and the highest standards of
    <b> kidney dialysis</b> & <b> nephrology-based kidney care</b>. This process helps hospitals
    become the <b>best dialysis center</b> in their region and attract more patients searching
    for a <b>nearby dialysis center</b> they can trust.
  </p>
</div>

        {/* Row 1 */}
        <div className="row g-4 mb-4">
          {cards.slice(0, 4).map((card, i) => (
            <div className="col-lg-3 d-flex col-md-6" key={i} data-aos="zoom-in">
              <div className="setup-card  h-100">
                <div className="setup-icon">{card.icon}</div>
                <h5>{card.title}</h5>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="row g-4 mb-4">
          {cards.slice(4, 8).map((card, i) => (
            <div className="col-lg-3 col-md-6" key={i} data-aos="zoom-in">
              <div className="setup-card h-100">
                <div className="setup-icon">{card.icon}</div>
                <h5>{card.title}</h5>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="row g-4 justify-content-center">
          {cards.slice(0, 2).map((card, i) => (
            <div className="col-lg-5 col-md-6" key={i} data-aos="fade-right">
              <div className="setup-card h-100">
                <div className="setup-icon">{card.icon}</div>
                <h5>{card.title}</h5>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>




 {/* SECTION-4 : CONTACT FORM */}
 <section className="contact-section py-5">
      <div className="container">
        <h2 className="form-heading mb-4" data-aos="fade-right">
          Reach Out To Us
        </h2>

        <form className="row g-4" data-aos="fade-up" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label>Hospital Name*</label>
            <input
              type="text"
              name="hospitalName"
              value={form.hospitalName}
              onChange={handleChange}
              className="form-control custom-input"
              placeholder="Enter Hospital Name"
            />
          </div>

          <div className="col-md-6">
            <label>Enter State*</label>
            <input
              type="text"
              name="state"
              value={form.state}
              onChange={handleChange}
              className="form-control custom-input"
              placeholder="Enter State"
            />
          </div>

          <div className="col-md-6">
            <label>Enter City*</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              className="form-control custom-input"
              placeholder="Enter City"
            />
          </div>

          <div className="col-md-6">
            <label>Your Name*</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control custom-input"
              placeholder="Enter Your Name"
            />
          </div>

          <div className="col-md-6">
            <label>Your Phone Number*</label>
            <input
              type="number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="form-control custom-input"
              placeholder="Enter Your Phone Number"
            />
          </div>

          <div className="col-md-6">
            <label>Your Email*</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-control custom-input"
              placeholder="Enter Your Email"
            />
          </div>

          <div className="col-12">
            <label>Description*</label>
            <textarea
              rows="4"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="form-control custom-input"
              placeholder="Enter Description"
            ></textarea>
          </div>

          <div className="col-12 mt-2">
            <button type="submit" className="submit-btn">
              Submit →
            </button>
          </div>
        </form>
      </div>
    </section>




    
</div>
  );
};

export default Setup;
