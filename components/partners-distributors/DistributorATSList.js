// Find out why phone number is ot CanvasRenderingContext2D.  Start with checking the db

import React, { Component } from "react";
import { API } from "../../config";
import Moment from "react-moment";
import Axios from "axios";
import moment from "moment";
import Collapsible from "react-collapsible";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import PhoneIcon from "@material-ui/icons/Phone";

// The ...props means, spread all of the passed props onto this element

// That way we don't have to define them all individually
export default class DistList extends Component {
  state = {
    distributors: [],
    lastDate: [],
  };

  componentDidMount() {
    this.loadDistList();
    this.loadLastSubmission();
    // this.displayRecentNo();
  }

  loadDistList = () => {
    Axios.get(`${API}/distributors`)
      .then(
        (res) =>
          this.setState(
            {
              distributors: res.data,
            },
            console.log("this is the data " + JSON.stringify(res.data))
          )
        // this.setState({ ...this.state, numbers: res.data })
      )
      .catch((err) => console.log(err));
  };

  loadLastSubmission = () => {
    Axios.get(`${API}/distributors-last-submission`)
      .then(
        (res) =>
          this.setState(
            {
              lastDate: res.data[0].date,
            },
            console.log("this is the data " + JSON.stringify(res.data[0].date))
          )
        // this.setState({ ...this.state, numbers: res.data })
      )
      .catch((err) => console.log(err));
  };

  //   deleteNumber = (id) => {
  //     const currentNumbers = this.state.numbers;
  //     API.deleteNumber(id)
  //       .then(
  //         (res) =>
  //           this.setState({
  //             numbers: currentNumbers.filter((number) => number._id !== id),
  //           }),
  //         this.loadNumbers()
  //       )
  //       .catch((err) => console.log(err));
  //   };

  render() {
    return (
      <div
        className="container"
        style={{
          backgroundColor: "whitesmoke",
          color: "black",
          padding: 15,
          overflowY: "visible",
          borderBottomLeftRadius: "8px",
              borderBottomRightRadius:"8px",
          margin:0
        }}
      >
        <div className="row" style={{ marginBottom: 20 }}>
          <div className="col-md-3">
            <h4>TOTAL DIST's:</h4>
            <h2
              style={{
                backgroundColor: "#383838",
                margin: 0,
                color:"white",
                padding: 10,
                display: "inline-block",
                borderRadius: "4px",
              }}
            >
              {this.state.distributors.length}
              {/* {this.state.buyers.length} */}
              {/* {this.state.buyers.length || <p> No Applicants to Display </p>} */}
            </h2>
          </div>
          <hr></hr>
          <div className="col-md-6" style={{borderLeft:"solid lightgray 1px"}}>
            <h4>LAST SUBMISSION</h4>

            <h3
              style={{
                backgroundColor: "#383838",
                margin: 0,
                color:"white",
                padding: 10,
                display: "inline-block",
                borderRadius: "4px",
              }}
            >
              {moment(this.state.lastDate).format("L")}
            </h3>
          </div>
          <hr />
        </div>

        {this.state.distributors.length ? (
          <div className="row" style={{ padding: 10 }}>
           <hr/>
            <div className="col-md-12 col-sm-12 col-xs-12">
              {this.state.distributors
                .slice(0)
                .reverse()
                .map((dists) => (
                  <Collapsible
                    trigger={
                      <h5
                        style={{
                          cursor: "pointer",
                          padding: 5,
                          border: "solid #383838 1px",
                          borderRadius: "4px",
                        }}
                      >
                           <AccountCircleIcon style={{ marginRight: "4px" }} />
                        {dists.distCoName}
                      </h5>
                    }
                    style={{ color: "white", cursor: "pointer" }}
                  >
                    <section
                      style={{ backgroundColor: "#whitesmoke", padding: 10, border:"solid #383838 1px" }}
                    >
                      <p>
                        <b>Date:</b>{" "}
                        <Moment format="MM/DD/YYYY, h:mm a">
                          {dists.date}
                        </Moment>
                      </p>
                      <p>
                        <b>Contact Name: </b>
                        {dists.distLastName}, {" "}
                        {dists.distFirstName}
                     
                      </p>
                      
                      <p>
                    
                      <b style={{marginBottom:0}}>Contact Methods</b>  
                      <hr style={{margin:0}}/>                    
                      <EmailIcon/>:{" "}
                      {dists.distEmail}{" "}
                      <br/>
                      <PhoneIcon/>:{" "}
                      {dists.distPhoneNumber}           
                      </p>
                      <p>
                   
                      </p>
                      <p>
                      <b>State(s) Licensed in:</b>
                      {dists.distLicState.map((states) => (
                          <ul>
                            <li>{states.value}</li>
                          </ul>
                        ))}
                      </p>
                      <p>
                        <b>State Alcohol Lic No: </b>
                        {dists.distStateLicNo}
                      </p>
                      
                      <p>
                        <b>Remarks:</b>{" "}
                       {dists.distAdditionalInfo}
                      </p>
                    </section>
                  </Collapsible>
                ))}
            </div>
          </div>
        ) : (
          <h3>No Applicants to Display :(</h3>
        )}
      </div>
    );
  }
}



