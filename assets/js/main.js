const ratingForm = document.querySelector(".rating-form");
const ratingState = document.querySelector("#rating-state");
const thankYouState = document.querySelector("#thank-you-state");
const selectedRatingSpan = document.querySelector("#selected-rating");
const radioButtons = document.querySelectorAll(
  '.rating-form input[type="radio"]'
);
const ratingLabels = document.querySelectorAll(".rating-form label");

let currentRating = null;

radioButtons.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    // Remove 'selected' class from all labels
    ratingLabels.forEach((label) => {
      label.classList.remove("selected");
    });
    // Add 'selected' class to the label of the selected radio button
    if (radio.checked) {
      radio.parentElement.classList.add("selected");
      currentRating = radio.value;
    }
  });
});

ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (currentRating) {
    selectedRatingSpan.textContent = currentRating;
    ratingState.classList.add("hidden");
    thankYouState.classList.remove("hidden");
  } else {
    alert("Please select a rating before submitting.");
  }
});
