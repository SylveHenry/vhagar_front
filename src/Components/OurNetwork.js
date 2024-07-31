import React from "react";

const OurNetwork = () => {
  return (
    <div id="network">
      <h2 className="ban card-title text-center">OurNetwork</h2>
      <div className="networks">
        <div>
          <li>
            <img src="../images/coinmarketcap.png" width={30} alt="" />
          </li>
          &nbsp;&nbsp;
          <li className="text">CoinMarketCap</li>
        </div>
        <div>
          <li>
            <img src="../images/coingecko.webp" width={30} alt="" />
          </li>
          &nbsp;&nbsp;
          <li className="text">Coin Gecko</li>
        </div>
        <div>
          <li>
            <img src="../images/sushiswap.png" width={30} alt="" />
          </li>
          &nbsp;&nbsp;
          <li className="text">SushiSwap</li>
        </div>
        <div>
          <li>
            <img src="../images/pinksale.png" width={30} alt="" />
          </li>
          &nbsp;&nbsp;
          <li className="text">PinkSale</li>
        </div>
        <div>
          <li>
            <img src="../images/base.png" width={30} alt="" />
          </li>
          &nbsp;&nbsp;
          <li className="text">Base</li>
        </div>
        <div>
          <li>
            <img src="../images/uniswap.png" width={30} alt="" />
          </li>
          &nbsp;&nbsp;
          <li className="text">UniSwap</li>
        </div>
        <div>
          <li>
            <img src="../images/pancake.png" width={30} alt="" />
          </li>
          &nbsp;&nbsp;
          <li className="text">Pancake Swap</li>
        </div>
        <div>
          <li>
            <img src="../images/Dex_Screener.png" width={30} alt="" />
          </li>
          &nbsp;&nbsp;
          <li className="text">Dex Screener</li>
        </div>
      </div>

      <div className="p-5 text-center mb-5">
        <h3 className="text card-title ban">JOIN THE COMMUNITY</h3>
        <h4 className="text pt-3">
          Follow us on our Official Channels to never miss important updates and
          announcements!
        </h4>
        <div className="d-flex justify-content-center align-items-center pt-4 ">
          <li className="pe-2">
            <img src="../images/discord.png" alt="" />
          </li>
          <li className="pe-2">
            <img src="../images/telegram.png" alt="" />
          </li>
          <li className="bg-light">
            <img src="../images/x1.png" alt="" />
          </li>
        </div>
      </div>
    </div>
  );
};

export default OurNetwork;
