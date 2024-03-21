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
