import React from "react";
import CustomizedTables from "./TokenAllocation";

const Tokenomics = () => {
  return (
    <div id="tokenomics" style={{ paddingBottom: "70px", borderBottom: "4px dotted #5ee616" }}>
      <h2 className="ban card-title text-center mt-5">TOKEN ECONOMICS</h2>
      <div className="contain mt-5">
        <ul className="text ">
          <li className="centered-item px-4">
            <span style={{ color: "#5ee616" }}> Token Name</span> &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span>Vhagar</span>
          </li>
          <li className="centered-item px-4">
            <span style={{ color: "#5ee616" }}> Token Symbol</span> &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span>VGR</span>
          </li>
          <li className="centered-item px-4">
            <span style={{ color: "#5ee616" }}> Total Supply</span> &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span>100,000,000,000</span>
          </li>
          <li className="centered-item px-4">
            <span style={{ color: "#5ee616" }}> Token Decimal</span> &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span>6</span>
          </li>
          <li className="centered-item px-4">
            <span style={{ color: "#5ee616" }}> Network</span> &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span>Solana</span>
          </li>
        </ul>
      </div>

      <div className="mt-5">
        <h4 className="ban text text-center mt-5">TOKEN ALLOCATION</h4>
        <CustomizedTables></CustomizedTables>
      </div>
    </div>
  );
};

export default Tokenomics;
