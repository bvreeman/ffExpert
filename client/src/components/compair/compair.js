import React, { Component } from 'react';
import Player from './playerBio/player';
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
        {id: '14', username: 'john', exp: 4},
        {id: '23', username: 'john', exp: 8},
        {id: '44', username: 'john', exp: 14},
        {id: '1', username: 'john', exp: 32},
        {id: '76', username: 'john', exp: 12},
        {id: '2', username: 'john', exp: 47}
    ]





class Compair extends Component {

    completeVote

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
             <Player playerData={playerBio1} />
             <Player playerData={playerBio2} />
            <div> Votes: {this.votePercent1(sampleData)}%  Say {playerBio1.firstName} Is better </div>
            <div> Votes: {this.votePercent2(sampleData)}%  Say {playerBio2.firstName} Is better </div>
            <div>Weighted Votes: </div>
            <span  className=" test parallelogram" > 123 </span>
         </div>
        ) 
    }
}

export default Compair;
