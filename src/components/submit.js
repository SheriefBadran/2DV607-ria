import React, { Component, PropTypes} from 'react';
import userActions from '../actions/userActions';
import { connect } from 'react-redux';
import { Link, Redirect }  from 'react-router';
import { Textfield, Button, IconButton, Menu, MenuItem } from 'react-mdl';

const mapStateToProps = (state) =>  {
    return {
        loginState : state.loginState,
        userState : state.userState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submit(user) {
            dispatch(userActions.loginUser(user));
        },
        logout(){
            dispatch(userActions.logoutUser());
        }
    }
};

class Submit extends Component {
      handleSubmit() {
          console.log("ref: ", this.refs.email);
          const user = {
                email : this.refs.email.refs.input.value,
                password : this.refs.password.refs.input.value
          };
          this.props.submit(user);
    }

    render(){
        return(



            <div>
                {this.props.loginState.isLoggedIn ? (
                    <div>
                        <p>{this.props.userState.email}</p>
                        <button onClick={this.props.logout}>Logout</button>
                    </div>
                ) : (
                        <form onSubmit={ () => this.handleSubmit()}>
                            <div>
                                <Textfield
                                    onChange={() => {}}
                                    label="Text..."
                                    style={{width: '200px'}}
                                    ref="email"
                                    placeholder="email"

                                />
                                <Textfield
                                    onChange={() => {}}
                                    label="Text..."
                                    style={{width: '200px'}}
                                    ref="password"
                                    placeholder="Password"
                                />
                                <Button id="submitButton" type="submit" accent>Login</Button>
                            </div>
                        </form>
                )}
            </div>
        );
    }
}

/*  <div>
 <form onSubmit={ () => this.handleSubmit()}>
 <div>
 <Textfield
 onChange={() => {}}
 label="Text..."
 style={{width: '200px'}}
 ref="email"
 placeholder="email"
 />

 <Textfield
 onChange={() => {}}
 label="Text..."
 style={{width: '200px'}}
 ref="password"
 placeholder="Password"
 />
 <Button type="submit" accent>Login</Button>
 </div>
 </form>
 </div>*/

Submit.propTypes  = {
    submit : PropTypes.func.isRequired,
    logout : PropTypes.func.isRequired
};

export default connect( mapStateToProps, mapDispatchToProps)(Submit);
