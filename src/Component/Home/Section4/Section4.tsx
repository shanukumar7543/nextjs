import React from "react";
import Image from "next/image"; // Import Next.js Image component
import "./section4.css";

const Section4: React.FC = () => {
    return (
        <div className="sec3">
            <div className="container ">

                {/* Left Column */}
                <div className="col-md-6 text">
                    <h2 className="section-title">Excellent Recruitment Company in Abu Dhabi
                    </h2>
                    <p className="section-description">
                        Our recruitment companies in Abu Dhabi, Riyadh constantly meet and exceed the expectations of our clients and we do this by understanding your individual recruitment needs as a hiring manager, and using these to pinpoint the best individuals available to fill your vacancy.                    </p>
                    <p className="section-description">
                        At our manpower recruitment agencies Abu Dhabi, we have practical experience in placing very talented professionals with an extensive variety of organizations in Abu Dhabi. Our industry aptitude and experienced recruitment consultants can help you find experts who have exactly the abilities expected to propel your business. Enthusiasm of our manpower agencies in Abu Dhabi is working with high gauge job seekers and helping them to discover important work that fulfills their profession and life desires.


                    </p>
                </div>


                {/*  Right Column */}
                <div className="col-md-6 d-none">
                    <Image
                        src="/upload/Images/jpeg-optimizer_global-footprint-banking-recruitment-agencies-in-dubai-team.webp"
                        alt="Talent to Tech Brilliance"
                        width={668} // Adjust width based on your design
                        height={642} // Adjust height based on your design
                        priority // Optional: Optimize loading for this image
                    />
                </div>

            </div>
        </div>
    );
};

export default Section4;
