import React from "react";

import "./StyledRoundLoader.scss";


const RoundLoader = ({ isLoading }) => {
    return (
        <div className={`loading ${true ? "start" : "completed"   }`}></div>
    );
};

export default RoundLoader;
