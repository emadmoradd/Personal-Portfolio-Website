const allBoxes = document.querySelector('.box-container');
const previewModalOverlay = document.getElementById('preview-modal-overlay');
const modalCloseBtn = document.getElementById('modal-close-btn');

allBoxes.addEventListener('click', showMealImg);

modalCloseBtn.addEventListener('click', () => {
  previewModalOverlay.style.display = "none";
});

function showMealImg(e){
  let mealDiv;
  if(e.target.classList.contains('fas')){
      mealDiv = e.target.parentElement.parentElement;
  } else {
      mealDiv = e.target;
  }
  previewModalOverlay.querySelector('img').src = mealDiv.querySelector('img').src;
  previewModalOverlay.style.display = "block";
}