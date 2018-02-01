import React, { Component } from 'react'
import './rewards.css'

export default class Rewards extends Component {

    render(){
        return(
            <div className="rewards">
                <div className="reward-totals">
                    <h3>Totals:</h3>
                    <div className="rewards-rankings">
                        <div className="reward-left">
                            <div className="points-display">
                                <h2>Points: </h2>
                                <h2>1575</h2>
                            </div>
                            <div className="pto-display">
                                <h2>PTO: </h2>
                                <h2>1.5 Days</h2>
                            </div>
                        </div>
                        <div className="ranking-right">
                            <div className="points-ranking">
                                <h2>Rank: </h2>
                                <h2>7</h2>
                            </div>
                            <div className="pto-ranking">
                                <h2>Rank: </h2>
                                <h2>7</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reward-competitions">
                    <h1 className="reward-competitions-header">Competitions</h1>
                        <div className="gold-medals">
                            <img src="" alt=""/>
                            <h4>2</h4>
                        </div>
                        <div className="silver-medals">
                            <img src="" alt=""/>
                            <h4>5</h4>
                        </div>
                        <div className="bronze-medals">
                            <img src="" alt=""/>
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
                    <h1>Achievements</h1>
                    <h3>% Earned</h3>
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
                    <h1>Trophies</h1>
                    <h3>% Earned</h3>
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
