'use strict';

function Search() {
  let show = document.getElementById('searchText').value;
  console.log('Script starts');
  fetch('http://api.tvmaze.com/search/shows?q=' + show).then(function(answer) {
    return answer.json();
  }).then(function(json) {
    TV(json);
  }).catch(function(error) {
    console.log(error);
  });
  console.log('Script ends');
}




function TV(information) {

  console.log("TV starts " + information.length.toString());
  // let shows = information.name;
  for (let i = 0; i < information.length; i++) {
    console.log(information);
  }
  console.log("TV ends");
}