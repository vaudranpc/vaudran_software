var Typewriter = function(
  iterationSpeed,
  destinationElement,
  inputText,
  cursorToRemove,
  callback
) {
  iterateTypewriter = (function(iterationSpeed, destinationElement, callback) {
    return function(inputText, iTextPos) {
      iArrLength = inputText.length;
      iTextPos++;
      destinationElement.innerText = inputText.substring(0, iTextPos);
      if (iTextPos == iArrLength) {
        if (cursorToRemove == true) {
          setTimeout("removeCursor()", 1e3);
          if (callback != undefined) {
            callback();
          }
        } else {
          if (callback != undefined) {
            callback();
          }
        }
      } else {
        setTimeout(
          'iterateTypewriter("' +
            inputText.replace('"', "") +
            '",' +
            iTextPos +
            ")",
          iterationSpeed
        );
      }
    };
  })(iterationSpeed, destinationElement, callback);
  removeCursor = function() {
    destinationElement.classList.remove("typewriter");
  };
  setTimeout(
    'iterateTypewriter("' + inputText.replace('"', "") + '",' + 0 + ")",
    1e3
  );
};
$("#parallax-content").parallax({
  imageSrc: "./images/bg_parallax_home.jpg",
  speed: 0.1,
  positionY: "top"
});
$("#navTitle").fadeToggle(1e3, "swing", function() {
  document.getElementById("brandImage").classList.add("brandImageTop");
  showNavButtons();
});
var showNavButtons = function() {
  $("#nav-toggler").css("opacity", "1");
  $("#navButtons").show("slow", "swing", function() {
    $("#link-buttons-container").css("opacity", "1");
    $("#typewriter-container").toggleClass("typewriter");
    $(".navbar").css("background-color", "#00000080");
    new Typewriter(
      70,
      document.getElementById("typewriter-container"),
      "Pour ceux qui veulent changer le monde",
      false,
      null
    );
  });
};
document.querySelector("#floatingToggle").addEventListener("click", function() {
  document.querySelector("#nav-toggler").classList.toggle("active");
  $("#navToggleContent").slideToggle();
  $("#navbar").toggleClass("back-color");
});
window.onscroll = function() {
  if (this.document.getElementById("blog").getBoundingClientRect().y < 0) {
    $(".navbar").css("background-color", "rgba(0, 0, 0, 0.9)");
  } else {
    $(".navbar").css("background-color", "rgba(0, 0, 0, 0.5)");
  }
  if (
    document.getElementById("club-description").getBoundingClientRect().y +
      document.getElementById("club-description").getBoundingClientRect()
        .height /
        2 <
    (3 * window.innerHeight) / 4
  ) {
    $("#club-description").css("opacity", "1");
  } else {
    $("#club-description").css("opacity", "0");
  }
  if (
    document.getElementById("club-description").getBoundingClientRect().y +
      document.getElementById("club-description").getBoundingClientRect()
        .height /
        2 <
    (1 * window.innerHeight) / 4
  ) {
    $("#club-description").css("opacity", "0");
  }
  if (
    document.getElementById("club-mission").getBoundingClientRect().y +
      document.getElementById("club-mission").getBoundingClientRect().height /
        2 <
    (3 * window.innerHeight) / 4
  ) {
    $("#club-mission").css("opacity", "1");
  } else {
    $("#club-mission").css("opacity", "0");
  }
  if (
    document.getElementById("club-mission").getBoundingClientRect().y +
      document.getElementById("club-mission").getBoundingClientRect().height /
        2 <
    (1 * window.innerHeight) / 4
  ) {
    $("#club-mission").css("opacity", "0");
  }
  if (
    document.getElementById("club-objectives").getBoundingClientRect().y <
    (3 * window.innerHeight) / 4
  ) {
    $("#club-objectives").css("opacity", "1");
  } else {
    $("#club-objectives").css("opacity", "0");
  }
  if (
    document.getElementById("club-objectives").getBoundingClientRect().y <
    (1 * window.innerHeight) / 4
  ) {
    $("#club-objectives").css("opacity", "0");
  }
};
$("#go-to-description-button").on("click", function() {
  $([document.documentElement, document.body]).animate(
    { scrollTop: $("#parallax-content").offset().top },
    1e3
  );
});
$("#go-to-blog-button").on("click", function() {
  $([document.documentElement, document.body]).animate(
    { scrollTop: $("#blog").offset().top },
    1e3
  );
});
