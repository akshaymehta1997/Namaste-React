import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  console.log(info);

  return (
    <div className="p-2 m-2 w-72 shadow-md rounded-lg cursor-pointer">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={thumbnails.medium.url}
      ></img>
      <ul>
        <li className="py-2 font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
