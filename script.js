$(document).ready(function(){
  console.log('jQuery corriendo')
  getJson()

  function getJson(){
    var json = objeto()

    var text = ""
    Object.keys(json).forEach(key => {
      text = text + `<a href="`+json[key].url+`" target="`+json[key].target+`"><img src="`+json[key].img+`" alt="`+key+`"></a>`
    })
    $('.listarimg').html(text)
  }

  function objeto(){
    var socialMedia = {
      facebook: {
        img: './images/facebook.png',
        url: 'http://facebook.com',
        target: '_blank'
      },
    
      flickr: {
        img: './images/flickr.png',
        url: 'http://flickr.com',
        target: '_blank'
      },
    
      google: {
        img: './images/google.png',
        url: 'http://google.com',
        target: '_blank'
      },
    
      linkedin: {
        img: './images/linkedin.png',
        url: 'http://linkedin.com',
        target: '_blank'
      },
    
      meetup: {
        img: './images/meetup.png',
        url: 'http://meetup.com',
        target: '_blank'
      },
    
      twitter: {
        img: './images/twitter.png',
        url: 'http://twitter.com',
        target: '_blank'
      },
    
      wordpress: {
        img: './images/wordpress.png',
        url: 'http://wordpress.com',
        target: '_blank'
      },
    
      youtube: {
        img: './images/youtube.png',
        url: 'http://youtube.com',
        target: '_blank'
      }
    };
    return socialMedia;
  }
})