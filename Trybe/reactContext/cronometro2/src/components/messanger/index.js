import React, { useEffect } from "react";

export default function Messanger({ caughtDismountRandom }) {

  useEffect(() => {
    return () => caughtDismountRandom(false);
  }, []);

  return(
    <div>
      <h1>Acerto</h1>
    </div>
  );
};
