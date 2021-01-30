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
    <div>
      <h1>helllo</h1>
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
