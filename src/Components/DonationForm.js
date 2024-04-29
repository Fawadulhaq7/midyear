import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DonationForm() {
  const [userData, setUserData] = useState({
    fullName: "",
    fatherName: "",
    cnicNumber: "",
    address: "",
    numFamilyMembers: "",
    // agesFamilyMembers: "",
    employmentStatus: "",
    monthlyIncome: "",
    sourceIncome: "",
    debtsLiabilities: "",
    assistanceNeeded: "",
    emergencyDetails: "",
    // cnicCopies: "",
    // proofResidence: "",
    // proofIncome: "",
    // medicalReports: "",
    // schoolCertificates: "",
    // references: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://metacare-b0f35-default-rtdb.firebaseio.com/userDataRecord.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      if (response.ok) {
        toast.success("Data Stored");
        setIsSubmitted(true);
      } else {
        toast.error("Failed to store data. Please try again.");
      }
    } catch (error) {
      console.error("Error storing data:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    // Validation logic goes here...
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      submitData(event);
    }
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Meta <span className="legal-siteSign">Care</span>
        </Link>
      </h1>
      <div className="form-container">
        <h2 className="form-title">
          <span>Donation </span>
        </h2>
        <form className="form-content" onSubmit={handleSubmit}>
          <label htmlFor="fullName">
            Full Name:
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={userData.fullName}
              onChange={postUserData}
            />
            {formErrors.fullName && (
              <p className="error-message">{formErrors.fullName}</p>
            )}
          </label>
          <label htmlFor="fatherName">
            Father's Name:
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              value={userData.fatherName}
              onChange={postUserData}
            />
            {formErrors.fatherName && (
              <p className="error-message">{formErrors.fatherName}</p>
            )}
          </label>
          <label htmlFor="cnicNumber">
            Cnic Number:
            <input
              type="text"
              id="cnicNumber"
              name="cnicNumber"
              value={userData.cnicNumber}
              onChange={postUserData}
            />
            {formErrors.cnicNumber && (
              <p className="error-message">{formErrors.cnicNumber}</p>
            )}
          </label>
          <label htmlFor="address">
            Address:
            <input
              type="text"
              id="address"
              name="address"
              value={userData.address}
              onChange={postUserData}
            />
            {formErrors.address && (
              <p className="error-message">{formErrors.address}</p>
            )}
          </label>
          <label htmlFor="numFamilyMembers">
            family members:
            <input
              type="text"
              id="numFamilyMembers"
              name="numFamilyMembers"
              value={userData.numFamilyMembers}
              onChange={postUserData}
            />
            {formErrors.cnicNumber && (
              <p className="error-message">{formErrors.numFamilyMembers}</p>
            )}
          </label>
          <label htmlFor="employmentStatus">
            Employment Status:
            <input
              type="text"
              id="employmentStatus"
              name="employmentStatus"
              value={userData.employmentStatus}
              onChange={postUserData}
            />
            {formErrors.employmentStatus && (
              <p className="error-message">{formErrors.employmentStatus}</p>
            )}
          </label>
          <label htmlFor="monthlyIncome">
            Monthly Income:
            <input
              type="text"
              id="monthlyIncome"
              name="monthlyIncome"
              value={userData.monthlyIncome}
              onChange={postUserData}
            />
            {formErrors.monthlyIncome && (
              <p className="error-message">{formErrors.monthlyIncome}</p>
            )}
          </label>
          <label htmlFor="sourceIncome">
            Source Income:
            <input
              type="text"
              id="sourceIncome"
              name="sourceIncome"
              value={userData.sourceIncome}
              onChange={postUserData}
            />
            {formErrors.sourceIncome && (
              <p className="error-message">{formErrors.sourceIncome}</p>
            )}
          </label>
          <label htmlFor="debtsLiabilities">
            Debts Liabilities:
            <input
              type="text"
              id="debtsLiabilities"
              name="debtsLiabilities"
              value={userData.debtsLiabilities}
              onChange={postUserData}
            />
            {formErrors.debtsLiabilities && (
              <p className="error-message">{formErrors.debtsLiabilities}</p>
            )}
          </label>
          <label htmlFor="assistanceNeeded">
            Assistance Needed:
            <input
              type="text"
              id="assistanceNeeded"
              name="assistanceNeeded"
              value={userData.assistanceNeeded}
              onChange={postUserData}
            />
            {formErrors.assistanceNeeded && (
              <p className="error-message">{formErrors.assistanceNeeded}</p>
            )}
          </label>
          <label htmlFor="emergencyDetails">
            Emergency Details
            <input
              type="text"
              id="emergencyDetails"
              name="emergencyDetails"
              value={userData.emergencyDetails}
              onChange={postUserData}
            />
            {formErrors.emergencyDetails && (
              <p className="error-message">{formErrors.emergencyDetails}</p>
            )}
          </label>
          <div>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                marginBottom: "5px",
              }}
            >
              Please send all credentials at{" "}
              <span style={{ color: "blue", fontStyle: "italic" }}>
                www.metacare.com
              </span>
            </p>
            <ul>
              <li style={{ fontWeight: "bold" }}>CNIC Copy</li>
              <li style={{ fontWeight: "bold" }}>Residence proof</li>
              <li style={{ fontWeight: "bold" }}>Income proof</li>
              <li style={{ fontWeight: "bold" }}>Electricity bills</li>
              <li style={{ fontWeight: "bold" }}>Medical reports</li>
              <li style={{ fontWeight: "bold" }}>School Certificates</li>
            </ul>
          </div>

          {/* Add more form inputs here */}
          <center>
            <button type="submit" className="text-appointment-btn">
              Submit
            </button>
          </center>
          <p
            className="success-message"
            style={{ display: isSubmitted ? "block" : "none" }}
          >
            Donation Details have been submitted.
          </p>
        </form>
      </div>
      <div className="legal-footer">
        <p>© 2024-2028 MetaCare . All rights reserved.</p>
      </div>
      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}
