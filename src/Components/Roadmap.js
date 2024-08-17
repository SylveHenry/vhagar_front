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
                  { text: "Launch our website publicly" },
                  {
                    text: "Token mint, program deployment and initialization",
                  },
                  {
                    text: "Opening our community and support groups: Discord, X and Telegram",
                  },
                  {
                    text: "Initial Marketing campaign to build community awareness",
                  },
                  {
                    text: "Program auditing",
                  },
                ]}
                className="timeline-item-block-green"
              />
              <TimelineItem
                label="STAGE II - Conquering the Peaks"
                content={[
                  {
                    text: "Token Sales Marketing",
                  },
                  { text: "Official PRE-SALE launch on Pinksale" },
                  {
                    text: "Automatic listing on Raydium (DEX)",
                  },
                  { 
                    text: "Listing on Coinmarketcap and Coingecko" 
                  },
                  { 
                    text: "1,000 holders milestone" 
                  },
                ]}
                className="timeline-item-block-mobile timeline-item-block-violet"
              />
              <TimelineItem
                label="STAGE III - Drake's Dominion"
                content={[
                  {
                    text: "$VHAGAR initial token burn",
                  },
                  { 
                    text: "Initial listing on major Centralised Exchanges (CEXs)" 
                  },
                  {
                    text: "Launch of $VHAGAR Lock/Stake platform with tiered rewards.",
                  },
                  { 
                    text: "VHAGAR~X Bot (Trading Bot) launch" 
                  },
                  {
                    text: "Strategic partnerships with influencers & Meme communities",
                  },
                  { 
                    text: "$VHAGAR Lock/Stake drop campaign" 
                  },
                  {
                    text: "10,000 holders milestone",
                  },
                ]}
                className="timeline-item-block-blue"
              />
              <TimelineItem
                label="STAGE IV - Draconic Ascendancy"
                content={[
                  { 
                    text: "Initiation of $VHAGAR weekly token buyback and burn" 
                  },
                  { 
                    text: "Ongoing updates and improvements to maintain momentum and relevance" 
                  },
                  { 
                    text: "$VHAGAR Lock/Stake drop & Early Contributors drop distribution" 
                  },
                  {
                    text: "Target to list on other top CEXs",
                  },
                  { 
                    text: "50,000 holders milestone" 
                  },
                ]}
                className="timeline-item-block-mobile timeline-item-block-green2"
              />
              <TimelineItem
                label="STAGE V - Guardian of the Realm"
                content={[
                  {
                    text: "Development of a meme-themed cult NFT collection",
                  },
                  {
                    text: "Continued partnerships and collaborations to enhance ecosystem growth",
                  },
                  {
                    text: "100,000+ holders milestone",
                  },
                ]}
                className="timeline-item-block17q4 timeline-item-block-green"
              />
              <TimelineItem
                label="Stage VI - Immortality"
                content={[
                  {
                    text: "Achieving Immortality",
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
                    text: "Token Sales Marketing",
                  },
                  { text: "Official PRE-SALE launch on Pinksale" },
                  {
                    text: "Automatic listing on Raydium (DEX)",
                  },
                  { 
                    text: "Listing on Coinmarketcap and Coingecko" 
                  },
                  { 
                    text: "1,000 holders milestone" 
                  },
                ]}
                className="timeline-item-block-right timeline-item-block-violet"
              />
              <TimelineItem
                label="STAGE IV - Draconic Ascendancy"
                content={[
                  { 
                    text: "Initiation of $VHAGAR weekly token buyback and burn" 
                  },
                  { 
                    text: "Ongoing updates and improvements to maintain momentum and relevance" 
                  },
                  { 
                    text: "$VHAGAR Lock/Stake drop & Early Contributors drop distribution" 
                  },
                  {
                    text: "Target to list on other top CEXs",
                  },
                  { 
                    text: "50,000 holders milestone" 
                  },
                ]}
                className="timeline-item-block-right timeline-item-block-green2"
              />
              <TimelineItem
                label="Stage VI - Immortality"
                content={[
                  {
                    text: "Achieving Immortality",
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
