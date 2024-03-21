const circles = document.querySelectorAll(".circular-pbar");
//gsap.toArray()

circles.forEach((el) => {
  const counter = el.querySelector(".circular-pbar-counter");
  const tg = counter.textContent + "%";
  //   counter.textContent = tg;
  const tm = gsap.timeline({
    defaults: { duration: 4, ease: "expo.out" },
    scrollTrigger: {
      trigger: el,
      toggleActions: "play pause resume reset",
    },
  });
  tm.from(counter, {
    textContent: 0,
    // modifiers:사용자 정의 함수
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
