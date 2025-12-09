import React, { useState } from "react";
import BannerImg from "../assets/dt2.webp"; 
import { FaHeartbeat, FaUsers, FaStethoscope, FaHandHoldingMedical } from "react-icons/fa";
import emailjs from "emailjs-com";

const ForDoctors = () => {
 const [form, setForm] = useState({
    name: "",
    city: "",
    phone: "",
    email: "",
    qualification: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.city || !form.phone || !form.email || !form.qualification) {
      alert("⚠️ Please fill all required fields!");
      return;
    }

    setLoading(true);

    const templateParams = {
      name: form.name,
      city: form.city,
      phone: form.phone,
      email: form.email,
      qualification: form.qualification,
    };

    emailjs
      .send(
        "service_k5ehrlk",        // Service ID
        "template_8a3bv1d",       // Template ID
        templateParams,
        "EL8sKokOs44IziXn-"       // Public Key
      )
      .then(() => {
        alert("🎉 Form submitted & email sent successfully!");
        setForm({ name: "", city: "", phone: "", email: "", qualification: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Failed to send email. Try again later.");
        setLoading(false);
      });
  };





 const data = [
  {
    id: "01",
    icon: <FaHeartbeat size={45} />,
    title: "Achieve Better Clinical Outcomes",
    text: "Our advanced kidney dialysis protocols and nephrology-led monitoring help in achieving safer and more hygienic dialysis outcomes for every patient."
  },
  {
    id: "02",
    icon: <FaStethoscope size={45} />,
    title: "Expand Your Patient Reach",
    text: "Grow your practice and establish your center as the nearby dialysis center patients trust for reliable and long-term kidney care."
  },
  {
    id: "03",
    icon: <FaUsers size={45} />,
    title: "Leverage Nephrored Renal Care’s Expertise",
    text: "End-to-end management including operations, staffing and tech integration — so doctors can focus only on delivering the best dialysis care."
  },
  {
    id: "04",
    icon: <FaHandHoldingMedical size={45} />,
    title: "Commitment to Quality Treatment",
    text: "We ensure global-standard nephrology practices, sterile environment and patient-first approach — making every dialysis session safe and comfortable."
  },
];





  return (
    <div>

   {/* SECTION-1 */}
<section
  className="py-5"
  style={{
    backgroundColor: "white",
    overflow: "hidden",
  }}
>
  <div className="container">
    <div className="row align-items-center">

      {/* Left Image Column */}
      <div className="col-lg-6 mb-4 mb-lg-0 text-center">
        <div className="image-wrapper">
          <img
            src={BannerImg}
            alt="Best Dialysis Center - Nephrored Renal Care"
            className="img-fluid rounded-4 section-img"
          />
        </div>
      </div>

      {/* Right Text Column */}
      <div className="col-lg-6">
        <h2
          className="fw-bold mb-4"
          style={{
            fontSize: "35px",
            lineHeight: "1.2",
            color: "#1F2B6C",
          }}
        >
          Partner with Nephrored Renal Care:
          <br /> Elevating Kidney Dialysis & Nephrology Care in India
        </h2>

        <p
          className="text-secondary"
          style={{
            fontSize: "17px",
            lineHeight: "1.7",
            maxWidth: "90%",
          }}
        >
          Nephrored Renal Care is transforming dialysis treatment across India
          with modern technology, hygienic dialysis practices and expert
          <b> nephrology-driven kidney care</b>. As one of the
          <b> best dialysis centers</b> in India, we enable doctors and hospitals
          to expand their reach and deliver safe and comfortable
          <b> kidney dialysis</b> to every patient. Partnering with us helps
          you build a <b>nearby dialysis center</b> experience patients trust —
          backed by compassionate care, clinical excellence and long-term outcomes.
        </p>
      </div>

    </div>
  </div>
</section>



    {/* SECTION-2 */}
      <section className="py-5 section-four-bg">
      <div className="container">
        <h2 className="fw-bold text-center mb-5" style={{ fontSize: "40px", color: "#1F2B6C" }}>
          Why Nephrored Renal Care is the ideal<br />partner for you!
        </h2>

        {/* 4 rows — 2 cols */}
        {Array.from({ length: 2 }).map((_, rowIndex) => (
          <div className="row align-items-center justify-content-center mb-5" key={rowIndex}>
            {/* Left item */}
            <div className="col-lg-5">
              <div className="section4-box">
                <div className="icon-circle">{data[rowIndex * 2].icon}</div>
                <h3 className="step-number">{data[rowIndex * 2].id}</h3>
                <h5 className="section4-title">{data[rowIndex * 2].title}</h5>
                <p className="section4-text">{data[rowIndex * 2].text}</p>
              </div>
            </div>

            {/* Vertical Line */}
            <div className="col-lg-2 d-none d-lg-flex justify-content-center">
              <div className="vertical-line"></div>
            </div>

            {/* Right item */}
            <div className="col-lg-5">
              <div className="section4-box">
                <div className="icon-circle">{data[rowIndex * 2 + 1].icon}</div>
                <h3 className="step-number">{data[rowIndex * 2 + 1].id}</h3>
                <h5 className="section4-title">{data[rowIndex * 2 + 1].title}</h5>
                <p className="section4-text">{data[rowIndex * 2 + 1].text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* SECTION-3 */}
   <section className="section5-form py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5 section5-heading">
          Reach Out To Us
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">Your Name<span className="text-danger">*</span></label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="form-control form5-input"
              />
            </div>

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">City<span className="text-danger">*</span></label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Enter City"
                className="form-control form5-input"
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">Your Phone Number<span className="text-danger">*</span></label>
              <input
                type="number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
                className="form-control form5-input"
              />
            </div>

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">Your Email<span className="text-danger">*</span></label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="form-control form5-input"
              />
            </div>
          </div>

          <div className="mb-4 col-md-6">
            <label className="form-label fw-semibold">Qualification<span className="text-danger">*</span></label>
            <select
              name="qualification"
              value={form.qualification}
              onChange={handleChange}
              className="form-select form5-input"
            >
              <option value="">-- Select Qualification --</option>
              <option value="Diploma">Diploma</option>
              <option value="BSc Nursing">BSc Nursing</option>
              <option value="GNM">GNM</option>
              <option value="Medical Technician">Medical Technician</option>
            </select>
          </div>

          <button className="submit-btn" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit →"}
          </button>
        </form>
      </div>
    </section>
      
    </div>
  )
}

export default ForDoctors
