import "./Referanslar.scss";
import ReferansCard from "./ReferansCard";

const Referanslar = () => {
  return (
    <div className="referanslar">
      <div className="projectName">
        <img src="/images/referans.jpeg" alt="" />
        <div className="container">
          <div className="bannerText">
            <div className="title">
              <h1>Referanslarımız</h1>
            </div>
          </div>
        </div>

        <div className="background"></div>
      </div>
      <div className="container">
        <div className="referanslarContent">
          {Array.from({ length: 36 }, (_, index) => (
            <ReferansCard index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Referanslar;
