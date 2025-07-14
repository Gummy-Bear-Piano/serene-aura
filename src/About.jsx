import Footer from "./Footer";
import Header from "./Header/Header";

const About = () => {
  return (
    <div>
      <Header />
      <div>
        <video className="w-full " controls loop src="/Images/vid1.mp4"></video>
      </div>

      <Footer />
    </div>
  );
};

export default About;
