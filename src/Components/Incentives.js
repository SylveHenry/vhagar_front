import React from "react";

const Incentives = () => {
  return (
    <>
      <h3 className="ban card-title text-center incent-top">TREASURE TROVE <br/> (Incentives)</h3>
      <div className="incent">
        <a href="https://app.vhager.finance/" target="_blank" rel="noopener noreferrer" class="card text" style={{ width: "14 rem" }}>
          <div class="card-body">
            <h5 class="card-title ban">
              <img className="incent-image" 
              src="../images/staking.png" 
              alt="" 
              />{" "}
              VHAGER STAKING
            </h5>

            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </a>
        <a href="#_" target="_blank" rel="noopener noreferrer" class="card text" style={{ width: "14 rem" }}>
          <div class="card-body">
            <h5 class="card-title ban">
              {" "}
              <img
                className="incent-image"
                src="../images/token_burn.png"
                alt=""
              />{" "}
              VGR TOKEN BURN
            </h5>

            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </a>
        <a href="#_" target="_blank" rel="noopener noreferrer" class="card text" style={{ width: "14 rem" }}>
          <div class="card-body">
            <h5 class="card-title ban">
              {" "}
              <img
                className="incent-image"
                src="../images/swap.png"
                alt="swap img"
              />{" "}
              6% SWAP TAX
            </h5>

            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </a>
        <a href="#_" target="_blank" rel="noopener noreferrer" class="card text" style={{ width: "14 rem" }}>
          <div class="card-body">
            <h5 class="card-title ban">
              {" "}
              <img
                className="incent-image"
                src="../images/vgr_bot.png"
                alt=""
              />{" "}
              VHAGER BOT
            </h5>

            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </a>
        <a href="https://vhager.finance/tokenomics" target="_blank" rel="noopener noreferrer" class="card text" style={{ width: "14 rem" }}>
          <div class="card-body">
            <h5 class="card-title ban">
              {" "}
              <img
                className="incent-image"
                src="../images/locked_liquidity.png"
                alt=""
              />{" "}
              LOCKED LIQUIDITY
            </h5>
            

            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </a>
        <a href="https://vhager.finance/tokenomics" target="_blank" rel="noopener noreferrer" class="card text" style={{ width: "14 rem" }}>
          <div class="card-body">
            <h5 class="card-title ban">
              {" "}
              <img
                className="incent-image"
                src="../images/team_vesting.png"
                alt=""
              />{" "}
              TEAM VESTING
            </h5>

            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Incentives;
