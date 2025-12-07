import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import careerBg from "../assets/career.png";
import emailjs from "emailjs-com";
const Career = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.cv) {
      alert("Please upload your CV");
      return;
    }

    // ✅ STEP 1: Upload CV to your server/storage
    // For demo, I'm using a placeholder link
    const cvLink = "https://yourserver.com/uploads/" + formData.cv.name;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      role: formData.role,
      cv_link: cvLink, // send link instead of Base64
      client_email: "nephroredrenalcare@gmail.com",
    };

    // ✅ STEP 2: Send Email using EmailJS
    emailjs
      .send(
        "service_k5ehrlk",      // Your Service ID
        "template_8a3bv1d",     // Your Template ID
        templateParams,
        "EL8sKokOs44IziXn-"     // Your Public Key
      )
      .then(() => {
        alert("Form submitted & email sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          role: "",
          cv: null,
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong!");
      });
  };






  return (
    <div>

      {/* SECTION-1 HERO */}
      {/* SECTION-1 HERO */}
<section
  className="career-hero d-flex align-items-center justify-content-center text-center"
  style={{ backgroundImage: `url(${careerBg})` }}
  data-aos="zoom-in"
  data-aos-duration="900"
>
  <div className="career-hero-content">
    <h3 className="career-hero-small">Join Us</h3>
    <h1 className="career-hero-big">Take A Career Boost!</h1>
  </div>
</section>




 {/* SECTION-2 FORM */}
      <section className="career-form-section py-5">
        <div className="container">
          <h2 className="career-title text-center">Join Our Team</h2>
          <p className="career-sub text-center mb-5">
            We are always looking for talented individuals to join our team. Apply now!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              <div className="col-md-6">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control career-input"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control career-input"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Your Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control career-input"
                  placeholder="Enter Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Select Role</label>
                <select
                  name="role"
                  className="form-select career-input"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Role</option>
                  <option>Clinical Technician</option>
                  <option>Biomedical Engineer</option>
                  <option>RO Engineer</option>
                  <option>Customer Support</option>
                  <option>Accounts/Finance</option>
                  <option>Procurement/Supply Chain</option>
                  <option>Human Resources</option>
                  <option>Data Analytics</option>
                  <option>Sales/Hospital Partnerships</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Upload CV</label>
                <div className="cv-box d-flex align-items-center gap-3">
                  <FaUpload className="cv-icon" />
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    name="cv"
                    className="form-control border-0"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="career-submit mt-4">
              Submit →
            </button>
          </form>
        </div>
      </section>

   
    </div>
  );
};

export default Career;
