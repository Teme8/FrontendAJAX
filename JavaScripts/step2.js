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
  let show = {
    "name": "",
    "link": "",
    "mPicture": "",
    "summary": "",
  };
  console.log('TV starts ' + information.length.toString());
  // let shows = information.name;
  for (let i = 0; i < information.length; i++) {
    show.name = information[i].show.name != null ?
        information[i].show.name : "No name";
    show.link = information[i].show.officialSite != null ?
        information[i].show.officialSite: "No address";
    show.mPicture = (information[i].show.image != null) && (information[i].show.image.medium != null) ?
        information[i].show.image.medium : "";
    show.summary = information[i].show.summary != null ?
        information[i].show.summary : "No summary";
    showW(show);
  }

  console.log('TV ends');
}

function showW(show) {
  //Name, link to homepage, medium-picture and summary

  let answer = document.getElementById('ans');

  let h2E = document.createElement("h2");
  answer.appendChild(h2E);
  let headerN = document.createTextNode(show.name);
  h2E.appendChild(headerN);
  answer.innerHTML += "<a href='" + show.link + "'>Link to homepage</a>\n";
  let figureE = document.createElement("figure");
  answer.appendChild(figureE);
  figureE.innerHTML += "<img src=\"" + show.mPicture + "\" alt=\"There is no picture\">\n";
  let pE = document.createElement("p");
  answer.appendChild(pE);
  pE.innerHTML += show.summary;
}

function showK(show) {
  //Name, link to homepage, medium-picture and summary
  console.log(show.name);
  console.log(show.link);
  console.log(show.mPicture);
  console.log(show.summary);
}