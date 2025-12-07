import React from 'react'
import { Link } from "react-router-dom";
const ForHospital = () => {
  return (
    <div>
 
        {/* SECTION-1 */}
         <section className="section5-solutions py-5 my-5">
      <div className="container text-center">

        {/* Heading */}
        <h2 className="fw-bold section5-title mb-5">
          Choose the right dialysis unit solution for your hospital
        </h2>

        {/* Two Boxes */}
        <div className="row g-4 justify-content-center">
          <div className="col-md-6">
            <div className="solution-box d-flex justify-content-center align-items-center">
              <Link to="/setup" className="solution-btn">
                Setup A New Dialysis Unit
              </Link>
            </div>
          </div>

          <div className="col-md-6">
            <div className="solution-box d-flex justify-content-center align-items-center">
              <Link to="/outsource" className="solution-btn">
                Outsource An Existing Dialysis Unit
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
      
    </div>
  )
}

export default ForHospital
