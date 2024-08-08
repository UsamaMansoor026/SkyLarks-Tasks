import React from "react";

const InputBar = () => {
  return (
    <div className="inputBar_wrapper">
      <span className="search_icon">
        <ion-icon name="search-outline"></ion-icon>
      </span>
      <input type="text" />
      <span>
        <ion-icon name="mic-outline"></ion-icon>
      </span>
      <span>
        <ion-icon name="camera-reverse-outline"></ion-icon>
      </span>
    </div>
  );
};

export default InputBar;
