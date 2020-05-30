import React, { Component } from 'react';
import songlist from '../songs';
import '../components/styles.css'

class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            /*  isPodClicked:this.props.isClickedId,*/
            currentIndex: 0,
            currentTitle: '',
            currentArtist: '',
            currentImage: '',
            isplaying:false,
            progressbar: 0,
            volumebar: 100,
            volumeup: true,
            currentTime: '00:00',
            totalTime: '00:00',
            loop: false,
            shuffle: false
        }
     
        console.log("hsgd")
        this.history = [];
        this.player = new Audio();
        this.startPlayer = this.startPlayer.bind(this);
        this.PlayOrPause = this.PlayOrPause.bind(this);
        this.playNext = this.playNext.bind(this);
        this.playPrev = this.playPrev.bind(this);
        this.onBarClick = this.onBarClick.bind(this);
        this.onVolumeClick = this.onVolumeClick.bind(this);
        this.toggleVolume = this.toggleVolume.bind(this);
        this.toggleLoop = this.toggleLoop.bind(this);
        this.toggleShuffle = this.toggleShuffle.bind(this);
    }
    startPlayer() {
        const currentSong = songlist[this.props.isClicked];
        this.player.src = currentSong.src;
        this.setState({
            currentTitle: currentSong.title,
            currentArtist: currentSong.artistname,
            currentImage: currentSong.image,
            //isplaying: true
        })
        //this.player.play();
    }
   
       
    PlayOrPause() {
        if (this.player.paused) {
            this.player.play();
            this.setState({ isplaying: true })
        } else {
            this.player.pause();
            this.setState({ isplaying: false })
        }
    }
    playNext() {
        if (this.state.shuffle) {
            this.history.push(this.state.currentIndex);
            this.setState({ currentIndex: Math.floor(Math.random() * songlist.length) }, function () {
                this.startPlayer()
            })
        } else {
            if (this.state.currentIndex === songlist.length - 1) {
                this.player.pause();
                this.setState({ isplaying: false });
            } else {
                this.history.push(this.state.currentIndex);
                this.setState({ currentIndex: this.state.currentIndex + 1 }, function () {
                    this.startPlayer()
                });
            }
        }
    }
    playPrev() {
        if (this.history[this.history.length - 1] >= 0) {
            this.setState({ currentIndex: this.history.pop() }, function () {
                this.startPlayer()
            });
        } else {
            this.player.pause();
            this.setState({ isplaying: false });
        }
    }
    convertTime(seconds) {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;
        this.setState({ currentTime: min + ":" + sec });
    }
    totalTime(seconds) {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;
        this.setState({ totalTime: min + ":" + sec });
    }
    onBarClick(e) {
        var elem = e.target;
        var pa = elem.offsetParent || elem;
        var percentt = (((elem.offsetWidth / pa.offsetWidth)).toFixed(2));

        const offsetX = e.nativeEvent.offsetX;
        const offsetWidth = e.nativeEvent.target.offsetWidth;

        const percent = offsetX / offsetWidth;
        console.log(percentt)
        this.setState({ progressbar: percentt });
        this.player.currentTime = percentt * this.player.duration;

    }
    onVolumeClick(e) {
        const offsetX = e.nativeEvent.offsetX;
        const offsetWidth = e.nativeEvent.target.offsetWidth;
        this.player.volume = offsetX / offsetWidth;
    }
    toggleLoop() {
        this.setState({ loop: !this.state.loop }, function () {
            this.player.loop = this.state.loop
        });
    }
    toggleShuffle() {
        this.setState({ shuffle: !this.state.shuffle })
    }
    toggleVolume() {
        this.setState({ volumeup: !this.state.volumeup }, function () {
            if (!this.state.volumeup) {
                this.player.volume = 0;
            } else {
                this.player.volume = 1;
            }
        })
    }
    componentDidMount() {
        const that = this;
        this.startPlayer();
        this.player.addEventListener('volumechange', function () {
            that.setState({ volumebar: this.volume * 100 })
        }, false);
        this.player.addEventListener('timeupdate', function () {
            console.log("called")
            let position = this.currentTime / this.duration;
            that.setState({ progressbar: position * 100 });
            that.convertTime(Math.round(this.currentTime));
            that.totalTime(Math.round(this.duration));
            if (this.ended) {
                that.playNext()
            }
        })
    }

    handleChange = (event) => {
        if (event.target.value !== NaN) {
            console.log(event.target.value)
            this.setState({ progressbar: event.target.value })
            this.player.currentTime = (event.target.value / 100 * this.player.duration)
        }
        else {
            this.setState({ progressbar: 0 })        }

    }
     componentDidUpdate(prevProps,prevState){
        if(prevProps.isClicked!==this.props.isClicked){
            this.setState({currentIndex: this.props.isClicked})
            console.log(this.state.currentIndex)
            this.startPlayer()
            if (this.player.paused) {
                    this.player.play();
                    this.setState({ isplaying: true })
                }
                
            }
        }

    render() {
        return (
            <>
                <div id="player" className="container-fluid mb-0 pb-0">
                    <div className="d-flex" style={{ marginBottom: "0.1rem ", marginTop: "0rem" }}>
                        <input className="he" type="range" defaultValue="0" value={this.state.progressbar != NaN ? this.state.progressbar : 0} onChange={this.handleChange} id="formControlRange" style={{ top: "0px" }} />

                    </div>
                    <div className="row">
                        <div className="col-xs-3 now-playing" style={{ textAlign: "center" }}>
                            <img src={this.state.currentImage}></img>
                        </div>
                        <div className="col-xs-6 now-playing">
                            <div className="meta ">
                                <div className="title ">{this.state.currentTitle}</div>
                                <div className="artist-name  ">{this.state.currentArtist}</div>
                            </div>
                        </div>
                        <div className="col-xs-3 ali" style={{ textAlign: "right" }} onClick={this.PlayOrPause}>
                            <i className={this.state.isplaying ? "fas fa-pause-circle" : "fas fa-play-circle"} style={{ fontSize: "2.9rem", marginTop: "0.1rem", marginRight: "10px", color: "red",borderRadius:"100%", overflow: "hidden" , backgroundColor:"#fff"}}></i>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Player;