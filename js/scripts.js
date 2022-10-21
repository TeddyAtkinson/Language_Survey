window.addEventListener("load", function() {
  //console.log("load event")
  const survey = document.getElementById("survey");
  survey.addEventListener("submit", result);
});

//------------------------------------------------------------------------------
function result(event) {
  event.preventDefault();
  //console.log("survey function")

  const selected = document.querySelector("input[name ='q5']:checked").value;
  document.getElementById("results").setAttribute("class", "hidden");

  if (selected === "q5a") {
    document.getElementById("info").innerText = "C++\n\n"
    + "C++ is a challenging, but extremely benificial language to learn in the"
    + "beginning if you are able to stick with it. C++ allows you to start "
    + "building your knowlege from the ground up and give you a deeper "
    + "understanding of how and why things function as they do."
    document.getElementById("results").removeAttribute("class");
  }
  else if (selected === "q5b") {
    document.getElementById("info").innerText = "Python\n\n"
    + "Python is a good grounds to start learning programing. "
    + "Python is a higher-level programming language, "
    + "meaning it's far from a machine language, making it easier for beginners "
    + "to read and grasp. Furthermore, being general-purpose programming "
    + "language, Python is quite versatile for different sorts of projects."
    document.getElementById("results").removeAttribute("class");
  }
  else if (selected === "q5c") {
    document.getElementById("info").innerText = "JavaScript\n\n"
    + "JavaScript is very forgiving when it comes to syntax and learning "
    + "the fundamentals. It is very prevalent in the industry making it "
    + "easier to fing a job once you start building your "
    + "understanding and portfolio"
    document.getElementById("results").removeAttribute("class");
  }
  //console.log(selected);
}