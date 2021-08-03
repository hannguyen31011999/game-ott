import React, { Component } from 'react'
import HeaderAudio from './HeaderAudio';
import ListSongAudio from './ListSongAudio';
import data from './data.json';

export default class AudioComponent extends Component {
    state = {
        isSong: data[0],
        isPlay: false,
        currentTime: 0,
        audio: new Audio(data[0].path),
        isRandom: false,
        isRepeat: false
    }
    getElement = (id) => {
        return document.getElementById(id);
    }
    handleAudioRun = (audio) => {
        let process = this.getElement('progress');
        const _this = this;
        const index = Math.floor(Math.random() * data.length);
        audio.addEventListener('timeupdate', function (e) {
            process.value = this.currentTime;
            process.max = this.duration;
            if (this.currentTime === this.duration) {
                process.value = 0;
                if (_this.state.isRandom) {
                    _this.state.audio.autoplay = false;
                    _this.state.audio.load();
                    _this.setState({ ..._this.state, isSong: data[index], audio: new Audio(data[index].path), currentTime: 0 }, () => {
                        document.getElementById('icon-play').style.display = "none";
                        document.getElementById('icon-pause').style.display = "block";
                        _this.state.audio.autoplay = true;
                        _this.state.audio.load();
                        _this.handleAudioRun(_this.state.audio);
                    });
                } else if (_this.state.isRepeat) {
                    _this.setState({ ..._this.state, currentTime: 0 }, () => {
                        document.getElementById('icon-play').style.display = "none";
                        document.getElementById('icon-pause').style.display = "block";
                        _this.state.audio.autoplay = true;
                        _this.state.audio.load();
                        _this.handleAudioRun(_this.state.audio);
                    });
                } else {
                    _this.setState({ ..._this.state, currentTime: 0, isPlay: false }, () => {
                        document.getElementById('icon-play').style.display = "block";
                        document.getElementById('icon-pause').style.display = "none";
                    });
                }
            }
        });
    }
    handlePlaySong = () => {
        const { audio, currentTime } = this.state;
        audio.autoplay = true;
        if (this.state.isPlay) {
            this.getElement('icon-play').style.display = "block";
            this.getElement('icon-pause').style.display = "none";
            audio.pause();
            this.setState({ ...this.state, currentTime: audio.currentTime, isPlay: false });
        } else {
            this.getElement('icon-play').style.display = "none";
            this.getElement('icon-pause').style.display = "block";
            audio.currentTime = currentTime > 0 ? currentTime : 0;
            if (!audio.pause) {
                audio.load();
            } else {
                audio.play();
            }
            this.setState({ ...this.state, isPlay: true });
            this.handleAudioRun(audio);
        }
    }
    handleChangeSong = (song) => {
        const { audio } = this.state;
        this.getElement('icon-play').style.display = "block";
        this.getElement('icon-pause').style.display = "none";
        audio.autoplay = false;
        audio.load();
        this.setState({ ...this.state, isSong: song, audio: new Audio(song.path), isPlay: false, currentTime: 0 });
    }
    handleUpdateSong = (song, isActive) => {
        const { audio } = this.state;
        audio.autoplay = false;
        audio.load();
        let index = data.findIndex(s => s.id === song.id);
        if (isActive) {
            index++;
            if (index >= data.length) index = 0;
        } else {
            index--;
            if (index < 0) index = data.length - 1;
        }
        this.setState({ ...this.state, isSong: data[index], audio: new Audio(data[index].path), currentTime: 0 }, function () {
            const { isPlay, audio } = this.state;
            if (isPlay) {
                audio.autoplay = true;
                audio.load();
                this.handleAudioRun(audio);
            }
            else {
                audio.autoplay = false;
                audio.load();
            }
        });
    }
    handleChangeCurrentTime = () => {
        const time = this.getElement('progress');
        this.setState({ ...this.state, currentTime: parseFloat(time.value) });
        const { audio, isPlay } = this.state;
        time.max = audio.duration;
        audio.currentTime = parseFloat(time.value);
        audio.autoplay = true;
        if (isPlay) {
            this.getElement('icon-play').style.display = "none";
            this.getElement('icon-pause').style.display = "block";
            audio.play();
        } else {
            audio.pause();
        }
    }
    handleRandom = () => {
        this.getElement('repeat-song').style.color = "#666666";
        if (this.state.isRandom) {
            this.setState({ ...this.state, isRandom: false, isRepeat: false }, () => this.getElement('random-song').style.color = "#666666");
        } else {
            this.setState({ ...this.state, isRandom: true, isRepeat: false }, () => this.getElement('random-song').style.color = "#EC1F55");
        }
    }
    handleRepeat = () => {
        this.getElement('random-song').style.color = "#666666";
        if (this.state.isRepeat) {
            this.setState({ ...this.state, isRandom: false, isRepeat: false }, () => this.getElement('repeat-song').style.color = "#666666");
        } else {
            this.setState({ ...this.state, isRandom: false, isRepeat: true }, () => this.getElement('repeat-song').style.color = "#EC1F55");
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4" />
                    <div className="col-12 col-lg-4 play-music">
                        <HeaderAudio isSong={this.state.isSong} handlePlaySong={this.handlePlaySong} handleUpdateSong={this.handleUpdateSong} changeTime={this.handleChangeCurrentTime} handleRandom={this.handleRandom} handleRepeat={this.handleRepeat} />
                        <ListSongAudio data={data} isSong={this.state.isSong} handleChangeSong={this.handleChangeSong} />
                    </div>
                </div>
            </div>
        )
    }
}
