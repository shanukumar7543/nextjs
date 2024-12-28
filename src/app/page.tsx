import Banner from "@/Component/Home/Banner/Banner";
import Section3 from "@/Component/Home/Section3/Section3";
import dynamic from "next/dynamic";
{
  /* The following line can be included in your src/index.js or App.js file */
}
// Dynamically import SimpleSlider (no need for ssr: false since it's a Client Component)
const SimpleSlider = dynamic(() => import("@/Component/Home/Slider/SimpleSlider"));

const Home: React.FC = () => {
  const bgImage = "/upload/Images/bgBanner.jpg";

  return (
    <div className="homepages">
      {/* Banner Section */}
      <Banner bgImage={bgImage} />

      {/* Section 2 */}
      <SimpleSlider />

      {/* Section 3 */}

      <Section3 />

    </div>
  );
};

export default Home;
