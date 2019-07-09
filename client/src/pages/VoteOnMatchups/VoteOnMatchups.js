import React from 'react';
import './VoteOnMatchups.css';

class VoteOnMatchups extends React.PureComponent {
    render() {
        return (
            <div className='votingPage'>
                <p>Vote on Matchups Here</p>
            </div>
        )
    }
}
// const authCondition = (authUser) => !!authUser;
// export default withAuthorization(authCondition)(Home);
export default VoteOnMatchups