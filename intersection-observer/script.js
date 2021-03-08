const sec3 = document.querySelector("section:nth-child(3)");

const obsOpts = {
  threshold: [0, 0.5, 0.9]
};

const observer = new IntersectionObserver(log, obsOpts);

function log(entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.intersectionRatio);
    switch (getOneNumberAfterDot(String(entry.intersectionRatio))) {
      case 0:
        console.log("at 0");
        break;
      case 0.5:
        console.log("at 0.50");
        break;
      case 0.9:
        console.log("at 0.90");
        break;
      default:
        break;
    }
  });
}

observer.observe(sec3);

function getOneNumberAfterDot(numAsStr) {
  const indexOfDot = numAsStr.indexOf("."),
    firstNumAfterDot = numAsStr.slice(indexOfDot + 1, indexOfDot + 2);

  return Number("0." + firstNumAfterDot);
}
