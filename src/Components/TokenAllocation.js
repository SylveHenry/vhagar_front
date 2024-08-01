import React from "react";

const CustomizedTables = () => {
  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>SEGMENT</th>
            <th>TOKEN</th>
            <th>PERCENTAGE</th>
            <th>VESTING</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Public Sale</td>
            <td>20,000,000,000,000</td>
            <td>40%</td>
            <td></td>
          </tr>
          <tr>
            <td>Liquidity Incentive</td>
            <td>10,000,000,000,000</td>
            <td>20%</td>
            <td>Locked 2 years</td>
          </tr>
          <tr>
            <td>Ecosystem Development</td>
            <td>5,000,000,000,000</td>
            <td>10%</td>
            <td>1% initial unlock, weekly linear vesting over 48 monthsD</td>
          </tr>
          <tr>
            <td>Staking</td>
            <td>10,000,000,000,000</td>
            <td>20%</td>
            <td></td>
          </tr>
          <tr>
            <td>Core Team</td>
            <td>2,000,000,000,000</td>
            <td>4%</td>
            <td>
              locked 12 months, Initial 10% release thereafter, 
              <br/>followed by a monthly release of 5% over 18 months period.
            </td>
          </tr>
          <tr>
            <td> Airdrop Community </td>
            <td>3,000,000,000,000</td>
            <td>6%</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomizedTables;
