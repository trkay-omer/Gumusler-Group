import "./Footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import data from "../../data.json";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerItem">
          <div className="logo">
            <a href="/">
              <img src="/images/logo/logo.png" alt="Akıllı Logo" />
            </a>
          </div>
          <div className="metin">
            <p>{data.footerDesc}</p>
          </div>
        </div>

        <div className="footerItem">
          <h3>Ürün Gamımız</h3>
          <hr />
          <ul className="footerHizmet">
            {data.kategoriler.map((item, index) => (
              <li key={index}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footerItem">
          <h3>İletişim Bilgilerimiz</h3>
          <hr />
          <ul>
            <li className="sag">
              <div className="yeap ">
                <PhoneIcon />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                  }}
                  className="div"
                >
                  <a href={data.telefon_linki}>
                    <span style={{ marginRight: "-0.5rem" }} className="ici">
                      {data.Ad1} : {data.telefon}
                    </span>
                  </a>
                  <a href={data.telefon2_linki}>
                    <span style={{ marginRight: "-0.5rem" }} className="ici">
                      {data.Ad2} : {data.telefon2}
                    </span>
                  </a>
                  <a href={data.telefon3_linki}>
                    <span style={{ marginRight: "-0.5rem" }} className="ici">
                      {data.Ad3} : {data.telefon3}
                    </span>
                  </a>
                  <a href={data.telefon4_linki}>
                    <span style={{ marginRight: "-0.5rem" }} className="ici">
                      {data.Ad4} : {data.telefon4}
                    </span>
                  </a>
                </div>
              </div>
            </li>

            <li className="sag">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={data.instagram_linki}
              >
                <InstagramIcon />
                <span>{data.instagram}</span>
              </a>
            </li>

            <li className="sag">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={data.instagram2_linki}
              >
                <InstagramIcon />
                <span>{data.instagram2}</span>
              </a>
            </li>

            <li className="sag">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={data.adres_linki}
              >
                <MapIcon />
                <span>{data.adres}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr style={{ width: "100%", border: "1px solid #dee0ea" }} />

      <div className="container">
        <p style={{ fontSize: "0.85rem" }}>
          Copyright 2025 © {data.magazaIsmi}. Bütün Hakları Saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
