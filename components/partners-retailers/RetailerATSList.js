// Find out why phone number is ot CanvasRenderingContext2D.  Start with checking the db

import React, { Component } from "react";
import { API } from "../../config";
import Moment from "react-moment";
import Axios from "axios";
import moment from "moment";
import Collapsible from "react-collapsible";
import AccountCircleIcon from "@material-ui/icons/AccountCircleOutlined";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import PhoneIcon from "@material-ui/icons/Phone";

// The ...props means, spread all of the passed props onto this element

// That way we don't have to define them all individually
export default class RetailerList extends Component {
  state = {
    retailers: [],
    lastDate: [],
  };

  componentDidMount() {
    this.loadRetsList();
    this.loadLastSubmission();
    // this.displayRecentNo();
  }

  loadRetsList = () => {
    Axios.get(`${API}/retailers`)
      .then(
        (res) =>
          this.setState(
            {
              retailers: res.data,
            },
            // console.log("this is the data " + JSON.stringify(res.data))
          )
        // this.setState({ ...this.state, numbers: res.data })
      )
      .catch((err) => console.log(err));
  };

  loadLastSubmission = () => {
    Axios.get(`${API}/retailers-last-submission`)
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
                <h4>TOTAL RETAILERS:</h4>
                <h2
                  style={{
                    backgroundColor: "#383838",
                    color:"white",
                    margin: 0,
                    padding: 10,
                    display: "inline-block",
                    borderRadius: "4px",
                  }}
                >
                  {this.state.retailers.length}
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
                  color:"white",
                    margin: 0,
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
    
            {this.state.retailers.length ? (
              <div className="row" style={{ padding: 10 }}>
                <h3>RETAILER LEADS</h3>
                <div className="col-md-4 col-sm-12 col-xs-12">
                  {this.state.retailers
                    .slice(0)
                    .reverse()
                    .map((retailer) => (
                      <Collapsible
                        trigger={
                          <h4
                            style={{
                              cursor: "pointer",
                              padding: 5,
                              border: "solid #383838 1px",
                              borderRadius: "4px",
                            }}
                          >
                              <AccountCircleIcon style={{ marginRight: "4px" }} />
                            {retailer.coName}
                          </h4>
                        }
                        style={{ color: "white", cursor: "pointer" }}
                      >
                        <section
                          style={{ backgroundColor: "whitesmoke", padding: 10, border:"solid #383838 1px" }}
                        >
                          <p>
                            <b>Date:</b>{" "}
                            <Moment format="MM/DD/YYYY, h:mm a">
                              {retailer.date}
                            </Moment>
                          </p>
                          <p>
                            <b>Contact Person: </b>
                            {retailer.retLastName},{" "}
                            {retailer.retFirstName}
                          </p>
                                                
                         
                          <p>
                          <b style={{marginBottom:0}}>Contact Methods</b>  
                      <hr style={{margin:0}}/>  
                            <EmailIcon />:{" "}{retailer.retEmail}
                            <br/>
                            <PhoneIcon />:{" "}{retailer.retPhoneNumber}
                          </p>
                          <p>
                            {" "}
                            <b>Retailer State: </b>
                         {retailer.licState}
                          </p>
                          <p>
                            <b>State Alcohol Lic No: </b>
                            {retailer.stateLicNo}
                          </p>
                          
                          <p>
                            <b>Remarks:</b>{" "}
                           {retailer.retAdditionalInfo}
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
