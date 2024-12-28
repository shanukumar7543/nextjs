import React from "react";
import Image from "next/image"; // Import Next.js Image component
import "./section3.css";

const Section3: React.FC = () => {
    return (
        <div className="sec3">
            <div className="container ">
                {/* Left Column */}
                <div className="col-md-6 d-none">
                    <Image
                        src="/upload/Images/talent-to-tech-brilients.webp"
                        alt="Talent to Tech Brilliance"
                        width={668} // Adjust width based on your design
                        height={642} // Adjust height based on your design
                        priority // Optional: Optimize loading for this image
                    />
                </div>

                {/* Right Column */}
                <div className="col-md-6 text">
                    <h2 className="section-title">AIS  : From Talent to Tech Brilliance</h2>
                    <p className="section-description">
                        We have got you covered, from remote teams and task forces through AIS Talent to cutting-edge cyber gaming and next-gen solutions with AIS Tech Brilliance.
                    </p>
                    <p className="section-description">
                        AIS Talent connects you with exceptional remote IT professionals and dedicated task forces tailored for  empowering your IT initiatives .
                    </p>
                    <p className="section-description">
                        As your trusted IT partner and premier Custom Mobile App & Game App Development Company, Tech Brilliance  delivers  ready-made and  customized gaming products along with hybrid apps, CRMs,WEB GL. and more.
                    </p>
                    <p className="section-description">
                        Trust us to make a difference!</p>
                    <div className="button-bottom">

                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;
