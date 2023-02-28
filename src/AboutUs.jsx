import React from "react";
import { extraImages } from "./index.js";

export default function AboutUs() {
  return (
    <div className="about-us-main-container">
      {/* <h1>The Sone Guy</h1> */}
      <div className="about-us-div">
        <p className="about-us-p">
          At The Stone Guy, we're more than just a granite installation company
          - we're a family. Our owner, Todd, has known our crew for years, and
          we've all worked together to build a business that we're proud of.
          We're hard-working, dedicated to quality, and committed to providing
          exceptional customer service.
        </p>
        <img
          className="about-us-img"
          src={extraImages[5]}
          alt="Placeholder Image"
        />
      </div>
      <div className="about-us-div">
        <img
          className="about-us-img"
          src={extraImages[4]}
          alt="Placeholder Image"
          style={{ height: "350px", width: "350px" }}
        />
        <p className="about-us-p">
          Over the years, we've had the pleasure of working with some of the
          most high-end customers in the Seattle and Western Washington region.
          From prestigious law firms to tech giants like Microsoft, we've
          installed granite for some of the most influential leaders in the
          community. But we're just as passionate about working with everyday
          homeowners who are looking to upgrade their kitchen or bathroom.
          <br></br>Our customers come to us because they know that our work
          speaks for itself. We take great pride in every project we undertake,
          from start to finish. We believe that our dedication to quality and
          craftsmanship is what sets us apart from other granite installation
          companies, and our customers agree. Word travels fast, and we're proud
          to have built a business based on referrals and repeat business.
        </p>
      </div>
      <div className="about-us-div">
        <p className="about-us-p">
          If you're looking for a down-to-earth, hard-working team of
          professionals who are dedicated to providing the best possible
          service, look no further than The Stone Guy. Contact us today to
          schedule your consultation and see the difference that comes with
          working with the best in the business.
        </p>
        <img
          className="about-us-img"
          src={extraImages[1]}
          alt="Placeholder Image"
          style={{ height: "350px", width: "350px" }}
        />
      </div>
    </div>
  );
}
