import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './InfoCard.css';

const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4 info-card">
      <div className={`d-flex align-items-center info-container info-${info.background}`}>
        <div>
          <FontAwesomeIcon className='info-icon' icon={info.icon} />
        </div>
        <div className='ml-4'>
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
