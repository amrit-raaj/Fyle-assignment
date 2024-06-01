function changeImageAndHighlight(element, newSrc) {
  // Change image source
  document.getElementById("image").src = newSrc;

  // Remove highlight class from all divs
  var divs = document.querySelectorAll(".x1, .x2, .x3");
  divs.forEach(function (div) {
    div.classList.remove("highlighted");
  });

  // Add highlight class to clicked div
  element.classList.add("highlighted");
}
