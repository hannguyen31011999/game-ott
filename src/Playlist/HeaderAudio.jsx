import React, { Component } from 'react'

export default class HeaderAudio extends Component {
    handlePlay = () => {
        return document.getElementById('audio');
    }
    render() {
        const { isSong, handlePlaySong, handleUpdateSong, changeTime, handleRandom, handleRepeat } = this.props;
        return (
            <header id="header">
                <div className="header__title">
                    <h4>Now playing:</h4>
                    <h3 className="header__song" id="header__song">{isSong.song}</h3>
                </div>
                <figure className="header__image">
                    <img id="header__image" src={isSong.image} alt="" />
                </figure>
                <div className="header__control">
                    <div className="btn btn-repeat" title={"Chế độ nghe lại bài hát"} onClick={() => handleRepeat()}>
                        <i className="fas fa-redo" id="repeat-song" />
                    </div>
                    <div className="btn btn-prev" onClick={() => handleUpdateSong(isSong, false)}>
                        <i className="fas fa-step-backward" id="pre-song" />
                    </div>
                    <div className="btn btn-toggle-play" id="btn-toggle-play" onClick={() => handlePlaySong(this.handlePlay())}>
                        <i className="fas fa-pause icon-pause" id="icon-pause" />
                        <i className="fas fa-play icon-play" id="icon-play" />
                    </div>
                    <div className="btn btn-next" onClick={() => handleUpdateSong(isSong, true)}>
                        <i className="fas fa-step-forward" id="next-song" />
                    </div>
                    <div className="btn btn-random" onClick={() => handleRandom()} title={"Chế độ ngẫu nhiên"}>
                        <i className="fas fa-random" id="random-song" />
                    </div>
                </div>
                <input id="progress" className="progress" type="range" defaultValue={0} step={1} min={0} max={300} onInput={() => changeTime()} />
                <audio id="audio">
                    <source src={isSong.path} type="audio/mpeg" />
                </audio>
            </header>
        )
    }
}
