import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    let height = this.imageRef.current.clientHeight;
    let spans = Math.ceil(height / 10);

    this.setState({ spans });
  };
  render() {
    const { discription, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={discription} src={urls.regular} />
      </div>
    );
  }
}
export default ImageCard;
