const three = document.getElementById('three');
const windowHeight =  window.innerHeight;

window.addEventListener("scroll", function (){

  let boxThree = three.getBoundingClientRect();
  // console.log('Box three top: ' + boxThree.top);
  // Use the top of the box position from DOMRect
  let trigger3 = boxThree.top;
  // console.log('trigger3: ' + trigger3);
  // console.log( windowHeight - 200);

  if (trigger3 < (windowHeight - 200)) {
    three.classList.add('three');
  } else {
    three.classList.remove('three');
  }
});
