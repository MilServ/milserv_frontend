import React, { useState, PropTypes } from "react";
import { API } from "../../config";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
// import { withRouter } from "next/router";
import Router from "next/router";
import MultiSelect from "react-multi-select-component";

const useStyles = makeStyles({
  root: {
    width: "auto",
  },
});

export default function RetSignUpForm(props) {
  const classes = useStyles();
  const [retFirstName, setRetFirstName] = useState("");
  const [retLastName, setRetLastName] = useState("");
  const [retEmail, setRetEmail] = useState("");
  const [licState, setLicState] = useState([]);
  const [retPhoneNumber, setRetPhoneNumber] = useState("");
  const [stateLicNo, setStateLicNo] = useState("");
  const [coName, setCoName] = useState("");
  const [retAdditionalInfo, setRetAdditionalInfo] = useState("");

  const options = [
    { label: "Alabama", value: "AL" },
    { label: "Alaska", value: "AK" },
    { label: "Arizona", value: "AZ" },

    { label: "Arkansas", value: "AR" },
    { label: "Colorado", value: "CO" },
    { label: "Connecticut", value: "CT" },
    { label: "Delaware", value: "DE" },
    { label: "Florida", value: "FL" },
    { label: "Georgia", value: "GA" },
    { label: "Hawaii", value: "HI" },
    { label: "Idaho", value: "ID" },
    { label: "Illinois", value: "IL" },
    { label: "Indiana", value: "IN" },

    { label: "Iowa", value: "IA" },
    { label: "Kansas", value: "KS" },
    { label: "Kentucky", value: "KY" },
    { label: "Louisiana", value: "LA" },
    { label: "Maine", value: "ME" },
    { label: "Maryland", value: "MD" },
    { label: "Massachusetts", value: "MA" },
    { label: "Michigan", value: "MI" },
    { label: "Minnesota", value: "MN" },
    { label: "Mississippi", value: "MS" },
    { label: "Missouri", value: "MO" },
    { label: "Montana", value: "MT" },
    { label: "Nebraska", value: "NE" },
    { label: "Nevada", value: "NV" },
    { label: "New Hampshire", value: "NH" },
    { label: "New Jersey", value: "NJ" },
    { label: "New Mexico", value: "NM" },
    { label: "New York", value: "NY" },
    { label: "North Carolina", value: "NC" },
    { label: "North Dakota", value: "ND" },
    { label: "Ohio", value: "OH" },
    { label: "Oklahoma", value: "OK" },
    { label: "Oregon", value: "OR" },
    { label: "Pennsylvania", value: "PA" },
    { label: "Puerto Rico", value: "PR" },
    { label: "Rhode Island", value: "RI" },
    { label: "South Carolina", value: "SC" },
    { label: "South Dakota", value: "SD" },
    { label: "Tennessee", value: "TN" },
    { label: "Texas", value: "TX" },
    { label: "Utah", value: "UT" },
    { label: "Vermont", value: "VT" },
    { label: "Washington", value: "WA" },
    { label: "West Virginia", value: "WV" },
    { label: "Wisconsin", value: "WI" },
    { label: "Wyoming", value: "WY" },
  ];

  const onSubmit = (event) => {
    event.preventDefault();

    const formData = {
      retFirstName,
      retLastName,
      retEmail,
      retPhoneNumber,
      licState,
      stateLicNo,
      coName,
      retAdditionalInfo,
    };

    Axios.post(`${API}/retailer`, formData).then((response) => {
      if (response.data.success) {
        alert(
          "Thank you, " +
            formData.coName +
            " Your request for more info has been successfully submitted. \n We will get back to you within 72 hours or less."
        );
        Router.replace("/");
      } else {
        alert("Sorry.  Failed to submit form");
      }
    });
  };

  return (
    <div style={{ marginTop: 50 }}>
      <form onSubmit={onSubmit}>
        <h2 className="text-center">
          <b
            style={{
              color: "white",
            }}
          >
            RETAILER CONTACT FORM
          </b>
        </h2>
        <hr style={{ backgroundColor: "white" }} />
        <h4
          style={{
            color: "white",
            fontWeight: "400",
            fontSize: ".92rem",
          }}
        >
          Fill out form to learn more
        </h4>

        <div style={{ marginTop: 10 }}>
          <small>Company Name</small>
          <br />
          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
              paddingLeft: 8,
              width: "75%",
            }}
            value={coName}
            onChange={(e) => setCoName(e.target.value)}
            placeholder="Company Name"
            type="text"
            name="coName"
            required
          />
        </div>

        <div className="mt-4">
          <small> Contact Information </small>
          <div className="mb-3">
            <input
              style={{
                border: "solid #383838 .75px",
                borderRadius: 5,
                marginBottom: 3,
              }}
              value={retFirstName}
              onChange={(e) => setRetFirstName(e.target.value)}
              placeholder="First name"
              type="text"
              name="First Name"
              required
            />

            <input
              style={{
                borderRadius: 5,
                border: "solid #383838 .75px",
                marginBottom: 3,
              }}
              value={retLastName}
              onChange={(e) => setRetLastName(e.target.value)}
              placeholder="Last name"
              type="text"
              name="Last Name"
              required
            />

            <input
              style={{
                borderRadius: 5,
                marginBottom: 3,
                border: "solid #383838 .75px",
              }}
              value={retEmail}
              onChange={(e) => setRetEmail(e.target.value)}
              placeholder="Email address"
              type="email"
              name="email"
              required
            />
          </div>

          <small> Contact Number </small>
          <br />

          <input
            style={{
              borderRadius: 5,
              border: "solid #383838 .75px",
              paddingLeft: 8,
            }}
            value={retPhoneNumber}
            onChange={(e) => setRetPhoneNumber(e.target.value)}
            placeholder="ex: 555-555-5555"
            type="text"
            name="Phone Number"
            required
          />
        </div>
        <br></br>
        <hr style={{ backgroundColor: "white" }}></hr>

        <div style={{ marginBottom: "10" }}>
          <small> State(s) Where You Possess Alchohol Licenses</small>

          {/* <pre>{JSON.stringify(licState)}</pre> */}
          <MultiSelect
            options={options}
            value={licState}
            placeholder={"Select all that apply"}
            onChange={setLicState}
            labelledBy={"Select"}
          />
          <br />
          <small> State License Number </small>

          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
            }}
            value={stateLicNo}
            onChange={(e) => setStateLicNo(e.target.value)}
            placeholder="State License Number"
            type="text"
            name="stateLicNumber"
            required
          />
        </div>
        <br />
        <small> Tell us more...</small>

        <textarea
          style={{
            border: "solid #383838 .75px",
            width: "100%",
            height: 200,
            borderRadius: 5,
          }}
          value={retAdditionalInfo}
          onChange={(e) => setRetAdditionalInfo(e.target.value)}
          // placeholder="Tell Us More!"
          type="text"
          name="additionalInfo"
        />
        <br></br>
        <button
          type="submit"
          style={{ marginTop: 30, marginBottom: 30 }}
          className="btn btn-warning"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
