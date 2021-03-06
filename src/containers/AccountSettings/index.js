import React, { Component } from 'react';
import propTypes from 'prop-types';
import { compose } from 'recompose';
import AccountSettings from './accountSettings';
import { withFirebase } from '../Firebase/index';
import { withAuth } from '../Session/index';
import {
  LANDING,
  SERVER_ERROR,
  CONFIRM_PASSWORD,
} from '../../constants/routes';

class Account extends Component {
  state = {
    info: {
      name: '',
      email: '',
      createdByGoogle: false,
      createdByTwitter: false,
    },
    loading: true,
  };

  componentDidMount = async () => {
    try {
      const { firebase } = this.props;
      const userId = localStorage.getItem('userId');
      const snapshot = await firebase.db
        .collection('users')
        .doc(userId)
        .get();
      const userEmail = snapshot.data().email;
      const userName = snapshot.data().name;
      const { createdByGoogle } = snapshot.data();
      const { createdByTwitter } = snapshot.data();
      this.setState({
        info: {
          name: userName,
          email: userEmail,
          createdByGoogle,
          createdByTwitter,
        },
        loading: false,
      });
    } catch (e) {
      const { history } = this.props;
      history.push(SERVER_ERROR);
    }
  };

  handleLogOut = () => {
    const { firebase, history } = this.props;
    history.push(LANDING);
    localStorage.removeItem('userId');
    return firebase.doSignOut;
  };

  redirect = () => {
    const { info } = this.state;
    if (info.createdByGoogle) {
      return 'https://myaccount.google.com/personal-info';
    }
    if (info.createdByTwitter) {
      return 'https://twitter.com/settings/account';
    }
    return CONFIRM_PASSWORD;
  };

  render() {
    const { info, loading } = this.state;
    return (
      <AccountSettings
        loading={loading}
        info={info}
        handleLogOut={this.handleLogOut}
        redirect={this.redirect}
      />
    );
  }
}

Account.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
  firebase: propTypes.shape({
    auth: propTypes.object.isRequired,
    user: propTypes.func.isRequired,
    db: propTypes.object.isRequired,
    doSignOut: propTypes.func.isRequired,
  }).isRequired,
};

const AuthAccount = compose(
  withAuth,
  withFirebase
)(Account);

export default AuthAccount;
