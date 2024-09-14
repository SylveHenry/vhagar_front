import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="containerr">
          <div className="column first">
            <div className="footer text-center">
              <a href="/">
                <img src="../images/logo_icon2.png" alt="Logo Icon" width={210} />
              </a>
            </div>
          </div>
          <div className="column">
            <h4 className="fw-bold">
              <a href="/">
                <img src="../images/logo_with_word.png" width={150} alt="Logo with word" />
              </a>
            </h4>
            <ul className="list-unstyled">
              <li className="coll">Vhagar on Solana</li>
              <li className="coll">Not just a token</li>
            </ul>
          </div>
          <div className="column">
            <h4 className="fw-bold">
              <a href="https://raydium.io/" target="_blank" rel="noopener noreferrer">Raydium</a>
            </h4>
            <ul className="list-unstyled">
              <li className="coll">
                <a href="#about">About</a>
              </li>
              <li className="coll">
                <a href="#tokenomics">Tokenomics</a>
              </li>
              <li className="coll">
                <a href="#roadmap-container">RoadMap</a>
              </li>
            </ul>
          </div>
          <div className="column co-serve">
            <h4 className="fw-bold">
              <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer">Dex Screener</a>
            </h4>
            <ul className="list-unstyled">
              <li className="coll">
                <a href="https://jup.ag/">Jupiter Dex</a>
              </li>
              <li className="coll">
                <a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer">Coinmarketcap</a>
              </li>
              <li className="coll">
                <a href="https://birdeye.so/token/4UvV46RjhL4Xvy1DeGWBHJ2EWUwzgNN2EzUumMqMVDQA?chain=solana" target="_blank" rel="noopener noreferrer">BirdEye</a>
              </li>
            </ul>
          </div>
          <div className="co-cont">
            <div className="d-flex justify-content-center align-items-center pt-4">
              <a href="https://discord.com/invite/3fKQTuYSYP" target="_blank" rel="noopener noreferrer" className="pe-2">
                <img src="../images/discord.png" width={40} alt="Discord" className="glow" />
              </a>
              <a href="https://t.me/Vhagar_on_Sol" target="_blank" rel="noopener noreferrer" className="pe-2">
                <img src="../images/telegram.png" width={40} alt="Telegram" className="glow" />
              </a>
              <a href="https://x.com/Vhagar_on_Sol" target="_blank" rel="noopener noreferrer" className="bg-light">
                <img src="../images/x1.png" width={35} alt="X" className="glow" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-divider"></div>
        <p className="text-center opp p-2">
          <i className="bi bi-c-circle" style={{ color: "#5ee616" }}></i>&nbsp;2024 Vhagar. &nbsp;All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
