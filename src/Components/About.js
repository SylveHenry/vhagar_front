const About = () => {
  return (
    <>
      <div id="about" className="text-center p-5">
        <h2 className="about-title">VHAGER - THE IDENTITY</h2>
        <p className="text">
          Winter Storm is a community-driven crypto project on the Base chain,
          featuring a deflationary token model with a 6% transaction tax. This
          tax redistributes 3% to token holders and fortifies the liquidity pool
          with another 1% for stable trading. The remaining 2% is used to buy
          back $STM tokens which is sent to a dead wallet, contributing to token
          burning and scarcity. Winter Storm prioritizes community engagement
          through regular events. Leveraging the Arbitrum network, the project
          ensures scalability, cost-efficiency, and increased interoperability
          benefits.
        </p>
        <div>
          <img src="../images/about_chart.png" alt="About Chart" />
        </div>
      </div>
    </>
  );
};

export default About;
