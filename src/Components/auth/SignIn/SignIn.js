import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';


class SignIn extends Component {
  submit  = (values) => {
    console.log(values);
  }

  render(){
    const { handleSubmit } = this.props;
    return (
      <div className="form">
        <h2> Sign In </h2>
        <form onSubmit={ handleSubmit(this.submit)}>
          <Field className="username"
                  component = "input"
                  type="text"
                  placeholder="Username" />
            
          <Field className="password"
                  component = "input"
                  type="password"
                  placeholder="password"/>
          
          <button type="submit" className="blue">Sign In</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'signin'
})(SignIn)