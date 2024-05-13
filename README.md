
  # HangManGame 
  (By Declan Lenahan)
  
![image](https://github.com/Declan444/hangManGame/assets/119152450/771e4edc-71de-42b5-a09f-2a95a52d731d)

The Hangman Game is designed to ask the player to try to solve the 5 letter word before the man is hanged. Each time the player gets a correct letter it is entered into the space provide for that particular letter and each time the letter is incorrect a part of the hanging process appears. Also when the letter is pressed the key turns red to signify that the letter has been pressed. If the user solves the word before the man is hanged they are congratulated and the man falls to the ground, saved, but if they don't solve the word, the man is hanged and his body minus his head falls to the ground and the game area turns red.
Link to live page: [Hangman Game](https://declan444.github.io/hangManGame/)

## Table of Contents

[The Landing Page](#the-landing-page)

[Design](#design)

[Features](#features)

[Footer](#footer)

[Future Features](#future-features)

[Testing](#testing)

[Validator Testing](#validator-testing)

[Javascript Validation](#javascript-validation)

[Lighthouse Testing](#lighthouse-testing)

[Deployment](#deployment)

[Credits](#credits)

[Content](#content)






## The Landing Page

![image](https://github.com/Declan444/hangManGame/assets/119152450/1985973c-9d92-46ae-b065-2daba314c820)


This is a very simple one page site. The user lands on the actual game page so that they can play immediately. They are given the game name, followed by a simple list of instructions on how to play the game. These can be seen in the screenshot above. As the game is designed for children also, the game is designed to be as simple as possible to follow and also designed to be as intuitive as possible with just four simple instructions. 

## Design
The layout of the game is primarily made for phone screen as this is how people play games like this. The game contains a central game canvas where the stick man will appear if the letter selected is incorrect. This screen is made white and the stickman appears as a black figure for easy of viewing and contrast. All text used in the game is black on a light brown background again for easy viewing. The overall game view which includes, the game information area, the canvas, the area where the letters appear if correct and the keypad are all broken using a dark brown border to highlight these areas. This allow the user to quickly understand the layout of the game and again is designed for ease of use and simplicity(with children in mind).

## Features

The top of the viewing area has four simple instructions on how to play the game. 

![image](https://github.com/Declan444/hangManGame/assets/119152450/23ca8b67-3226-41b6-9799-17ac3a5b6e9f)

This is followed by an empty canvas which is a white area. Underneath this area is an area, highlighed with 5 underlines. 

![image](https://github.com/Declan444/hangManGame/assets/119152450/cd32b133-0d66-485e-b8e0-9a11f9fad601)

This is where the letters will appear in blue backfround with light colour text for contrast if the correct letter is selected.

![image](https://github.com/Declan444/hangManGame/assets/119152450/5eb58856-4ca0-4aeb-b13a-edb7b550d51c)

Underneath this area is the key pad that the user uses to select which letter they want to select. A larger button NEW GAME is placed in the top left corner of the keypad which resets the game and the user can try again. 

![image](https://github.com/Declan444/hangManGame/assets/119152450/faca6624-67ec-4045-9e81-88b997f4d070)

When a user selects a letter, if the correct is selected, this letter appears with a blue background at one of the underlined spaces. The letter appears where it appears in the correct word. If there are two of the same correct letters in the word, both letters appear in the word in their correct position. This key turns red on the keypad to indicate that this letter has been selected.

![image](https://github.com/Declan444/hangManGame/assets/119152450/1f08f9c2-970d-40f9-9c1c-f6c71626f6d8)

If the user selects an incorrect letter, the letter that they have selected in the key pad turns red to indicated that this letter has been selected. A part of the hangman also appears within the canvas. 

![image](https://github.com/Declan444/hangManGame/assets/119152450/b5995305-5ad3-436b-a20d-f2b63a58f7ce)

If the user correctly selects all the letters in the word, thereby winning the game, an alert is given to the screen with congratulations to the user for saving the man. When they click ok on the alert, the man falls from the gallows with his head in tact and a smile on his face. 

![image](https://github.com/Declan444/hangManGame/assets/119152450/6848d439-ecdd-483e-be4a-9f81a5deefd5)

If the user can not solve the word, an alert is sent to the screen stating that the man has been killed, when they click ok on the alert, the body minus falls to the ground, the head makes a sad face and the background turns red. 

![image](https://github.com/Declan444/hangManGame/assets/119152450/84301f5a-53e5-4f8c-98c5-6279fc03ae3d)

The user can then click new game to start the process over again.

## Footer

The footer contains a copyright LA Research Labs 2024


## Future Features

Ideally with more time and development, the user would be asked to select the length of letters in the word that they want to play e.g. a 3 letter word, 4 letter word, 5 letter word etc. This would give the user more difficult challenges with the game. Also a suggestion by on user was to change the keypad to a qwerty layout.

## Testing

The game has been tested on laptops, wide screens and on various phone screens by a number of adults and children. The game worked as it should on all devices. 

## Validator Testing

![image](https://github.com/Declan444/hangManGame/assets/119152450/a7ca77dd-bcd7-4a3d-b301-dbe1ca896b54)

![image](https://github.com/Declan444/hangManGame/assets/119152450/a4d51274-6e2c-4fad-adaa-43e85c7cbc6a)

## Javascript Validation
![image](https://github.com/Declan444/hangManGame/assets/119152450/9de54ad2-11d3-4575-84dc-9b5729e3dac8)


## Lighthouse Testing

![image](https://github.com/Declan444/hangManGame/assets/119152450/c63608fb-20ea-4b29-9097-7d3f30327671)

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:
In the GitHub repository, navigate to the Settings tab
From the source section drop-down menu, select the Master Branch
Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. The live link can be found here - (https://declan444.github.io/hangManGame/)

## Credits
I'd like to thank Spencer Barriball, my mentor at Code Institute, for giving me valuable guidance and support throught the duration of this project. The majority of my learning came from the Code Institute course content and the Love Maths Walk Through. This allowed me to set our the structure of the site. I also used  (https://www.w3schools.com/graphics/canvas_drawing.asp) to figure out how to draw the stickman using a canvas. I used [developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures]https://developer.mozilla.org/en-US/docs/Glossary/Falsy. A constant go to that I use is https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide as suggested by my mentor. I used numerous youtube videos to solve any issues that I needed to work through. An example is the Kyle Robinson Young video I used to design the animation of the hangman.
2D Animations with Canvas and JavaScript  from Kyle Robinson Young Youtube video. https://www.youtube.com/watch?v=TpRYLEFu4Mc
https://www.w3schools.com/howto/howto_css_modals.asp

## Content
All of text and code in this project was generated by myself.





