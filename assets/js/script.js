// Enable ES6 features
/*jshint esversion: 6 */

// When the DOM content is loaded, execute the code
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  const resetButton = document.getElementById('reset');
  const canvas = document.getElementById('stickmanCanvas');
  const draw = canvas.getContext('2d');
  //const letterBlanks = document.querySelectorAll('.underline-box');
  const keysBox = document.getElementById('keys-box'); 

  // Arrays to store random word and clicked letters
  let randomWordArray = [];
  let clickedLettersArray = [];

  // Object to track the parts of the stickman
  const bodyPart = {
      scaffold: false,
      head: false,
      body: false,
      leftArm: false,
      rightArm: false,
      leftLeg: false,
      rightLeg: false,
  };

  // Event listener for reset button
  resetButton.addEventListener('click', resetGame);

  // Function to reset the game
  function resetGame() {
      location.reload();
  }

  // Function to draw the stickman
  function drawStickman() {
      drawScaffold();
      drawHead();
      drawBody();
      drawLeftArm();
      drawRightArm();
      drawLeftLeg();
      drawRightLeg();
  }

  // Function to draw the scaffold
  function drawScaffold() {
      if (bodyPart.scaffold) {
          draw.beginPath();
          draw.moveTo(40, 230);
          draw.lineTo(10, 230);
          draw.lineTo(10, 10);
          draw.lineTo(150, 10);
          draw.lineTo(150, 25);
          draw.stroke();
      }
  }

  // Function to draw the head
  function drawHead() {
      if (bodyPart.head) {
          draw.beginPath();
          draw.arc(150, 50, 25, 0, 2 * Math.PI);
          draw.stroke();
      }
  }

  // Function to draw the body
  function drawBody() {
      if (bodyPart.body) {
          draw.moveTo(150, 75);
          draw.lineTo(150, 150);
          draw.stroke();
      }
  }

  // Function to draw the left arm
  function drawLeftArm() {
      if (bodyPart.leftArm) {
          draw.moveTo(150, 100);
          draw.lineTo(100, 100);
          draw.stroke();
      }
  }

  // Function to draw the right arm
  function drawRightArm() {
      if (bodyPart.rightArm) {
          draw.moveTo(150, 100);
          draw.lineTo(200, 100);
          draw.stroke();
      }
  }

  // Function to draw the left leg
  function drawLeftLeg() {
      if (bodyPart.leftLeg) {
          draw.moveTo(150, 150);
          draw.lineTo(100, 200);
          draw.stroke();
      }
  }

  // Function to draw the right leg
  function drawRightLeg() {
      if (bodyPart.rightLeg) {
          draw.moveTo(150, 150);
          draw.lineTo(200, 200);
          draw.stroke();
      }
  }

  // Function to reveal the next part of the stickman
  function revealNextPart() {
      for (let part in bodyPart) {
          if (bodyPart.hasOwnProperty(part)) {
              if (!bodyPart[part]) {
                  bodyPart[part] = true;
                  break;
              }
          }
      }
      drawStickman();
      if (isGameOver()) {
          losingAnimation();
      }
  }

  // Function to check if the game is over
  function isGameOver() {
      return Object.values(bodyPart).every(part => part);
  }

  // Function to handle the losing animation
  function losingAnimation() {
      draw.fillStyle = 'red';
      draw.clearRect(0, 0, canvas.width, canvas.height);
      // Losing animation code
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
let loop = function() {
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
        window.requestAnimationFrame(loop);
      }
    };

      window.requestAnimationFrame(loop);

      setTimeout(function () {
          showModal();
          // Disable letter buttons after losing
          disableLetterButtons();
      }, 1000);

      // Function to show the losing message
      let showModal = function () {
          // Create a modal element
          let modal = document.createElement('div');
          modal.className = 'modal';

          // Add message to the modal
          let message = document.createElement('p');
          message.textContent = `OOPs he's dead. The correct word was...${randomWordArray.join('').toUpperCase()}`;
          modal.appendChild(message);

          // Add modal to the document body
          document.body.appendChild(modal);
      };

      // Function to disable letter buttons after losing
      let disableLetterButtons = () => {
          const letterButtons = document.querySelectorAll('span.key');
          letterButtons.forEach(button => {
              button.style.pointerEvents = 'none';
              button.classList.add('disabled');
          });

          document.getElementById('reset').disabled = false;
      };
  }

  // Function to handle the winning animation
  function winningAnimation() {
      // Winning animation code
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
  const loop = function() {
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
    };

      window.requestAnimationFrame(loop);

      setTimeout(function () {
          showModal();
          // Disable letter buttons after winning
          disableLetterButtons();
      }, 1000);

      // Function to show the winning message
      let showModal = function () {
          // Create a modal element
          let modal = document.createElement('div');
          modal.className = 'modal';

          // Add message to the modal
          let message = document.createElement('p');
          message.textContent = 'Congratulations, you saved the man!';
          modal.appendChild(message);

          // Add modal to the document body
          document.body.appendChild(modal);
      };

      // Function to disable letter buttons after winning
      let disableLetterButtons = () => {
          const letterButtons = document.querySelectorAll('span.key');
          letterButtons.forEach(button => {
              button.style.pointerEvents = 'none';
              button.classList.add('disabled');
          });

          document.getElementById('reset').disabled = false;
      };
  }

  // Function to check and highlight clicked letter
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

  // Function to create a key element
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

  // Function to initialize the game
  function initGame() {
      const selectedWord = getRandomWord();

      // Create an array from the selected word
      randomWordArray = selectedWord.split('');

      // Create the blanks for the selected word
      for (let i = 0; i < randomWordArray.length; i++) {
          const existingDiv = document.getElementById(`letter-${i + 1}`);
          if (existingDiv) {
              existingDiv.textContent = randomWordArray[i];
          }
      }

      // Create letter keys
      const letters = [];
      for (let i = 97; i <= 122; i++) {
          letters.push(String.fromCharCode(i));
      }

      for (let i = 0; i < letters.length; i++) {
          const keys = createKey(letters[i]);
          keysBox.appendChild(keys);
      }
  }

  // Function to get a random word
  function getRandomWord() {
      // Get random word code
      const fiveLetterWords = ['black', 'clock', 'brown', 'blast', 'stick', 'stamp', 'disty', 'child', 'style', 'frame', 'mucky', 'banjo', 'rythm'];
      const randomWordIndex = Math.floor(Math.random() * fiveLetterWords.length);
      return fiveLetterWords[randomWordIndex];
  }

  // Function to handle clicked letter
  function handleClickedLetter(letter) {
      clickedLettersArray.push(...letter);
      return clickedLettersArray;
  }

  // Function to check if two arrays are equal
  function areArraysEqual(wordArray, clickedArray) {
      const allLettersPresent = wordArray.every((letter) => clickedArray.includes(letter));

      if (allLettersPresent) {
          winningAnimation();
      }
  }

  // Initialize the game
  initGame();
});