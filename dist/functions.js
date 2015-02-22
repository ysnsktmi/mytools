$(function(){

  var head=document.getElementsByTagName('head')[0];;

  //console.log shorthand
  function cl(o){
    console.log(o);
  }

  //indexOf for Lagecy Browser
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf=function(target,index){
      if(isNaN(index)){
        index=0;
      }
      for(var i=index,n=target.length;i<n;i++){
        if(this[i]===target){
          return i;
        }
      }
      return -1;
    }
  }

  //require(js)
  function require(url){
    var script=document.createElement('script');
    script.type='text/javascript';
    script.src=url;
    head.appendChild(script);
  }

  //include(css)
  function require(url){
    var css=document.createElement('link');
    css.type='text/css';
    css.rel='stylesheet';
    css.href=url;
    head.appendChild(css);
  }

  //smoothscroll
  $('a[href^="#"]').on('click',function(e){
    e.preventDefault();
    smoothscroll($(this).attr('href'));
  });
  function smoothscroll(target){
    var to=$(target).offset().top;
    $('html').animate({
      scrollTop:to
    },300);
    return to;
  }

  //scheme
  $('#colorscheme span').each(function(){
    var rgb=$(this).css('background-color').replace(/rgb\(/g,'');
      obj={
        r:parseInt(rgb.split(',')[0]),
        g:parseInt(rgb.split(',')[1]),
        b:parseInt(rgb.split(',')[2])
      };
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }
    function rgbToHex(r, g, b) {
      return '#'+componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    $(this).empty().append(rgbToHex(obj.r,obj.g,obj.b));
  })


})//jquery