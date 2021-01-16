import React, { Component } from 'react'
import Drum from './components/Drum'
import './App.css';

const data = [
  { id: 'Laser', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/pew-pew-lame-sound-effect.mp3' },
  { id: 'Bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
  { id: 'Bad Joke', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
  { id: 'Snare', letter: 'A', src: 'https://www.myinstants.com/media/sounds/vdub1-snare-088.mp3' },
  { id: 'Kick', letter: 'S', src: 'https://www.myinstants.com/media/sounds/vdub1-kick-006.mp3' },
  { id: 'Tun Tun', letter: 'D', src: 'https://www.myinstants.com/media/sounds/tun-tun-tisss.mp3' },
  { id: 'Banjo', letter: 'Z', src: 'https://www.myinstants.com/media/sounds/joe-avery-banjo-1-converted.mp3' },
  { id: 'Drum Hit', letter: 'X', src: 'https://www.myinstants.com/media/sounds/loelectm.mp3' },
  { id: 'Gah-Huh', letter: 'C', src: 'https://www.myinstants.com/media/sounds/guh-huh.mp3' },
]


class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {

  //   }
  // }


  state = {
    text: " "
  }

  changeTextHandler(newTxt) {
    this.setState({ text: newTxt })
  }

  render() {

    const pads = data.map((item) => {
      return (
        <Drum letter={item.letter} id={item.id} src={item.src} setText={this.changeTextHandler.bind(this)} />
      )
    })



    return (
      <div className="App" id="drum-machine">
        <p id="display">{this.state.text}</p>
        <div className="drumPads">
          {pads}
        </div>
      </div>
    );
  }

}

export default App;
