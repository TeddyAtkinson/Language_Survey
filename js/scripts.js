window.addEventListener("load", function() {
  //console.log("load event")
  const survey = document.getElementById("survey");
  survey.addEventListener("submit", result);
});

//------------------------------------------------------------------------------------------------------------------------
function result(event) {
  event.preventDefault();
  //console.log("survey function")

  const selected = document.querySelector("input[name ='q5']:checked").value;
  document.getElementById("results").setAttribute("class", "hidden");

  if (selected === "q5a") {
    document.getElementById("info").innerText = "C++\n\n"
    + "C++ is a challenging, but extremely benificial language to learn in the beggining if you are able to stick with it."
    document.getElementById("results").removeAttribute("class");
  }
  else if (selected === "q5b") {
    document.getElementById("info").innerText = "Python" + "\nPython is a good grounds to start learning programing."
    document.getElementById("results").removeAttribute("class");
  }
  else if (selected === "q5c") {
    document.getElementById("info").innerText = "JavaScript" + "\nJavaScript is very forgiving when it comes to syntax and learning the fundamentals."
    document.getElementById("results").removeAttribute("class");
  }
  //console.log(selected);
}