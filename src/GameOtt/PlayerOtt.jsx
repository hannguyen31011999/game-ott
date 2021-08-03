import React, { Component } from 'react'
import ListImageOtt from './ListImageOtt';
import { connect } from 'react-redux';

class PlayerOtt extends Component {
    render() {
        const { isChoose } = this.props;
        return (
            <div className="col-3 player">
                <div className="player-ott">
                    <div className="ott-action">
                        <div className="ott-door">
                            <img src={isChoose.image} alt="" />
                        </div>
                    </div>
                    <div className="ott-image">
                        <img src="./ott/player.png" alt="" />
                    </div>
                    <ListImageOtt />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isChoose: state.gameOttReducer.isChoose
    }
}

export default connect(mapStateToProps)(PlayerOtt);