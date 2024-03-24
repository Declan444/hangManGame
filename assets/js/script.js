/*jshint esversion: 6 */
/**
 * Reset game function
 */
function resetGame() {
    console.log('calling reset game function')
    location.reload();
  }
  const reset = document.getElementById('reset');
  reset.addEventListener('click', resetGame);
  
  const canvas = document.getElementById('stickmanCanvas');
  const draw = canvas.getContext('2d');
  //BodyPart will be the object that contains all of the stickman sections. Set boolean to false to not appear on the canvas
   
  const bodyPart = {
    scaffold: false,
    head: false,
    body: false,
    leftArm: false,
    rightArm: false,
    leftLeg: false,
    rightLeg: false,
  
  };
  /**
   *
   * @param drawStickman the function that draws each part of the stickman on the canvas
   */
  function drawStickman(object) {
  // scaffold
    if (bodyPart.scaffold) {
      draw.beginPath();
      draw.moveTo(40, 230);
      draw.lineTo(10, 230);
      draw.lineTo(10, 10);
      draw.lineTo(150, 10);
      draw.lineTo(150, 25);
      draw.stroke();
    }
    if (bodyPart.head) {
      // Head
      draw.beginPath();
      draw.arc(150, 50, 25, 0, 2 * Math.PI);
      draw.stroke();
    }
    // Body
    if (bodyPart.body) {
      draw.moveTo(150, 75);
      draw.lineTo(150, 150);
      draw.stroke();
    }
    // left arm
    if (bodyPart.leftArm) {
      draw.moveTo(150, 100);
      draw.lineTo(100, 100);
      draw.stroke();
    }
    if (bodyPart.rightArm) {
      // right arm
      draw.moveTo(150, 100);
      draw.lineTo(200, 100);
      draw.stroke();
    }
    if (bodyPart.leftLeg) {
      // left leg
      draw.moveTo(150, 150);
      draw.lineTo(100, 200);
      draw.stroke();
    }
    if (bodyPart.rightLeg) {
      // right leg
      draw.moveTo(150, 150);
      draw.lineTo(200, 200);
      draw.stroke();
    }
  }
  /*
  *revealNextPart function uses an if statement to reveal each bodyPart and then call the function
   */
  function revealNextPart() {
    if (!bodyPart.scaffold) {
      bodyPart.scaffold = true;
    } else if (!bodyPart.head) {
      bodyPart.head = true;
    } else if (!bodyPart.body) {
      bodyPart.body = true;
    } else if (!bodyPart.leftArm) {
      bodyPart.leftArm = true;
    } else if (!bodyPart.rightArm) {
      bodyPart.rightArm = true;
    } else if (!bodyPart.leftLeg) {
      bodyPart.leftLeg = true;
    } else if (!bodyPart.rightLeg) {
      bodyPart.rightLeg = true;
    }else {
      const canvas = document.getElementById('stickmanCanvas');
      const draw = canvas.getContext('2d');
    
  
      let x = 50;
      let y = 75;
      let a = 150;
      let b = 100;
      let c = 100;
      let d = 150;
      let e = 200;
      let f = 150;
      let g = 200;
/**
 * loop function to animate the image and turn the background red when the player loses the game
 */
function loop() {
        x += 1;
        y += 1;
        a += 1;
        b += 1;
        c += 1;
        d += 1;
        e += 1;
        f += 1;
        g += 1;
        draw.fillStyle = 'red';
        draw.fillRect(0, 0, canvas.width, canvas.height);
  
        draw.beginPath();
        draw.moveTo(40, 230);
        draw.lineTo(10, 230);
        draw.lineTo(10, 10);
        draw.lineTo(150, 10);
        draw.lineTo(150, 25);
        draw.stroke();
        // head
        draw.beginPath();
        draw.arc(150, 50, 25, 0, 2 * Math.PI);
        draw.stroke();
        // smile
        draw.beginPath();
        draw.arc(150, 50 + 13, 11, 1 * Math.PI, 2.0 * Math.PI); // Changed the end angle to make the smile turn down
        draw.stroke();
  
        // eyes
        draw.beginPath();
        draw.moveTo(138, 50 - 7);
        draw.lineTo(142, 50 - 3);
        draw.moveTo(138, 50 - 3);
        draw.lineTo(142, 50 - 7);
        draw.stroke();
  
        draw.beginPath();
        draw.moveTo(158, 50 - 7);
        draw.lineTo(162, 50 - 3);
        draw.moveTo(158, 50 - 3);
        draw.lineTo(162, 50 - 7);
        draw.stroke();
  
        // body
        draw.moveTo(150, y);
        draw.lineTo(150, a);
        draw.stroke();
        // right Arm
        draw.moveTo(150, b);
        draw.lineTo(100, 100);
        draw.stroke();
        // left arm
        draw.moveTo(150, c);
        draw.lineTo(200, 100);
        draw.stroke();
        // left leg
        draw.moveTo(150, d);
        draw.lineTo(100, e);
        draw.stroke();
        // right leg
        draw.moveTo(150, f);
        draw.lineTo(200, g);
        draw.stroke();
  
        if (x < 100) {
          //window.requestAnimationFrame(loop);
        }
      }
    
      window.requestAnimationFrame(loop);
      alert('Sorry dead')
    }
    drawStickman(bodyPart)
  }
      /*setTimeout(function() {
        showModal();
    }, 1000);
      /**
       * showModal function to create a you lost  box after the animation loop
       
      function showModal() {
        // Create a modal element
        let modal = document.createElement('div');
        modal.className = 'modal';
        
        // Add message to the modal
        let message = document.createElement('p');
        message.textContent = `OOP's hes dead. The correct word was...${randomWordArray.join('').toUpperCase()}`;
        modal.appendChild(message);
        
        // Add modal to the document body
        document.body.appendChild(modal);
    }*/
  
      
    
  
    //drawStickman(bodyPart);
  
  
  /**
   * getRandomWord function to randomely select a word from the array. Return it as an array and assign it to selectedWord
   */
  
  // create an array that contains 5 letter words
  
  const fiveLetterWords = ['black', 'clock', 'brown', 'blast', 'stick', 'stamp', 'disty', 'child', 'style', 'frame', 'mucky', 'banjo', 'rythm'];
  
  function getRandomWord() {
    const randomWordIndex = Math.floor(Math.random() * fiveLetterWords.length);
    return fiveLetterWords[randomWordIndex];
  }
  
  const selectedWord = getRandomWord();
  
  // create an array from the selected word
  
  let randomWordArray = selectedWord.split('');
  
  console.log(randomWordArray);
  
  // push the word into the underline divs
  
  for (let i = 0; i < randomWordArray.length; i++) {
    const existingDiv = document.getElementById(`letter-${i + 1}`);
    if (existingDiv) {
      existingDiv.textContent = randomWordArray[i];
    }
  }
  
  /**
   * createLetterForKeys function to create the letters, put the letters into the key from createKay
   */
  //function createLettersForKeys() {
    const letters = [];
  
    for (let i = 97; i <= 122; i++) {
      letters.push(String.fromCharCode(i));
    }
    const keysBox = document.getElementById('keys-box');
  
    for (let i = 0; i < letters.length; i++) {
      const keys = createKey(letters[i]);
      keysBox.appendChild(keys);
    }
  
  //}
  /**
   * @param {createKey} letter function to create a key. Style the background red. Function call extra functionality when need the letter button click to call the revealNextPart
   */
  function createKey(letter) {
    const key = document.createElement('span');
    key.className = 'key';
    key.textContent = letter;
    
   // Event listener on Key to turn red when clicked and to call the checkAndHighlightLetter function
   
    key.addEventListener('click', () => {
      key.style.backgroundColor = 'red';
      checkAndHighlightLetter(letter);
    });
    return key;
  }
  // push the letters from the random array into the underline div. made letters white in css  so cant see in div until it turns to blue and add to the eventlistener
  
  const clickedLettersArray = [];
  /**
   *
   * @param {checkAndHighlightLetter} clickedLetter function to check if the letter selected is in the array then it changes the div to blue and highlights the letter. Also to call the revealNextPart function if fased
   */
  function checkAndHighlightLetter(clickedLetter) {
    let letterMatched = false;
  
    for (let i = 0; i < randomWordArray.length; i++) {
      const existingDiv = document.getElementById(`letter-${i + 1}`);
      const randomLetter = randomWordArray[i];
  
      if (existingDiv && randomLetter === clickedLetter) {
        existingDiv.style.backgroundColor = 'blue';
  
        letterMatched = true;
      }
    }
    if (!letterMatched) {
      revealNextPart();
    }
  
    handleClickedLetter(clickedLetter);
    areArraysEqual(randomWordArray, clickedLettersArray);
  }

  function handleClickedLetter(letter) {
    clickedLettersArray.push(...letter);
    
    return clickedLettersArray;
  }
  
  /**
   *
   * @param {*} clickedLettersArray an array to store the clicked letters
   * @param {*} randomWordArray an array to store the random word selected
   * 
   * areArraysEqual check if all letters in the randomWordArray are present in the clickedLettersArray and if are, returns the win message
  
   */
  function areArraysEqual(randomWordArray, clickedLettersArray) {
    const alllettersPresent = randomWordArray.every((letter) => clickedLettersArray.includes(letter));
  
    if (alllettersPresent) {
      const canvas = document.getElementById('stickmanCanvas');
      const draw = canvas.getContext('2d');
    
  
  
      let x = 50;
      let y = 75;
      let a = 150;
      let b = 100;
      let c = 100;
      let d = 150;
      let e = 200;
      let f = 150;
      let g = 200;

    /**
     * loop function to animate the man when the user wins the game
     */
      function loop() {
        x += 1;
        y += 1;
        a += 1;
        b += 1;
        c += 1;
        d += 1;
        e += 1;
        f += 1;
        g += 1;
        draw.clearRect(0, 0, canvas.width, canvas.height);
        // scaffold
        draw.beginPath();
        draw.moveTo(40, 230);
        draw.lineTo(10, 230);
        draw.lineTo(10, 10);
        draw.lineTo(150, 10);
        draw.lineTo(150, 25);
        draw.stroke();
        // head
        draw.beginPath();
        draw.arc(150, x, 25, 0, 2 * Math.PI);
        draw.stroke();
        // smile
        draw.beginPath();
        draw.arc(150, x + 5, 15, 0.2 * Math.PI, 0.8 * Math.PI);
        draw.stroke();
  
        // eyes
        draw.beginPath();
        draw.arc(140, x - 5, 2, 0, 2 * Math.PI);
        draw.stroke();
  
        draw.beginPath();
        draw.arc(160, x - 5, 2, 0, 2 * Math.PI);
        draw.stroke();
        // body
        draw.moveTo(150, y);
        draw.lineTo(150, a);
        draw.stroke();
        // right Arm
        draw.moveTo(150, b);
        draw.lineTo(100, 100);
        draw.stroke();
        // left arm
        draw.moveTo(150, c);
        draw.lineTo(200, 100);
        draw.stroke();
        // left leg
        draw.moveTo(150, d);
        draw.lineTo(100, e);
        draw.stroke();
        // right leg
        draw.moveTo(150, f);
        draw.lineTo(200, g);
        draw.stroke();
  
        if (x < 100) {
          window.requestAnimationFrame(loop);
        }
      }
    
      window.requestAnimationFrame(loop);
      alert('Your alive')
    
      setTimeout(function() {
        showModal();
    }, 1000);
      /**
       * showModal function to create a congratulations box after the animation loop
       */
      function showModal() {
        // Create a modal element
        let modal = document.createElement('div');
        modal.className = 'modal';
        
        // Add message to the modal
        let message = document.createElement('p');
        message.textContent = 'Congratulations, you saved the man!';
        modal.appendChild(message);
        
        // Add modal to the document body
        document.body.appendChild(modal);
      }
    } else{
      console.log('not all letters present')
    }
  }
  
    
    
    
   
  
      
    
  
  
    
  