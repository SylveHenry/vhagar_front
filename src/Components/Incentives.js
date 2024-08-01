import React from "react";

const Incentives = () => {
  return (
    <>
      <h3 className="ban card-title text-center incent-top">TREASURE TROVE 
        <br/> 
        (Incentives)
      </h3>

        <div className="inc-grid">

              <a href="https://app.vhager.finance/" target="_blank" rel="noopener noreferrer" >
                <div className="grid-item">
                  <div class="card-body">
                      <h5 class="card-title ban pb-2">
                            <img className="incent-image" 
                            src="../images/staking.png" 
                            alt="" 
                            />{" "}
                            VHAGER STAKING
                      </h5>
                        <p class="card-text text">
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </p>
                    </div>
                </div>
              </a>
              
              <a href="#" target="_blank" rel="noopener noreferrer" >
              <div className="grid-item">
                  <div class="card-body">
                  <h5 class="card-title ban pb-2">
                        {" "}
                        <img
                          className="incent-image"
                          src="../images/token_burn.png"
                          alt=""
                        />{" "}
                        VGR TOKEN BURN
                      </h5>
                    <p class="card-text text">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </p>
                  </div>
                </div>
              </a>
                
              <a href="#" target="_blank" rel="noopener noreferrer" >
                <div className="grid-item">
                  <div class="card-body">
                  <h5 class="card-title ban pb-2">
                        {" "}
                        <img
                          className="incent-image"
                          src="../images/swap.png"
                          alt="swap img"
                        />{" "}
                        6% SWAP TAX
                      </h5>
                    <p class="card-text text">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </p>
                  </div>
                </div>
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer" >
                <div className="grid-item">
                  <div class="card-body">
                    <h5 class="card-title ban pb-2">
                          {" "}
                          <img
                            className="incent-image"
                            src="../images/vgr_bot.png"
                            alt=""
                          />{" "}
                          VHAGER BOT
                    </h5>
                      <p class="card-text text">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </p>
                  </div>
                </div>
                </a>

                <a href="#tokenomics" >
                  <div className="grid-item">
                    <div class="card-body">
                    <h5 class="card-title ban pb-2">
                          {" "}
                          <img
                            className="incent-image"
                            src="../images/locked_liquidity.png"
                            alt=""
                          />{" "}
                          LOCKED LIQUIDITY
                        </h5>
                      <p class="card-text text">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </a>

                <a href="#tokenomics" >
                  <div className="grid-item">
                    <div class="card-body">
                    <h5 class="card-title ban pb-2">
                          {" "}
                          <img
                            className="incent-image"
                            src="../images/team_vesting.png"
                            alt=""
                          />{" "}
                          TEAM VESTING
                        </h5>
                      <p class="card-text text">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </a>

        </div>
    </>
  );
};

export default Incentives;
