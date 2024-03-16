# HangManGame 
![image](https://github.com/Declan444/hangManGame/assets/119152450/771e4edc-71de-42b5-a09f-2a95a52d731d)

The Hangman Game is designed to ask the player to try to solve the 5 letter word before the man is hanged. Each time the player gets a correct letter it is entered into the space provide for that particular letter and each time the letter is incorrect a part of the hanging process appears. Also when the letter is pressed the key turns red to signify that the letter has been pressed. If the user solves the word before the man is hanged they are congratulated and the man falls to the ground, saved, but if they don't solve the word, the man is hanged and his body minus his head falls to the ground and the game area turns red.

## The Landing Page
This i a very simple one page site. The user lands on the actual game page so that they can play immediately. They are given the game name, followed by a simple list of instructions on how to play the game. These can be seen in the screenshot above. As the game is designed for children also, the game is designed to be as simple as possible to follow and also designed to be as intuitive as possible with just four simple instructions. 

## Design
The layout of the game is primarily made for phone screen as this is how people play games like this. The game contains a central game canvas where the stick man will appear if the letter selected is incorrect. This screen is made white and the stickman appears as a black figure for easy of viewing and contrast. All text used in the game is black on a light brown background again for easy viewing. The overall game view which includes, the game information area, the canvas, the area where the letters appear if correct and the keypad are all broken using a dark brown border to highlight these areas. This allow the user to quickly understand the layout of the game and again is designed for ease of use and simplicity(with children in mind).

## Features

The top of the viewing area has four simple instructions on how to play the game. This is followed by an empty canvas which is a white area. Underneath this area is an area, highlighed with 5 underlines. This is where the letters will appear in blue backfround with light colour text for contrast if the correct letter is selected. Underneath this area is the key pad that the user uses to select which letter they want to select. A larger button NEW GAME is placed in the top left corner of the keypad which resets the game and the user can try again. 

When a user selects a letter, if the correct is selected, this letter appears with a blue background at one of the underlined spaces. The letter appears where it appears in the correct word. If there are two of the same correct letters in the word, both letters appear in the word in their correct position. This key turns red on the keypad to indicate that this letter has been selected.

If the user selects an incorrect letter, the letter that they have selected in the key pad turns red to indicated that this letter has been selected. A part of the hangman also appears within the canvas. 

If the user correctly selects all the letters in the word, thereby winning the game, an alert is given to the screen with congratulations to the user for saving the man. When they click ok on the alert, the man falls from the gallows with his head in tact and a smile on his face. 

If the user can not solve the word, an alert is sent to the screen stating that the man has been killed, when they click ok on the alert, the body minus falls to the ground, the head makes a sad face and the background turns red. 

The user can then click new game to start the process over again.

## Footer

The footer contains a copyright LA Research Labs 2024

## Wireframe

## Future Features
Ideally with more time and development, the user would be asked to select the length of letters in the word that they want to play e.g. a 3 letter word, 4 letter word, 5 letter word etc. This would give the user more difficult challenges with the game. Also a suggestion by on user was to change the keypad to a qwerty layout.

## Testing
The game has been tested on laptops, wide screens and on various phone screens by a number of adults and children. The game worked as it should on all devices. 

## Validator Testing

![image](https://github.com/Declan444/hangManGame/assets/119152450/a7ca77dd-bcd7-4a3d-b301-dbe1ca896b54)



![image](https://github.com/Declan444/hangManGame/assets/119152450/a4d51274-6e2c-4fad-adaa-43e85c7cbc6a)




## Lighthouse Testing

![image](https://github.com/Declan444/hangManGame/assets/119152450/c63608fb-20ea-4b29-9097-7d3f30327671)


## References
3. try to create a stickman on the canvas using js. Used (https://www.w3schools.com/graphics/canvas_drawing.asp) to figure it out.


5. Add letters to the keys box div. Letters need to be lowerCase. Create letters and put into an array for later. Append to the keys-box div. then make clickable and when clicked change colour
[developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)


