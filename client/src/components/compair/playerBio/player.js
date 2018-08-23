import React, { Component } from 'react';
import './player.css';

class Player extends Component {

    
    
    render(){
        return (
         <div className="player-block"> 
                <div>Name: {this.props.playerData.firstName} </div>
                <img src={this.props.playerData.img} className="bio-pic" />
         </div>
        ) 
    }
}

export default Player;
