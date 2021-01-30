import React from "react";
import FinalPage from "../component/FinalPage";
import Lolly from "../MainLolly/Lolly";

const Template = ({
  pageContext: {
    Toname,
    message,
    fromName,
    falvourTop,
    falvourMid,
    falvourBtm,
    lollyPath,
  },
}) => {
  return (
    <div className="template">
      <div className="MainHead">
        <h1 className="myh1">Virtual lolly</h1>
        <p className="myp">
          because we all know someone <br /> who deserves some sugar.
        </p>
      </div>
      <FinalPage
        Toname={Toname}
        message={message}
        fromName={fromName}
        lollyPath={lollyPath}
        TopFlavour={falvourTop}
        MidFlavour={falvourMid}
        BottomFlavour={falvourBtm}
      />
    </div>
  );
};

export default Template;
