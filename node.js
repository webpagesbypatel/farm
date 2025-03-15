// JavaScript for Image Modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");
const images = document.querySelectorAll('.image-grid img');
const closeBtn = document.querySelector(".close");

images.forEach(img => {
  img.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

closeBtn.addEventListener('click', function() {
  modal.style.display = "none";
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});


 