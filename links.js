// Code goes here
document.addEventListener("DOMContentLoaded", function(e) {
  var links = document.getElementsByTagName( 'A' );
  function randomTranslate(element){
    element.style.display = "inline-block";
    element.addEventListener("mouseenter", function( event ) {
      var style = window.getComputedStyle(element);
      var matrix = new WebKitCSSMatrix(style.webkitTransform);
      console.log('translateX: ', matrix.e);
      console.log('translateY: ', matrix.f);
      var vector = Math.sqrt(matrix.e*matrix.e + matrix.f*matrix.f);
      console.log('vector: ', vector);
      var i = 0;
      var range = 60;
      differenceX = 0;
      differenceY = 0;
      function setDistance(){
        var newValue = -range/2 + Math.random() * range;
        return newValue;
      }
      var moveX = setDistance();
      var moveY = setDistance();
      checkValues = function(){
        var differenceX = matrix.e - moveX;
        var differenceY = matrix.f - moveY;
        console.log(differenceX, differenceY);
        i++;
        console.log(i);
        if ( Math.sqrt(differenceX * differenceX + differenceY * differenceY) > 40 ) {
          return
        } else {
          moveX = setDistance(matrix.e);
          moveY = setDistance(matrix.f);
          checkValues();
        }
      }
      checkValues();
      console.log(Math.sqrt(moveX * moveX + moveY * moveY));
      element.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
    });
    element.addEventListener("mouseleave", function( event ) {
    });
  }
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    console.log(link);
    randomTranslate(link);
  }
})
