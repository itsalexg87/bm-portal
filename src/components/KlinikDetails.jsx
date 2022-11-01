import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { FiChevronUp } from "react-icons/fi";

import GoogleMapReact from "google-map-react";

//components
import Helmet from "./Helmet";
import Breadcrumb from "./Breadcrumb";
import Header from "../components/Header";
import Footer from "../components/Footer";

//cards
import CardContact from "./Cards/CardContact";
import CardSocial from "./Cards/CardSocial";
import CardDescription from "./Cards/CardDescription";
import CardBehandlungen from "./Cards/CardBehandlungen";
import CardDienstleistungen from "./Cards/CardDienstleistungen";
import CardSonstiges from "./Cards/CardSonstiges";
import CardVideo from "./Cards/CardVideo";
import CardsImageList from "./Cards/CardsImageList";

//data
import { kliniken } from "../data/klinikData";

//bg image
import background from "../assets/images/bg/klinikDetails.webp";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      backgroundColor: "blue",
      cursor: "pointer",
      position: "absolute",
      border: "2px solid #fff",
      width: "20px",
      height: "20px",
      borderRadius: "100%",
    }}
    title={text}
  />
);

const KlinikDetails = () => {
  const idHelp = window.location.href.split("/");
  const idKlinik = idHelp[idHelp.length - 1];

  // console.log(idHelp);
  // console.log(idKlinik);

  // const klinik = kliniken.find(doc => doc.id === parseInt(idKlinik));
  const klinik = kliniken.find((doc) => doc.id === idKlinik);

  //helmet
  const helmet = {
    title: "",
    description: "Finden Sie die beste Klinik für Ihre Schönheitsoperation",
  };

  return (
    <>
      <Helmet pageTitle={klinik.metaTitle} pageDescription={klinik.metaDescription} />

      <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
      {/* Start Breadcrump Area */}
      <Breadcrumb title={klinik.title} bgImage={background} />
      {/* End Breadcrump Area */}

      <div className="service-area creative-service-wrapper pt--30 pb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Slider */}
              {/* <div style={{ marginBottom: '50px' }}>
								<Slider {...settings}>
									{klinik.images.map(i => (
										<div key={i.caption}>
											<img src={i.url} style={{ margin: 'auto' }} alt={i.caption} />
											<p style={{ textAlign: 'center' }}>{i.caption}</p>
										</div>
									))}
								</Slider>
							</div> */}
              {/* Kontakt */}
              <div style={{ marginBottom: "30px" }}>
                <CardsImageList data={klinik} />
              </div>
              <div style={{ marginBottom: "30px" }}>
                <CardContact data={klinik} />
              </div>
              {/* ImageList */}
              {/* Social */}
              {klinik.social ? (
                <div style={{ marginBottom: "30px" }}>
                  <CardSocial data={klinik} />
                </div>
              ) : null}
              {/* Video */}
              {klinik.video ? (
                <div style={{ marginBottom: "30px" }}>
                  <CardVideo data={klinik} />
                </div>
              ) : null}
              {/* Beschreibung */}
              <div style={{ marginBottom: "30px" }}>
                <CardDescription data={klinik} />
              </div>
              {/* Eingriffe */}
              <div style={{ marginBottom: "30px" }}>
                <CardBehandlungen data={klinik} />
              </div>
              {/* Diensleistungen */}
              <div style={{ marginBottom: "30px" }}>
                <CardDienstleistungen data={klinik} />
              </div>
              {/* Sonstiges */}
              <div style={{ marginBottom: "30px" }}>
                <CardSonstiges data={klinik} />
              </div>
              {/* Sprachen */}
              {/* <div style={{ marginBottom: '30px' }}>
								<CardSprachen data={klinik} />
							</div> */}
              {/* GMaps */}
              {/* Start Contact Map  */}
              <div className="rn-contact-map-area position-relative">
                <div style={{ height: "300px", width: "100%" }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                    // TODO: Maps aktivieren
                    // bootstrapURLKeys={{ key: 'AIzaSyCimARMKHai6_rxLYrI6PqMiQHdSwlSY54' }}
                    // defaultCenter={this.props.center}
                    defaultCenter={{ lat: klinik.gmaps.lat, lng: klinik.gmaps.lng }}
                    defaultZoom={10}>
                    <AnyReactComponent lat={klinik.gmaps.lat} lng={klinik.gmaps.lng} text={klinik.title} />
                  </GoogleMapReact>
                </div>
              </div>
              {/* End Contact Map  */}
            </div>
          </div>
        </div>
      </div>

      {/* Start Footer Style  */}
      <Footer />
      {/* End Footer Style  */}
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </>
  );
};

export default KlinikDetails;

// class KlinikDetails extends Component {
// 	render() {

// 		return ;
// 	}
// }
// export default KlinikDetails;
