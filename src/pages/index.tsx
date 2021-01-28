import { Link } from "gatsby";
import * as React from "react";
import AllMainLolly from "../component/AllMainLolly";
import "../component/style.css";
import Layout from "../Layout/Layout";

const IndexPage = () => {
  return (
    <div className="Main">
      <Layout>
        <div className="MainHead">
          <h1 className="myh1">Virtual lolly</h1>
          <p className="myp">
            because we all know someone <br /> who deserves some sugar.
          </p>
        </div>
        <AllMainLolly />
        <div className="buttonMain">
          <Link to="/LollyCreate" className="glow-on-hover">
            Make a new lollt to send a friend
          </Link>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
