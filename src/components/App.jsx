import React from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import { getImages } from "../actions";

class App extends React.Component {
  //state = { images: [] };
  onSearchSubmit = term => {
    this.props.getImages(term);
  };

  renderImages() {
    if (!this.props.images) {
      return <p>Loading Images .....</p>;
    } else {
      return (
        <div>
          Found:{this.props.images.length} images.
          <ImageList images={this.props.images} />
        </div>
      );
    }
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar />
        {this.renderImages()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    images: state.images
  };
};
export default connect(
  mapStateToProps,
  { getImages }
)(App);
