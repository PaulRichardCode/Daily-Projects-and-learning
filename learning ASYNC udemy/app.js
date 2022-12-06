/* setTimeout(() => {
  document.body.style.backgroundColor = "red";
  setTimeout(() => {
    document.body.style.backgroundColor = "blue";

    setTimeout(() => {
      document.body.style.backgroundColor = "aqua";
      setTimeout(() => {
        document.body.style.backgroundColor = "pink";
        setTimeout(() => {
          document.body.style.backgroundColor = "purple";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000); */

const color = function (paint, time, doNext) {
  setTimeout(() => {
    document.body.style.backgroundColor = paint;
    doNext();
  }, time);
};

color("red", 1000, () => {
  color("pink", 1000, () => {
    color("red", 1000, () => {
      color("pink", 1000, () => {});
    });
  });
});
