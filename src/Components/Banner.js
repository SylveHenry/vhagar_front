import React from "react";

const Banner = () => {
  return (
    <div className="banner main-content px-4">
      <div
        className="banner-intro justify-content-center align-items-center pb-3"
        style={{ borderBottom: "1px solid #5ee616" }}
      >
        <div className="banner-first">
          <h2 className="text fw-bold ban">Vhagar On Solana</h2>
          <p
            className="text"
            style={{
              fontSize: "20px",
            }}
          >
            Amidst the icy winds of the crypto winter, a new $STORM has emerged.
            Launched on the Arbitrum Blockchain, Winter Storm aims to capitalize
            on the current market sentiment with its deflationary token. $STORM
            will be utilized within the Winter Storm ecosystem applications.
          </p>
          <li className="lis ban" style={{ listStyleType: "none" }}>
            Total Supply: 50 Trillion.
          </li>
          <li
            className="lis ban pb-3"
            style={{ fontSize: "0.9rem", listStyleType: "none" }}
          >
            {" "}
            Mint address: 0x47d6DbC99827cB929F274cd62Be2013c76E54a6a
          </li>

          <div className="d-flex">
            <button className="storm btn me-3   fw-bold">Get Storm</button>
            <button className="airdrop btn fw-bold">Airdrop Farm</button>
          </div>
        </div>
        <div className="text-end banner-image">
          <img src="../images/logo_icon2.png" alt="" width={400} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
