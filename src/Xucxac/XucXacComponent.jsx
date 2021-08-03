import React, { Component } from 'react'
import InfoComponent from './InfoComponent';
import ListImageComponent from './ListImageComponent';
import { connect } from 'react-redux'
import { findAllByDisplayValue } from '@testing-library/react';


class XucXacComponent extends Component {
    render() {
        const { chooseDoor } = this.props;
        return (
            <div className="page-wrapper" style={{ backgroundImage: 'url("./xucxac/bgGame.png")', backgroundPosition: "center" }}>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <h1 className="title text-center">GAME TÀI XỈU ANH EM CÂY DẦU</h1>
                        <div className="game-content mt-5">
                            <div className="row">
                                <div className="col-3">
                                    <div className="game-item" id="tai" onClick={() => chooseDoor(true)}>
                                        <h1 className="title text-center">TÀI</h1>
                                    </div>
                                </div>
                                <ListImageComponent />
                                <div className="col-3">
                                    <div className="game-item" id="xiu" onClick={() => chooseDoor(false)}>
                                        <h1 className="title text-center">XỈU</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5 text-center">
                                <div className="col-3"></div>
                                <InfoComponent />
                                <div className="col-3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        )
    }
}


const dispatchStateToProps = dispatch => {
    return {
        chooseDoor: (isBool) => {
            const action = {
                type: "CHOOSE_DOOR",
                payload: isBool
            }
            dispatch(action);
        }
    }
}

export default connect(null, dispatchStateToProps)(XucXacComponent);