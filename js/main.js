/* 
skill-bar 
*/
const circles = document.querySelectorAll(".circular-pbar");
circles.forEach((el) => {
  const counter = el.querySelector(".circular-pbar-counter");
  const tg = counter.textContent + "%";
  const tm = gsap.timeline({
    defaults: { duration: 3, ease: "expo.out" },
    scrollTrigger: {
      trigger: el,
      toggleActions: "play pause resume reset",
    },
  });
  tm.from(counter, {
    textContent: 0,
    modifiers: {
      textContent: (textContent) => {
        return textContent.toFixed();
      },
    },
  });
  tm.to(
    el,
    {
      "--p": tg,
    },
    0
  );
});

/* 
design 
*/
const pics = $(".pic");
const lightbox = $("#lightbox");
const lightboxImage = $("#lightboxImage");
pics.on("click", function (e) {
  e.preventDefault();
  const bigLocation = $(this).attr("data-src");
  $("html").addClass("all_scroll_fixed");
  lightbox.css("display", "block");
  lightboxImage.load(bigLocation);
});
lightbox.on("click", function () {
  lightbox.css("display", "none");
  $("html").removeClass("all_scroll_fixed");
});

/* 
mouse 
*/
const el = document.querySelector(".followAnimation");
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
tick();
function tick() {
  requestAnimationFrame(tick);
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;
  el.style.transform = `translate(${currentX}px,${currentY}px)`;
}

/* 
arrow_up 
*/
(() => {
  const arrowUp = document.querySelector(".arrow-up");
  const top = document.querySelector("#top");
  document.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      arrowUp.classList.add("visible");
    } else {
      arrowUp.classList.remove("visible");
    }
  });
  arrowUp.addEventListener("click", function () {
    top.scrollIntoView({ behavior: "smooth" });
  });
})();

/* 
btns_menu
 */
const btnsMenu = document.querySelector(".btns_menu");
btnsMenu.addEventListener("click", function (e) {
  e.preventDefault();
  const target = e.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth", block: "start" });
  btnsMenu.classList.remove("open");
});

/* 
section3_project_contents
 */
const pc = document.querySelector(".section3_project_contents .pc");
const left = document.querySelector(
  ".section3_project_contents .contents_left"
);
const pcS = pc.querySelector(".screen");
const pcM = pc.querySelector(".mask");

const aniUp = (mask, screen) => {
  let newH1 = mask.clientHeight;
  let newH2 = screen.clientHeight;
  let height = newH1 - newH2;
  gsap.to(screen, { y: height, duration: 0.5 });
};
const aniDown = (screen) => {
  gsap.to(screen, { y: 0, duration: 0.5 });
};
ScrollTrigger.create({
  trigger: ".section3_project_contents",
  start: "top bottom",
  end: "bottom top",
  scrub: 0.5,
  onEnter: () => {
    pcM.addEventListener("mouseenter", () => aniUp(pcM, pcS));
    pcM.addEventListener("mouseleave", () => aniDown(pcS));
    gsap.fromTo(left, { xPercent: -100 }, { xPercent: 0, duration: 1 });
  },
});
