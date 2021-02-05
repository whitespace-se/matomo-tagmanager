import * as React from "react";
import { Link } from "gatsby";
import "../styles/index.scss";

const OpenSource = () => {
  return (
    <main>
      <title>Matomo tagmanager | Open source</title>
      <div className="container">
        <h1 className="title">Open source</h1>

        <div className="grid">
          <p>
            For Matomo, the “free” in “free software” is used primarily in
            reference to freedom and not to price – although Matomo core is
            available free of charge.&nbsp;
          </p>
          <p>
            The most important thing about Matomo is that it confers rights of
            software freedom on the people who install and use it. It is those
            freedoms that enable the Matomo community to grow; to share a
            collective experience; and to contribute their expertise to improve
            Matomo.
          </p>

          <Link to="/" name="Matomo tagmanager" className="card">
            <h3>Matomo tagmanager</h3>
            <p>
              The comprehensive range of features gives you actionable insights
              and a complete picture of your customers.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default OpenSource;
