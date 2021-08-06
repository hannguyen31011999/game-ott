import React, { Component } from 'react'
import { connect } from 'react-redux';

class ComputerOtt extends Component {
    render() {
        const { styleComputer, imageRandom } = this.props;
        return (
            <div className="col-3 player">
                <div className="computer-ott">
                    <div className="ott-action">
                        <div className="ott-door">
                            <img src={imageRandom.image} alt="" />
                        </div>
                        <div className="ott-overplay" style={styleComputer}>
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
        imageRandom: state.gameOttReducer.imageRandom,
        styleComputer: state.gameOttReducer.styleComputer
    }
}

export default connect(mapStateToProps)(ComputerOtt);