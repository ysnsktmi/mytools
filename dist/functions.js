$(function(){

  var head=document.getElementsByTagName('head')[0];;

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

})//jquery