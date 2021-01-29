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
      <h1>Gello</h1>
      <Lolly
        TopFlavour={falvourTop}
        MidFlavour={falvourMid}
        BottomFlavour={falvourBtm}
      />
      <FinalPage
        Toname={Toname}
        message={message}
        fromName={fromName}
        lollyPath={lollyPath}
      />
    </div>
  );
};

export default Template;
