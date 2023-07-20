var services;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0;
  } else {
    return number_value;
  }
}

document.getElementById('button').addEventListener('click', function() {
    var comment = document.getElementById('text').value;
    var list = document.getElementById('list');
    var newComment = document.createElement('li');
    newComment.textContent = comment;
    list.appendChild(newComment);
    document.getElementById('text').value = '';
});

document.getElementById('addtocart1').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list2');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'Buy Crypto';

  element_list2.appendChild(new_li2);
});

document.getElementById('addtocart2').addEventListener('click', (event) => {
  let element_list22 = document.getElementById('list2');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'Sell Crypto';

  element_list22.appendChild(new_li3);
});

document.getElementById('addtocart3').addEventListener('click', (event) => {
  let element_list23 = document.getElementById('list2');
  let new_li4 = document.createElement('li');
  new_li4.innerText = 'Portfolio Balancing';

  element_list23.appendChild(new_li4);
});

document.getElementById('addtocart4').addEventListener('click', (event) => {
  let element_list24 = document.getElementById('list2');
  let new_li5 = document.createElement('li');
  new_li5.innerText = 'Crypto Bot';

  element_list24.appendChild(new_li5);
});

document.getElementById('addtocart5').addEventListener('click', (event) => {
  let element_list25 = document.getElementById('list2');
  let new_li6 = document.createElement('li');
  new_li6.innerText = 'Tax Advice';

  element_list25.appendChild(new_li6);
});

document.getElementById('addtocart6').addEventListener('click', (event) => {
  let element_list26 = document.getElementById('list2');
  let new_li7 = document.createElement('li');
  new_li7.innerText = 'Other Services';

  element_list26.appendChild(new_li7);
});

services = [
    'https://gifdb.com/images/high/homer-simpson-thinking-crypto-smoking-7p7heynntbo4zahz.webp',
    'https://media0.giphy.com/media/Y2ZUWLrTy63j9T6qrK/giphy.gif?cid=ecf05e47qwnz7dffvmc4qznsy5w21s6awgmqo61a3xttpuql&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    'https://media.tenor.com/rcbXGO6ys3wAAAAC/bitcoin-crypto.gif',
    'https://media.tenor.com/YHZDY50RhXgAAAAC/bitcoin-cryptocurrency.gif',
   'https://media3.giphy.com/media/tSwbgtcOBn2QCBPz9C/giphy.gif?cid=ecf05e47tsybo8egr66mwajn1scohy2je12uopf1b7qnypal&ep=v1_gifs_search&rid=giphy.gif&ct=g'
];
let element_image = document.getElementById('image');
element_image.setAttribute("src", services[0]);
let element_nextImage = document.getElementById('nextImage');
element_nextImage.setAttribute("class", 'NextButton');

document.getElementById('nextImage').addEventListener('click', (event) => {
  services.unshift(services.pop());
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", services[0]);
});

document.getElementById('prevImage').addEventListener('click', (event) => {
  services.push(services.shift());
  let element_image3 = document.getElementById('image');
  element_image3.setAttribute("src", services.slice(-1)[0]);
});

// Rest of the code remains the same ...

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);
