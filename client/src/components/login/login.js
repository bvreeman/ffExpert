import React, { Component } from 'react';
import {db, auth} from '../../firebase/firebase'


class Login extends Component {

    state = {
        matchUp: []
    }



   getUserInfo = () => {
     const user = auth.currentUser;
     const username = user.uid ;
        console.log(user, username);

    let userRef = db.ref("users");
    
     userRef.child('ab345jdk2shdfgg').set({
        firstName:'Sally',
        lastName: 'Jones'
        })
   }

   createMatchUp = (firsPlayer = 'Mike', secondPlayer = 'Smith') => {
        const generateComparisonID = firsPlayer.substring(0,2) + secondPlayer.substring(0,2) + Date.now();
        alert(generateComparisonID);
        let compairModel = db.ref("matchUp")
        
        compairModel.child(generateComparisonID).set({
            compairsonID: generateComparisonID,
            firstPlayer:  firsPlayer,
            secondPlayer: secondPlayer ,
            rawVote: [ 0 , 0 ],
            weightedVote: [0, 0],
            voterId:[]
        })

   }

   

   getMachList = () => {
       let matchupRef = db.ref('matchUp');
       let arrayObject = []
       matchupRef.orderByValue().on("value" , function(snapshot) {
            snapshot.forEach(function(data) {
                arrayObject.push(data.val());
            });

            this.setState({ matchUp:arrayObject });
            
       }.bind(this))
   }

    render(){

        
        return(
            <div>
                <button onClick={ () => this.getMachList() }> Get list of Matches to vote on </button>
                <h1> Match Up List </h1>
                <div>
                    { this.state.matchUp.map( (data) => <div > 123 {data.compairsonID} </div>  )}
                </div>

           
            </div>
        )
    
    }
        
}

export default Login;