import React from 'react';
import './SignIn.scss';
import Button from '../../Components/Reusable/Buttton/Button';

const SignIn = () => {
  return (
    <div className="sign-in">

      <div className="left-side">
        <div className="left-side-container">
          <h1 className="left-side-title">SIGN IN TO YOUR ACCOUNT</h1>
          <p className="left-p">
            Welcome to the new Specialized.com. If you had an existing account with us,
            you will need to reset your password to use it. Simply select 'Forgot Your Password?' below to do so.
          </p>
          <form>
            <label for="email">EMAIL</label>
            <input type="email" name="email" />

            <label for="password">PASSWORD</label>
            <input type="password" name="password" />

            <p className="password-f">FORGOT YOUR PASSWORD?</p>

            <label className="remember-me">
              <input
                type="checkbox"
                name="remember-me"
                value="true"
                className="ch-label"
              />
              {' '}
              Remember Me
            </label>
            <Button text="SIGN IN" bck="black" color="#fff" padding="1rem" />
          </form>
        </div>
      </div>

      <div className="right-side">

        <div className="right-side-container">

          <h1 className="right-title">CREATE AN ACCOUNT</h1>
          <p className="right-p">This will allow you to:</p>

          <ul className="right-list">
            <li className="list-text">
              Save billing and shipping details for faster checkout.
            </li>
            <li className="list-text">
              Complete your rider profile to receive Specialized news and product updates.
            </li>
            <li className="list-text">Archive purchases and order history.</li>
            <li className="list-text">
              Register purchased bikes and warranties.
            </li>
          </ul>
        <Button text="CREATE AN ACCOUNT" bck="black" padding="1rem" color="#fff" size="1.2rem" />
        </div>
      </div>

    </div>
  );
};

export default SignIn;
