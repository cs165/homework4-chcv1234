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
      this.button = element.querySelector('.btn');
      this.Gifscreen = element.querySelector('.screen');

      this.player = new AudioPlayer();
      this.Gif = new GifDisplay();
      this.play = new PlayButton();
  }
  // TODO(you): Add methods as necessary.

  hide()
  {
    this.element.classList.add('inactive');
  }

  show()
  {
    this.element.classList.remove('inactive');
  }
}
