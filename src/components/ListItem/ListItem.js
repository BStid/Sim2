import React, { Component } from "react";
import "./ListItem.css";
import axios from "axios";
import { connect } from "react-redux";

class ListItem extends Component {
  constructor() {
    super();
    this.state = {
      item: { picture: "" }
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3010/api/item/" + this.props.match.params.id)
      .then(res => {
        console.log(res.data[0]);
        this.setState({ item: res.data[0] });
      });
  }
  render() {
    let displayListItem = <img src={this.state.item.picture} alt="" />;
    return <div>{displayListItem}</div>;
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ListItem);
