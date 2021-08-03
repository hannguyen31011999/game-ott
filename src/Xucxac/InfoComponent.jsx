import React, { Component } from 'react'
import { connect } from 'react-redux';

class InfoComponent extends Component {
    handleChoose = (isChoose) => {
        if (isChoose === null) {
            return "Mời bạn chọn";
        } else {
            if (isChoose) return "Tài";
            if (isChoose === false) return "Xỉu";
        }
    }
    render() {
        const { handleStartGame, isChoose, score, round } = this.props;
        return (
            <div className="col-6">
                <div className="game-info">
                    <h1 className="game-choose">BẠN CHỌN: <span>{this.handleChoose(isChoose)}</span></h1>
                    <h1 className="game-point">SỐ LẦN THẮNG: <span>{score}</span></h1>
                    <h1 className="game-round">TỔNG SỐ LẦN CHƠI: <span>{round}</span></h1>
                    <button className="game-btn" onClick={() => handleStartGame()}>Lắc ngay</button>
                    <br></br><br></br>
                    {/* <button className="game-btn stop" onClick={() => this.handleStopRotate()}>Dừng</button> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { isChoose, score, round } = state.xucXacReducer;
    return {
        isChoose,
        score,
        round
    }
}

const dispatchStateToProps = dispatch => {
    return {
        handleStartGame: () => {
            const action = {
                type: "PLAY_GAME",
                payload: null
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(InfoComponent);