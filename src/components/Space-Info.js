import React from "react";

import Video from "../ui/Video";

const SpaceInfo = () => {
  const handleLaunchClick = () => {
    document
      .getElementById("searchForm")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="space-info-container">
      <div className="text-container">
        <h1>UPCOMING LAUNCH </h1>
        <h2>STARLINK MISSION</h2>

        <button className="launch-button" onClick={handleLaunchClick}>
          Launch
        </button>
      </div>

      <Video />
    </div>
  );
};

export default SpaceInfo;
