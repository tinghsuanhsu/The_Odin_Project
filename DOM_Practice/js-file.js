/* DOM

//a <p> with red text that says “Hey I’m red!”
const body = document.body
const redParagraph = document.createElement('p');
redParagraph.textContent = 'I\'m a blue h3';
redParagraph.style.cssText = 'color:red';
body.append(redParagraph);

//an <h3> with blue text that says “I’m a blue h3!”
const blueText = document.createElement('h3')
blueText.textContent = 'I\'m a blue h3'
blueText.style.cssText = 'color:blue';
body.append(blueText)

//a <div> with a black border and pink background color with the following elements inside of it:
const div = document.createElement('div')
body.append(div)
div.style.backgroundColor = 'pink'


// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
const h1Text = document.createElement('h1')
h1Text.textContent = 'I\'m in a div'
const meToo = document.createElement('p')
meToo.textContent = 'ME TOO!'
div.append(h1Text, meToo)

 */

const body = document.querySelector('body')
const div = document.querySelector('div')
const spanHi = document.querySelector('hi')
const spanBye = document.querySelector('bye')