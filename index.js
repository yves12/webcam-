$(function() {

  var streaming = false,
    video = document.querySelector('#video'),
    cover = document.querySelector('#cover'),
    canvas = document.querySelector('#canvas'),
    photo = document.querySelector('#photo'),
    startbutton = document.querySelector('#startbutton'),
    width = 200,
    height = 0;


  navigator.getMedia = (navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);

  navigator.getMedia({
      video: true,
      audio: false
    },
    function(stream) {
      if (navigator.mozGetUserMedia) {
        video.mozSrcObject = stream;
      }
      else {
        var vendorURL = window.URL || window.webkitURL;
        video.src = vendorURL ? vendorURL.createObjectURL(stream) : stream;
      }
      video.play();
    },
    function(err) {
      console.log("An error occured! " + err);
    }
  );

  video.addEventListener('canplay', function(ev) {
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth / width);
      // video.setAttribute('width', width);
      // video.setAttribute('height', height);
      // canvas.setAttribute('width', width);
      // canvas.setAttribute('height', height);
      streaming = true;
    }
  }, false);

  function takepicture() {
//    $("body").addClass("showimage")
    $("#switcher").click();
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);
    addimage();
    // canvas.width = width;
    // canvas.height = height;
    // var d = canvas.getContext('2d');
    // d.drawImage(video, 0, 0, width, height);
    // var data = canvas.toDataURL('image/png');
    // photo.setAttribute('src', data);
  }

  startbutton.addEventListener('click', function(ev) {
    takepicture();
    ev.preventDefault();
  }, false);
  $(".filter").click(function() {
    var classname = $(this).attr("data-value");
    console.log(classname);
    $(".vid-img").toggleClass(classname)
  });

  function addimage(x,y) {
   var rect = canvas.getBoundingClientRect();
    var image = document.getElementById("page");
    var ctx = canvas.getContext("2d");
    var x1 = x-rect.left - 50;   
    var y1 = y-rect.top - 50;    
    ctx.drawImage(imageToStamp, x1, y1);    
  }

  $("canvas").click(function(e){
    console.log(e);
   
    addimage( e.clientX,e.clientY);
  });
  



var images={
  
  
  
 "Heartfilter":"https://41.media.tumblr.com/6c11feeb853a6d0678798aac96129a00/tumblr_o4914k2UrJ1uwi0lpo1_500.png",
"catears":"http://pre02.deviantart.net/9bbd/th/pre/f/2015/297/5/1/request_2_10_black_cat_ears_by_kagamineheart-d967yxf.png",
"LightningBall":"http://vignette3.wikia.nocookie.net/elderscrolls/images/5/5f/MAGINVShockSpellArt.png/revision/latest?cb=20120221192951",
"RashangonNaruto": "http://pre11.deviantart.net/ddaf/th/pre/f/2012/243/5/8/rasengan_by_fabian_94-d5d51ch.png",
"Shariangon":"https://media.giphy.com/media/1sHllZf2k8cIE/giphy.gif",
"megamanshelmet":"http://www.multiverse-studio.com/images/faq-megamanhelmet.png",
"Questionmark" :"http://bio.academany.org/images/people/who.png",
"strawhat": "http://ecx.images-amazon.com/images/I/81fCOtga8%2BL._SL1500_.jpg",
"breadcat": "https://media.giphy.com/media/bvsmuUkNg3CaQ/giphy.gif",
"cutecat": "https://67.media.tumblr.com/b832028c117cb548614cbea10f0153dc/tumblr_mudg73OFlK1rgpyeqo1_500.gif",
"blackcat": "https://media.giphy.com/media/VTw1BzhBEQUla/giphy.gif",
"catnap": "http://25.media.tumblr.com/fc8e686c04e5640d6a2ea9970bef094d/tumblr_mh9wvmw4QJ1r260qwo1_500.gif",
"chowingdown":  "http://25.media.tumblr.com/fc8e686c04e5640d6a2ea9970bef094d/tumblr_mh9wvmw4QJ1r260qwo1_500.gif",
"catlevi": "http://31.media.tumblr.com/d500d78b4e659739c4bbd0701450fdde/tumblr_mtavla9pA61sn6zreo1_1280.gif",
"neoncat": "https://media.giphy.com/media/11SQ5XkgUB7fMc/giphy.gif",
"neonpikachu": "https://media.giphy.com/media/11SQ5XkgUB7fMc/giphy.gif",
"spider": "http://img00.deviantart.net/407b/i/2012/340/5/d/png_spider_by_moonglowlilly-d5n8sg4.png",
"mariohat":"http://orig14.deviantart.net/8b67/f/2015/071/b/6/mario_s_hat_by_banjo2015-d8lf3km.png",
"disney":"http://img10.deviantart.net/1030/i/2014/124/c/d/you_re_watching_disney_channel_template_by_xxbloomixfloraxx-d7h35bf.png",
"balloons": "http://pngimg.com/upload/balloon_PNG583.png",
"hat":"http://www.clipartlord.com/wp-content/uploads/2013/03/patriotic-hat.png",
 "sparkels":"https://66.media.tumblr.com/3c9e7013a5af99ac193f7639d837d2b8/tumblr_o6yvypDRAi1vqd1j1o1_400.gif",
"bubbles":  "http://41.media.tumblr.com/59d0d3281808a69977c55beed1bae667/tumblr_npaocbOAfX1uxptqno1_400.png", 
"random":"https://image.spreadshirtmedia.com/image-server/v1/designs/12495359,width=178,height=178,version=1378727413/Double-Dollar-Sign.png",
"tears": "https://41.media.tumblr.com/56d44f3a87bc32c88f203a6697db4f48/tumblr_neocvaVOFx1tk3u4no1_250.png",
"motion tears": "https://66.media.tumblr.com/7bc55fd5731a21852f2440829af8eef8/tumblr_n5salthNqA1s5jjtzo1_500.gif",
"water": "http://1.bp.blogspot.com/-ghAIyvIt1O4/UpX79NFcZJI/AAAAAAAAAa0/tjdVHd9xDqE/s1600/water1.png",
"water heart":"http://4.bp.blogspot.com/-eePLWmgMdVA/UvIGm5nJonI/AAAAAAAAAnU/EGLTrcDsoLw/s1600/water_splash_png_by_starlaa1-d51fsnt.png",
"Pikachu":"http://i.imgur.com/9lKqexD.png",
"motion Pikachu":"http://33.media.tumblr.com/e9e7818a8f05b692f36fb51d8ea3c080/tumblr_ne27xzItwp1snslrwo1_250.gif",
"siting pikachu":"http://orig09.deviantart.net/822e/f/2013/061/1/e/pikachu_digital_art___pokemon_by_dark_omni-d5wotdb.png",
};  
for(var img in images){
  addThumbnail(img);
  
}

var imageToStamp;
function addThumbnail(name) {
    var element="<div class='thumb' id='"+name+"'><img class='thumbimg' src='"+images[name]+"'></div>"; 
    $("#image-holder").append(element);
    $("#"+name).click(function(){
      imageToStamp = new Image(100, 100);
      imageToStamp.src = images[name];
    });
        console.log(element);

}
});
