// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
class GifDisplay {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.

      this.front = document.querySelector('#front');
      this.back = document.querySelector('#back');

      this.Gifofjson ;
      this.dataLength ;
      this.Gimage = [] ;
      this.pre ;


  }
  // TODO(you): Add methods as necessary.

  GetGif(theme) {
      var GifAPT = "https://api.giphy.com/v1/gifs/search" + "?q" + theme + "&api_key=RtwDHQyEoyDZ5iVv1hUwDnLKIsaDzXDE&limit=25&rating=g";

      fetch(GifAPT)
          .then(Response => {
              return Response.json();
          })

          .then(image => {

              this.dataLength = image.data.length;
              if (this.dataLength >= 2) {
                  this.Gifofjson = image;
              }

              //Function ;
          })

          .catch(err => {
              console.log(err);

              //Function ;
          })
  }

  SetGifarray()
  {
    if(this.dataLength >= 2)
    {
      for(let i=0; i < this.dataLength; i++)
      {
        this.Gimage[i] = new Image() ;
        this.Gimage[i].src = this.Gifofjson.datas[i].image.downsized.url ;
      }
    }
  }

  ChangeGif()
  {
      let random = Math.floor(Math.random() * this.Gimage.length);

      if(random !== this.pre)
      {
        break ;
      }

      this.pre = random ;
  }


}
