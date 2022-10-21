window.addEventListener("load", function() {
  const survey = document.getElementById("survey");
  survey.addEventListener("submit", results);
});

//------------------------------------------------------------------------------------------------------------------------
function survey(event) {
  event.preventDefault();

  // const option1 = document.querySelector("input#q5a").value;
  // const option2 = document.querySelector("input#q5").value;
  const selected = document.querySelector("input[name ='q5']:checked").value;

  if (selected === "q5a") {
    document.getElementById("info").innerText = "C++" + "\nC++ is a challenging, but extremely benificial language to learn in the beggining if you are able to stick with it."
  }
  else if (selected === "q5b") {
    document.getElementById("info").innerText = "Python" + "\nPython is a good grounds to start learning programing."
  }
  else if (selected === "q5c") {
    document.getElementById("info").innerText = "JavaScript" + "\nJavaScript is very forgiving when it comes to syntax and learning the fundamentals."
  }
}