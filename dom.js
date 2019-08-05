"use strict";

let imageLoader = document.getElementById('file');
let preview = document.getElementsByTagName('img');
imageLoader.addEventListener('change', getImage);

// set image in img src attribute
function getImage(e) {
  let reader = new FileReader();
  reader.onload = (event) => {
    preview[0].setAttribute('src',event.target.result);
  }
  reader.readAsDataURL(e.target.files[0]);
}
