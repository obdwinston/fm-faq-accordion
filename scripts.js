var questions = document.getElementsByClassName("question");
var i;

for (i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var image = this.querySelector("img");
    if (image.src.split("/").pop() === "icon-plus.svg")
      image.src = "assets/images/icon-minus.svg";
    else image.src = "assets/images/icon-plus.svg";

    var answer = this.nextElementSibling;
    if (answer.style.display === "block") answer.style.display = "none";
    else answer.style.display = "block";
  });
}
