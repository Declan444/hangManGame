//used W3 Schools to work out how to draw the stickman
const canvas = document.getElementById('stickmanCanvas');
const draw = canvas.getContext("2d");

let bodyPart ={
    scaffold: false,
    head: false,
    body: false,
    leftArm: false,
    rightArm: false,
    leftLeg: false,
    rightLeg: false

}
// function to draw the stickman in its parts
function drawStickman (object){

// scaffold
if(bodyPart.scaffold){
draw.beginPath()
draw.moveTo(40, 230);
draw.lineTo(10, 230)
draw.lineTo(10, 10)
draw.lineTo(150, 10)
draw.lineTo(150, 25)
draw.stroke();
}
if(bodyPart.head){
//Head
draw.beginPath();
draw.arc(150, 50, 25, 0, 2 * Math.PI);
draw.stroke()
}



//Body
if(bodyPart.body){
draw.moveTo(150, 75)
draw.lineTo(150, 150)
draw.stroke()
}
// left arm
if(bodyPart.leftArm){
draw.moveTo(150, 100)
draw.lineTo(100, 100)
draw.stroke()
}
if(bodyPart.rightArm){
//right arm
draw.moveTo(150,100)
draw.lineTo(200, 100)
draw.stroke()
}
if(bodyPart.leftLeg){
//left leg
draw.moveTo(150,150)
draw.lineTo(100, 200)
draw.stroke()
}
if(bodyPart.rightLeg){
//right leg
draw.moveTo(150, 150)
draw.lineTo(200, 200)
draw.stroke()
}
}

function revealNextPart(){
    if(!bodyPart.scaffold){
        bodyPart.scaffold = true;
        console.log('calling this function')
    }else if (!bodyPart.head){
        bodyPart.head = true;
    }else if (!bodyPart.body){
        bodyPart.body = true;
    }else if (!bodyPart.leftArm){
        bodyPart.leftArm = true;
    }else if (!bodyPart.rightArm){
        bodyPart.rightArm = true;
    }else if (!bodyPart.leftLeg){
        bodyPart.leftLeg = true;
    }else if (!bodyPart.rightLeg){
        bodyPart.rightLeg = true;
    }
    
    drawStickman(bodyPart)
}
let revealButton = document.getElementById('revealButton')
revealButton.addEventListener('click', revealNextPart)

console.log('testing again')



// all above working find. Leave for now

//trying to create the letter buttons in the keys box area 
//create keys
function createKey(letter){
    console.log('getting this far')
    let key = document.createElement('span')
    key.className = 'key'
    key.textContent = letter;

    
    key.addEventListener('click', function(event){
        key.style.backgroundColor = 'red';
        checkAndHighlightLetter(letter);
       
        
    })
    return key;
    
}
function  createLetterKeys(){
    console.log('calling create letter keys function')
    let letters = []

    for (let i=97; i <= 122; i++){
        letters.push(String.fromCharCode(i))      
    }
let keysBox = document.getElementById('keys-box')

for (let i = 0; i < letters.length; i++){
    let keys = createKey(letters[i]);
    keysBox.appendChild(keys)
    console.log('did it get to here')
}
    
}
// push the letters from the random array into the underline div. made letters white in css  so cant see in div until it turns to blue

function checkAndHighlightLetter(clickedLetter){
    for(let i = 0; i < randomWordArray.length; i++){
        let existingDiv = document.getElementById('letter-' + (i + 1));
        let randomLetter = randomWordArray[i]
        if(existingDiv && randomLetter === clickedLetter){
            existingDiv.style.backgroundColor = 'blue'
        }
    }
}



let getLetters = document.getElementById('getLetters')
getLetters.addEventListener('click', createLetterKeys)


console.log('does the code run to here')


// create an array that contains 5 letter words

let fiveLetterWords = ['chair', 'table', 'apple', 'house', 'style']
// function to randomly select a word from the array
function getRandomWord(){
    let randomWordIndex = Math.floor(Math.random() * fiveLetterWords.length);
    return fiveLetterWords[randomWordIndex]
    
}
let selectedWord = getRandomWord()
console.log(selectedWord)

//create a letter guess function that ties into the random word
//random word is selected word variable
// letter is the letter selected by the user

//create an array from the selected word

let randomWordArray = selectedWord.split('')

console.log(randomWordArray)

// pushes the word into the underline divs. 

for(let i=0; i< randomWordArray.length; i++){
    let existingDiv = document.getElementById('letter-' + (i + 1))
    let randomLetter = randomWordArray[i]
    if (existingDiv){
        existingDiv.textContent = randomWordArray[i];  
    }

}


