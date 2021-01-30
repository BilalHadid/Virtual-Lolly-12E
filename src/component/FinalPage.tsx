import React from "react";
import Lolly from "../MainLolly/Lolly";
import { navigate } from "gatsby";
import "./style.css";

const FinalPage = ({
  Toname,
  message,
  fromName,
  lollyPath,
  TopFlavour,
  MidFlavour,
  BottomFlavour,
}) => {
  console.log(Toname, message, fromName, lollyPath);
  return (
    <div className="FinalPage">
      <div>
        <Lolly
          TopFlavour={TopFlavour}
          MidFlavour={MidFlavour}
          BottomFlavour={BottomFlavour}
        />
      </div>
      <div className="datashow">
        <p id="mainPara">Your lolly is freezing. Share it with this link:</p>

        <p id="linkPath">{`http://localhost:8888/LollyCreate/${lollyPath}`}</p>
        <span className="MainText">
          <h1>{Toname}</h1>
          <h1>{message}</h1>
          <h1>──{fromName}</h1>
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{ color: "#bbbbbb" }}
          >{`${fromName} made this virtual lollipop for you. `}</p>
          <button className="buttonfor" onClick={() => navigate("/")}>
            Make your Own
          </button>
        </span>
      </div>
    </div>
  );
};

export default FinalPage;
