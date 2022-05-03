import React from "react";
import IndexLog from "../components/Log/IndexLog";
import { UidContext } from "../components/AppContext";
import { useContext } from "react";

const Profil = () => {
  const uid = useContext(UidContext);

  return (
      
      <div className="profil-page">
          <div className="log-container">
            <IndexLog signin={false} signup={true} />
          </div>
      </div>
  );
};

export default Profil;
