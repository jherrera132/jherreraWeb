let mobCont = document.querySelector(".mobileContainer");
let carouselInner = document.querySelector(".carousel-inner");

let ballImg = document.querySelector(".ballImg");
let ballName = document.querySelector(".ballName");
let coverstock = document.querySelector(".coverstock");
let RG = document.querySelector(".RG");
let diff = document.querySelector(".diff");

let button = document.querySelector(".submit");

let ballList = [];

let sampleItem = {
  ballImg: "https://www.stormbowling.com/medias/PHAZE%20II_00000.png",
  ballName: "Phaze II",
  coverstock: "TX-16 Solid",
  RG: 2.48,
  diff: 0.051,
};

ballList.push(sampleItem);

button.onclick = function() {
    mobCont.innerHTML = "";
    let entryItem = {
        ballImg: ballImg.value,
        ballName: ballName.value,
        coverstock: coverstock.value,
        RG: RG.value,
        diff: diff.value
    }

    ballList.push(entryItem);
  for (let i = 0; i < ballList.length; i++) {
    // let img = document.createElement("img");
    // let name = document.createElement("p");
    // let covStock = document.createElement("p");
    // let radiusG = document.createElement("p");
    // let differential = document.createElement("p");

    let img = ballList[i].ballImg;
    let name = ballList[i].ballName;
    let covStock = ballList[i].coverstock;
    let radiusG = ballList[i].RG;
    let differential = ballList[i].diff;

    mobCont.insertAdjacentHTML(
      "beforeend",
      `<div class="entry">
     <h2>${name}</h2>
     <img src="${img}">
     </div>
     <div class="entry">
     <p>${covStock}</p>
     <p>${radiusG}</p>
     <p>${differential}</p>
     </div>`
    );
  }
  console.log(ballList.length);
};

