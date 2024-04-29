import React from "react";
import DoctorImage from "../Assets/doctors.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={DoctorImage} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Us?</span>
        </h3>
        <p className="ba-description">
          Discover the reasons to choose MetaCare for your healthcare needs.
          Experience expert care, apply for funds, get medical equipments,
          and personalized solutions, making your well-being our top priority.
           Join us on a journey to
          better health and a happier life.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Best Professional Doctors
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Get Donations
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Get Medical Equipments
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Innovative Technology
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
