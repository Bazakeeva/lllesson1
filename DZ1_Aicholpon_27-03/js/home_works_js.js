
// GMAIL BLOCK


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector('input');
function isEmailValid (value){
    return EMAIL_REGEXP.test(value);
}
function onInput(){
  if (isEmailValid(input.value)) {
    input.style.borderColor = 'blue';
  }
    else{
    input.style.borderColor = 'red';
}
}
input.addEventListener('input', onInput);

// MOVE BLOCK

const child_block = document.querySelector('.child_block')
console.log(child_block)

let positionX = 0
let positionY = 0

const moveBlock = () => {
    if (positionX<= 445) {
        positionX++
        child_block.style.left = `${positionX}px`
        setTimeout(moveBlock, 5)
    }
}
moveBlock()
