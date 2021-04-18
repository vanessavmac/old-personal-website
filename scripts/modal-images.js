function getModalImage(x) {

  var id1 = "img-book-" + x + "-modal";
  var id2 = "img-book-" + x;
  var id3 = "modal-" + x;
  var id4 = "caption" + x;

  button = document.getElementById("top");
  button.style.display = "none";

  // Get the modal
  var modal = document.getElementById(id1);

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById(id2);
  var modalImg = document.getElementById(id3);
  var captionText = document.getElementById(id4);


  modal.style.display = "block"; //this is what causes the modal to display
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;


  // Get the <span> element that closes the modal
  //https://stackoverflow.com/questions/46618004/needing-explanation-for-getelementsbyclassnameclassname0/46618051
  var span1 = document.getElementsByClassName("close")[x - 1];
  var span2 = document.getElementsByClassName("prev")[x - 1];
  var span3 = document.getElementsByClassName("next")[x - 1];

  // When the user clicks on <span> (x), close the modal
  span1.onclick = function() {
    modal.style.display = "none";
    button.style.display = "block";
  }

  span2.onclick = function() {
    if (x == 1) {
      modal.style.display = "none";
      getModalImage(3);
      x=3;
    } else if (x == 2) {
      modal.style.display = "none";
      getModalImage(1);
      x=1;
    } else {
      modal.style.display = "none";
      getModalImage(2);
      x=2;
    }
  }

  span3.onclick = function() {
    if (x == 1) {
      modal.style.display = "none";
      getModalImage(2);
      x=2;
    } else if (x == 2) {
      modal.style.display = "none";
      getModalImage(3);
      x=3;
    } else {
      modal.style.display = "none";
      getModalImage(1);
      x=1;
    }
  }

  window.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowRight') {
      if (x == 1) {
        modal.style.display = "none";
        getModalImage(2);
        x=2;
      } else if (x == 2) {
        modal.style.display = "none";
        getModalImage(3);
        x=3;
      } else {
        modal.style.display = "none";
        getModalImage(1);
        x=1;
      }
    } else if (event.key == 'ArrowLeft') {
      if (x == 1) {
        modal.style.display = "none";
        getModalImage(3);
        x=3;
      } else if (x == 2) {
        modal.style.display = "none";
        getModalImage(1);
        x=1;
      } else {
        modal.style.display = "none";
        getModalImage(2);
        x=2;
      }
    }
  });

}
