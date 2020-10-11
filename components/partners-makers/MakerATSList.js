// Find out why phone number is ot CanvasRenderingContext2D.  Start with checking the db

import React, { Component } from "react";
import { API } from "../../config";
import Moment from "react-moment";
import Axios from "axios";
import moment from "moment";
import AccountCircleIcon from "@material-ui/icons/AccountCircleOutlined";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import PhoneIcon from "@material-ui/icons/Phone";
import Collapsible from "react-collapsible";

// The ...props means, spread all of the passed props onto this element

// That way we don't have to define them all individually
export default class MakerList extends Component {
  state = {
    makers: [],
    lastDate: [],
  };

  componentDidMount() {
    this.loadMakersList();
    this.loadLastSubmission();
    // this.displayRecentNo();
  }

  loadMakersList = () => {
    Axios.get(`${API}/makers`)
      .then(
        (res) =>
          this.setState(
            {
              makers: res.data,
            },
            console.log("this is the data " + JSON.stringify(res.data))
          )
        // this.setState({ ...this.state, numbers: res.data })
      )
      .catch((err) => console.log(err));
  };

  loadLastSubmission = () => {
    Axios.get(`${API}/makers-last-submission`)
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
          margin:0,
          
        }}
      >
        <div className="row" style={{ marginBottom: 20 }}>
          <div className="col-md-6">
            <h4>TOTAL MAKERS:</h4>
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
              {this.state.makers.length}
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
                padding: 10,
                color:"white",
                display: "inline-block",
                borderRadius: "4px",
              }}
            >
              {moment(this.state.lastDate).format("L")}
            </h3>
          </div>
          <hr />
        </div>

        {this.state.makers.length ? (
          <div className="row" style={{ padding: 10 }}>
            <h3>MAKERS LEADS</h3>
            <div className="col-md-12 col-sm-12 col-xs-12">
              {this.state.makers
                .slice(0)
                .reverse()
                .map((maker) => (
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
                        {maker.makerCoName}
                      </h4>
                    }
                    style={{ color: "white", cursor: "pointer" }}
                  >
                    <section
                      style={{ backgroundColor: "#383838", padding: 10 }}
                    >
                      <p>
                        <b>Date:</b>{" "}
                        <Moment format="MM/DD/YYYY, h:mm a">
                          {maker.date}
                        </Moment>
                      </p>
                      <p>
                        <b>Contact Person: </b>
                        {maker.makerLastName},{" "}
                        {maker.makerFirstName}
                      </p>
                      <p>
                      <b style={{marginBottom:0}}>Contact Methods</b>  
                      <hr style={{margin:0}}/>  
                      <EmailIcon/>:{" "}<small>{maker.makerEmail}</small>
                      <br/>
                     
                      <PhoneIcon/>:{" "}<small>{maker.makerPhoneNumber}</small>         
                      </p>
                      <p>
                      State(s) Licensed in:
                        {maker.makerLicState.map((states) => (
                          <ul>
                            <li>{states.value}</li>
                          </ul>
                        ))}
                      </p>
                      <p>
                        <b>State Alcohol Lic No: </b>
                        {maker.makerStateLicNo}
                      </p>
                      
                      <p>
                        <b>Remarks:</b>{" "}
                       {maker.makerAdditionalInfo}
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

