import React, { Component } from 'react'

export default class ListSongAudio extends Component {
    renderList = () => {
        const { isSong, handleChangeSong } = this.props;
        return this.props.data.map((song, index) => {
            return (
                <div className={song.id === isSong.id ? "playlist__item active" : "playlist__item"} key={index} onClick={() => handleChangeSong(song)}>
                    <figure>
                        <img src={song.image} alt="" />
                    </figure>
                    <div className="playlist__item--title">
                        <h4 className="author">{song.name}</h4>
                        <h5 className="song-name">{song.song}</h5>
                    </div>
                    <div className="playlist__item--icon">
                        <i className="fas fa-ellipsis-h" />
                    </div>
                </div>
            )
        });
    }
    render() {
        return (
            <div className="playlist" id="playlist">
                {this.renderList()}
            </div>
        )
    }
}
