import { useState } from "react";
import Link from "next/link";
import { emailContactForm } from "../../actions/form";

const ContactForm = () => {
  const [values, setValues] = useState({
    message: "",
    name: "",
    email: "",
    sent: false,
    buttonText: "Send Message",
    success: false,
    error: false,
  });

  const { message, name, email, sent, buttonText, success, error } = values;

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, buttonText: "Sending..." });
    emailContactForm({ name, email, message }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          sent: true,
          name: "",
          email: "",
          message: "",
          buttonText: "Sent",
          success: data.success,
        });
      }
    });
  };

  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
      error: false,
      success: false,
      buttonText: "Send Message",
    });
  };

  const showSuccessMessage = () =>
    success && (
      <div className="alert alert-info">
        Thank you for contacting MilServ. We'll get back to you within 3
        business days.
      </div>
    );

  const showErrorMessage = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const contactForm = () => {
    return (
      <div
        style={{
          padding: 30,
          borderRadius: 10,
          marginBottom: 20,
          backgroundColor: "383838",
          color: "white",
        }}
      >
        <form onSubmit={clickSubmit}>
          <div className="form-group">
            <label className="lead">
              {" "}
              <b>Your Name</b>
            </label>
            <input
              type="text"
              onChange={handleChange("name")}
              className="form-control"
              value={name}
              required
            />
          </div>
          <div className="form-group">
            <label className="lead">
              {" "}
              <b>Your Email</b>
            </label>
            <input
              type="email"
              onChange={handleChange("email")}
              className="form-control"
              value={email}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label className="lead">
              <b>Message</b>
            </label>
            <textarea
              onChange={handleChange("message")}
              className="form-control"
              type="text"
              value={message}
              required
              rows="10"
            ></textarea>
          </div>

          <div>
            <button className="btn btn-primary">{buttonText}</button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <React.Fragment>
      {contactForm()} {showSuccessMessage()}
      {showErrorMessage()}
    </React.Fragment>
  );
};

export default ContactForm;
