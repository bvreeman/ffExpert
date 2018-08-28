import React, { Component } from 'react';
import {db, auth} from '../../firebase/firebase'


class Login extends Component {

   getUserInfo = () => {
     const user = auth.currentUser;
     const username = user.token;
        console.log(user, username);
   }

    render(){
        return(
            <div>
            <h1>Hello My login world</h1>
            <button onClick={() => this.getUserInfo()}> My Fancey Button </button>
            </div>
        )
    
    }
        
}

export default Login;