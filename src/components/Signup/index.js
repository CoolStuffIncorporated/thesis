import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

import { signupRequest } from "../../actions/index";
import Messages from "../Notifications/Messages";
import Errors from "../Notifications/Errors";

class Signup extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    signupRequest: PropTypes.func,
    signup: PropTypes.shape({
      requesting: PropTypes.bool,
      successful: PropTypes.bool,
      messages: PropTypes.array,
      errors: PropTypes.array
    })
  }.isRequired;

  submit = values => {
    this.props.signupRequest(values);
  };

  render() {
    const {
      handleSubmit,
      signup: { requesting, successful, messages, errors }
    } = this.props;

    return (
      <div className="signup">
        <form className="auth-form" onSubmit={handleSubmit(this.submit)}>
          <h1>Signup</h1>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="text"
            id="email"
            className="email"
            label="Email"
            component="input"
          />
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            id="password"
            className="password"
            label="Password"
            component="input"
          />
          <Button action="submit">SIGNUP</Button>
        </form>
        <div className="auth-messages">
          {!requesting &&
            !!errors.length && (
              <Errors message="Failure to signup due to:" errors={errors} />
            )}
          {!requesting && !!messages.length && <Messages messages={messages} />}
          {!requesting &&
            successful && (
              <div>
                Signup Successful!{" "}
                <Link to="/login">Click here to Login »</Link>
              </div>
            )}
          {!requesting &&
            !successful && (
              <Link to="/login">Already a Wanderer? Login Here »</Link>
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signup: state.signup
});

const connected = connect(
  mapStateToProps,
  { signupRequest }
)(Signup);

const formed = reduxForm({
  form: "signup"
})(connected);

export default formed;
