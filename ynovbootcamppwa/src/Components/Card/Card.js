import React from "react";
import FullScreen from "../FullScreen/FullScreen";
import "./Card.css";

const Card = ({ data }) => {
  const [OpenFullscreen, setOpenFullscreen] = React.useState(false);
  return (
    <>
      <div className="Card">
        <img src={data.url} alt="img" onClick={() => setOpenFullscreen(true)}></img>
      </div>
      <FullScreen url={data.url} OpenFullscreen={OpenFullscreen} setOpenFullscreen={setOpenFullscreen}></FullScreen>
    </>
  );
};

export default Card;
