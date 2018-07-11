import axios from "axios";

function updateAlbumPhotos(albumPhotos) {
  return {
    type: "UPDATE_ALBUM_PHOTOS",
    albumPhotos
  };
}

export function updateProfilePhoto(profilePhoto) {
  return {
    type: "UPDATE_PROFILE_PHOTO",
    profilePhoto
  };
}

export function getAlbumPhotos(userId, location) {
  console.log("location****", location);
  return dispatch => {
    axios
      .get("/mediaByUserId", {
        params: {
          userId,
          location
        }
      })
      .then(({ data }) => {
        console.log("data*****", data);
        /*const destinations = data.map(destination => {
          return destination;
        }); */
        dispatch(updateAlbumPhotos(data));
      });
  };
}
