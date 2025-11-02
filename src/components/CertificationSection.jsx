import React from 'react'
import { SlBadge } from "react-icons/sl";
import { AiFillSafetyCertificate } from "react-icons/ai";



const CertificationSection = () => {
  return (
    <div className='certification-banner'>
      <div className='badge'>
<AiFillSafetyCertificate />
        <h4>Certifying drainlayer</h4>
      </div>

      <div className='badge'>
<AiFillSafetyCertificate />
        <h4>Certifying plumber</h4>
      </div>
    </div>
  )
}

export default CertificationSection
