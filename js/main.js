const num= Math.floor(Math.random()*8);
console.log(num);
 
function GetCssSheet(num) {

  if (num === 0) {

    document.getElementsByTagName("title")[0].innerHTML = `Vishal - Personal Website`;
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
    const headlink = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="js/script.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>`;
    document.getElementById("css_sheet").insertAdjacentHTML("afterend", headlink);

    // const scrhead=`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`;
    // document.querySelector("footer").insertAdjacentHTML("afterend",scrhead);

    const bodycnt = ` <div class="scrollToTop-btn">
<i class="fas fa-angle-up"></i>
</div>

<header>
<a href="#" class="brand">Vishal</a>
<div class="menu-btn"></div>
<div class="navigation">
  <a href="#main">Home</a>
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#work">Work</a>
  <a href="#contact">Contact</a>
</div>
</header>

<section class="main" id="main">
<div class="content">
  <h2>Hello, I'm<br><span>Vishal Chichani</span></h2>
  <div class="animated-text">
    <h3>Web Developer</h3>
    <h3>Electronics ethusiast</h3>
    <h3>Aerophile</h3>
  </div>
  <a href="#work" class="btn">See My Work</a>
  <div class="media-icons">
    <a href="#"><i class="fab fa-facebook-f"></i></a>
    <a href="#"><i class="fab fa-instagram"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
  </div>
</div>
</section>

<section class="about" id="about">
<div class="title reveal">
  <h2 class="section-title">About Me</h2>
</div>
<div class="content">
  <div class="column col-left reveal">
    <div class="img-card">
      <img src="Images/harsh.jpg" alt="">
    </div>
  </div>
  <div class="column col-right reveal">
    <h2 class="content-title">Hey There! I'm Vishal Chichani</h2>
    <p class="paragraph-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  </div>
</div>
</section>

<section class="skills" id="skills">
<div class="title reveal">
  <h2 class="section-title">My Skills</h2>
</div>
<div class="content">
  <div class="column col-left reveal">
    <h2 class="content-title">My Skills and Experiences</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <a href="#" class="btn">See More</a>
  </div>
  <div class="column col-right reveal">
    <div class="bar">
      <div class="info">
        <span>HTML</span>
        <span>95%</span>
      </div>
      <div class="line html"></div>
    </div>
    <div class="bar">
      <div class="info">
        <span>CSS</span>
        <span>85%</span>
      </div>
      <div class="line css"></div>
    </div>
    <div class="bar">
      <div class="info">
        <span>Javascript</span>
        <span>80%</span>
      </div>
      <div class="line javascript"></div>
    </div>
    <div class="bar">
      <div class="info">
        <span>JQuery</span>
        <span>80%</span>
      </div>
      <div class="line jquery"></div>
    </div>
    <div class="bar">
      <div class="info">
        <span>PHP</span>
        <span>75%</span>
      </div>
      <div class="line php"></div>
    </div>
  </div>
</div>
</section>

<section class="work" id="work">
<div class="title reveal">
  <h2 class="section-title">My Work</h2>
</div>
<div class="content">
  <div class="card reveal">
    <div class="card-img">
      <img src="Images/portfolio1_.jpg" alt="">
    </div>
  </div>
  <div class="card reveal">
    <div class="card-img">
      <img src="Images/portfolio2_.jpg" alt="">
    </div>
  </div>
  <div class="card reveal">
    <div class="card-img">
      <img src="Images/portfolio3_.jpg" alt="">
    </div>
  </div>
  <div class="card reveal">
    <div class="card-img">
      <img src="Images/portfolio4_.jpg" alt="">
    </div>
  </div>
 
  
</div>
</section>

<section class="contact" id="contact">
<div class="title reveal">
  <h2 class="section-title">Contact Me</h2>
</div>
<div class="content">
  <div class="row">
    <div class="card reveal">
      <div class="contact-icon">
        <i class="fas fa-map-marker-alt"></i>
      </div>
      <div class="info">
        <h3>Address</h3>
        <span>Address, City, Country</span>
      </div>
    </div>
    <div class="card reveal">
      <div class="contact-icon">
        <i class="fas fa-phone"></i>
      </div>
      <div class="info">
        <h3>Phone</h3>
        <span>+00 0000 000 000</span>
      </div>
    </div>
    <div class="card reveal">
      <div class="contact-icon">
        <i class="fas fa-envelope"></i>
      </div>
      <div class="info">
        <h3>Email Address</h3>
        <span>contact@email.com</span>
      </div>
    </div>
    <div class="card reveal">
      <div class="contact-icon">
        <i class="fas fa-globe"></i>
      </div>
      <div class="info">
        <h3>Website</h3>
        <span>mywebsite.com</span>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="contact-form reveal">
      <h3>Send Message</h3>
      <div class="input-box">
        <input type="text" name="" value="" placeholder="Name">
      </div>
      <div class="input-box">
        <input type="text" name="" value="" placeholder="Email">
      </div>
      
      <div class="input-box">
        <input type="submit" class="send-btn" name="" value="Send"/>
      </div>
    </div>
  </div>
</div>
</section>

`;
    document.getElementById("home").insertAdjacentHTML("afterbegin", bodycnt);
    // document.querySelectorAll(".navbar")[1].remove();
    // document.querySelector(".whole").remove();
    // document.querySelector("#footer").remove();

    $(document).ready(function () {
      //javascript for navigation bar effects on scroll
      window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
      });

      //javascript for responsive navigation sidebar menu
      const menuBtn = document.querySelector(".menu-btn");
      const navigation = document.querySelector(".navigation");
      const navigationItems = document.querySelectorAll(".navigation a")

      menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        navigation.classList.toggle("active");
      });

      navigationItems.forEach((navigationItem) => {
        navigationItem.addEventListener("click", () => {
          menuBtn.classList.remove("active");
          navigation.classList.remove("active");
        });
      });

      //javascript for scroll to top button
      const scrollBtn = document.querySelector(".scrollToTop-btn");

      window.addEventListener("scroll", function () {
        scrollBtn.classList.toggle("active", window.scrollY > 500);
      });

      //javascript for scroll back to top on click scroll-to-top button
      scrollBtn.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });

      //javascript for reveal website elements on scroll
      window.addEventListener("scroll", reveal);

      function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var revealTop = reveals[i].getBoundingClientRect().top;
          var revealPoint = 50;

          if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
          }
        }
      }
    }
      // $(document).ready(function () {
      //   $(window).scroll(function () {
      //     // sticky navbar on scroll script
      //     else if (this.scrollY > 20) {
      //       $('.navbar').addClass("sticky");
      //     } else {
      //       $('.navbar').removeClass("sticky")
      //     }

      //     // scroll-up button show/hide script
      //     else if (this.scrollY > 500) {
      //       $('.scroll-up-btn').addClass("show");
      //     } else {
      //       $('.scroll-up-btn').removeClass("show");
      //     }
      //   });

      //   // slide-up script
      //   $('.scroll-up-btn').click(function () {
      //     $('html').animate({ scrollTop: 0 });
      //     // removing smooth scroll on slide-up button click
      //     $('html').css("scrollBehavior", "auto");
      //   });

      //   $('.navbar .menu li a').click(function () {
      //     // applying again smooth scroll on menu items click
      //     $('html').css("scrollBehavior", "smooth");
      //   });

      //   // toggle menu/navbar script
      //   $('.menu-btn').click(function () {
      //     $('.navbar .menu').toggleClass("active");
      //     $('.menu-btn i').toggleClass("active");
      //   });

      // typing text animation script
      //   var typed = new Typed(".typing", {
      //     strings: ["Web Developer", "Game Developer", "Hacker", "Designer"],
      //     typeSpeed: 100,
      //     backSpeed: 60,
      //     loop: true
      //   });

      //   var typed = new Typed(".typing-2", {
      //     strings: ["Web Developer", "Game Developer", "Hacker", "Designer"],
      //     typeSpeed: 100,
      //     backSpeed: 60,
      //     loop: true
      //   });

      // owl carousel script
      //   $('.carousel').owlCarousel({
      //     margin: 20,
      //     loop: true,
      //     autoplay: true,
      //     autoplayTimeOut: 2000,
      //     autoplayHoverPause: true,
      //     responsive: {
      //       0: {
      //         items: 1,
      //         nav: false
      //       },
      //       600: {
      //         items: 2,
      //         nav: false
      //       },
      //       1000: {
      //         items: 3,
      //         nav: false
      //       }
      //     }
      //   });
    );
  }
  else if (num === 1) {

    document.getElementsByTagName("title")[0].innerHTML = `Harsh - Personal Website`;
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
    const headlink = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="js/script.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>`;
    document.getElementById("css_sheet").insertAdjacentHTML("afterend", headlink);

    // const scrhead=`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`;
    // document.querySelector("footer").insertAdjacentHTML("afterend",scrhead);

    const bodycnt = ` <div class="scrollToTop-btn">
<i class="fas fa-angle-up"></i>
</div>

<header>
<a href="#" class="brand">Harsh</a>
<div class="menu-btn"></div>
<div class="navigation">
<a href="#main">Home</a>
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#work">Work</a>
<a href="#contact">Contact</a>
</div>
</header>

<section class="main" id="main">
<div class="content">
<h2>Hello, I'm<br><span>Harsh Bardhan</span></h2>
<div class="animated-text">
  <h3>Web Developer</h3>
  <h3>Electronics ethusiast</h3>
  <h3>Aerophile</h3>
</div>
<a href="#work" class="btn">See My Work</a>
<div class="media-icons">
  <a href="#"><i class="fab fa-facebook-f"></i></a>
  <a href="#"><i class="fab fa-instagram"></i></a>
  <a href="#"><i class="fab fa-twitter"></i></a>
</div>
</div>
</section>

<section class="about" id="about">
<div class="title reveal">
<h2 class="section-title">About Me</h2>
</div>
<div class="content">
<div class="column col-left reveal">
  <div class="img-card">
    <img src="Images/harsh.jpg" alt="">
  </div>
</div>
<div class="column col-right reveal">
  <h2 class="content-title">Hey There! I'm Harsh Bardhan</h2>
  <p class="paragraph-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

</div>
</div>
</section>

<section class="skills" id="skills">
<div class="title reveal">
<h2 class="section-title">My Skills</h2>
</div>
<div class="content">
<div class="column col-left reveal">
  <h2 class="content-title">My Skills and Experiences</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <a href="#" class="btn">See More</a>
</div>
<div class="column col-right reveal">
  <div class="bar">
    <div class="info">
      <span>HTML</span>
      <span>95%</span>
    </div>
    <div class="line html"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>CSS</span>
      <span>85%</span>
    </div>
    <div class="line css"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>Javascript</span>
      <span>80%</span>
    </div>
    <div class="line javascript"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>JQuery</span>
      <span>80%</span>
    </div>
    <div class="line jquery"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>PHP</span>
      <span>75%</span>
    </div>
    <div class="line php"></div>
  </div>
</div>
</div>
</section>

<section class="work" id="work">
<div class="title reveal">
<h2 class="section-title">My Work</h2>
</div>
<div class="content">
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio1.jpg" alt="">
  </div>
</div>
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio2.jpg" alt="">
  </div>
</div>
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio3.jpg" alt="">
  </div>
</div>
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio4.jpg" alt="">
  </div>
</div>


</div>
</section>

<section class="contact" id="contact">
<div class="title reveal">
<h2 class="section-title">Contact Me</h2>
</div>
<div class="content">
<div class="row">
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-map-marker-alt"></i>
    </div>
    <div class="info">
      <h3>Address</h3>
      <span>Address, City, Country</span>
    </div>
  </div>
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-phone"></i>
    </div>
    <div class="info">
      <h3>Phone</h3>
      <span>+00 0000 000 000</span>
    </div>
  </div>
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-envelope"></i>
    </div>
    <div class="info">
      <h3>Email Address</h3>
      <span>contact@email.com</span>
    </div>
  </div>
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-globe"></i>
    </div>
    <div class="info">
      <h3>Website</h3>
      <span>mywebsite.com</span>
    </div>
  </div>
</div>
<div class="row">
  <div class="contact-form reveal">
    <h3>Send Message</h3>
    <div class="input-box">
      <input type="text" name="" value="" placeholder="Name">
    </div>
    <div class="input-box">
      <input type="text" name="" value="" placeholder="Email">
    </div>
    
    <div class="input-box">
      <input type="submit" class="send-btn" name="" value="Send"/>
    </div>
  </div>
</div>
</div>
</section>

`;
    document.getElementById("home").insertAdjacentHTML("afterbegin", bodycnt);
    // document.querySelectorAll(".navbar")[1].remove();
    // document.querySelector(".whole").remove();
    // document.querySelector("#footer").remove();

    $(document).ready(function () {
      //javascript for navigation bar effects on scroll
      window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
      });

      //javascript for responsive navigation sidebar menu
      const menuBtn = document.querySelector(".menu-btn");
      const navigation = document.querySelector(".navigation");
      const navigationItems = document.querySelectorAll(".navigation a")

      menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        navigation.classList.toggle("active");
      });

      navigationItems.forEach((navigationItem) => {
        navigationItem.addEventListener("click", () => {
          menuBtn.classList.remove("active");
          navigation.classList.remove("active");
        });
      });

      //javascript for scroll to top button
      const scrollBtn = document.querySelector(".scrollToTop-btn");

      window.addEventListener("scroll", function () {
        scrollBtn.classList.toggle("active", window.scrollY > 500);
      });

      //javascript for scroll back to top on click scroll-to-top button
      scrollBtn.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });

      //javascript for reveal website elements on scroll
      window.addEventListener("scroll", reveal);

      function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var revealTop = reveals[i].getBoundingClientRect().top;
          var revealPoint = 50;

          if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
          }
        }
      }
    }
      // $(document).ready(function () {
      //   $(window).scroll(function () {
      //     // sticky navbar on scroll script
      //     else if (this.scrollY > 20) {
      //       $('.navbar').addClass("sticky");
      //     } else {
      //       $('.navbar').removeClass("sticky")
      //     }

      //     // scroll-up button show/hide script
      //     else if (this.scrollY > 500) {
      //       $('.scroll-up-btn').addClass("show");
      //     } else {
      //       $('.scroll-up-btn').removeClass("show");
      //     }
      //   });

      //   // slide-up script
      //   $('.scroll-up-btn').click(function () {
      //     $('html').animate({ scrollTop: 0 });
      //     // removing smooth scroll on slide-up button click
      //     $('html').css("scrollBehavior", "auto");
      //   });

      //   $('.navbar .menu li a').click(function () {
      //     // applying again smooth scroll on menu items click
      //     $('html').css("scrollBehavior", "smooth");
      //   });

      //   // toggle menu/navbar script
      //   $('.menu-btn').click(function () {
      //     $('.navbar .menu').toggleClass("active");
      //     $('.menu-btn i').toggleClass("active");
      //   });

      // typing text animation script
      //   var typed = new Typed(".typing", {
      //     strings: ["Web Developer", "Game Developer", "Hacker", "Designer"],
      //     typeSpeed: 100,
      //     backSpeed: 60,
      //     loop: true
      //   });

      //   var typed = new Typed(".typing-2", {
      //     strings: ["Web Developer", "Game Developer", "Hacker", "Designer"],
      //     typeSpeed: 100,
      //     backSpeed: 60,
      //     loop: true
      //   });

      // owl carousel script
      //   $('.carousel').owlCarousel({
      //     margin: 20,
      //     loop: true,
      //     autoplay: true,
      //     autoplayTimeOut: 2000,
      //     autoplayHoverPause: true,
      //     responsive: {
      //       0: {
      //         items: 1,
      //         nav: false
      //       },
      //       600: {
      //         items: 2,
      //         nav: false
      //       },
      //       1000: {
      //         items: 3,
      //         nav: false
      //       }
      //     }
      //   });
    );
  }
  else if (num === 2) {

    document.getElementsByTagName("title")[0].innerHTML = `Harsh - Personal Website`;
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
    const headlink = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="js/script.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>`;
    document.getElementById("css_sheet").insertAdjacentHTML("afterend", headlink);

    // const scrhead=`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`;
    // document.querySelector("footer").insertAdjacentHTML("afterend",scrhead);

    const bodycnt = ` <div class="scrollToTop-btn">
<i class="fas fa-angle-up"></i>
</div>

<header>
<a href="#" class="brand">Harsh</a>
<div class="menu-btn"></div>
<div class="navigation">
<a href="#main">Home</a>
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#work">Work</a>
<a href="#contact">Contact</a>
</div>
</header>

<section class="main" id="main">
<div class="content">
<h2>Hello, I'm<br><span>Harsh Bardhan</span></h2>
<div class="animated-text">
  <h3>Web Developer</h3>
  <h3>Electronics ethusiast</h3>
  <h3>Aerophile</h3>
</div>
<a href="#work" class="btn">See My Work</a>
<div class="media-icons">
  <a href="#"><i class="fab fa-facebook-f"></i></a>
  <a href="#"><i class="fab fa-instagram"></i></a>
  <a href="#"><i class="fab fa-twitter"></i></a>
</div>
</div>
</section>

<section class="about" id="about">
<div class="title reveal">
<h2 class="section-title">About Me</h2>
</div>
<div class="content">
<div class="column col-left reveal">
  <div class="img-card">
    <img src="Images/harsh.jpg" alt="">
  </div>
</div>
<div class="column col-right reveal">
  <h2 class="content-title">Hey There! I'm Harsh Bardhan</h2>
  <p class="paragraph-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

</div>
</div>
</section>

<section class="skills" id="skills">
<div class="title reveal">
<h2 class="section-title">My Skills</h2>
</div>
<div class="content">
<div class="column col-left reveal">
  <h2 class="content-title">My Skills and Experiences</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <a href="#" class="btn">See More</a>
</div>
<div class="column col-right reveal">
  <div class="bar">
    <div class="info">
      <span>HTML</span>
      <span>95%</span>
    </div>
    <div class="line html"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>CSS</span>
      <span>85%</span>
    </div>
    <div class="line css"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>Javascript</span>
      <span>80%</span>
    </div>
    <div class="line javascript"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>JQuery</span>
      <span>80%</span>
    </div>
    <div class="line jquery"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>PHP</span>
      <span>75%</span>
    </div>
    <div class="line php"></div>
  </div>
</div>
</div>
</section>

<section class="work" id="work">
<div class="title reveal">
<h2 class="section-title">My Work</h2>
</div>
<div class="content">
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio1.jpg" alt="">
  </div>
</div>
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio2.jpg" alt="">
  </div>
</div>
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio3.jpg" alt="">
  </div>
</div>
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio4.jpg" alt="">
  </div>
</div>


</div>
</section>

<section class="contact" id="contact">
<div class="title reveal">
<h2 class="section-title">Contact Me</h2>
</div>
<div class="content">
<div class="row">
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-map-marker-alt"></i>
    </div>
    <div class="info">
      <h3>Address</h3>
      <span>Address, City, Country</span>
    </div>
  </div>
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-phone"></i>
    </div>
    <div class="info">
      <h3>Phone</h3>
      <span>+00 0000 000 000</span>
    </div>
  </div>
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-envelope"></i>
    </div>
    <div class="info">
      <h3>Email Address</h3>
      <span>contact@email.com</span>
    </div>
  </div>
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-globe"></i>
    </div>
    <div class="info">
      <h3>Website</h3>
      <span>mywebsite.com</span>
    </div>
  </div>
</div>
<div class="row">
  <div class="contact-form reveal">
    <h3>Send Message</h3>
    <div class="input-box">
      <input type="text" name="" value="" placeholder="Name">
    </div>
    <div class="input-box">
      <input type="text" name="" value="" placeholder="Email">
    </div>
    
    <div class="input-box">
      <input type="submit" class="send-btn" name="" value="Send"/>
    </div>
  </div>
</div>
</div>
</section>

`;
    document.getElementById("home").insertAdjacentHTML("afterbegin", bodycnt);
    // document.querySelectorAll(".navbar")[1].remove();
    // document.querySelector(".whole").remove();
    // document.querySelector("#footer").remove();

    $(document).ready(function () {
      //javascript for navigation bar effects on scroll
      window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
      });

      //javascript for responsive navigation sidebar menu
      const menuBtn = document.querySelector(".menu-btn");
      const navigation = document.querySelector(".navigation");
      const navigationItems = document.querySelectorAll(".navigation a")

      menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        navigation.classList.toggle("active");
      });

      navigationItems.forEach((navigationItem) => {
        navigationItem.addEventListener("click", () => {
          menuBtn.classList.remove("active");
          navigation.classList.remove("active");
        });
      });

      //javascript for scroll to top button
      const scrollBtn = document.querySelector(".scrollToTop-btn");

      window.addEventListener("scroll", function () {
        scrollBtn.classList.toggle("active", window.scrollY > 500);
      });

      //javascript for scroll back to top on click scroll-to-top button
      scrollBtn.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });

      //javascript for reveal website elements on scroll
      window.addEventListener("scroll", reveal);

      function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var revealTop = reveals[i].getBoundingClientRect().top;
          var revealPoint = 50;

          if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
          }
        }
      }
    }
      // $(document).ready(function () {
      //   $(window).scroll(function () {
      //     // sticky navbar on scroll script
      //     else if (this.scrollY > 20) {
      //       $('.navbar').addClass("sticky");
      //     } else {
      //       $('.navbar').removeClass("sticky")
      //     }

      //     // scroll-up button show/hide script
      //     else if (this.scrollY > 500) {
      //       $('.scroll-up-btn').addClass("show");
      //     } else {
      //       $('.scroll-up-btn').removeClass("show");
      //     }
      //   });

      //   // slide-up script
      //   $('.scroll-up-btn').click(function () {
      //     $('html').animate({ scrollTop: 0 });
      //     // removing smooth scroll on slide-up button click
      //     $('html').css("scrollBehavior", "auto");
      //   });

      //   $('.navbar .menu li a').click(function () {
      //     // applying again smooth scroll on menu items click
      //     $('html').css("scrollBehavior", "smooth");
      //   });

      //   // toggle menu/navbar script
      //   $('.menu-btn').click(function () {
      //     $('.navbar .menu').toggleClass("active");
      //     $('.menu-btn i').toggleClass("active");
      //   });

      // typing text animation script
      //   var typed = new Typed(".typing", {
      //     strings: ["Web Developer", "Game Developer", "Hacker", "Designer"],
      //     typeSpeed: 100,
      //     backSpeed: 60,
      //     loop: true
      //   });

      //   var typed = new Typed(".typing-2", {
      //     strings: ["Web Developer", "Game Developer", "Hacker", "Designer"],
      //     typeSpeed: 100,
      //     backSpeed: 60,
      //     loop: true
      //   });

      // owl carousel script
      //   $('.carousel').owlCarousel({
      //     margin: 20,
      //     loop: true,
      //     autoplay: true,
      //     autoplayTimeOut: 2000,
      //     autoplayHoverPause: true,
      //     responsive: {
      //       0: {
      //         items: 1,
      //         nav: false
      //       },
      //       600: {
      //         items: 2,
      //         nav: false
      //       },
      //       1000: {
      //         items: 3,
      //         nav: false
      //       }
      //     }
      //   });
    );
  }
  else if (num === 3) {

    document.getElementsByTagName("title")[0].innerHTML = `Harsh - Personal Website`;
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
    const headlink = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="js/script.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>`;
    document.getElementById("css_sheet").insertAdjacentHTML("afterend", headlink);

    // const scrhead=`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`;
    // document.querySelector("footer").insertAdjacentHTML("afterend",scrhead);

    const bodycnt = ` <div class="scrollToTop-btn">
<i class="fas fa-angle-up"></i>
</div>

<header>
<a href="#" class="brand">Harsh</a>
<div class="menu-btn"></div>
<div class="navigation">
<a href="#main">Home</a>
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#work">Work</a>
<a href="#contact">Contact</a>
</div>
</header>

<section class="main" id="main">
<div class="content">
<h2>Hello, I'm<br><span>Harsh Bardhan</span></h2>
<div class="animated-text">
  <h3>Web Developer</h3>
  <h3>Electronics ethusiast</h3>
  <h3>Aerophile</h3>
</div>
<a href="#work" class="btn">See My Work</a>
<div class="media-icons">
  <a href="#"><i class="fab fa-facebook-f"></i></a>
  <a href="#"><i class="fab fa-instagram"></i></a>
  <a href="#"><i class="fab fa-twitter"></i></a>
</div>
</div>
</section>

<section class="about" id="about">
<div class="title reveal">
<h2 class="section-title">About Me</h2>
</div>
<div class="content">
<div class="column col-left reveal">
  <div class="img-card">
    <img src="Images/harsh.jpg" alt="">
  </div>
</div>
<div class="column col-right reveal">
  <h2 class="content-title">Hey There! I'm Harsh Bardhan</h2>
  <p class="paragraph-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

</div>
</div>
</section>

<section class="skills" id="skills">
<div class="title reveal">
<h2 class="section-title">My Skills</h2>
</div>
<div class="content">
<div class="column col-left reveal">
  <h2 class="content-title">My Skills and Experiences</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <a href="#" class="btn">See More</a>
</div>
<div class="column col-right reveal">
  <div class="bar">
    <div class="info">
      <span>HTML</span>
      <span>95%</span>
    </div>
    <div class="line html"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>CSS</span>
      <span>85%</span>
    </div>
    <div class="line css"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>Javascript</span>
      <span>80%</span>
    </div>
    <div class="line javascript"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>JQuery</span>
      <span>80%</span>
    </div>
    <div class="line jquery"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>PHP</span>
      <span>75%</span>
    </div>
    <div class="line php"></div>
  </div>
</div>
</div>
</section>

<section class="work" id="work">
<div class="title reveal">
<h2 class="section-title">My Work</h2>
</div>
<div class="content">
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio1.jpg" alt="">
  </div>
</div>
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio2.jpg" alt="">
  </div>
</div>
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio3.jpg" alt="">
  </div>
</div>
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio4.jpg" alt="">
  </div>
</div>


</div>
</section>

<section class="contact" id="contact">
<div class="title reveal">
<h2 class="section-title">Contact Me</h2>
</div>
<div class="content">
<div class="row">
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-map-marker-alt"></i>
    </div>
    <div class="info">
      <h3>Address</h3>
      <span>Address, City, Country</span>
    </div>
  </div>
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-phone"></i>
    </div>
    <div class="info">
      <h3>Phone</h3>
      <span>+00 0000 000 000</span>
    </div>
  </div>
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-envelope"></i>
    </div>
    <div class="info">
      <h3>Email Address</h3>
      <span>contact@email.com</span>
    </div>
  </div>
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-globe"></i>
    </div>
    <div class="info">
      <h3>Website</h3>
      <span>mywebsite.com</span>
    </div>
  </div>
</div>
<div class="row">
  <div class="contact-form reveal">
    <h3>Send Message</h3>
    <div class="input-box">
      <input type="text" name="" value="" placeholder="Name">
    </div>
    <div class="input-box">
      <input type="text" name="" value="" placeholder="Email">
    </div>
    
    <div class="input-box">
      <input type="submit" class="send-btn" name="" value="Send"/>
    </div>
  </div>
</div>
</div>
</section>

`;
    document.getElementById("home").insertAdjacentHTML("afterbegin", bodycnt);
    // document.querySelectorAll(".navbar")[1].remove();
    // document.querySelector(".whole").remove();
    // document.querySelector("#footer").remove();

    $(document).ready(function () {
      //javascript for navigation bar effects on scroll
      window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
      });

      //javascript for responsive navigation sidebar menu
      const menuBtn = document.querySelector(".menu-btn");
      const navigation = document.querySelector(".navigation");
      const navigationItems = document.querySelectorAll(".navigation a")

      menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        navigation.classList.toggle("active");
      });

      navigationItems.forEach((navigationItem) => {
        navigationItem.addEventListener("click", () => {
          menuBtn.classList.remove("active");
          navigation.classList.remove("active");
        });
      });

      //javascript for scroll to top button
      const scrollBtn = document.querySelector(".scrollToTop-btn");

      window.addEventListener("scroll", function () {
        scrollBtn.classList.toggle("active", window.scrollY > 500);
      });

      //javascript for scroll back to top on click scroll-to-top button
      scrollBtn.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });

      //javascript for reveal website elements on scroll
      window.addEventListener("scroll", reveal);

      function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var revealTop = reveals[i].getBoundingClientRect().top;
          var revealPoint = 50;

          if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
          }
        }
      }
    }
      // $(document).ready(function () {
      //   $(window).scroll(function () {
      //     // sticky navbar on scroll script
      //     else if (this.scrollY > 20) {
      //       $('.navbar').addClass("sticky");
      //     } else {
      //       $('.navbar').removeClass("sticky")
      //     }

      //     // scroll-up button show/hide script
      //     else if (this.scrollY > 500) {
      //       $('.scroll-up-btn').addClass("show");
      //     } else {
      //       $('.scroll-up-btn').removeClass("show");
      //     }
      //   });

      //   // slide-up script
      //   $('.scroll-up-btn').click(function () {
      //     $('html').animate({ scrollTop: 0 });
      //     // removing smooth scroll on slide-up button click
      //     $('html').css("scrollBehavior", "auto");
      //   });

      //   $('.navbar .menu li a').click(function () {
      //     // applying again smooth scroll on menu items click
      //     $('html').css("scrollBehavior", "smooth");
      //   });

      //   // toggle menu/navbar script
      //   $('.menu-btn').click(function () {
      //     $('.navbar .menu').toggleClass("active");
      //     $('.menu-btn i').toggleClass("active");
      //   });

      // typing text animation script
      //   var typed = new Typed(".typing", {
      //     strings: ["Web Developer", "Game Developer", "Hacker", "Designer"],
      //     typeSpeed: 100,
      //     backSpeed: 60,
      //     loop: true
      //   });

      //   var typed = new Typed(".typing-2", {
      //     strings: ["Web Developer", "Game Developer", "Hacker", "Designer"],
      //     typeSpeed: 100,
      //     backSpeed: 60,
      //     loop: true
      //   });

      // owl carousel script
      //   $('.carousel').owlCarousel({
      //     margin: 20,
      //     loop: true,
      //     autoplay: true,
      //     autoplayTimeOut: 2000,
      //     autoplayHoverPause: true,
      //     responsive: {
      //       0: {
      //         items: 1,
      //         nav: false
      //       },
      //       600: {
      //         items: 2,
      //         nav: false
      //       },
      //       1000: {
      //         items: 3,
      //         nav: false
      //       }
      //     }
      //   });
    );
  }
  else if (num === 4) {

    document.getElementsByTagName("title")[0].innerHTML = `Harsh - Personal Website`;
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
    const headlink = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="js/script.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>`;
    document.getElementById("css_sheet").insertAdjacentHTML("afterend", headlink);

    // const scrhead=`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`;
    // document.querySelector("footer").insertAdjacentHTML("afterend",scrhead);

    const bodycnt = ` <div class="scrollToTop-btn">
<i class="fas fa-angle-up"></i>
</div>

<header>
<a href="#" class="brand">Harsh</a>
<div class="menu-btn"></div>
<div class="navigation">
<a href="#main">Home</a>
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#work">Work</a>
<a href="#contact">Contact</a>
</div>
</header>

<section class="main" id="main">
<div class="content">
<h2>Hello, I'm<br><span>Harsh Bardhan</span></h2>
<div class="animated-text">
  <h3>Web Developer</h3>
  <h3>Electronics ethusiast</h3>
  <h3>Aerophile</h3>
</div>
<a href="#work" class="btn">See My Work</a>
<div class="media-icons">
  <a href="#"><i class="fab fa-facebook-f"></i></a>
  <a href="#"><i class="fab fa-instagram"></i></a>
  <a href="#"><i class="fab fa-twitter"></i></a>
</div>
</div>
</section>

<section class="about" id="about">
<div class="title reveal">
<h2 class="section-title">About Me</h2>
</div>
<div class="content">
<div class="column col-left reveal">
  <div class="img-card">
    <img src="Images/harsh.jpg" alt="">
  </div>
</div>
<div class="column col-right reveal">
  <h2 class="content-title">Hey There! I'm Harsh Bardhan</h2>
  <p class="paragraph-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

</div>
</div>
</section>

<section class="skills" id="skills">
<div class="title reveal">
<h2 class="section-title">My Skills</h2>
</div>
<div class="content">
<div class="column col-left reveal">
  <h2 class="content-title">My Skills and Experiences</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <a href="#" class="btn">See More</a>
</div>
<div class="column col-right reveal">
  <div class="bar">
    <div class="info">
      <span>HTML</span>
      <span>95%</span>
    </div>
    <div class="line html"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>CSS</span>
      <span>85%</span>
    </div>
    <div class="line css"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>Javascript</span>
      <span>80%</span>
    </div>
    <div class="line javascript"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>JQuery</span>
      <span>80%</span>
    </div>
    <div class="line jquery"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>PHP</span>
      <span>75%</span>
    </div>
    <div class="line php"></div>
  </div>
</div>
</div>
</section>

<section class="work" id="work">
<div class="title reveal">
<h2 class="section-title">My Work</h2>
</div>
<div class="content">
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio1.jpg" alt="">
  </div>
</div>
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio2.jpg" alt="">
  </div>
</div>
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio3.jpg" alt="">
  </div>
</div>
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio4.jpg" alt="">
  </div>
</div>


</div>
</section>

<section class="contact" id="contact">
<div class="title reveal">
<h2 class="section-title">Contact Me</h2>
</div>
<div class="content">
<div class="row">
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-map-marker-alt"></i>
    </div>
    <div class="info">
      <h3>Address</h3>
      <span>Address, City, Country</span>
    </div>
  </div>
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-phone"></i>
    </div>
    <div class="info">
      <h3>Phone</h3>
      <span>+00 0000 000 000</span>
    </div>
  </div>
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-envelope"></i>
    </div>
    <div class="info">
      <h3>Email Address</h3>
      <span>contact@email.com</span>
    </div>
  </div>
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-globe"></i>
    </div>
    <div class="info">
      <h3>Website</h3>
      <span>mywebsite.com</span>
    </div>
  </div>
</div>
<div class="row">
  <div class="contact-form reveal">
    <h3>Send Message</h3>
    <div class="input-box">
      <input type="text" name="" value="" placeholder="Name">
    </div>
    <div class="input-box">
      <input type="text" name="" value="" placeholder="Email">
    </div>
    
    <div class="input-box">
      <input type="submit" class="send-btn" name="" value="Send"/>
    </div>
  </div>
</div>
</div>
</section>

`;
    document.getElementById("home").insertAdjacentHTML("afterbegin", bodycnt);
    // document.querySelectorAll(".navbar")[1].remove();
    // document.querySelector(".whole").remove();
    // document.querySelector("#footer").remove();

    $(document).ready(function () {
      //javascript for navigation bar effects on scroll
      window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
      });

      //javascript for responsive navigation sidebar menu
      const menuBtn = document.querySelector(".menu-btn");
      const navigation = document.querySelector(".navigation");
      const navigationItems = document.querySelectorAll(".navigation a")

      menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        navigation.classList.toggle("active");
      });

      navigationItems.forEach((navigationItem) => {
        navigationItem.addEventListener("click", () => {
          menuBtn.classList.remove("active");
          navigation.classList.remove("active");
        });
      });

      //javascript for scroll to top button
      const scrollBtn = document.querySelector(".scrollToTop-btn");

      window.addEventListener("scroll", function () {
        scrollBtn.classList.toggle("active", window.scrollY > 500);
      });

      //javascript for scroll back to top on click scroll-to-top button
      scrollBtn.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });

      //javascript for reveal website elements on scroll
      window.addEventListener("scroll", reveal);

      function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var revealTop = reveals[i].getBoundingClientRect().top;
          var revealPoint = 50;

          if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
          }
        }
      }
    }
      // $(document).ready(function () {
      //   $(window).scroll(function () {
      //     // sticky navbar on scroll script
      //     else if (this.scrollY > 20) {
      //       $('.navbar').addClass("sticky");
      //     } else {
      //       $('.navbar').removeClass("sticky")
      //     }

      //     // scroll-up button show/hide script
      //     else if (this.scrollY > 500) {
      //       $('.scroll-up-btn').addClass("show");
      //     } else {
      //       $('.scroll-up-btn').removeClass("show");
      //     }
      //   });

      //   // slide-up script
      //   $('.scroll-up-btn').click(function () {
      //     $('html').animate({ scrollTop: 0 });
      //     // removing smooth scroll on slide-up button click
      //     $('html').css("scrollBehavior", "auto");
      //   });

      //   $('.navbar .menu li a').click(function () {
      //     // applying again smooth scroll on menu items click
      //     $('html').css("scrollBehavior", "smooth");
      //   });

      //   // toggle menu/navbar script
      //   $('.menu-btn').click(function () {
      //     $('.navbar .menu').toggleClass("active");
      //     $('.menu-btn i').toggleClass("active");
      //   });

      // typing text animation script
      //   var typed = new Typed(".typing", {
      //     strings: ["Web Developer", "Game Developer", "Hacker", "Designer"],
      //     typeSpeed: 100,
      //     backSpeed: 60,
      //     loop: true
      //   });

      //   var typed = new Typed(".typing-2", {
      //     strings: ["Web Developer", "Game Developer", "Hacker", "Designer"],
      //     typeSpeed: 100,
      //     backSpeed: 60,
      //     loop: true
      //   });

      // owl carousel script
      //   $('.carousel').owlCarousel({
      //     margin: 20,
      //     loop: true,
      //     autoplay: true,
      //     autoplayTimeOut: 2000,
      //     autoplayHoverPause: true,
      //     responsive: {
      //       0: {
      //         items: 1,
      //         nav: false
      //       },
      //       600: {
      //         items: 2,
      //         nav: false
      //       },
      //       1000: {
      //         items: 3,
      //         nav: false
      //       }
      //     }
      //   });
    );
  }
  else if (num === 5) {

    document.getElementsByTagName("title")[0].innerHTML = `Harsh - Personal Website`;
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
    const headlink = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="js/script.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>`;
    document.getElementById("css_sheet").insertAdjacentHTML("afterend", headlink);

    // const scrhead=`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`;
    // document.querySelector("footer").insertAdjacentHTML("afterend",scrhead);

    const bodycnt = ` <div class="scrollToTop-btn">
<i class="fas fa-angle-up"></i>
</div>

<header>
<a href="#" class="brand">Harsh</a>
<div class="menu-btn"></div>
<div class="navigation">
<a href="#main">Home</a>
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#work">Work</a>
<a href="#contact">Contact</a>
</div>
</header>

<section class="main" id="main">
<div class="content">
<h2>Hello, I'm<br><span>Harsh Bardhan</span></h2>
<div class="animated-text">
  <h3>Web Developer</h3>
  <h3>Electronics ethusiast</h3>
  <h3>Aerophile</h3>
</div>
<a href="#work" class="btn">See My Work</a>
<div class="media-icons">
  <a href="#"><i class="fab fa-facebook-f"></i></a>
  <a href="#"><i class="fab fa-instagram"></i></a>
  <a href="#"><i class="fab fa-twitter"></i></a>
</div>
</div>
</section>

<section class="about" id="about">
<div class="title reveal">
<h2 class="section-title">About Me</h2>
</div>
<div class="content">
<div class="column col-left reveal">
  <div class="img-card">
    <img src="Images/harsh.jpg" alt="">
  </div>
</div>
<div class="column col-right reveal">
  <h2 class="content-title">Hey There! I'm Harsh Bardhan</h2>
  <p class="paragraph-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

</div>
</div>
</section>

<section class="skills" id="skills">
<div class="title reveal">
<h2 class="section-title">My Skills</h2>
</div>
<div class="content">
<div class="column col-left reveal">
  <h2 class="content-title">My Skills and Experiences</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <a href="#" class="btn">See More</a>
</div>
<div class="column col-right reveal">
  <div class="bar">
    <div class="info">
      <span>HTML</span>
      <span>95%</span>
    </div>
    <div class="line html"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>CSS</span>
      <span>85%</span>
    </div>
    <div class="line css"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>Javascript</span>
      <span>80%</span>
    </div>
    <div class="line javascript"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>JQuery</span>
      <span>80%</span>
    </div>
    <div class="line jquery"></div>
  </div>
  <div class="bar">
    <div class="info">
      <span>PHP</span>
      <span>75%</span>
    </div>
    <div class="line php"></div>
  </div>
</div>
</div>
</section>

<section class="work" id="work">
<div class="title reveal">
<h2 class="section-title">My Work</h2>
</div>
<div class="content">
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio1.jpg" alt="">
  </div>
</div>
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio2.jpg" alt="">
  </div>
</div>
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio3.jpg" alt="">
  </div>
</div>
<div class="card reveal">
  <div class="card-img">
    <img src="Images/portfolio4.jpg" alt="">
  </div>
</div>


</div>
</section>

<section class="contact" id="contact">
<div class="title reveal">
<h2 class="section-title">Contact Me</h2>
</div>
<div class="content">
<div class="row">
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-map-marker-alt"></i>
    </div>
    <div class="info">
      <h3>Address</h3>
      <span>Address, City, Country</span>
    </div>
  </div>
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-phone"></i>
    </div>
    <div class="info">
      <h3>Phone</h3>
      <span>+00 0000 000 000</span>
    </div>
  </div>
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-envelope"></i>
    </div>
    <div class="info">
      <h3>Email Address</h3>
      <span>contact@email.com</span>
    </div>
  </div>
  <div class="card reveal">
    <div class="contact-icon">
      <i class="fas fa-globe"></i>
    </div>
    <div class="info">
      <h3>Website</h3>
      <span>mywebsite.com</span>
    </div>
  </div>
</div>
<div class="row">
  <div class="contact-form reveal">
    <h3>Send Message</h3>
    <div class="input-box">
      <input type="text" name="" value="" placeholder="Name">
    </div>
    <div class="input-box">
      <input type="text" name="" value="" placeholder="Email">
    </div>
    
    <div class="input-box">
      <input type="submit" class="send-btn" name="" value="Send"/>
    </div>
  </div>
</div>
</div>
</section>

`;
    document.getElementById("home").insertAdjacentHTML("afterbegin", bodycnt);
    // document.querySelectorAll(".navbar")[1].remove();
    // document.querySelector(".whole").remove();
    // document.querySelector("#footer").remove();

    $(document).ready(function () {
      //javascript for navigation bar effects on scroll
      window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
      });

      //javascript for responsive navigation sidebar menu
      const menuBtn = document.querySelector(".menu-btn");
      const navigation = document.querySelector(".navigation");
      const navigationItems = document.querySelectorAll(".navigation a")

      menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        navigation.classList.toggle("active");
      });

      navigationItems.forEach((navigationItem) => {
        navigationItem.addEventListener("click", () => {
          menuBtn.classList.remove("active");
          navigation.classList.remove("active");
        });
      });

      //javascript for scroll to top button
      const scrollBtn = document.querySelector(".scrollToTop-btn");

      window.addEventListener("scroll", function () {
        scrollBtn.classList.toggle("active", window.scrollY > 500);
      });

      //javascript for scroll back to top on click scroll-to-top button
      scrollBtn.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });

      //javascript for reveal website elements on scroll
      window.addEventListener("scroll", reveal);

      function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var revealTop = reveals[i].getBoundingClientRect().top;
          var revealPoint = 50;

          if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
          }
        }
      }
    }
      // $(document).ready(function () {
      //   $(window).scroll(function () {
      //     // sticky navbar on scroll script
      //     else if (this.scrollY > 20) {
      //       $('.navbar').addClass("sticky");
      //     } else {
      //       $('.navbar').removeClass("sticky")
      //     }

      //     // scroll-up button show/hide script
      //     else if (this.scrollY > 500) {
      //       $('.scroll-up-btn').addClass("show");
      //     } else {
      //       $('.scroll-up-btn').removeClass("show");
      //     }
      //   });

      //   // slide-up script
      //   $('.scroll-up-btn').click(function () {
      //     $('html').animate({ scrollTop: 0 });
      //     // removing smooth scroll on slide-up button click
      //     $('html').css("scrollBehavior", "auto");
      //   });

      //   $('.navbar .menu li a').click(function () {
      //     // applying again smooth scroll on menu items click
      //     $('html').css("scrollBehavior", "smooth");
      //   });

      //   // toggle menu/navbar script
      //   $('.menu-btn').click(function () {
      //     $('.navbar .menu').toggleClass("active");
      //     $('.menu-btn i').toggleClass("active");
      //   });

      // typing text animation script
      //   var typed = new Typed(".typing", {
      //     strings: ["Web Developer", "Game Developer", "Hacker", "Designer"],
      //     typeSpeed: 100,
      //     backSpeed: 60,
      //     loop: true
      //   });

      //   var typed = new Typed(".typing-2", {
      //     strings: ["Web Developer", "Game Developer", "Hacker", "Designer"],
      //     typeSpeed: 100,
      //     backSpeed: 60,
      //     loop: true
      //   });

      // owl carousel script
      //   $('.carousel').owlCarousel({
      //     margin: 20,
      //     loop: true,
      //     autoplay: true,
      //     autoplayTimeOut: 2000,
      //     autoplayHoverPause: true,
      //     responsive: {
      //       0: {
      //         items: 1,
      //         nav: false
      //       },
      //       600: {
      //         items: 2,
      //         nav: false
      //       },
      //       1000: {
      //         items: 3,
      //         nav: false
      //       }
      //     }
      //   });
    );
  }
  else if (num === 6) {

    document.getElementsByTagName("title")[0].innerHTML = `pragya - Personal Website`;
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
    const headlink = `<link href="https://fonts.googleapis.com/css2?family=Courgette&family=Dancing+Script:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">`;
    document.getElementById("css_sheet").insertAdjacentHTML("afterend", headlink);

        const bodycnt = ` <!-- main start  -->
<div class="main">
   <!-- header section starts...  -->
   <header class="header">
       <div class="container">
           <div class="row flex-end">
               <button type="button" class="nav-toggler">
                   <span></span>
               </button>
               <nav class="nav">
                   <div class="nav-inner">
                       <ul>
                           <li>
                               <a href="#house" class="nav-item link-item">Home</a>
                           </li>
                           <li>
                              <a href="#about" class="nav-item link-item">Skills</a>
                          </li>
                          <li>
                              <a href="#portfolio" class="nav-item link-item">Projects</a>
                          </li>
                          <li>
                              <a href="#portfolio" class="nav-item link-item">Past-Rectruiters</a>
                          </li> <li>
                              <a href="#contact" class="nav-item link-item">Contact</a>
                          </li>
                       </ul>
                   </div>
               </nav>
           </div>
       </div>
   </header>

   <!-- hesder secionn ends  -->





  <section class="home-section align-items-center active" id="house">
      <div class="container">
          <div class="row align-items-center">
              <div class="home-text">
                  <p>
Hello ,I am
                  </p>
                  <h1>
                      Pragya Singh

                  </h1>
                  <h2>
                      frontend web developer

                  </h2>
                  <a href="#" class="btn">Hire me</a>
                  <a href="#about" class="btn link-item">More about me</a>

              </div>
              <div class="home-img">
                  <div class="img-box">
                      <img src="Images/faceimage.jpg">
                  </div>

              </div>
          </div>
      </div>
  </section>

  <!-- beginning of about section  -->
  <section class="about-section sec-padding" id="about">
      <div class="container">
          <div class="row">
              <div class="section-title">
                  <h2> It's about me</h2>
              </div>
          </div>
          <div class="row">
              <div class="about-img">
                  <div class="img-box">
                  <img src="Images/faceimage.jpg"></div>
                 
              </div>
              <div class="about-text">
                  <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, accusantium dolore praesentium, consequuntur repudiandae, officia dicta obcaecati velit non tempora unde quo atque maxime vel. Hic nemo veritatis harum iste. Quam vero culpa maxime qui officia accusantium officiis asperiores ea, sed dicta architecto voluptatibus minima temporibus animi provident placeat fugiat.
                  </p>
                  <h3>Skills</h3>
                  <div class="skills">
                      <div class="skill-item">HTML</div>
                      <div class="skill-item">CSS</div>
                      <div class="skill-item">JAVASCRIPT</div>
                      <div class="skill-item">PHOTOSHOP</div>
                      <div class="skill-item">JAVA</div>
                      <div class="skill-item">C++</div>
                      <div class="skill-item">PHOTOGRAPHY</div>
                      <div class="skill-item">POETRY</div>
                      <div class="skill-item">C</div>
                      <div class="skill-item">PHP</div>
                  </div>


                  <div class="about-tabs">
                      <button type="button" class="tab-item active" data-target="#education">education</button>
                      <button type="button" class="tab-item" data-target="#experience">experience</button>
                  </div>
                   <!-- education   -->
                    <div class="tab-content active" id="education">
                        <div class="timeline">
                            <div class="timeline-item">
                                <span class="date">2020 - present</span>
                                <h4>
                                    bachlor of technology <span>- IIT Indore</span>
                                </h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla voluptatum doloribus culpa!</p>
                            </div>
                            <div class="timeline-item">
                              <span class="date">2017 - 2020</span>
                              <h4>
                                  Secondary & Higher Secondary<span>- LBPS</span>
                              </h4>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla voluptatum doloribus culpa!</p>
                          </div>
                        </div>

                    </div>
                    <!-- Experience  -->
                    <div class="tab-content" id="experience">
                        <div class="timeline">
                            <div class="timeline-item">
                                
                              <span class="date">2021-present

                              </span>
                              <h4>frontend development</h4>
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur tempora adipisci ducimus nesciunt aliquam soluta!.</p>
                          </div>
                          <div class="timeline-item">
                                
                              <span class="date">2019

                              </span>
                              <h4>Photography</h4>
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur tempora adipisci ducimus nesciunt aliquam soluta!.</p>
                          </div>
                        </div>
                    </div>
<a href="#contact" class="btn">Contact me</a>
<a href="#" class="btn link-item">Download CV</a>
                    

              </div>
          </div>
      </div>
  </section>
  <!-- portfolio section  -->
  <section class="portfolio-section sec-padding" id="portfolio">
      <div class="container">
      <div class="row">
          <div class="section-title">
              <h2>Recent Work</h2>
          </div>
      </div>
      <div class="row">
          <!-- portfolio items  -->
          <div class="portfolio-item">
              <div class="portfolio-item-thumbnail">
                  <img src="Images/portfolio1.jpg">
              </div>
              <h3 class="portfolio-item-title">Lorem, ipsum dolor.</h3>
              <button type="button" class="btn view-project-btn">view project</button>
              <div class="portfolio-item-details">
                  <div class="dscription">
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto nam repudiandae quidem repellat, enim, ut hic quaerat ratione quasi, tempora iure in excepturi voluptatem quae? Ad, nihil? Temporibus fugiat ea et dicta. Veniam eligendi distinctio velit placeat vero provident!
                      </p>
                  </div>
                  <div class="general-info">
                      <ul>
                          <li>Created- <span>Lorem, ipsum.</span></li>
                          <li>technologies used - <span> HTML ,CSS JS</span></li>
                          <li>Role- <span>Frontend</span></li>
                          <li>View On - <span><a href="#" target="_blank">www.abc.com</a></span></li>

                      </ul>
                  </div>
              </div>
          </div>
          <div class="portfolio-item">
              <div class="portfolio-item-thumbnail">
                  <img src="Images/portfolio2.jpg">
              </div>
              <h3 class="portfolio-item-title">Lorem, ipsum dolor.</h3>
              <button type="button" class="btn view-project-btn">view project</button>
              <div class="portfolio-item-details">
                  <div class="dscription">
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto nam repudiandae quidem repellat, enim, ut hic quaerat ratione quasi, tempora iure in excepturi voluptatem quae? Ad, nihil? Temporibus fugiat ea et dicta. Veniam eligendi distinctio velit placeat vero provident!
                      </p>
                  </div>
                  <div class="general-info">
                      <ul>
                          <li>Created- <span>Lorem, ipsum.</span></li>
                          <li>technologies used - <span> HTML ,CSS JS</span></li>
                          <li>Role- <span>Frontend</span></li>
                          <li>View On - <span><a href="#" target="_blank">www.abc.com</a></span></li>

                      </ul>
                  </div>
              </div>
          </div>
          <div class="portfolio-item">
              <div class="portfolio-item-thumbnail">
                  <img src="Images/portfolio3.jpg">
              </div>
              <h3 class="portfolio-item-title">Lorem, ipsum dolor.</h3>
              <button type="button" class="btn view-project-btn">view project</button>
              <div class="portfolio-item-details">
                  <div class="dscription">
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto nam repudiandae quidem repellat, enim, ut hic quaerat ratione quasi, tempora iure in excepturi voluptatem quae? Ad, nihil? Temporibus fugiat ea et dicta. Veniam eligendi distinctio velit placeat vero provident!
                      </p>
                  </div>
                  <div class="general-info">
                      <ul>
                          <li>Created- <span>Lorem, ipsum.</span></li>
                          <li>technologies used - <span> HTML ,CSS JS</span></li>
                          <li>Role- <span>Frontend</span></li>
                          <li>View On - <span><a href="#" target="_blank">www.abc.com</a></span></li>

                      </ul>
                  </div>
              </div>
          </div>
          <div class="portfolio-item">
              <div class="portfolio-item-thumbnail">
                  <img src="Images/portfolio3.jpg">
              </div>
              <h3 class="portfolio-item-title">Lorem, ipsum dolor.</h3>
              <button type="button" class="btn view-project-btn">view project</button>
              <div class="portfolio-item-details">
                  <div class="dscription">
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto nam repudiandae quidem repellat, enim, ut hic quaerat ratione quasi, tempora iure in excepturi voluptatem quae? Ad, nihil? Temporibus fugiat ea et dicta. Veniam eligendi distinctio velit placeat vero provident!
                      </p>
                  </div>
                  <div class="general-info">
                      <ul>
                          <li>Created- <span>Lorem, ipsum.</span></li>
                          <li>technologies used - <span> HTML ,CSS JS</span></li>
                          <li>Role- <span>Frontend</span></li>
                          <li>View On - <span><a href="#" target="_blank">www.abc.com</a></span></li>

                      </ul>
                  </div>
              </div>
          </div>
          <div class="portfolio-item">
              <div class="portfolio-item-thumbnail">
                  <img src="Images/portfolio4.jpg">
              </div>
              <h3 class="portfolio-item-title">Lorem, ipsum dolor.</h3>
              <button type="button" class="btn view-project-btn">view project</button>
              <div class="portfolio-item-details">
                  <div class="dscription">
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto nam repudiandae quidem repellat, enim, ut hic quaerat ratione quasi, tempora iure in excepturi voluptatem quae? Ad, nihil? Temporibus fugiat ea et dicta. Veniam eligendi distinctio velit placeat vero provident!
                      </p>
                  </div>
                  <div class="general-info">
                      <ul>
                          <li>Created- <span>Lorem, ipsum.</span></li>
                          <li>technologies used - <span> HTML ,CSS JS</span></li>
                          <li>Role- <span>Frontend</span></li>
                          <li>View On - <span><a href="#" target="_blank">www.abc.com</a></span></li>

                      </ul>
                  </div>
              </div>
          </div>
          <div class="portfolio-item">
              <div class="portfolio-item-thumbnail">
                  <img src="Images/portfolio3.jpg">
              </div>
              <h3 class="portfolio-item-title">Lorem, ipsum dolor.</h3>
              <button type="button" class="btn view-project-btn">view project</button>
              <div class="portfolio-item-details">
                  <div class="dscription">
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto nam repudiandae quidem repellat, enim, ut hic quaerat ratione quasi, tempora iure in excepturi voluptatem quae? Ad, nihil? Temporibus fugiat ea et dicta. Veniam eligendi distinctio velit placeat vero provident!
                      </p>
                  </div>
                  <div class="general-info">
                      <ul>
                          <li>Created- <span>Lorem, ipsum.</span></li>
                          <li>technologies used - <span> HTML ,CSS JS</span></li>
                          <li>Role- <span>Frontend</span></li>
                          <li>View On - <span><a href="#" target="_blank">www.abc.com</a></span></li>

                      </ul>
                  </div>
              </div>
          </div>
          <!-- portfolio items ends  -->
      </div>
  </div>
  </section>

<!-- contact section starts....  -->
<section class="contact-section sec-padding" id="contact">
<div class="container">
  <div class="row">
      <div class="section-title">
          <h2> Let's Talk</h2>
      </div>
  </div>
  <div class="row">
      <div class="contact-form">
<form>
<div class="row">
  <div class="input-group">
      <input type="text" placeholder="Name" class= "input-control"required>

  </div>
  <div class="input-group">
      <input type="text" placeholder="E-mail" class= "input-control"required>

  </div>
  <div class="input-group">
      <input type="text" placeholder="Subject" class= "input-control">

  </div>
  <div class="input-group">
     <textarea placeholder="Message" class="input-control" required></textarea>

  </div>
  <div class="submit-btn">
      <button type="submit" class="btn">Submit</button>
  </div>
</div>
</form>
      </div>
      <div class="contact-info">
          <div class="contact-info-item">
              <h3>E-mail</h3>
              <p>abc@gmail.com</p>
          </div>
          <div class="contact-info-item">
              <h3>Phone-No</h3>
              <p>91 79 **** ****</p>
          </div>
          <div class="contact-info-item">
              <h3>Reach me at</h3>
              <div class="social-links">
                  <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                  <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
                  <a href="#" target="_blank"><i class="fab fa-behance"></i></a>
                  <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                  <a href="#" target="_blank"><i class="fab fa-dribbble"></i></a>
              </div>
          </div>
      </div>
  </div>
</div>
</section>


<!-- contact section ends ....  -->

</div>



<!-- popup  -->
<div class="portfolio-popup">
  <div class="pp-inner">
      <div class="pp-content">
          <div class="pp-header">
              <button type="button" class="btn pp-close">Close</button>
              <div class="pp-thumbnail">
                  <img src="Images/portfolio4.jpg" alt="">
              </div>
              <h3>App Landing Page</h3>
          </div>
          <div class="pp-body">
              <div class="dscription">
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto nam repudiandae quidem repellat, enim, ut hic quaerat ratione quasi, tempora iure in excepturi voluptatem quae? Ad, nihil? Temporibus fugiat ea et dicta. Veniam eligendi distinctio velit placeat vero provident!
                  </p>
              </div>
              <div class="general-info">
                  <ul>
                      <li>Created- <span>Lorem, ipsum.</span></li>
                      <li>technologies used - <span> HTML ,CSS JS</span></li>
                      <li>Role- <span>Frontend</span></li>
                      <li>View On - <span><a href="#" target="_blank">www.abc.com</a></span></li>

                  </ul>
              </div>

          </div>
      </div>
  </div>
</div>
` ;
    document.getElementById("home").insertAdjacentHTML("afterbegin", bodycnt);
    // document.querySelectorAll(".navbar")[1].remove();
    // document.querySelector(".whole").remove();
    // document.querySelector("#footer").remove();
    $(document).ready(function () {
      const tabsContainer = document.querySelector(".about-tabs"),
        aboutSection = document.querySelector(".about-section");


      tabsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
          tabsContainer.querySelector(".active").classList.remove("active");
          e.target.classList.add("active");
          const target = e.target.getAttribute("data-target");
          aboutSection.querySelector(".tab-content.active").classList.remove("active");
          aboutSection.querySelector(target).classList.add("active");
        }


      });


      // portfolio section (for popup)...... 
      document.addEventListener("click", (e) => {
        if (e.target.classList.contains("view-project-btn")) {
          togglePortfolioPopup();
          portfolioItemDetails(e.target.parentElement);
        }
      })
      function togglePortfolioPopup() {
        document.querySelector(".portfolio-popup").classList.toggle("open");
        document.body.classList.toggle("hide-scrolling");
        document.querySelector(".main").classList.toggle("fade-out");
      }
      document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);



      function portfolioItemDetails(portfolioItem) {
        document.querySelector(".pp-thumbnail img").src =
          portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
      }


      // toggler... 
      const navToggler = document.querySelector(".nav-toggler");
      navToggler.addEventListener("click", () => {
        hideSection();
        toggleNavbar();
        document.body.classList.toggle("hide-scrolling");
      });
      function hideSection() {
        document.querySelector("section.active").classList.toggle("fade-out");

      }
      function toggleNavbar() {
        document.querySelector(".header").classList.toggle("active");
      }



      // active section ..... 
      document.addEventListener("click", (e) => {
        if (e.target.classList.contains("link-item") && e.target.hash !== "") {

          if (e.target.classList.contains("nav-item")) {
            toggleNavbar();
          }
          else {
            hideSection();
            document.body.classList.add("hide-scrolling");

          }
          setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");

          }, 500);
        }
      });
    }
    );
  }
  else if (num === 7) {

    document.getElementsByTagName("title")[0].innerHTML = `pragya - Personal Website`;
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
    const headlink = `<link href="https://fonts.googleapis.com/css2?family=Courgette&family=Dancing+Script:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">`;
    document.getElementById("css_sheet").insertAdjacentHTML("afterend", headlink);


    const bodycnt = ` <!-- main start  -->
<div class="main">
   <!-- header section starts...  -->
   <header class="header">
       <div class="container">
           <div class="row flex-end">
               <button type="button" class="nav-toggler">
                   <span></span>
               </button>
               <nav class="nav">
                   <div class="nav-inner">
                       <ul>
                           <li>
                               <a href="#house" class="nav-item link-item">Home</a>
                           </li>
                           <li>
                              <a href="#about" class="nav-item link-item">Skills</a>
                          </li>
                          <li>
                              <a href="#portfolio" class="nav-item link-item">Projects</a>
                          </li>
                          <li>
                              <a href="#portfolio" class="nav-item link-item">Past-Rectruiters</a>
                          </li> <li>
                              <a href="#contact" class="nav-item link-item">Contact</a>
                          </li>
                       </ul>
                   </div>
               </nav>
           </div>
       </div>
   </header>

   <!-- hesder secionn ends  -->





  <section class="home-section align-items-center active" id="house">
      <div class="container">
          <div class="row align-items-center">
              <div class="home-text">
                  <p>
Hello ,I am
                  </p>
                  <h1>
                      Pragya Singh

                  </h1>
                  <h2>
                      frontend web developer

                  </h2>
                  <a href="#" class="btn">Hire me</a>
                  <a href="#about" class="btn link-item">More about me</a>

              </div>
              <div class="home-img">
                  <div class="img-box">
                      <img src="Images/faceimage.jpg">
                  </div>

              </div>
          </div>
      </div>
  </section>

  <!-- beginning of about section  -->
  <section class="about-section sec-padding" id="about">
      <div class="container">
          <div class="row">
              <div class="section-title">
                  <h2> It's about me</h2>
              </div>
          </div>
          <div class="row">
              <div class="about-img">
                  <div class="img-box">
                  <img src="Images/faceimage.jpg"></div>
                 
              </div>
              <div class="about-text">
                  <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, accusantium dolore praesentium, consequuntur repudiandae, officia dicta obcaecati velit non tempora unde quo atque maxime vel. Hic nemo veritatis harum iste. Quam vero culpa maxime qui officia accusantium officiis asperiores ea, sed dicta architecto voluptatibus minima temporibus animi provident placeat fugiat.
                  </p>
                  <h3>Skills</h3>
                  <div class="skills">
                      <div class="skill-item">HTML</div>
                      <div class="skill-item">CSS</div>
                      <div class="skill-item">JAVASCRIPT</div>
                      <div class="skill-item">PHOTOSHOP</div>
                      <div class="skill-item">JAVA</div>
                      <div class="skill-item">C++</div>
                      <div class="skill-item">PHOTOGRAPHY</div>
                      <div class="skill-item">POETRY</div>
                      <div class="skill-item">C</div>
                      <div class="skill-item">PHP</div>
                  </div>


                  <div class="about-tabs">
                      <button type="button" class="tab-item active" data-target="#education">education</button>
                      <button type="button" class="tab-item" data-target="#experience">experience</button>
                  </div>
                   <!-- education   -->
                    <div class="tab-content active" id="education">
                        <div class="timeline">
                            <div class="timeline-item">
                                <span class="date">2020 - present</span>
                                <h4>
                                    bachlor of technology <span>- IIT Indore</span>
                                </h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla voluptatum doloribus culpa!</p>
                            </div>
                            <div class="timeline-item">
                              <span class="date">2017 - 2020</span>
                              <h4>
                                  Secondary & Higher Secondary<span>- LBPS</span>
                              </h4>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla voluptatum doloribus culpa!</p>
                          </div>
                        </div>

                    </div>
                    <!-- Experience  -->
                    <div class="tab-content" id="experience">
                        <div class="timeline">
                            <div class="timeline-item">
                                
                              <span class="date">2021-present

                              </span>
                              <h4>frontend development</h4>
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur tempora adipisci ducimus nesciunt aliquam soluta!.</p>
                          </div>
                          <div class="timeline-item">
                                
                              <span class="date">2019

                              </span>
                              <h4>Photography</h4>
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur tempora adipisci ducimus nesciunt aliquam soluta!.</p>
                          </div>
                        </div>
                    </div>
<a href="#contact" class="btn">Contact me</a>
<a href="#" class="btn link-item">Download CV</a>
                    

              </div>
          </div>
      </div>
  </section>
  <!-- portfolio section  -->
  <section class="portfolio-section sec-padding" id="portfolio">
      <div class="container">
      <div class="row">
          <div class="section-title">
              <h2>Recent Work</h2>
          </div>
      </div>
      <div class="row">
          <!-- portfolio items  -->
          <div class="portfolio-item">
              <div class="portfolio-item-thumbnail">
                  <img src="Images/portfolio1.jpg">
              </div>
              <h3 class="portfolio-item-title">Lorem, ipsum dolor.</h3>
              <button type="button" class="btn view-project-btn">view project</button>
              <div class="portfolio-item-details">
                  <div class="dscription">
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto nam repudiandae quidem repellat, enim, ut hic quaerat ratione quasi, tempora iure in excepturi voluptatem quae? Ad, nihil? Temporibus fugiat ea et dicta. Veniam eligendi distinctio velit placeat vero provident!
                      </p>
                  </div>
                  <div class="general-info">
                      <ul>
                          <li>Created- <span>Lorem, ipsum.</span></li>
                          <li>technologies used - <span> HTML ,CSS JS</span></li>
                          <li>Role- <span>Frontend</span></li>
                          <li>View On - <span><a href="#" target="_blank">www.abc.com</a></span></li>

                      </ul>
                  </div>
              </div>
          </div>
          <div class="portfolio-item">
              <div class="portfolio-item-thumbnail">
                  <img src="Images/portfolio2.jpg">
              </div>
              <h3 class="portfolio-item-title">Lorem, ipsum dolor.</h3>
              <button type="button" class="btn view-project-btn">view project</button>
              <div class="portfolio-item-details">
                  <div class="dscription">
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto nam repudiandae quidem repellat, enim, ut hic quaerat ratione quasi, tempora iure in excepturi voluptatem quae? Ad, nihil? Temporibus fugiat ea et dicta. Veniam eligendi distinctio velit placeat vero provident!
                      </p>
                  </div>
                  <div class="general-info">
                      <ul>
                          <li>Created- <span>Lorem, ipsum.</span></li>
                          <li>technologies used - <span> HTML ,CSS JS</span></li>
                          <li>Role- <span>Frontend</span></li>
                          <li>View On - <span><a href="#" target="_blank">www.abc.com</a></span></li>

                      </ul>
                  </div>
              </div>
          </div>
          <div class="portfolio-item">
              <div class="portfolio-item-thumbnail">
                  <img src="Images/portfolio3.jpg">
              </div>
              <h3 class="portfolio-item-title">Lorem, ipsum dolor.</h3>
              <button type="button" class="btn view-project-btn">view project</button>
              <div class="portfolio-item-details">
                  <div class="dscription">
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto nam repudiandae quidem repellat, enim, ut hic quaerat ratione quasi, tempora iure in excepturi voluptatem quae? Ad, nihil? Temporibus fugiat ea et dicta. Veniam eligendi distinctio velit placeat vero provident!
                      </p>
                  </div>
                  <div class="general-info">
                      <ul>
                          <li>Created- <span>Lorem, ipsum.</span></li>
                          <li>technologies used - <span> HTML ,CSS JS</span></li>
                          <li>Role- <span>Frontend</span></li>
                          <li>View On - <span><a href="#" target="_blank">www.abc.com</a></span></li>

                      </ul>
                  </div>
              </div>
          </div>
          <div class="portfolio-item">
              <div class="portfolio-item-thumbnail">
                  <img src="Images/portfolio3.jpg">
              </div>
              <h3 class="portfolio-item-title">Lorem, ipsum dolor.</h3>
              <button type="button" class="btn view-project-btn">view project</button>
              <div class="portfolio-item-details">
                  <div class="dscription">
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto nam repudiandae quidem repellat, enim, ut hic quaerat ratione quasi, tempora iure in excepturi voluptatem quae? Ad, nihil? Temporibus fugiat ea et dicta. Veniam eligendi distinctio velit placeat vero provident!
                      </p>
                  </div>
                  <div class="general-info">
                      <ul>
                          <li>Created- <span>Lorem, ipsum.</span></li>
                          <li>technologies used - <span> HTML ,CSS JS</span></li>
                          <li>Role- <span>Frontend</span></li>
                          <li>View On - <span><a href="#" target="_blank">www.abc.com</a></span></li>

                      </ul>
                  </div>
              </div>
          </div>
          <div class="portfolio-item">
              <div class="portfolio-item-thumbnail">
                  <img src="Images/portfolio4.jpg">
              </div>
              <h3 class="portfolio-item-title">Lorem, ipsum dolor.</h3>
              <button type="button" class="btn view-project-btn">view project</button>
              <div class="portfolio-item-details">
                  <div class="dscription">
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto nam repudiandae quidem repellat, enim, ut hic quaerat ratione quasi, tempora iure in excepturi voluptatem quae? Ad, nihil? Temporibus fugiat ea et dicta. Veniam eligendi distinctio velit placeat vero provident!
                      </p>
                  </div>
                  <div class="general-info">
                      <ul>
                          <li>Created- <span>Lorem, ipsum.</span></li>
                          <li>technologies used - <span> HTML ,CSS JS</span></li>
                          <li>Role- <span>Frontend</span></li>
                          <li>View On - <span><a href="#" target="_blank">www.abc.com</a></span></li>

                      </ul>
                  </div>
              </div>
          </div>
          <div class="portfolio-item">
              <div class="portfolio-item-thumbnail">
                  <img src="Images/portfolio3.jpg">
              </div>
              <h3 class="portfolio-item-title">Lorem, ipsum dolor.</h3>
              <button type="button" class="btn view-project-btn">view project</button>
              <div class="portfolio-item-details">
                  <div class="dscription">
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto nam repudiandae quidem repellat, enim, ut hic quaerat ratione quasi, tempora iure in excepturi voluptatem quae? Ad, nihil? Temporibus fugiat ea et dicta. Veniam eligendi distinctio velit placeat vero provident!
                      </p>
                  </div>
                  <div class="general-info">
                      <ul>
                          <li>Created- <span>Lorem, ipsum.</span></li>
                          <li>technologies used - <span> HTML ,CSS JS</span></li>
                          <li>Role- <span>Frontend</span></li>
                          <li>View On - <span><a href="#" target="_blank">www.abc.com</a></span></li>

                      </ul>
                  </div>
              </div>
          </div>
          <!-- portfolio items ends  -->
      </div>
  </div>
  </section>

<!-- contact section starts....  -->
<section class="contact-section sec-padding" id="contact">
<div class="container">
  <div class="row">
      <div class="section-title">
          <h2> Let's Talk</h2>
      </div>
  </div>
  <div class="row">
      <div class="contact-form">
<form>
<div class="row">
  <div class="input-group">
      <input type="text" placeholder="Name" class= "input-control"required>

  </div>
  <div class="input-group">
      <input type="text" placeholder="E-mail" class= "input-control"required>

  </div>
  <div class="input-group">
      <input type="text" placeholder="Subject" class= "input-control">

  </div>
  <div class="input-group">
     <textarea placeholder="Message" class="input-control" required></textarea>

  </div>
  <div class="submit-btn">
      <button type="submit" class="btn">Submit</button>
  </div>
</div>
</form>
      </div>
      <div class="contact-info">
          <div class="contact-info-item">
              <h3>E-mail</h3>
              <p>abc@gmail.com</p>
          </div>
          <div class="contact-info-item">
              <h3>Phone-No</h3>
              <p>91 79 **** ****</p>
          </div>
          <div class="contact-info-item">
              <h3>Reach me at</h3>
              <div class="social-links">
                  <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                  <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
                  <a href="#" target="_blank"><i class="fab fa-behance"></i></a>
                  <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                  <a href="#" target="_blank"><i class="fab fa-dribbble"></i></a>
              </div>
          </div>
      </div>
  </div>
</div>
</section>


<!-- contact section ends ....  -->

</div>



<!-- popup  -->
<div class="portfolio-popup">
  <div class="pp-inner">
      <div class="pp-content">
          <div class="pp-header">
              <button type="button" class="btn pp-close">Close</button>
              <div class="pp-thumbnail">
                  <img src="Images/portfolio4.jpg" alt="">
              </div>
              <h3>App Landing Page</h3>
          </div>
          <div class="pp-body">
              <div class="dscription">
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto nam repudiandae quidem repellat, enim, ut hic quaerat ratione quasi, tempora iure in excepturi voluptatem quae? Ad, nihil? Temporibus fugiat ea et dicta. Veniam eligendi distinctio velit placeat vero provident!
                  </p>
              </div>
              <div class="general-info">
                  <ul>
                      <li>Created- <span>Lorem, ipsum.</span></li>
                      <li>technologies used - <span> HTML ,CSS JS</span></li>
                      <li>Role- <span>Frontend</span></li>
                      <li>View On - <span><a href="#" target="_blank">www.abc.com</a></span></li>

                  </ul>
              </div>

          </div>
      </div>
  </div>
</div>
` ;
    document.getElementById("home").insertAdjacentHTML("afterbegin", bodycnt);
    // document.querySelectorAll(".navbar")[1].remove();
    // document.querySelector(".whole").remove();
    // document.querySelector("#footer").remove();
    $(document).ready(function () {
      const tabsContainer = document.querySelector(".about-tabs"),
        aboutSection = document.querySelector(".about-section");


      tabsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
          tabsContainer.querySelector(".active").classList.remove("active");
          e.target.classList.add("active");
          const target = e.target.getAttribute("data-target");
          aboutSection.querySelector(".tab-content.active").classList.remove("active");
          aboutSection.querySelector(target).classList.add("active");
        }


      });


      // portfolio section (for popup)...... 
      document.addEventListener("click", (e) => {
        if (e.target.classList.contains("view-project-btn")) {
          togglePortfolioPopup();
          portfolioItemDetails(e.target.parentElement);
        }
      })
      function togglePortfolioPopup() {
        document.querySelector(".portfolio-popup").classList.toggle("open");
        document.body.classList.toggle("hide-scrolling");
        document.querySelector(".main").classList.toggle("fade-out");
      }
      document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);



      function portfolioItemDetails(portfolioItem) {
        document.querySelector(".pp-thumbnail img").src =
          portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
      }


      // toggler... 
      const navToggler = document.querySelector(".nav-toggler");
      navToggler.addEventListener("click", () => {
        hideSection();
        toggleNavbar();
        document.body.classList.toggle("hide-scrolling");
      });
      function hideSection() {
        document.querySelector("section.active").classList.toggle("fade-out");

      }
      function toggleNavbar() {
        document.querySelector(".header").classList.toggle("active");
      }



      // active section ..... 
      document.addEventListener("click", (e) => {
        if (e.target.classList.contains("link-item") && e.target.hash !== "") {

          if (e.target.classList.contains("nav-item")) {
            toggleNavbar();
          }
          else {
            hideSection();
            document.body.classList.add("hide-scrolling");

          }
          setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");

          }, 500);
        }
      });
    }
    );
  }
  else if (num === 8) {

    document.getElementsByTagName("title")[0].innerHTML = `Harshwardhan - Personal Website`;
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
    const headlink = `<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`;
    document.getElementById("css_sheet").insertAdjacentHTML("afterend", headlink);
    const bodycnt = `<section id="main">
<nav>
    <!--logo--------------->
    <a href="#" class="logo">
        <img src="https://media.istockphoto.com/photos/abstract-technology-circles-with-global-connection-lines-energy-picture-id995595516?b=1&k=6&m=995595516&s=170x170&h=e7syk6BgDkLAd0EcgmqM8KgZutZq2nMGxaz_uF-UzLk="/>	
    </a>
    <!--menu-btn-------------->
        <input class="menu-btn" type="checkbox" id="menu-btn">
        <label class="menu-icon" for="menu-btn">
            <span class="nav-icon"></span>
        </label>
    <!--menu-------------->
    <ul class="menu">
        <li><a href="#main">Home</a></li>	
        <li><a href="#skills">Skills</a></li>	
        <li><a href="#recent">Projects</a></li>	
        <li><a href="#client">Past Recruiters</a></li>	
        <li><a href="#contact">Contact</a></li>	
    </ul>
    <!--say-hey--------->
    </nav>
    </section>

    <!--content----------------->
<div class="content">
<!--model--------------->
<div class="model">
<img src="Images/hc.jpg" alt="">	
</div>
<!--text-------------->
<div class="main-text">
    <h1>Hello, I am Harshwardhan</h1>
    <p>I am an Electronics and Communicaation Engineer with an specialisation in Microcontroller Programming, IOT devices and Embedded Systems</p>
<!--btn------->
    <a href="#" class="portfolio-btn">See My Resume</a>
</div>
</div>

<!--skills------------->
<section id="skills">
<!--text--------->
<div class="skill-text">
    <!--heading-->
    <div class="skill-heading">
    <span>My Skills</span>
    <h2>My Experties</h2>
    </div>
    <!--skill-box-container----------->
    <div class="s-box-container">
    <!--skill-box-------------->
    <div class="skill-box">
    <!--icon------->
    <div class="s-box-icon">
        <i class="fab fa-html5"></i>
    </div>
    <!--skill-box-text--------->
    <div class="s-box-text">
    <strong>Interfacing with Arduino</strong>
    <p>I have 3 month experience in Arduino programming and i have completed 30+ project.</p>
    </div>
    </div>
    <!--skill-box-------------->
    <div class="skill-box">
    <!--icon------->
    <div class="s-box-icon">
        <i class="fab fa-css3-alt"></i>
    </div>
    <!--skill-box-text--------->
    <div class="s-box-text">
    <strong>MATLAB</strong>
    <p>I have 1 month experience in MATLAB and Simulink.</p>
    </div>
    </div>
    <!--skill-box-------------->
    <div class="skill-box">
    <!--icon------->
    <div class="s-box-icon">
        <i class="fab fa-js-square"></i>
    </div>
    <!--skill-box-text--------->
    <div class="s-box-text">
    <strong>C++</strong>
    <p>I have 1 year experience in C++ and I write efficient programs in the language.</p>
    </div>
    </div>
        
        
    </div>
</div>
<!--img--------------->
<div class="skill-img">
<img src="https://images.freeimages.com/images/small-previews/2f0/electronic-components-1243284.jpg"/>	
</div>
</section>


 <!--recent-project---------------------------->
<section id="recent">
<!--heading--------------->
<div class="recent-heading">
<center><span>Recent</span></center>
<h3>Recent projects and Publications</h3>
</div>
<!--img--------------->
<div class="recent-img">
    <img src="https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhc3BiZXJyeSUyMHBpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>	
</div>
<!--btn----------->
<a href="#" class="recent-btn">Projects</a>
</section>


<!--client----------------------------------->
<section id="client">
<!--heading------->
<div class="client-heading">
<span>Comments</span>
<h3>Reviews by Past Recruiters</h3>
</div>
<!--client-box-container--------------->
<div class="c-box-container">
<!--box-1----->	
<div class="client-box">
    <!--img-------->
    <img src="https://www.logo.wine/a/logo/Indian_Space_Research_Organisation/Indian_Space_Research_Organisation-Logo.wine.svg"/>
    <!--stars/reviews---------->
    <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <!--details/comment------>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas dolore nam expedita, vitae aliquid quidem doloremque consectetur! Architecto, numquam. </p>
    <!--btn--------->
    <a href="#">Read More</a>
</div>
    <!--box-2----->	
<div class="client-box">
    <!--img-------->
    <img src="https://image.shutterstock.com/image-photo/image-260nw-489388897.jpg"/>
    <!--stars/reviews---------->
    <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
    </div>
    <!--details/comment------>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam harum officiis quod amet sed aliquid, obcaecati rerum culpa commodi similique? </p>
    <!--btn--------->
    <a href="#">Read More</a>
</div>
    <!--box-3----->	
<div class="client-box">
    <!--img-------->
    <img src="https://image.shutterstock.com/image-photo/image-260nw-1374132989.jpg"/>
    <!--stars/reviews---------->
    <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
    </div>
    <!--details/comment------>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perferendis sed, qui atque vel obcaecati eaque consectetur laboriosam facilis minima? </p>
    <!--btn--------->
    <a href="#">Read More</a>
</div>
</div>
</section>

<!--contact------------------------->
<section id="contact">
<!--img-------->
<img src="https://images.unsplash.com/photo-1580706483913-b6ea7db483a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Ryb25pY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
<!--heading---------------->
<h3>Give a chance to Work TOGETHER</h3>
<!--input----------------->
<!-- <div class="contact-input">
    <input type="email" placeholder="harshwardhanchaube@gmail.com"/>
    
    <a href="#">Continue</a>
</div>
<br> -->

<div class="contact-input">
    <input type="Mobile number" placeholder="6397345368"/>
    <a href="#">Call now</a>

</div>
<br>
<div class="contact-input">
    <input type="Github" placeholder="Git Hub"/>
    <a href="#">Collab</a>

</div>



</section>

<div class="contact-me">
   <center> <a href="#"><img src="https://img.icons8.com/color/48/000000/twitter--v1.png " class="icons"></a>
    &nbsp;&nbsp;<a href="#"><img src="https://img.icons8.com/fluent/48/000000/gmail-new.png" class="icons"></a>
    &nbsp;&nbsp;<a href="#"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" class="icons"></a>
    &nbsp;&nbsp;<a href="#"><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" class="icons"></a>
    </center>  
</div>`;
document.getElementById("home").insertAdjacentHTML("afterbegin", bodycnt);
  }
}
GetCssSheet(num);