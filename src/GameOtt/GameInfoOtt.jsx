import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actPlayGame } from '../Store/Actions/OttAction';

class GameInfoOtt extends Component {
    render() {
        const { score, round, handlePlayGame } = this.props
        return (
            <div className="col-6 ott-center">
                <div className="ott-info">
                    <h2>Số lần thắng: <span className="ott-score">{score}</span></h2>
                    <h2>Số lần chơi: <span className="ott-round">{round}</span></h2>
                    <button className="ott-btn" onClick={() => handlePlayGame()}>Play game</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handlePlayGame: () => {
            dispatch(actPlayGame());
        }
    }
}

const mapStateToProps = state => {
    const { score, round } = state.gameOttReducer;
    return {
        score,
        round
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameInfoOtt);