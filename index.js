let bar = document.querySelector("#progress");

function toggleBio1() {
  let bio = document.getElementById('jebeckyBio');
  let button = document.getElementById('button1').src;
  bio.classList.toggle("visuallyhidden");
  if (button.indexOf('button2.png') != -1) {
    document.getElementById('button1').src = 'Images/button1.png';
  } else {
    document.getElementById('button1').src = 'Images/button2.png';
  }
}

function toggleBio2() {
  let bio = document.getElementById('jrewBio');
  let button = document.getElementById('button2').src;
  bio.classList.toggle("visuallyhidden");
  if (button.indexOf('button2.png') != -1) {
    document.getElementById('button2').src = 'Images/button1.png';
  } else {
    document.getElementById('button2').src = 'Images/button2.png';
  }
}

function toggleBio3() {
  let bio = document.getElementById('joobiBio');
  let button = document.getElementById('button3').src;
  bio.classList.toggle("visuallyhidden");
  if (button.indexOf('button2.png') != -1) {
    document.getElementById('button3').src = 'Images/button1.png';
  } else {
    document.getElementById('button3').src = 'Images/button2.png';
  }
}

function toggleBio4() {
  let bio = document.getElementById('jerrickBio');
  let button = document.getElementById('button4').src;
  bio.classList.toggle("visuallyhidden");
  if (button.indexOf('button2.png') != -1) {
    document.getElementById('button4').src = 'Images/button1.png';
  } else {
    document.getElementById('button4').src = 'Images/button2.png';
  }
}

window.addEventListener("scroll", () => {
  let max = document.body.scrollHeight - innerHeight;
  bar.style.width = `${(pageYOffset / max) * 100}%`;
});

document.getElementById('button1').addEventListener("click", toggleBio1);
document.getElementById('button2').addEventListener("click", toggleBio2);
document.getElementById('button3').addEventListener("click", toggleBio3);
document.getElementById('button4').addEventListener("click", toggleBio4);