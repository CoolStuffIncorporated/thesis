import React from "react";
import lifecycle from "react-pure-lifecycle";
import PropTypes from "prop-types";

const methods = {
  componentDidMount({
    userId,
    friendsId,
    getAlbumPhotos,
    location,
    headerSetting
  }) {
    if (headerSetting === "HOME") {
      getAlbumPhotos([userId], null);
    } else {
      getAlbumPhotos(friendsId.concat([userId]), location);
    }
  }
};

const PhotoGrid = ({ albumPhotos }) => {
  console.log("albumPhotos", albumPhotos);
  return (
    <div>
      <h1> Photos </h1>
      {albumPhotos.map(photo => {
        return <img src={photo.image_url} className="post-image" />;
      })}
    </div>
  );
};

PhotoGrid.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object)
};

export default lifecycle(methods)(PhotoGrid);
