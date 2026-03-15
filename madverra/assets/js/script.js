$(document).ready(function(){
	const dropUpButtons = document.querySelectorAll(".drop-up");

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
};

dropUpButtons.forEach((button) => {
	button.addEventListener("click", scrollToTop);
});

$(function() {
  var header = $(".navbar");

  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
          header.addClass("scrolled", 1000);
      } else {
          header.removeClass("scrolled", 1000);
      }
  });

});
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const numParticles = 35;

class Particle {
    constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off the edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = "rgba(244, 232, 5, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Create particles
for (let i = 0; i < numParticles; i++) {
    let size = Math.random() * 4 + 2;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let speedX = (Math.random() - 0.5) * 2;
    let speedY = (Math.random() - 0.5) * 2;
    particlesArray.push(new Particle(x, y, size, speedX, speedY));
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let particle of particlesArray) {
        particle.update();
        particle.draw();
    }

    requestAnimationFrame(animate);
}

animate();

// Resize canvas on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

});