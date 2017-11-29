import React from 'react';
import { connect } from 'react-redux';

import signupStyles from '../../../sass/signup.scss';
import TopNavigation from '../layout/TopNavigation.jsx';
import Footer from '../layout/Footer.jsx';

import { loginUser } from '../../actions/userActions';

@connect((store) => {
  return {
    user: store.user,
  }
})

export default class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
    };
  }

  getInput = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  login = () => {
    const {
     email, password,
    } = this.state;
    this.props.dispatch(loginUser({
      email,
      password
    }));
  }

  render() {
    return (
      <div>
        <TopNavigation />
        <div className="the-flex-box d-flex flex-column align-items-center">
          <div className="card card-form">
            <h1 className="card-header">Sign in</h1>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label for="email">Email</label>
                  <div className="input-group">
                    <div className="input-group-addon">
                      <i className="fa fa-envelope"></i>
                    </div>
                    <input type="email" className="form-control" id="email" placeholder="Your Email" name="email" onChange={this.getInput}/>
                  </div>
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <div className="input-group">
                    <div className="input-group-addon">
                      <i className="fa fa-user-secret"></i>
                    </div>
                    <input type="password" className="form-control" id="password" placeholder="Password"name="password" onChange={this.getInput}/>
                  </div>
                </div>
                <a className="btn btn-block dark-button text-white" onClick={this.login}>Log in</a>
                <div className="text-center mt-2">
                  <a href="" className="text-muted">forgot password?</a>
                </div>
              </form>
            </div>
          </div>

          <Footer />
        </div>

      </div>

    );
  }
}