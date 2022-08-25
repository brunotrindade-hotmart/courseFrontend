import React from "react";

export default function Messanger({ hit }) {

  return(
    <div>
      {
        hit && <h1>Acerto</h1>
      }
    </div>
  );
};
