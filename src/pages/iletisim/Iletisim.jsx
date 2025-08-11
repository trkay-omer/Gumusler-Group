import "./Iletisim.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import data from "../../data.json";

const Iletisim = () => {
  return (
    <div className="iletisim">
      <div className="container">
        <div className="content">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.1879394017565!2d37.412122!3d37.0530043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e5e03cfa6789%3A0x1ea0fbafab9e75ca!2zR8OcTcOcxZ5MRVIgT2t1bC3EsMWfLW1lZGlrYWwga8SxeWFmZXRsZXJpIGltYWxhdC10b3B0YW4!5e0!3m2!1str!2str!4v1754677267949!5m2!1str!2str"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              className="iframe"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="infoIletisim">
            <div className="itemIletisim">
              <h3>Adres Bilgilerimiz</h3>
              <p>{data.adres}</p>
              <p>{data.adres2}</p>
              <p>{data.adres3}</p>
            </div>

            <div className="itemIletisim">
              <h3>Telefon Numaralarımız</h3>
              <div className="itemList">
                <p
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <a href={data.telefon_linki}>
                    {data.Ad1} : {data.telefon}
                  </a>
                  <a href={data.telefon2_linki}>
                    {data.Ad2} : {data.telefon2}
                  </a>
                  <a href={data.telefon3_linki}>
                    {data.Ad3} : {data.telefon3}
                  </a>
                  <a href={data.telefon4_linki}>
                    {data.Ad4} : {data.telefon4}
                  </a>
                </p>
              </div>
            </div>

            <div className="itemIletisim">
              <h3>Medya Hesaplarımız</h3>
              <div className="medyas">
                <a href={data.mail_linki} className="itemList">
                  <EmailIcon />
                  <p>{data.mail}</p>
                </a>
                <a
                  id="sea"
                  target="_blank"
                  href={data.instagram_linki}
                  className="itemList"
                >
                  <InstagramIcon />
                  <p>{data.instagram}</p>
                </a>
                <a
                  id="sea"
                  target="_blank"
                  href={data.instagram_linki}
                  className="itemList"
                >
                  <InstagramIcon />
                  <p>{data.instagram}</p>
                </a>
              </div>
            </div>

            <div className="itemIletisim">
              <h3>Mesai Saatlerimiz</h3>
              <div className="medyas">
                <div className="itemList">
                  <h4>Haftaiçi:</h4>
                  <p>{data.haftaIcı}</p>
                </div>
                <div className="itemList">
                  <h4>Hafta Sonu:</h4>
                  <p>{data.haftaSonu}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iletisim;
