import React from "react";
import "./FullScreen.css";

const FullScreen = ({ url, OpenFullscreen, setOpenFullscreen }) => {
  return (
    <div className={`FullScreen ${OpenFullscreen ? "Open" : ""}`} onClick={() => setOpenFullscreen(false)}>
      <img src={url} alt=""></img>
    </div>
  );
};

export default FullScreen;
