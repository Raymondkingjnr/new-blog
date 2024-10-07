import React from "react";
import "./headLineitems.css";
import { blogImg } from "../../assets/images";
import moment from "moment";
function HeadLineItems({ description, title, url, urlToImage, publishedAt }) {
  const date = moment(publishedAt).format("MM Do, YYYY");
  return (
    <div className="headline-content">
      <img src={urlToImage ? urlToImage : blogImg} alt={title} />
      <p style={{ paddingTop: "2rem" }}>Published On : {date}</p>
      <h4>{title}</h4>
      <p>{description?.substring(0, 100)}...</p>
      <main className="link">
        <a href={url} target="_blank" rel="noopener noreferrer">
          details
        </a>
      </main>
    </div>
  );
}

export default HeadLineItems;
