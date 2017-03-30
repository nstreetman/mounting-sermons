import React from 'react'
import {mousePositionElement} from './utils/mouse.js'
import {
	timeBarOverlay,
	timeBarStyles,
	innerScrubStyle,
	scrubberDefaultStyle,
	scrubberContainerStyle,
	togglePlayPauseStyle,
	rectangleShape,
	pauseShape,
	triangleShape,
	titleStyle,
	authorStyle,
	collectionStyle } from './styles/component-styles.js'

class Player extends React.Component {
		constructor(props){
		super(props)
		console.log('props...')
		this.state = {
			videoId: this.props.videoId,
			isPlaying: false,
			currentTime: 0,
			scrubberStyle: scrubberDefaultStyle,
			scrubberIsDragging: false
		}

		this._handlePlay = this._handlePlay.bind(this)
		this._handlePause = this._handlePause.bind(this)
		this._handleStop = this._handleStop.bind(this)
		this._execPlayVideo = this._execPlayVideo.bind(this)
		this._handleTimebarClick = this._handleTimebarClick.bind(this)
		this._handleScrubberDrag = this._handleScrubberDrag.bind(this)
		this._handlePlayPauseClick = this._handlePlayPauseClick.bind(this)
	}

	_handlePause(){
		this._player.pauseVideo()
		this.setState({
			isPlaying: false
		})
		clearInterval(this._intervalId)
	}	

	_handleStop(){
		this._player.stopVideo()
		this.setState({
			isPlaying: false,
			currentTime: 0,
			scrubberStyle: Object.assign({}, this.state.scrubberStyle, {left: `0%`} )
		})

		clearInterval(this._intervalId)
	}

	_handlePlay(){
		let component = this
		if(!this._player){
			this._player = new YT.Player(`yt_id_${this.state.videoId}`, {
				height: '200',
				width: '200',
				videoId: this.state.videoId,
				events: {
					onReady: component._execPlayVideo
				}
			})
		} else {
			this._execPlayVideo()
		}
	}

	_execPlayVideo(){
		if(this.state.isPlaying){
			return
		}

		let currentScrubberPos = parseFloat(this.state.scrubberStyle.left.slice(0,-1))/100 
		let videoDuration = this._player.getDuration()

		this._intervalId = setInterval(()=>{
			let newCurrentTime = this._player.getCurrentTime()
			let videoDuration = this._player.getDuration()

			this.setState({
				currentTime: newCurrentTime,
				videoDuration: videoDuration,
				scrubberStyle: Object.assign({}, this.state.scrubberStyle, {left: `${ newCurrentTime/videoDuration * 100}%`} )
			})
			
		}, 60)
		
		this._player.seekTo( currentScrubberPos * videoDuration  )
		this._player.playVideo()
		this.setState({
			currentTime: this._player.getCurrentTime(),
			isPlaying: true
		})
	}
	
	_handleTimebarClick(e){
	
		let mousePosX = mousePositionElement(e).x
		let barWidth = this.refs.timeBar.offsetWidth
		let stateObj = {}

		if(this._player){
		   let seekedTime = mousePosX/barWidth * this._player.getDuration()
			this._player.seekTo(seekedTime)
			stateObj.currentTime = seekedTime
			stateObj.scrubberStyle = Object.assign({}, this.state.scrubberStyle, {left: `${ mousePosX/barWidth * 100}%`} )
				
		}
		setTimeout(()=>{
			this.setState(stateObj)
		}, 60)
		
	}
	
	_handleScrubberDrag(e){
		console.log(e)
		if(e.type==='mousedown'){
			this.setState({
				scrubberIsDragging: true
			})
		}

		if(e.type==='mouseup' && this.state.scrubberIsDragging){
			console.log('drop the scrubber')
			let mousePosX = mousePositionElement(e).x
			let barWidth = this.refs.timeBar.offsetWidth
			let seekedTime 
			if(this._player){
				seekedTime = mousePosX/barWidth * this._player.getDuration()
				this._player.seekTo(seekedTime)
			}
			this.setState({
				scrubberIsDragging: false,
				scrubberStyle: Object.assign({}, this.state.scrubberStyle, {left: `${ mousePosX/barWidth * 100}%`} )
			})
		}
	}
	
	_getTimeFromTimebar(xPos,width){
		let seekedTime = mousePosX/barWidth * this._player.getDuration()
		return seekedTime
	}
	
	_showPlayOrPauseButton(isPlaying){
		let jsxEl
		if(isPlaying){
			jsxEl = <div style={pauseShape} onClick={this._handlePause}/>
		} else {
			jsxEl = <div style={triangleShape} onClick={this._handlePlay}/>
		}
		return jsxEl
	}
	
	_handlePlayPauseClick(){
		if(this.state.isPlaying){
			this._handlePause()
		} else {
			this._handlePlay()
		}
	}

	render(){
		let currentSeconds = parseInt(this.state.currentTime) % 60 
		return (
			<div style={{fontFamily: 'sans-serif', maxWidth: '400px', position: 'relative', paddingBottom: '12px'}}>
			<div style={{position: 'relative'}}>
				<div style={{marginRight: '50px', minHeight: '50px'}}>
					<h3 style={titleStyle}>{this.props.title}</h3>
					<h4 style={authorStyle}>{this.props.name}</h4>
					<h5 style={collectionStyle}>{this.props.collection}</h5>
				</div>
				<div style={togglePlayPauseStyle}	 onClick={this._handlePlayPauseClick} >
					{this._showPlayOrPauseButton(this.state.isPlaying)}
				</div>			
			</div>		
				<div style={scrubberContainerStyle}>
					<div className="yt-media-player" style={{position: 'relative', width: '100%', height: '20px' }}>
						<div style={ timeBarOverlay } onClick={this._handleTimebarClick} ref="timeBar" onMouseUp={this._handleScrubberDrag}/>
						<div style={ timeBarStyles } />
						<span style={this.state.scrubberStyle} onMouseDown={this._handleScrubberDrag}>
							<span style={innerScrubStyle}></span>
						</span>
					</div>
				</div>
				<div style={{textAlign: 'right', fontSize: '16px'}}>
					<span> {Math.floor(this.state.currentTime/60)}</span> : <span> {currentSeconds < 10? `0${currentSeconds}` : `${currentSeconds}` }</span>
				</div>
			

				<div style={{display: 'none'}}>
					<div id={`yt_id_${this.state.videoId}`}/>
				</div>
				<span style={{position: 'absolute', bottom: 0, right: 0, fontSize: '8px'}}>Powered by YouTube</span>
			</div>
		)
	}
}

export default Player