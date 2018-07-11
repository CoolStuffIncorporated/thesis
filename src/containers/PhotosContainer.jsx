import { connect } from "react-redux";
import PhotoGrid from "../components/PhotoGrid";
import { getAlbumPhotos } from "../actions/photos";

const mapStateToProps = state => ({
  albumPhotos: state.albumPhotos,
  userId: state.userId,
  friendsId: state.friendsId,
  location: state.location,
  headerSetting: state.headerSetting
});

const mapDispatchToProps = dispatch => ({
  getAlbumPhotos: (userId, location) => {
    dispatch(getAlbumPhotos(userId, location));
  }
});

const PhotosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGrid);

export default PhotosContainer;
