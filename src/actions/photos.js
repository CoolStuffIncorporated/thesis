export function updatePhotos(photos) {
  "UPDATE_PHOTOS", photos;
}

export function updateProfilePhoto(profilePhoto) {
  return {
    type: "UPDATE_PROFILE_PHOTO",
    profilePhoto
  };
}
