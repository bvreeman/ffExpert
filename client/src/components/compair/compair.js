import React, { Component } from 'react';
import Player from './playerBio/player';
import ExpertChart from './expertChart/expertChart'
import './compair.css';


const playerBio1 = {
    firstName: 'Andrew',
    lastName: 'Luck',
    postion: 'quarterBack',
    img: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14874.png&w=350&h=254',
    // this will depend on where we get our data from
    playerStats: {
        sacks: '1',
        incomplete: '2',
        runningYards: '328'
    }
}

const playerBio2 = {
    firstName: 'Tom',
    lastName: 'Brady',
    postion: 'quarterBack',
    img: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2330.png&w=350&h=254',
    // this will depend on where we get our data from
    playerStats: {
        sacks: '1',
        incomplete: '2',
        runningYards: '328'
    }
}

const sampleData = 
    { 
        compairsonID: '20181',
        firstPlayer:  playerBio1,
        secondPlayer: playerBio2 ,
        rawVote: [ 26 , 5 ],
        weightedVote: [48, 2],
        voterId:['14', '23', '44', '1', '76', '143']
    }


    const sampleUserData = [
        {id: '14', username: 'John', rankPoints:{ week:1, biweek:1, month:4, season:6 }, exp: 4, openVotes:[{compairsonID:'20181', vote:'Tom', comment:'Toms The best'}, {compairsonID:'20182', vote:'Tom', comment:'I think they would bet betetter because blash blah blah'} ] },
        {id: '23', username: 'Bravo', rankPoints:{ week:3, biweek:1, month:4, season:6 }, exp: 8, openVotes:[{compairsonID:'20181', vote:'Andrew', comment:''}] },
        {id: '44', username: 'Tim', rankPoints:{ week:0, biweek:1, month:4, season:6 }, exp: 14, openVotes:[{compairsonID:'20181', vote:'Andrew', comment:'He has better Yars'}, {compairsonID:'20183', vote:'Tom', comment:'I think they would bet betetter because blash blah blah'}] },
        {id: '1', username: 'Mike', rankPoints:{ week:2, biweek:1, month:4, season:6 }, exp: 32, openVotes:[{compairsonID:'20181', vote:'Tom', comment:'First'}, {compairsonID:'20187', vote:'Tom', comment:'I think they would bet betetter because blash blah blah'}] },
        {id: '76', username: 'FootballFan', rankPoints:{ week:10, biweek:1, month:4, season:6 }, exp: 12, openVotes:[{compairsonID:'20181', vote:'Tom', comment:'blah'}] },
        {id: '2', username: 'Sam', rankPoints:{ week:4, biweek:1, month:4, season:6 }, exp: 47, openVotes:[{compairsonID:'20181', vote:'Tom', comment:"He's my Boy thats why"}] }
    ]





class Compair extends Component {

    state = {
        expert : []
    }

    componentDidMount(){
       let filtersUsers  = this.filterUserVotedata(sampleUserData);

       this.setState({expert: filtersUsers});
    }
    /**
     * This loops though user list and consolidates the all the vote data to only contain the this vote.
     */
    filterUserVotedata = (users) =>{
        const userList = users.map((user) => {
           let currentVote = user.openVotes.filter( (vote) => vote.compairsonID === sampleData.compairsonID);
           user.openVotes = currentVote;
           return user;
            })

       return userList    
   }

    //TODO: Move To..?
    closeVote = (voteId, winner = 'Tom') => {
     sampleData.voterId.forEach((userId) => {
         const user =  this.findUser(userId);

     } )
    }

    //TODO:Move to Service
    /**
     * @method findUser
     * @return JSON returns User Object JSON
     */
    findUser = (userID) => {
        return sampleUserData.filter( (user) => user.id === userID)
    }

    updateUserrankPoints = () => {

    }

    votePercent1 = (data) =>  {
        console.log(data);
       const toatlVotes = data.rawVote[0] + data.rawVote[1];
       return  ((data.rawVote[0] /toatlVotes) * 100).toFixed(2)
    }

    votePercent2 = (data) =>  {
        const toatlVotes = data.rawVote[0] + data.rawVote[1];
        return  ((data.rawVote[1] /toatlVotes) * 100).toFixed(2);
     }



    render(){
        return (
         <div> 
             <div className="head-to-head" >
                <Player playerData={playerBio1} />
                <Player playerData={playerBio2} />
            </div>   
           <div>
                <div> Votes: {this.votePercent1(sampleData)}%  Say {playerBio1.firstName} Is better </div>
                <div> Votes: {this.votePercent2(sampleData)}%  Say {playerBio2.firstName} Is better </div>
                <div>Weighted Votes: </div>
           </div>    
           
  
                <button onClick={() => this.closeVote() } >Close Vote </button>
                <ExpertChart compairsonID={sampleData.compairsonID} expert={this.state.expert} />
         </div>
        ) 
    }
}

export default Compair;
