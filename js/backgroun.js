const images = ["background1.jpg","background2.jpg","background3.jpg","background4.jpg"];

const selectedImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${selectedImg}`;

document.body.appendChild(bgImage);