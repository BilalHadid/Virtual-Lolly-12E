import React from "react";
import Lolly from "../MainLolly/Lolly";
import "./style.css";

const AllMainLolly = () => {
  return (
    <div className="AllMainLolly">
      <Lolly
        TopFlavour="#F8598E"
        MidFlavour="#D70051"
        BottomFlavour="#CA005B"
      />
      <Lolly
        TopFlavour="#FF004F"
        MidFlavour="#FF6336"
        BottomFlavour="#F4C734"
      />
      <Lolly
        TopFlavour="#73F965"
        MidFlavour="#76D449"
        BottomFlavour="#95E132"
      />
      <Lolly
        TopFlavour="#FFFFFF"
        MidFlavour="#C900E5"
        BottomFlavour="#D4008B"
      />
    </div>
  );
};

export default AllMainLolly;
