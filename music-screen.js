// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor(element) {
    // TODO(you): Implement the constructor and add fields as necessary.
      this.element = element ;
      this.button = this.element.querySelector('.btn');
      this.Gifscreen = this.element.querySelector('.screen');

      this.player = new AudioPlayer();
      this.Gif = new GifDisplay();
      this.play = new PlayButton();

      this.hide = this.hide.bind(this);
      this.show = this.show.bind(this);
      this._onkick = this._onkick.bind(this);
      this.Btnstate = this.Btnstate.bind(this);

      //this.button.addEventListener('click',this.Btnstate);


  }
  // TODO(you): Add methods as necessary.

  hide()
  {
    this.element.classList.add('inactive');
  }

  show()
  {
    this.element.classList.remove('inactive');
/*
    this.player.setSong();
    this.player.setKickCallback();
    this.player.play();
    */
  }

  _onkick()
  {
      console.log('kick');
      this.Gif.ChangeGif();
  }

  Btnstate()
  {
      if(this.button.src === "images/play.png")
      {
          this.button.src = "images/pause.png" ;
          this.player.play();
      }
      else
      {
          this.button.src = "images/pause.png" ;
          this.player.pause();
      }
  }


}
