import React from "react";
import { connect } from "react-redux";
import { getImages } from "../actions";

class SearchBar extends React.Component {
  term = "";
  onFormSubmit = event => {
    event.preventDefault();

    this.props.getImages({ term: this.term });
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label>Image Search</label>
          <div className="ui fluid action input ">
            <input
              type="text"
              placeholder="Search..."
              onChange={e => (this.term = e.target.value)}
            />
            <button className="ui button ui teal">Search</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    images: state.results
  };
};
export default connect(
  mapStateToProps,
  { getImages }
)(SearchBar);
