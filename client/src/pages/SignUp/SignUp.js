import React from 'react';
import './SignUp.css';

class SignUp extends React.PureComponent {
    render() {
        return (
            <div className='signUpPage'>
                <p>Sign Up Page</p>
            </div>
        )
    }
}
// const authCondition = (authUser) => !!authUser;
// export default withAuthorization(authCondition)(Home);
export default SignUp