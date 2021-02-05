import * as React from "react";
import { Link } from "gatsby";
import "../styles/index.scss";

const IndexPage = () => {
  return (
    <main className="main">
      <title>Matomo tagmanager</title>
      <h1 className="title">
        <Link to="https://github.com/whitespace-se/matomo-loadtest">
          Matomo tagmanager
        </Link>
      </h1>

      <div className="grid">
        <Link to="/open-source" name="Open source" className="card">
          <h3>Open source</h3>
          <p>
            Minimise risk with a secure, transparent platform that’s been
            thoroughly tested by hundreds of contributors.{" "}
          </p>
        </Link>

        <Link to="/accurate-data" name="100% accurate data" className="card">
          <h3>100% accurate data</h3>
          <p>
            No data sampling means you can make impactful decisions based on
            100% accurate reporting.
          </p>
        </Link>

        <Link
          to="/tracking-personal-data"
          name="Tracking personal data"
          className="card"
        >
          <h3>Tracking personal data</h3>
          <p>
            Securely track personal data in accordance with privacy laws. This
            option is unavailable with GA.
          </p>
        </Link>

        <Link
          to="/no-data-limitations"
          name="No data limitations"
          className="card"
        >
          <h3>No data limitations</h3>
          <p>
            Get an unlimited number of websites, users and segments. There’s
            also no limitation on how much data you store.
          </p>
        </Link>
      </div>
    </main>
  );
};

export default IndexPage;
