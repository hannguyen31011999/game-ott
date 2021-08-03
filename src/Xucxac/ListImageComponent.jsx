import React, { Component } from 'react'
import ImageComponent from './ImageComponent';
import { connect } from 'react-redux';

class ListImageComponent extends Component {
    renderListImage = () => {
        return this.props.image.map((img, index) => {
            return (
                <ImageComponent img={img} key={index} />
            );
        });
    }
    render() {
        const { openOverlay } = this.props;
        return (
            <div className="col-6 game-center">
                {this.renderListImage()}
                <div className="overlay" id="overlay">
                    <button className="game-btn" onClick={() => openOverlay()}>Mở</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        image: state.xucXacReducer.image
    }
}

const dispatchStateToProps = dispatch => {
    return {
        openOverlay: () => {
            const action = {
                type: "OPEN__OVERLAY"
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(ListImageComponent);