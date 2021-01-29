import React from "react";

const FinalPage = ({ Toname, message, fromName, lollyPath }) => {
  console.log(Toname, message, fromName, lollyPath);
  return (
    <div>
      <h1>Hello </h1>
      <h1>{Toname}</h1>
      <h1>{message}</h1>
      <h1>{fromName}</h1>
      <h1>{lollyPath}</h1>
    </div>
  );
};

export default FinalPage;
