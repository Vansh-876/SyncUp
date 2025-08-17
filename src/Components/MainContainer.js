import React, { useRef, useState } from "react";
import DefaultBanner from "../img/1.jpg";
import CardMain from "./CardMain";
import "./MainContainer.css";

const MAX_IMAGE_SIZE = 2185200; // 2MB

function MainContainer() {
  const imageUploadInputRef = useRef(null);
  const [banner, setBanner] = useState(DefaultBanner);

  const uploadImageHandler = () => {
    imageUploadInputRef?.current?.click();
  };

  const selectImageHandler = (e) => {
    if (e.target.files && e?.target?.files[0]?.size < MAX_IMAGE_SIZE) {
      setBanner(URL.createObjectURL(e?.target?.files[0]));
    } else {
      console.error("Image size should be less than 2MB!");
    }
  };

  return (
    <div className="maincontainer">
      <div className="left">
        <div
          className="banner zoomIn"
          style={{
            background: `url(${banner}) center center no-repeat`,
            backgroundSize: "cover",
          }}
        >
          <div className="textContainer">
            <div className="bid">
              <button
                type="button"
                className="button"
                onClick={uploadImageHandler}
              >
                Upload
              </button>
            </div>
          </div>

          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            ref={imageUploadInputRef}
            onChange={selectImageHandler}
            hidden
          />
        </div>

        <div className="cards zoomIn">
          <div className="filters">
            <div className="popular">
              <h2>Feed</h2>
              <a href="#" className="button2">
                Popular
              </a>
            </div>
            <div className="filter_buttons">
              <a href="#" className="button">
                All
              </a>
              <a href="#" className="button2">
                Type
              </a>
              <a href="#" className="button2">
                Sort By
              </a>
            </div>
          </div>

          <main className="fromBottom">
            <CardMain />
          </main>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
