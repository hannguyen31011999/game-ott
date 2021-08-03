import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actChoose } from '../Store/Actions/OttAction';

class ListImageOtt extends Component {
    renderImage = () => {
        const { image, isChoose, handleChoose } = this.props;
        return image.map((item) => {
            return (
                item.id === isChoose.id ? < img src={item.image} alt="" className="ott-actionImage ott-active" key={item.id} /> : < img onClick={() => handleChoose(item)} src={item.image} alt="" className="ott-actionImage" key={item.id} />
            )
        })
    }
    render() {
        return (
            <div className="ott-list">
                {this.renderImage()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { image, isChoose } = state.gameOttReducer
    return {
        image,
        isChoose
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChoose: (item) => {
            dispatch(actChoose(item));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListImageOtt);