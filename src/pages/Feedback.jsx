import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Feedback = () => {
  // Ratings State
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);

  return (
    <div className="feedback-bg py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 text-vc">Feedback Form</h2>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control fb-input" placeholder="Enter Your Name" />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Contact Number</label>
            <input type="text" className="form-control fb-input" placeholder="Enter Contact Number" />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control fb-input" placeholder="Enter Email" />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">MR Identification Number</label>
            <input type="text" className="form-control fb-input" placeholder="Enter MR ID" />
          </div>
        </div>

        {/* Ratings Section */}
        <h5 className="fw-bold mt-4 mb-3">Rate Your Experience (1 to 5)</h5>

        {/* Rating 1 */}
        <label className="rating-title">How satisfied were you with our dialysis staff?</label>
        <div className="d-flex gap-3 mb-3">
          {[1,2,3,4,5].map((index) => (
            <FaStar
              key={index}
              onClick={() => setRating1(index)}
              className="rating-star"
              size={28}
              color={rating1 >= index ? "#FFD700" : "#CCCCCC"}
            />
          ))}
        </div>

        {/* Rating 2 */}
        <label className="rating-title">How accessible did you find the dialysis centre?</label>
        <div className="d-flex gap-3 mb-3">
          {[1,2,3,4,5].map((index) => (
            <FaStar
              key={index}
              onClick={() => setRating2(index)}
              className="rating-star"
              size={28}
              color={rating2 >= index ? "#FFD700" : "#CCCCCC"}
            />
          ))}
        </div>

        {/* Rating 3 */}
        <label className="rating-title">How would you rate your overall experience at the dialysis centre?</label>
        <div className="d-flex gap-3 mb-3">
          {[1,2,3,4,5].map((index) => (
            <FaStar
              key={index}
              onClick={() => setRating3(index)}
              className="rating-star"
              size={28}
              color={rating3 >= index ? "#FFD700" : "#CCCCCC"}
            />
          ))}
        </div>

        {/* Suggestions */}
        <div className="mb-4">
          <label className="form-label fw-semibold">Suggestions for Improvement</label>
          <textarea className="form-control fb-input" rows="4" placeholder="Your suggestions..."></textarea>
        </div>

        {/* Submit Button */}
        <button className="btn fb-btn px-4 py-2">
          Submit →
        </button>
      </div>
    </div>
  );
};

export default Feedback;
