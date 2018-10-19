import React, { Component } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getListings, removeListing } from "../../ducks/reducer";
import removeButton from "./pictures/xButton.png";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      nothing: ""
    };
    this.deleteRerender = this.deleteRerender.bind(this);
  }
  componentDidMount() {
    this.props.getListings();
  }

  deleteRerender(id) {
    this.props.removeListing(id).then(this.props.getListings());
  }

  render() {
    console.log(this.props.listings);
    let displayListings = this.props.listings.map((value, index) => {
      console.log(value);
      return (
        <div key={value.id} className="listingContainer">
          <img src={value.picture} alt="" className="houseImg" />
          <div className="listingText">
            <div>Property Name: {value.name}</div>
            <br />
            <div> Address: {value.address}</div>
            <br />
            <div>City: {value.city}</div>
            <br />
            <div>State: {value.state}</div>
            <br />
            <div>Zip: {value.zipcode}</div>
            <br />
            <div>Monthly Mortgage: {value.monthly_mortgage}</div>
            <br />
            <div>Desired Rent: {value.desired_rent}</div>
          </div>
          <img
            src={removeButton}
            alt="remove"
            className="xButton"
            onClick={() => this.deleteRerender(value.id)}
          />
          <Link key={value.id} to={"/item/" + value.id}>
            Click Me!!!!
          </Link>
        </div>
      );
    });
    return (
      <div className="dashboardContainer">
        <div className="dashboardHeader">
          Dashboard
          <div />
          <div className="buttonContainer">
            <Link to="/addnew" className="addButton">
              Add New Property
            </Link>
          </div>
        </div>
        <div className="dashboardMain">
          {" "}
          <div className="mainTitle">Home Listings</div>
          {displayListings}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listings: state.listings
  };
};

export default connect(
  mapStateToProps,
  { getListings, removeListing }
)(Dashboard);
