import React, { useState, PropTypes } from "react";
import { API } from "../../config";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
// import { withRouter } from "next/router";
import Router from "next/router";

const Affiliation = [
  { key: 1, value: "Veteran" },
  { key: 2, value: "Military Spouse/Relative" },
  { key: 3, value: "Civilian" },
];

const Interest = [
  { key: 1, value: "Job" },
  { key: 2, value: "Franchise Ownership" },
  { key: 3, value: "Investing in MilServ ACD Corp." },
  { key: 4, value: "News/Update" },
];

const stateOptions = [
  { key: 1, value: "AL" },
  { key: 2, value: "AK" },
  { key: 3, value: "AZ" },
  { key: 4, value: "AR" },
  { key: 5, value: "CO" },
  { key: 6, value: "CT" },
  { key: 7, value: "DE" },
  { key: 8, value: "FL" },
  { key: 9, value: "GA" },
  { key: 10, value: "HI" },
  { key: 11, value: "ID" },
  { key: 12, value: "IL" },
  { key: 13, value: "IN" },
  { key: 14, value: "IA" },
  { key: 15, value: "KS" },
  { key: 16, value: "KY" },
  { key: 17, value: "LA" },
  { key: 18, value: "ME" },
  { key: 19, value: "MD" },
  { key: 20, value: "MA" },
  { key: 21, value: "MI" },
  { key: 22, value: "MN" },
  { key: 23, value: "MS" },
  { key: 24, value: "MO" },
  { key: 25, value: "MT" },
  { key: 26, value: "NE" },
  { key: 27, value: "NV" },
  { key: 28, value: "NH" },
  { key: 29, value: "NJ" },
  { key: 30, value: "NM" },
  { key: 31, value: "NY" },
  { key: 32, value: "NC" },
  { key: 33, value: "ND" },
  { key: 34, value: "OH" },
  { key: 35, value: "OK" },
  { key: 36, value: "OR" },
  { key: 37, value: "PA" },
  { key: 38, value: "PR" },
  { key: 39, value: "RI" },
  { key: 40, value: "SC" },
  { key: 41, value: "SD" },
  { key: 42, value: "TN" },
  { key: 43, value: "TX" },
  { key: 44, value: "UT" },
  { key: 45, value: "VT" },
  { key: 46, value: "WA" },
  { key: 47, value: "WV" },
  { key: 48, value: "WI" },
  { key: 49, value: "WY" },
];

const useStyles = makeStyles({
  root: {
    width: "auto",
  },
});

export default function VetSignUpForm(props) {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [milAffiliation, setMilAff] = useState(1);
  const [careerInterest, setCareerInterest] = useState(1);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [projectedHOR, setProjHOR] = useState("");

  const affiliationSelectChange = (event) => {
    setMilAff(event.currentTarget.value);
  };

  const interestSelectChange = (event) => {
    setCareerInterest(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      milAffiliation,
      careerInterest,
      additionalInfo,
      projectedHOR,
      currentLocation,
    };

    Axios.post(`${API}/veteran`, formData).then((response) => {
      if (response.data.success) {
        alert(
          "Thank you, " +
            formData.firstName +
            " We appreciate your service.\n Your request for more info has been successfully submitted. \n We will get back to you within 72 hours or less."
        );
        Router.replace("/");
      } else {
        alert("Sorry.  Failed to submit form");
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>
          <b
            style={{
              color: "white",
            }}
          >
            JOIN OUR TEAM!
          </b>
        </h2>
        <h4
          style={{
            color: "white",
            fontWeight: "400",
            fontSize: ".92rem",
          }}
        >
          Fill out form to learn more
        </h4>
        <hr style={{ backgroundColor: "white" }} />
        <div style={{ marginTop: 10 }}>
          <small>Contact Information</small>
          <br />
          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
              marginBottom: 3,
            }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            type="text"
            name="firstName"
            required
          />

          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
              marginBottom: 3,
            }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
            type="text"
            name="lastName"
            required
          />
          <br />
          <small>Email Address</small>
          <br />
          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            required
          />
        </div>

        <div className="mb-4 mt-3">
          <small>Current Home State or Duty Station</small>
          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
              width: "80%",
              marginBottom: 5,
            }}
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
            // placeholder="Current Home/Duty Station State"
            type="text"
            name="currentLocation"
            required
          />
          <br></br>
          <small>Projected Home State (if applicable)</small>
          <br />
          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
              marginBottom: 5,
            }}
            value={projectedHOR}
            onChange={(e) => setProjHOR(e.target.value)}
            // placeholder="Projected Home State"
            type="text"
            name="projectedHOR"
            required
          />
        </div>
        <div>
          <small>Select Military Affiliation </small>

          <select
            style={{ borderRadius: 5, marginLeft: 3 }}
            className={classes.vetForm}
            onChange={affiliationSelectChange}
          >
            {Affiliation.map((item) => (
              <option key={item.key} value={item.key}>
                {item.value}{" "}
              </option>
            ))}
          </select>
        </div>
        <br />

        <small>Tell Us What You're Interested In </small>
        <select
          style={{ borderRadius: 5, marginLeft: 3 }}
          onChange={interestSelectChange}
        >
          {Interest.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}{" "}
            </option>
          ))}
        </select>
        <br />
        <div style={{ marginTop: 15 }}>
          <small>Tell Us More </small>
          <textarea
            style={{
              border: "solid #383838 .75px",
              marginTop: "",
              width: "100%",
              height: 200,
              borderRadius: 5,
            }}
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            // placeholder="Tell Us More!"
            type="text"
            name="additionalInfo"
          />
          <br></br>
          <button
            type="submit"
            style={{ marginTop: 25, marginBottom: 40 }}
            className="btn btn-warning"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
