import React from "react";
import InformationCard from "./InformationCard";
import {
  faHeartPulse,
  faClinicMedical,
  faHandHoldingMedical,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>

        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. At MetaCare, you can 
          request for funds or medical equipments, while our platform also allows you to 
          connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="HealthConnect"
          description="Our Health service facilitates user requests for crucial healthcare equipment 
          such as mobility aids, monitoring devices, and specialized medical tools. Users also connect with healthcare professionals for 
          expert advice, creating a supportive network for consultations. This comprehensive approach ensures 
          access to essential devices 
          while promoting overall well-being through expert guidance and support."
          icon={faClinicMedical}
        />

        <InformationCard
          title="Innovation"
          description="Experience our groundbreaking innovation in Health Services. Our Healthcare Assistance Platform 
          revolutionizes the way individuals access urgent medical assistance. Through seamless integration of advanced 
          technology and human-centric design, we provide swift and effective support to those facing critical healthcare needs.."
          icon={faHandHoldingMedical}
        />

        <InformationCard
          title="Donations"
          description="The Donations service on our Healthcare Assistance Platform empowers 
          users to seek financial aid for medical expenses and various healthcare needs. 
          This allows user to ask for financial help online, rather than going physically to charity foundations.
        This approach makes a meaningful difference, fostering a healthier and more equitable future for all.."
          icon={faHeartPulse}
        />
      </div>
    </div>
  );
}

export default Info;
