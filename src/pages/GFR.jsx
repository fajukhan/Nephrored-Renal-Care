import React, { useState } from "react";
import kidneyInfoImg from "../assets/GFR-1.png"; // left big red kidney image
import { FaQuestionCircle, FaLightbulb, FaCalculator, FaClipboardCheck, FaExclamationTriangle } from "react-icons/fa";
const GFR = () => {
  const [age, setAge] = useState("");
  const [creatinine, setCreatinine] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateGFR = () => {
    if (!age || !creatinine || !gender || !weight) {
      alert("Please fill all fields");
      return;
    }

    // Cockcroft-Gault Formula
    let gfr = ((140 - age) * weight) / (72 * creatinine);
    if (gender === "Female") gfr *= 0.85;
    setResult(gfr.toFixed(2));
  };

  return (
  <div>


    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold" style={{ color: "#004AAD" }}>
        GFR Calculator
      </h2>

      <div className="row g-4 justify-content-center">

        <div className="col-md-5">
          <label className="mb-2">Age</label>
          <input type="number" className="form-control"
            placeholder="Enter Your Age"
            value={age} onChange={(e) => setAge(e.target.value)} />
        </div>

        <div className="col-md-5">
          <label className="mb-2">Serum Creatinine (mg/dL)</label>
          <input type="number" step="0.01" className="form-control"
            placeholder="Enter Creatinine Level"
            value={creatinine} onChange={(e) => setCreatinine(e.target.value)} />
        </div>

        <div className="col-md-5">
          <label className="mb-2">Gender</label>
          <select className="form-select"
            value={gender} onChange={(e) => setGender(e.target.value)}>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="col-md-5">
          <label className="mb-2">Weight (kg)</label>
          <input type="number" className="form-control"
            placeholder="Enter Your Weight"
            value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>

        <div className="text-center mt-4">
          <button
            className="px-5 py-3"
            style={{
              background: "linear-gradient(90deg, #004AAD, #1E73BE)",
              color: "#fff",
              borderRadius: "45px",
              border: "none",
              fontSize: "20px",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            onClick={calculateGFR}
          >
            Calculate GFR
          </button>
        </div>

        {/* Show Result */}
        {result && (
          <h3
            className="text-center mt-4 fw-bold"
            style={{
              color: result < 60 ? "red" : "green",
              transition: "0.4s",
            }}
          >
            Your GFR: {result}
          </h3>
        )}
      </div>
    </div>




 <div className="container py-5">
      <div className="row align-items-center justify-content-center">

        {/* LEFT IMAGE */}
        <div className="col-lg-5 col-md-12 text-center mb-4 mb-lg-0">
          <img
            src={kidneyInfoImg}
            alt="Kidney"
            className="img-fluid"
            style={{
              maxWidth: "80%",
              transition: "0.5s",
              animation: "float 3s ease-in-out infinite",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-lg-7 col-md-12">
          <h2
            className="fw-bold mb-4"
            style={{ color: "#09255B", fontSize: "42px" }}
          >
            What Is GFR Calculator
          </h2>

          {/* CARDS GRID */}
          <div className="row g-4">

            {/* 1 */}
            <div className="col-md-6">
              <div className="p-4 h-100 info-card">
                <FaQuestionCircle size={35} color="#09255B" />
                <h5 className="fw-bold mt-3">What is GFR Calculator?</h5>
                <p>
                  The GFR calculator estimates how well your kidneys filter
                  waste and excess fluids from the blood.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="col-md-6">
              <div className="p-4 h-100 info-card">
                <FaLightbulb size={35} color="#09255B" />
                <h5 className="fw-bold mt-3">Why is GFR Important?</h5>
                <p>
                  GFR helps detect kidney damage early and guides decisions for
                  monitoring and treatment.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="col-md-6">
              <div className="p-4 h-100 info-card">
                <FaCalculator size={35} color="#09255B" />
                <h5 className="fw-bold mt-3">How to Calculate GFR?</h5>
                <p>
                  GFR is determined using age, gender, serum creatinine, and
                  other medical factors with CKD-EPI equation.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="col-md-6">
              <div className="p-4 h-100 info-card">
                <FaClipboardCheck size={35} color="#09255B" />
                <h5 className="fw-bold mt-3">Interpreting GFR Results</h5>
                <p>
                  90+ is normal, 60-89 mild, 30-59 moderate, 15-29 severe damage,
                  <b> &lt;15 indicates kidney failure</b>.
                </p>
              </div>
            </div>

            {/* 5 FULL WIDTH */}
            <div className="col-md-12">
              <div className="p-4 h-100 info-card">
                <FaExclamationTriangle size={35} color="#09255B" />
                <h5 className="fw-bold mt-3">Good and Dangerous Signs in GFR Test</h5>
                <p>
                  Healthy GFR is 90+. Below 60 suggests kidney disease. A GFR of
                  15 or lower is an emergency requiring medical attention.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FLOAT ANIMATION CSS */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .info-card {
          background: #ffffff;
          border-radius: 18px;
          border: 1px solid rgba(0,0,0,0.08);
          transition: 0.4s;
          cursor: pointer;
        }
        .info-card:hover {
          transform: translateY(-6px);
          box-shadow: 0px 12px 35px rgba(0,0,0,0.18);
          background: #F1F6FF;
        }
        .info-card p {
          font-size: 15px;
          margin-top: 6px;
          color: #2A2F3C;
          line-height: 1.45;
        }
      `}</style>
    </div>



    </div>
  );
};

export default GFR;
