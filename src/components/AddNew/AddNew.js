import React, { Component } from "react";
import "./AddNew.css";
import { Link } from "react-router-dom";
import { updateInput, clearInput, addListing } from "../../ducks/reducer";
import { connect } from "react-redux";

class AddNew extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="addNewContainer">
        <div className="addNewHeader">Add New Listing</div>
        <Link
          to="/"
          className="cancelButton"
          onClick={() => this.props.clearInput()}
        >
          {" "}
          Cancel{" "}
        </Link>
        <div className="inputContainer">
          <div className="inputDiv">
            Property Name <br />
            <input
              name="propertyNameInput"
              className="inputBox"
              value={this.props.propertyNameInput}
              onChange={e => this.props.updateInput(e)}
            />
          </div>
          <div className="inputDiv">
            Address <br />
            <input
              name="addressInput"
              className="inputBox"
              value={this.props.addressInput}
              onChange={e => this.props.updateInput(e)}
            />
          </div>
          <div className="inputDiv">
            City <br />
            <input
              name="cityInput"
              className="inputBox"
              value={this.props.cityInput}
              onChange={e => this.props.updateInput(e)}
            />
          </div>
          <div className="inputDiv">
            State <br />
            <input
              name="stateInput"
              className="inputBox"
              value={this.props.stateInput}
              onChange={e => this.props.updateInput(e)}
            />
          </div>
          <div className="inputDiv">
            Zip <br />
            <input
              type="number"
              name="zipInput"
              className="inputBox"
              value={this.props.zipInput}
              onChange={e => this.props.updateInput(e)}
            />
          </div>
          <button
            onClick={() =>
              this.props.addListing(
                this.props.propertyNameInput,
                this.props.addressInput,
                this.props.cityInput,
                this.props.stateInput,
                this.props.zipInput
              )
            }
          >
            Add to Inventory{" "}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { updateInput, clearInput, addListing }
)(AddNew);
