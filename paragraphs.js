Array.prototype.move = function (old_index, new_index) {
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    return this; // for testing purposes
};

document.addEventListener("DOMContentLoaded", function(e) {
  function randomize(paragraph, times){
    var link = paragraph;
    var words = paragraph.innerHTML;
    var wordsArray = words.split(' '); // here is the array
    function moveRandomWord(array, times){
      var index = 0;
      function move(){
        index++;
        var randomIndex = Math.round( Math.random() * (array.length - 1) );
        var randomNewIndex = Math.round( Math.random() * (array.length - 1) );
        console.log(array[randomIndex]);
        array.move(randomIndex, randomNewIndex);
        if(index < times){
          move();
        }
      }
      move();
    }
    moveRandomWord(wordsArray, times);
    words = wordsArray.join(' ');
    console.log(words);
    paragraph.innerHTML = words;
  }
  var paragraphs = document.getElementsByTagName( 'P' );
  for (var i = 0; i < paragraphs.length; i++) {
    var p = paragraphs[i];
    window.setInterval(function(){ randomize(p, 1); }, 100);
  }
});
