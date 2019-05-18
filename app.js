// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.

      const menu = document.getElementById('menu');
        this.tomusic = this.tomusic.bind(this);
        document.addEventListener('keyword',this.tomusic);

      const music = document.getElementById('music')

      this.menuscreen = new MenuScreen(menu);
      //this.menuscreen.hide();

      this.music = new MusicScreen(music);
      this.music.hide();

      //this.Gif = new GifDisplay();


  }
  // TODO(you): Add methods as necessary.

    tomusic(event)
    {
        this.menuscreen.hide();
        this.music.show();

        this.music.player.setSong(event.detail.Song);
        //this.music.player.setKickCallback();
        this.music.player.play();

        this.music.Gif.GetGif(event.detail.Theme);
    }
}
