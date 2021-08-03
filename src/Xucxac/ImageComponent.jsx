import React, { Component } from 'react'

export default class ImageComponent extends Component {
    render() {
        const { id, image, score } = this.props.img;
        return (
            <div className="game-image">
                <img src={image} alt="" />
            </div>
        )
    }
}
