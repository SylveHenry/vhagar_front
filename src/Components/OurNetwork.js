import React from "react";

const OurNetwork = () => {
  return (
    <div id="network">
      <h2 className="ban card-title text-center">VGR NETWORK</h2>
      <ul className="networks">
        <li>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <div className="network-item">
              <img src="../images/coinmarketcap.png" width={30} alt="CoinMarketCap" />
              <span className="text">CoinMarketCap</span>
            </div>
          </a>
        </li>
        <li>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <div className="network-item">
              <img src="../images/coingecko.webp" width={30} alt="Coin Gecko" />
              <span className="text">Coin Gecko</span>
            </div>
          </a>
        </li>
        <li>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <div className="network-item">
              <img src="../images/sushiswap.png" width={30} alt="Radium Swap" />
              <span className="text">Radium Swap</span>
            </div>
          </a>
        </li>
        <li>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <div className="network-item">
              <img src="../images/pinksale.png" width={30} alt="PinkSale" />
              <span className="text">PinkSale</span>
            </div>
          </a>
        </li>
        <li>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <div className="network-item">
              <img src="../images/base.png" width={30} alt="Solana" />
              <span className="text">Solana</span>
            </div>
          </a>
        </li>
        <li>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <div className="network-item">
              <img src="../images/uniswap.png" width={30} alt="Crypto News" />
              <span className="text">Crypto News</span>
            </div>
          </a>
        </li>
        <li>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <div className="network-item">
              <img src="../images/pancake.png" width={30} alt="Jupiter Dex" />
              <span className="text">Jupiter Dex</span>
            </div>
          </a>
        </li>
        <li>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <div className="network-item">
              <img src="../images/Dex_Screener.png" width={30} alt="Dex Screener" />
              <span className="text">Dex Screener</span>
            </div>
          </a>
        </li>
      </ul>

      <div className="p-5 text-center mb-5">
        <h3 className="text card-title ban">JOIN THE COMMUNITY</h3>
        <h4 className="text pt-3">
          Follow us on our Official Channels to never miss important updates and
          announcements!
        </h4>
        <div className="d-flex justify-content-center align-items-center pt-4">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="pe-2">
            <img src="../images/discord.png" alt="Discord" className="glow" />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="pe-2">
            <img src="../images/telegram.png" alt="Telegram" className="glow" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="bg-light">
            <img src="../images/x1.png" alt="X" className="glow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurNetwork;
