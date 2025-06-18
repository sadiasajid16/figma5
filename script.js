document.addEventListener('DOMContentLoaded', function() {
    var videoModal = document.getElementById('videoModal');
    var youtubeVideoFrame = document.getElementById('youtubeVideoFrame');

    if (videoModal && youtubeVideoFrame) {
        videoModal.addEventListener('hidden.bs.modal', function () {
            youtubeVideoFrame.src = youtubeVideoFrame.src;
        });
        var originalSrc = youtubeVideoFrame.src; 
        youtubeVideoFrame.removeAttribute('src');

        videoModal.addEventListener('shown.bs.modal', function () {
            youtubeVideoFrame.src = originalSrc;
        });
    }
});
// featured properties section starts 

document.addEventListener("DOMContentLoaded", function () {
  const allBtn = document.getElementById("allBtn");
  const saleBtn = document.getElementById("saleBtn");
  const rentBtn = document.getElementById("rentBtn");
  const cards = document.querySelectorAll(".card");

  allBtn.addEventListener("click", function (e) {
    e.preventDefault();
    cards.forEach(card => card.style.display = "block");
  });

  saleBtn.addEventListener("click", function (e) {
    e.preventDefault();
    cards.forEach(card => {
      if (card.classList.contains("for-sale")) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  rentBtn.addEventListener("click", function (e) {
    e.preventDefault();
    cards.forEach(card => {
      if (card.classList.contains("for-rent")) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
const buttons = document.querySelectorAll('.select-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });