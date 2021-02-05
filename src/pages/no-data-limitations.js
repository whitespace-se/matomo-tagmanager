import * as React from "react";
import { Link } from "gatsby";
import "../styles/index.scss";

const NoDataLimitations = () => {
  return (
    <main>
      <title>Matomo tagmanager | No data limitations</title>
      <div className="container">
        <h1 className="title">No data limitations</h1>
        <div className="grid">
          <p>
            With Matomo, what you can track and achieve is limitless. You’re not
            bound by the limitations tools like Google Analytics impose. Google
            Analytics can also quickly get very pricey once you reach a certain
            amount of traffic, users, goals, websites, segments. So you end up
            paying a premium or sacrifice getting the insights you need. With
            Matomo, the sky’s the limit – track as much data or as many
            websites/goals/segments as you want.
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

export default NoDataLimitations;
