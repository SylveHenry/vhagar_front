import React from "react";

const Incentives = () => {
  return (
    <>
      <h3 className="ban card-title text-center incent-top">TREASURE TROVE 
        <br/> 
        (Incentives)
      </h3>

        <div className="inc-grid">

              <a href="https://docs.vhagar.finance/greenpaper/locking-and-staking-mechanism/" target="_blank" rel="noopener noreferrer" >
                <div className="grid-item">
                  <div class="card-body">
                      <h5 class="card-title ban pb-2">
                            <img className="incent-image" 
                            src="../images/lock_stake.png" 
                            alt="" 
                            />{" "}
                            VHAGAR REWARDS
                      </h5>
                        <p class="card-text text">
                          VHAGAR motivates users to invest and stake their $Vhagar ($VGR) token through a dynamic reward system.
                          The Staking Dashboard streamlines this experience for users.
                        </p>
                    </div>
                </div>
              </a>
                
                <a href="https://docs.vhagar.finance/greenpaper/token-economics/deflationary-mechanism/" target="_blank" rel="noopener noreferrer" >
                  <div className="grid-item">
                    <div class="card-body">
                    <h5 class="card-title ban pb-2">
                          {" "}
                          <img
                            className="incent-image"
                            src="../images/swap.png"
                            alt="swap img"
                          />{" "}
                          2% SWAP TAX
                        </h5>
                      <p class="card-text text">
                        There is a 2% tax on every $VGR swap transaction. This fee facilitates the process and is sent to the buyback/burn pool.
                      </p>
                    </div>
                  </div>
                </a>
              
              <a href="https://docs.vhagar.finance/greenpaper/token-economics/deflationary-mechanism/" target="_blank" rel="noopener noreferrer" >
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
                      VHAGAR features a deflationary token model with a 2% buy/sell swap tax. 
                      This tax is accumulated overtime for subsequent buyback and burning of $VGR Token.
                    </p>
                  </div>
                </div>
              </a>

              <a href="https://docs.vhagar.finance/greenpaper/vhagar-x-bot/" target="_blank" rel="noopener noreferrer" >
                <div className="grid-item">
                  <div class="card-body">
                    <h5 class="card-title ban pb-2">
                          {" "}
                          <img
                            className="incent-image"
                            src="../images/vgr_bot.png"
                            alt=""
                          />{" "}
                          VHAGAR~X BOT
                    </h5>
                      <p class="card-text text">
                        Vhagar~X Bot gives you a competitive edge when trading on Solana Blockchain.
                        With seamless execution and portfolio management, you can swap and trade directly within Telegram.

                      </p>
                  </div>
                </div>
                </a>

                <a href="https://docs.vhagar.finance/greenpaper/token-economics/token-distribution/" target="_blank" rel="noopener noreferrer" >
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
                        From the Total Supply of $Vhagar Tokens, 20% will be added as liquidity, 
                        this will be locked and burned forever as act of trust and transparency.
                      </p>
                    </div>
                  </div>
                </a>

                <a href="https://docs.vhagar.finance/greenpaper/token-economics/token-distribution/" target="_blank" rel="noopener noreferrer" >
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
                        5% of the total supply of $Vhagar Tokens will be allocated to the team with a 12-month lock-up period. 
                        After which there will be a 20% initial unlock, then 5% subsequent releases over 20 months.
                      </p>
                    </div>
                  </div>
                </a>

        </div>
    </>
  );
};

export default Incentives;
