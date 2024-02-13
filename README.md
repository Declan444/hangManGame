#hangManGame

work plan to remind me where i am and what i am trying to achieve with each stage
1. setup index page.
2. style page. Plan is to have flexbox divs in a column.
3. try to create a stickman on the canvas using js. Used (https://www.w3schools.com/graphics/canvas_drawing.asp) to figure it out.
3. Challenge. 
    Need to break the stickman into each component e.g. scaffold, head, body, left arm, right arm, left leg, right leg. 
    Need these components to start off invisible and to appear when an event listener is clicked to validate it works.

    Make the stickman an object by having each part the property of the object and its state as the value.

4. Convert the building of the stickman into a function to bring each part of the stickman part upon a click.
5. Add letters to the keys box div. Letters need to be lowerCase. Create letters and put into an array for later. Append to the keys-box div. then make clickable and when clicked change colour
[developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
6. Style the keys
7. Create an area for the selected letters to go. 5 underlines. (done)
    a. get clicked letter to populate the created div. (done)
7a need to create an array of 5 letter words. Need to create a function to randomly select one of these words. This will act as the current game word.



8. when a user clicks a key, if correct, the letter will be placed over the relevent underline. use on stroke up of key to activate this function.
9. if the letter is incorrect a section of the hang man will appear. Use and if statement here.
10. activate the reset button to reload the game.
11. activate the solve button to allow the user to solve the word and enter the word into the underline area.
    a. if the word is correct and alert saying congratulations
    b. if incorrect game continues with another section appearing.