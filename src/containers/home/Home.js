import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../../actions/user';
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    let email;
    let name;

    return (
      <div>
        <nav>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
          </ul>
        </nav>

        <div>
          <p>{`Name: ${this.props.user.name}`}</p>
          <form onSubmit={e => {
            e.preventDefault();
            if (!name.value.trim()) {
              return;
            }
            this.props.userActions.set({ name: name.value });
            name.value = '';
          }}>
            <input ref={node => {
              name = node
            }} />
            <button type="submit">
              Set name
            </button>
          </form>
        </div>

        <div>
          <p>{`Email: ${this.props.user.email}`}</p>
          <form onSubmit={e => {
            e.preventDefault();
            if (!email.value.trim()) {
              return;
            }
            this.props.userActions.set({ email: email.value });
            email.value = '';
          }}>
            <input ref={node => {
              email = node
            }} />
            <button type="submit">
              Set email
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
