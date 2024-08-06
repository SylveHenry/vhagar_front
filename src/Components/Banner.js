import React from "react";

const Banner = () => {
  return (
    <div className="banner main-content px-4">
      <div className="banner-intro justify-content-center align-items-center pb-3">
        <div className="banner-first">
          <h2 className="text fw-bold pb-4 ban">Vhager On Solana</h2>
          <p className="text text-p">
          A slumbering giant awakens.  The noise across the Solana Blockchain has roused the titan of legend to flight. 
          $Vhager aims to capitalise on the current market sentiment and with her deflationary token, 
          once again prove why she is the greatest living dragon. 
          <br/>
          First a bellow, then a roar, this is the Vhager who lives.
          </p>
          <li className="lis ban pb-2 total-supply">Total Supply: 1 BILLION.</li>
          <li className="lis ban pb-4 token-address">
            Token address: 0x47d6DbC99827cB929F274cd62Be2013c76E54a6a
          </li>

          <div className="d-flex">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="storm-link">
              <button className="storm btn me-3 fw-bold stake-button">Get VGR</button>
            </a>
            <a href="https://forms.vhager.finance/airdrop/" target="_blank" rel="noopener noreferrer" className="airdrop-link">
              <button className="airdrop btn fw-bold stake-button">Airdrop Form</button>
            </a>
          </div>
        </div>
        <div className="text-end banner-image">
          <img src="../images/logo_icon2.png" alt="" width={525} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
