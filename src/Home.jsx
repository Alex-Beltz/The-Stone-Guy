import React from "react";
import { extraImages } from "./index.js";

export default function Home() {
  return (
    <div className="home-main-container">
      {/* <h1>The Sone Guy</h1> */}
      <div className="home-div">
        <img
          className="home-img"
          src={extraImages[0]}
          alt="Placeholder Image"
        />
        <p className="home-p">
          At The Stone Guy, we believe that quality and craftsmanship are the
          cornerstones of any successful granite installation project. That's
          why our owner, Todd, started this company with a commitment to
          providing the highest quality work and customer service possible.
        </p>
      </div>
      <div className="home-div">
        <p className="home-p">
          Todd's journey to becoming the owner of The Stone Guy started as a
          humble installer working his way up through the ranks to become
          director of operations in another company. When that company went out
          of business, Todd knew that he had the skills and experience needed to
          start his own business. He started The Stone Guy with a small loan and
          a big dream of providing exceptional granite installations.
        </p>
        <img
          className="home-img"
          src={extraImages[3]}
          alt="Placeholder Image"
          style={{ height: "350px", width: "350px" }}
        />
      </div>
      <div className="home-div">
        <img
          className="home-img"
          src={extraImages[2]}
          alt="Placeholder Image"
          style={{ height: "350px", width: "350px" }}
        />
        <p className="home-p">
          Now, years later, The Stone Guy is a thriving business, known for our
          expertise, reliability, and commitment to customer satisfaction.
          Whether you're looking to install a new countertop or update your
          bathroom, The Stone Guy has the skills and experience to get the job
          done right. Contact us today to schedule your consultation and see the
          difference that comes with working with the best in the business.
        </p>
      </div>
    </div>
  );
}

// import React from "react";
// import { extraImages } from "./index.js";
// import { Link } from "react-router-dom";
// import Contact from "./Contact";

// export default function Home() {
//   return (
//     <div className="home-main-container">
//       <h1>The Sone Guy</h1>
//       <div className="home-div">
//         <img
//           className="home-img"
//           src={extraImages[0]}
//           alt="Placeholder Image"
//         />
//         <p className="home-p">
//           At The Stone Guy, we believe that quality and craftsmanship are the
//           cornerstones of any successful granite installation project. That's
//           why our owner, Todd, started this company with a commitment to
//           providing the highest quality work and customer service possible.
//         </p>
//       </div>
//       <div className="home-div">
//         <p className="home-p">
//           Todd's journey to becoming the owner of The Stone Guy started as a
//           humble installer working his way up through the ranks to become
//           director of operations in another company. When that company went out
//           of business, Todd knew that he had the skills and experience needed to
//           start his own business. He started The Stone Guy with a small loan and
//           a big dream of providing exceptional granite installations.
//         </p>
//         <img
//           className="home-img"
//           src={extraImages[3]}
//           alt="Placeholder Image"
//           style={{ height: "350px", width: "350px" }}
//         />
//       </div>
//       <div className="home-div">
//         <img
//           className="home-img"
//           src={extraImages[2]}
//           alt="Placeholder Image"
//           style={{ height: "350px", width: "350px" }}
//         />
//         <p className="home-p">
//           Now, years later, The Stone Guy is a thriving business, known for our
//           expertise, reliability, and commitment to customer satisfaction.
//           Whether you're looking to install a new countertop or update your
//           bathroom, The Stone Guy has the skills and experience to get the job
//           done right.{" "}
//           <Link to="<Contact />" className="home-link">
//             Contact us
//           </Link>{" "}
//           today to schedule your consultation and see the difference that comes
//           with working with the best in the business.
//         </p>
//       </div>
//     </div>
//   );
// }
