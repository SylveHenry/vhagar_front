import React from "react";

const TimelineItem = ({ year, quarter, label, content, className }) => (
  <div className={`timeline-item-block ${className}`}>
    <div className="timeline-item-time">
      <div className="timeline-item-label">
        {year} {quarter}
      </div>
    </div>
    <div className="timeline-item-label-hr">
      <div className="item-dot timeline-dot">&nbsp;</div>
    </div>
    <div className="timeline-item-label2">{label}</div>
    <div className="timeline-item-content">
      {content.map((item, index) => (
        <p key={index} className={item.noBullet ? "no-bullet" : ""}>
          {item.text}
        </p>
      ))}
    </div>
  </div>
);

const Roadmap = () => (
  <div>
    <div
      id="roadmap-container"
      className="roadmap-container"
      style={{ marginBottom: "20px", marginTop: "50px" }}
    >
      <div className="roadmap-auto">
        <h1 className=" text-center text-light ban">Vhagar's Path to Dominance <br/> (RoadMap)</h1>
        <div className="spacer-block">&nbsp;</div>
        <div className="roadmap-timeline">
          <div className="timeline-dot">&nbsp;</div>
          <div className="timeline-list">
            <div className="timeline-list-vr">&nbsp;</div>
            <div className="timeline-list-col timeline-col-left ">
              <TimelineItem
                label="STAGE I - The Awakening"
                content={[
                  { text: "Launch our website publicly - winterstorm.finance" },
                  {
                    text: "Opening of groups for our community and customer support: Discord and Telegram",
                  },
                  {
                    text: "Construction of our Launchpad at 50%",
                  },
                  {
                    text: "Official PRE-SALE launch on pinksale",
                  },
                  {
                    text: "Automatic listing on PancakeSwap",
                  },
                  {
                    text: "Listing on CoinMarketCap and CoinGecko",
                  },
                  {
                    text: "1000 holders ",
                  },
                ]}
                className="timeline-item-block-green"
              />
              <TimelineItem
                label="STAGE II - Conquering the Peaks"
                content={[
                  {
                    text: "Integrate Bitair payment solution into real business network regarding booking airline ticket (trial version) to conduct research",
                  },
                  { text: "Make survey of user's experiences & choices" },
                  {
                    text: "Approach airlines, travel & tourism agencies regarding a new, fast, cheap, reliable payment method.",
                  },
                  { text: "Develop application iOS and Android" },
                ]}
                className="timeline-item-block-mobile timeline-item-block-violet"
              />
              <TimelineItem
                label="STAGE III - Drake's Dominion"
                content={[
                  {
                    text: "Finish necessarily legal procedure to be able to operate across many regions / nations",
                  },
                  { text: "Fulfill human requirement and head-hunting work" },
                ]}
                className="timeline-item-block-blue"
              />
              <TimelineItem
                label="STAGE IV - Draconic Ascendancy"
                content={[
                  { text: "Late August: Presale period" },
                  { text: "Token sale Event" },
                  { text: "September: Initial Coin Offering (ICO) period" },
                  {
                    text: "Mid-September: Prepare for initial Public Offering (IPO) period",
                  },
                ]}
                className="timeline-item-block-mobile timeline-item-block-green2"
              />
              <TimelineItem
                label="STAGE V - Guardian of the Realm"
                content={[
                  {
                    text: "Early October, prepare full project to submit BTCA to Exchanges.",
                  },
                  {
                    text: "Target to list on other top Exchanges such as: Hitbtc",
                  },
                ]}
                className="timeline-item-block17q4 timeline-item-block-green"
              />
              <TimelineItem
                label="Stage VI - Immortality"
                content={[
                  {
                    text: "Reach agreement on deploying Bitair payment solution via top ten chosen global websites such as: Expedia.com, Travelport.com, Cheapadvisor.com, Booking.com, Agoda.com",
                    noBullet: true,
                  },
                ]}
                className="timeline-item-block-mobile timeline-item-block-blue"
              />
            </div>
            <div className="timeline-list-col timeline-col-right">
              <TimelineItem
                label="STAGE II - Conquering the Peaks"
                content={[
                  {
                    text: "Integrate Bitair payment solution into real business network regarding booking airline ticket (trial version) to conduct research",
                  },
                  { text: "Make survey of user's experiences & choices" },
                  {
                    text: "Approach airlines, travel & tourism agencies regarding a new, fast, cheap, reliable payment method.",
                  },
                  { text: "Develop application iOS and Android" },
                ]}
                className="timeline-item-block-right timeline-item-block-violet"
              />
              <TimelineItem
                label="STAGE IV - Draconic Ascendancy"
                content={[
                  { text: "Late August: Presale period" },
                  { text: "Token sale Event" },
                  { text: "September: Initial Coin Offering (ICO) period" },
                  {
                    text: "Mid-September: Prepare for initial Public Offering (IPO) period",
                  },
                ]}
                className="timeline-item-block-right timeline-item-block-green2"
              />
              <TimelineItem
                label="Stage VI - Immortality"
                content={[
                  {
                    text: "Reach agreement on deploying Bitair payment solution via top ten chosen global websites such as: Expedia.com, Travelport.com, Cheapadvisor.com, Booking.com, Agoda.com",
                    noBullet: true,
                  },
                ]}
                className="timeline-item-block-mobile timeline-item-block-blue"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ padding: "80px" }}>
      <h6 className="text">
        <i>
          <span style={{ color: "#5ee616" }}>Note:</span> Our floating roadmap
          is flexible to ensure agility and responsiveness to industry,
          technological, and community needs. As many of our existing and future
          features stem from community requests, please understand that our
          roadmap, particularly for items beyond imminent release, is subject to
          change.
        </i>{" "}
      </h6>
    </div>
  </div>
);

export default Roadmap;
