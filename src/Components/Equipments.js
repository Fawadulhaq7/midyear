// EquipmentRequests.js
import React from 'react';
// import { useNavigate } from "react-router-dom";
import '../Styles/Equipments.css';

const equipments = () => {
  // Generate random data for demonstration
    const requests = [
        { id: 1, equipment: 'Portable Electrocardiogram (ECG) Monitor', quantity: 3 },
        { id: 2, equipment: 'Continuous Glucose Monitoring System', quantity: 11 },
        { id: 3, equipment: 'Home Sleep Apnea Test Kit', quantity: 23 },
        { id: 4, equipment: 'Personal Blood Analysis Device', quantity: 5 },
        { id: 5, equipment: 'Smart Inhaler for Asthma Management', quantity: 2 },
        { id: 9, equipment: 'Personal Oxygen Concentrator', quantity: 16 },
         { id: 10, equipment: 'Portable UV Sterilizer for Medical Equipment', quantity: 1 },
         { id: 11, equipment: 'Nebulizer', quantity: 120 },
      ];

  return (
    <div className="equipments">
      <h2>Pending Requests for Medical Equipment</h2>
      <ul>
        {requests.map(request => (
          <li key={request.id}>
            <span>{request.equipment}</span>
            <span>Quantity: {request.quantity}</span>
          </li>
        ))}
      </ul>
      <button className="request-button">Request Medical Equipment</button>
    </div>
  );

 

};

export default equipments;
