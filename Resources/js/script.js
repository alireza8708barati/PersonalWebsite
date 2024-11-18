//mobile menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

 //menu style after scroll
 window.onscroll = function() {
    myFunction2()
};

//skills typing script

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

//end skills typing script

var menu = document.getElementById("menu");

function myFunction2() {
  if (window.pageYOffset >= 5) {
    document.getElementById('white-logo').style.display = 'none'
    document.getElementById('black-logo').style.display = 'block'
    menu.classList.add("scroll");
  } else {
    document.getElementById('white-logo').style.display = 'block'
    document.getElementById('black-logo').style.display = 'none'
    menu.classList.remove("scroll");
}
}

//contact form script

function redirectToEmail(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const message = document.getElementById('message').value;

  const subject = encodeURIComponent("Contact Form Submission");
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone Number: ${number}\nMessage: ${message}`);

  window.location.href = `mailto:alireza8708barati@gmail.com?subject=${subject}&body=${body}`;
}

//end contact form script