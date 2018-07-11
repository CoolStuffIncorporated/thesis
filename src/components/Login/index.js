import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import Button from "@material-ui/core/Button";

import Messages from "../Notifications/Messages";
import Errors from "../Notifications/Errors";

import { loginRequest } from "../../actions/index";

class Login extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    loginRequest: PropTypes.func.isRequired,
    login: PropTypes.shape({
      requesting: PropTypes.bool,
      successful: PropTypes.bool,
      messages: PropTypes.array,
      errors: PropTypes.array
    }).isRequired
  };

  submit = values => {
    this.props.loginRequest(values);
  };

  render() {
    const {
      handleSubmit,
      login: { requesting, successful, messages, errors }
    } = this.props;

    return (
      <div className="login">
        <form className="auth-form" onSubmit={handleSubmit(this.submit)}>
          <h1>LOGIN</h1>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="text"
            id="email"
            className="email"
            component="input"
          />
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            id="password"
            className="password"
            component="input"
          />
          <Button action="submit">LOGIN</Button>
        </form>
        <div className="auth-messages">
          {!requesting &&
            !!errors.length && (
              <Errors message="Failure to login due to:" errors={errors} />
            )}
          {!requesting && !!messages.length && <Messages messages={messages} />}
          {requesting && <div>Logging in...</div>}
          {!requesting &&
            !successful && (
              <Link to="/signup">Need to Signup? Click Here »</Link>
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});

const connected = connect(
  mapStateToProps,
  { loginRequest }
)(Login);

const formed = reduxForm({
  form: "login"
})(connected);

export default formed;
