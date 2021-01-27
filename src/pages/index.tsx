import { Link } from "gatsby";
import * as React from "react";
import AllMainLolly from "../component/AllMainLolly";
import "../component/style.css";
import LollyCreate from "../component/LollyCreate";

const IndexPage = () => {
  return (
    <div className="Main">
      <div className="MainHead">
        <h1>Virtual lolly</h1>
        <p>
          because we all know someone <br /> who deserves some sugar.
        </p>
      </div>
      <AllMainLolly />
      <div className="buttonMain">
        <Link to="/LollyCreate" className="glow-on-hover">
          Make a new lolly to send a friend
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;
