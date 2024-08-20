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
            <td>600,000,000</td>
            <td>40%</td>
            <td>No Vesting</td>
          </tr>
          <tr>
            <td>Liquidity</td>
            <td>300,000,000</td>
            <td>20%</td>
            <td>Locked and Burned forever</td>
          </tr>
          <tr>
            <td>Vhagar Lock/Stake Reward</td>
            <td>300,000,000</td>
            <td>20%</td>
            <td></td>
          </tr>
          <tr>
            <td>Marketing, CEX and Development</td>
            <td>150,000,000</td>
            <td>10%</td>
            <td></td>
          </tr>
          <tr>
            <td>Core Team</td>
            <td>75,000,000</td>
            <td>5%</td>
            <td>
              locked 12 months, Initial 20% release thereafter, 
              <br/>followed by a monthly release of 5% over 20 months period.
            </td>
          </tr>
          <tr>
            <td>Early Contributor Reward</td>
            <td>75,000,000</td>
            <td>5%</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomizedTables;
