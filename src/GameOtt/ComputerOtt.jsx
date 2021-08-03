import React, { Component } from 'react'
import { connect } from 'react-redux';

class ComputerOtt extends Component {
    render() {
        return (
            <div className="col-3 player">
                <div className="computer-ott">
                    <div className="ott-action">
                        <div className="ott-door">
                            <img src={this.props.imageRandom.image} alt="" />
                        </div>
                        <div className="ott-overplay" id="ott-overplay">
                            <h3>?????</h3>
                        </div>
                    </div>
                    <div className="ott-image">
                        <img src="./ott/playerComputer.png" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        imageRandom: state.gameOttReducer.imageRandom
    }
}

export default connect(mapStateToProps)(ComputerOtt);