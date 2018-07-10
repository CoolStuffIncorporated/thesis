import { connect } from "react-redux";
import ProfilePhoto from "../components/ProfilePhoto.jsx";
import { updateProfilePhoto } from "../actions/photos.js";

const mapStateToProps = state => ({
  navFlag: state.navFlag, // console.log('photocontainer',state.photos)
  profile: state.photos,
  userId: state.userId,
  profilePhoto: state.profilePhoto
});

const mapDispatchToProps = dispatch => ({
  updateProfilePhoto: photo => {
    dispatch(updateProfilePhoto(photo));
  }
});

const ProfilePhotoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePhoto);

export default ProfilePhotoContainer;
