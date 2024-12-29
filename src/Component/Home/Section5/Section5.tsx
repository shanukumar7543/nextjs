import React from "react";
import Image from "next/image"; // Import Next.js Image component
import "./section5.css";

const Section5: React.FC = () => {
    return (
        <div className="sec3">
            <div className="container ">

                {/* Left Column */}
                <div className="col-md-6 d-none">
                    <Image
                        src="/upload/Images/jpeg-optimizer_looking-for-employees-hire-c-level-recruitment-agency.webp"
                        alt="Talent to Tech Brilliance"
                        width={536} // Adjust width based on your design
                        height={354} // Adjust height based on your design
                        priority // Optional: Optimize loading for this image
                    />
                </div>





                {/*  Right Column */}
                <div className="col-md-6 text">
                    <h2 className="section-title">Among Top Employment Agencies in Abu Dhabi
                    </h2>
                    <p className="section-description">
                        We are the top recruitment agencies in Abu Dhabi and our theory is not simply to fill job position but rather to fill business needs. We begin by becoming familiar with you and your organization completely. Via carefully surveying your business prerequisites and objectives, we can help you recognize an exact ability set required by the occupation to ensure a smooth recruiting process. Moreover we know individuals and set aside the opportunity to become more acquainted with our candidates. Subsequently, when you work with our private recruitment agencies in Abu Dhabi, you will be coordinated with skilled people who can get straight down to business without fail.
                    </p>

                </div>

            </div>
        </div>
    );
};

export default Section5;
