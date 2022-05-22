const sections = document.querySelectorAll(".section");
const secbtns = document.querySelectorAll(".controlls");
const secbtn = document.querySelectorAll(".control");
const body = document.querySelector(".main-content");

function pages() {
  for (let i = 0; i < secbtn.length; i++) {
    secbtn[i].addEventListener("click", function () {
      let currentbtn = document.querySelectorAll(".active-btn");
      currentbtn[0].className = currentbtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";

      let currentsec = document.querySelectorAll(".active");
      currentsec[0].className = currentsec[0].className.replace("active", "");
      sections[i].className += " active";
    });
  }
}

pages();
