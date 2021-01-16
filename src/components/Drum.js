import React, { Component } from 'react'
import '../App.css';




class Drum extends Component {

    componentDidMount() {
        console.log(this.audio)
        document.addEventListener('keydown', this.handleKeydown)
        window.focus()
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown)
    }

    handleKeydown = e => {
        if (e.keyCode === this.props.letter.charCodeAt()) {
            this.audio.play()
            this.audio.currentTime = 0
            this.props.setText(this.props.id)
            // this.props.handleDisplay(this.props.id)
        }
    }

    handleClick = () => {
        this.audio.play()
        this.audio.currentTime = 0
        this.props.setText(this.props.id)
        // this.props.handleDisplay(this.props.id)
    }

    render() {


        return (
            <div onClick={this.handleClick} className="drum-pad" id={this.props.letter}>
                <h1>{this.props.letter}</h1>
                <audio id={this.props.letter}
                    className='clip'
                    src={this.props.src}
                    ref={ref => this.audio = ref}
                ></audio>
            </div>
        )
      




    }

}

export default Drum;
