import React, { Component } from 'react'
import './assets/css/ott.css';
import GameInfoOtt from './GameInfoOtt';
import ComputerOtt from './ComputerOtt';
import PlayerOtt from './PlayerOtt';

export default class MainGameOtt extends Component {
    render() {
        return (
            <div className="page-ott">
                <div className="container">
                    <div className="row">
                        <div className="col-3 ">
                        </div>
                        <div className="col-6">
                            <h2 className="title-ott mt-5" id="title-ott">Game Ott Cho Anh Em Nào Có Tuổi Thơ Về Game Phong Thần</h2>
                        </div>
                        <div className="col-3">
                        </div>
                    </div>
                    <div className="row">
                        <PlayerOtt />
                        <GameInfoOtt />
                        <ComputerOtt />
                    </div>
                </div>
            </div>
        )
    }
}
