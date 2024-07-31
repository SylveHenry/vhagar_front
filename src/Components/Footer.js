import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="containerr ">
          <div className="column first ">
            <div className="footr text-center">
              <img src="../images/logo_icon2.png" alt="" width={200} />
            </div>
          </div>
          <div className="column ">
            <h4 className="fw-bold"><img src="../images/logo_with_word.png" width={130} alt="" /></h4>
            
            <a href="/join">
              <li className="coll" style={{ listStyleType: "none" }}>
                Vhager on Solana
              </li>
            </a>
            <a href="/privacy">
              <li className="coll" style={{ listStyleType: "none" }}>
                Not just a token
              </li>
            </a>
          </div>
          <div className="column ">
            <h4 className="fw-bold">Company</h4>
            <a href="/about">
              <li className="coll" style={{ listStyleType: "none" }}>
                Success stories
              </li>
            </a>
            <a href="/about">
              <li className="coll" style={{ listStyleType: "none" }}>
                About us
              </li>
            </a>
            <a href="/about">
              <li className="coll" style={{ listStyleType: "none" }}>
                Our Team
              </li>
            </a>
            <a href="/join">
              <li className="coll" style={{ listStyleType: "none" }}>
                Join us
              </li>
            </a>
            <a href="/privacy">
              <li className="coll" style={{ listStyleType: "none" }}>
                Privacy policy
              </li>
            </a>
          </div>
          <div className="column co-serve">
            <h4 className="fw-bold">Services</h4>
            <a href="/detail">
              <li className="coll" style={{ listStyleType: "none" }}>
                UI/UX development
              </li>
            </a>
            <a href="/detail">
              <li className="coll" style={{ listStyleType: "none" }}>
                Software
              </li>
            </a>
            <a href="/detail">
              {" "}
              <li className="coll" style={{ listStyleType: "none" }}>
                Digital transformation
              </li>
            </a>
            <a href="/detail">
              <li className="coll" style={{ listStyleType: "none" }}>
                Cloud infrastructure
              </li>
            </a>
            <a href="/detail">
              {" "}
              <li className="coll" style={{ listStyleType: "none" }}>
                Tech hiring services
              </li>
            </a>
          </div>
          <div className=" co-cont">
            <div className="d-flex justify-content-center align-items-center pt-4 ">
              <li className="pe-2">
                <img src="../images/discord.png" width={40} alt="" />
              </li>
              <li className="pe-2">
                <img src="../images/telegram.png" width={40} alt="" />
              </li>
              <li className="bg-light">
                <img src="../images/x1.png" width={35} alt="" />
              </li>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "0.5px",
            background: "#5ee616",
            marginTop: "40px",
          }}
        ></div>
        <p className="text-center opp p-2">
          <i class="bi bi-c-circle" style={{ color: "#5ee616" }}></i>&nbsp; 2024
          INYTNYT. &nbsp;All right reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
