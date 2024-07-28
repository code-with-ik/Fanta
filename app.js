var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
  },
});

tl.to(
  "#orange",
  {
    top: "170%",
    right: "22%",
    width: "15%",
  },
  orange
);

tl.to(
  "#fanta",
  {
    top: "120%",
    left: "0%",
  },
  orange
);

tl.to(
  "#orang-cut",
  {
    top: "165%",
    left: "22%",
  },
  orange
);

tl.to(
  "#leaf",
  {
    top: "98%",
    left: "65%",
    rotate: "260deg",
  },
  orange
);

tl.to(
  "#leaf2",
  {
    top: "108.5%",
    left: "5%",
    rotate: "120deg",
  },
  orange
);


var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 50%",
    end: "50% 50%",
    scrub: true,
  },
});

tl.from(
  ".lemon1",
  {
    rotate: "90deg",
    left: "-100%",
    top: "110%",
  },
  "ca"
);

tl.from(
  "#cococola",
  {
    top: "110%",
    left: "-100%",
    rotate: "-90deg",
  },
  "ca"
);

tl.from(
  ".lemon",
  {
    rotate: "90deg",
    left: "-100%",
    top: "115%",
  },
  "ca"
);

tl.from(
  "#pepsi",
  {
    top: "110%",
    right: "-100%",
    rotate: "90deg",
  },
  "ca"
);

tl.to(
  "#orang-cut",
  {
    left: "42%",
    top: "200%",
  },
  "ca"
);

tl.to(
  "#fanta",
  {
    width: "40%",
    left: "30%",
    top: "215%",
  },
  "ca"
);
