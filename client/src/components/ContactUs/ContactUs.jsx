import React from "react";
import CarouselImages from "../CarouselImages/CarouselImages";
import ValidatedForm from "./ValidatedForm/ValidatedForm";

const ContactUs = () => {
  return (
    <div
      id="contact-us"
      style={{ backgroundColor: "black", color: "white", padding: "5%" }}
    >
      <p
        style={{ textAlign: "center", fontSize: "60px", marginBottom: "40px" }}
      >
        Contact Us
      </p>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50vw", height: "35vh" }}>
          <div
            className=""
            style={{ width: "100%", height: "50%", display: "flex" }}
          >
            Ready to take the next step? We're here to help you get started.
            Contact us below for detailed information and personalized
            assistance. Let's make your journey a success together!
          </div>
          <div style={{ width: "100%", height: "50%" }}>
            <ValidatedForm />
          </div>
        </div>
        <CarouselImages
          firstImgSrc={
            "https://www.crossfit.com/wp-content/uploads/2023/11/13131628/join-a-crossfit-class-1024x576.jpg"
          }
          secondImgSrc={
            "https://thebarbellspin.com/wp-content/uploads/2024/05/victorhoffer_2024semifinals.jpg"
          }
          thirdImgSrc={
            "https://n9y9v4s5.rocketcdn.me/wp-content/uploads/CROSSFIT-HEADER-PIC--e1624548400157.jpg"
          }
        />
      </div>
    </div>
  );
};

export default ContactUs;
