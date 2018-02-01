import React, { Component } from 'react'
import './rewards.css'

export default class Rewards extends Component {

    render(){
        return(
            <div className="rewards">
                <div className="reward-totals">
                    <h1 className="reward-total-header">Totals:</h1>
                    <div className="points-display">
                        <h2>Points: 1575</h2>
                    </div>
                    <div className="pto-display">
                        <h2>PTO: 1.5 Days</h2>
                    </div>
                    <div className="points-ranking">
                        <h2>Rank: 7</h2>
                    </div>
                    <div className="pto-ranking">
                        <h2>Rank: 16</h2>
                    </div>
                </div>
                <div className="reward-competitions">
                    <h1 className="reward-header">Competitions</h1>
                        <div className="gold-medals">
                            <h3>Gold</h3>
                            <h4>2</h4>
                        </div>
                        <div className="silver-medals">
                            <h3>Silver</h3>
                            <h4>5</h4>
                        </div>
                        <div className="bronze-medals">
                            <h3>Bronze</h3>
                            <h4>7</h4>
                        </div>
                    <div className="reward-comp-1">
                        <h2>Name</h2>
                        <h3>Rank</h3>
                        <h2>Reward</h2>
                    </div>
                    <div className="reward-comp-2">
                        <h2>Name</h2>
                        <h3>Rank</h3>
                        <h2>Reward</h2>
                    </div>
                    <div className="reward-comp-3">
                        <h2>Name</h2>
                        <h3>Rank</h3>
                        <h2>Reward</h2>
                    </div>
                </div>
                <div className="reward-achievements">
                    <h1 className="reward-header">Achievements</h1>
                    <h3 className="reward-earned">% Earned</h3>
                    <div className="reward-achievement-1">
                        <h2>Name</h2>
                        <h3>Rank</h3>
                        <h2>Reward</h2>
                    </div>
                    <div className="reward-achievement-2">
                        <h2>Name</h2>
                        <h3>Rank</h3>
                        <h2>Reward</h2>
                    </div>
                    <div className="reward-achievement-3">
                        <h2>Name</h2>
                        <h3>Rank</h3>
                        <h2>Reward</h2>
                    </div>
                </div>
                <div className="reward-trophies">
                    <h1 className="reward-header">Trophies</h1>
                    <h3 className="reward-earned">% Earned</h3>
                    <div className="reward-trophy-1">
                        <h2>Name</h2>
                        <h3>Rank</h3>
                        <h2>Reward</h2>
                    </div>
                    <div className="reward-trophy-2">
                        <h2>Name</h2>
                        <h3>Rank</h3>
                        <h2>Reward</h2>
                    </div>
                    <div className="reward-trophy-3">
                        <h2>Name</h2>
                        <h3>Rank</h3>
                        <h2>Reward</h2>
                    </div>
                </div>
            </div>
        )
    }
}
