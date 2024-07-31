import React from "react";

const Banner = () => {
  return (
    <div className="banner main-content px-4">
      <div
        className="banner-intro justify-content-center align-items-center pb-3"
        style={{ borderBottom: "1px solid #5ee616", minHeight: '80vh' }}
      >
        <div className="banner-first">
          <h2 className="text fw-bold pb-4 ban">Vhagar On Solana</h2>
          <p
            className="text"
            style={{
              fontSize: "25px",
            }}
          >
            Amidst the icy winds of the crypto winter, a new $STORM has emerged.
            Launched on the Arbitrum Blockchain, Winter Storm aims to capitalize
            on the current market sentiment with its deflationary token. $STORM
            will be utilized within the Winter Storm ecosystem applications.
          </p>
          <li className="lis ban" style={{ fontSize: "25px", listStyleType: "none" }}>
            Total Supply: 1 BILLION .
          </li>
          <li
            className="lis ban pb-5"
            style={{ fontSize: "1.25rem", listStyleType: "none" }}
          >
            {" "}
            Token address: 0x47d6DbC99827cB929F274cd62Be2013c76E54a6a
          </li>

          <div className="d-flex">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="storm-link">
              <button className="storm btn me-3 fw-bold">Get VGR</button>
            </a>
            <a href="https://forms.vhager.finance/airdrop/" target="_blank" rel="noopener noreferrer" className="airdrop-link">
              <button className="airdrop btn fw-bold">Airdrop Form</button>
            </a>
          </div>
        </div>
        <div className="text-end banner-image">
          <img src="../images/logo_icon2.png" alt="" width={550} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
