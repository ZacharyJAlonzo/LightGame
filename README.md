# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Zachary Alonzo

Time spent: 8 hours spent in total

Link to project: https://glitch.com/~beryl-octagonal-colossus

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Normal playthrough (none incorrect)
![FullPlaythrough](https://user-images.githubusercontent.com/62187352/110232487-8640c600-7ee3-11eb-84e4-9785cdd87803.gif)

User Fails 3 times
![Failing](https://user-images.githubusercontent.com/62187352/110232551-ed5e7a80-7ee3-11eb-8289-8785ce399442.gif)

User Loses to Time
![LosingToTime](https://user-images.githubusercontent.com/62187352/110232553-f51e1f00-7ee3-11eb-90cb-e8dbabc01cef.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

I made use of w3schools.com's HTML and CSS tutorials to find specific attributes and styles.
I read about setInterval on www.javatpoint.com, and used the examples to help imlement my timer.
I looked through example HTML and CSS files from www.csszengarden.com

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

   While working on my submission, I struggled to implement the timer functionality using SetInterval and ClearInterval. While researching these functions, I found a great javatpoint tutorial, and used it as an example to implement my timer. In their code, they inlined the JavaScript within the HTML with a <script> element. I followed their steps, inlining my own functions, but I found that I did not have enough control over the timer this way.
   After playing around with the my functions, I tried to call one that I had written in the script.js file. I was unsure if it would word. When it successfully ran, I realized that the <script> element could call functions that were defined, and continued trying to inline the timer by calling external functions. Still, I was unable to get it to work and became frustrated. I thought for a while and realized that inlining the timer was unnecessary. The tutorial had only used setInterval inline, and I had gotten tunnel vision trying to implement it the same way. I removed the <script> element and wrote two functions in the script.js file, updateTimer and resetTimer. updateTimer used javascript to update the element's text (counting down). ResetTimer called clearInterval and reset timer related variables.
    I was very pleased to finally have the timer working. I had to do some code gymnastics to reactivate the timer after each turn (I was not all that happy with this), but I had to ignore it as I was running low on available time. 
If I learned anything from this experience, it is that in the future I need to avoid tunnel vision when developing. This is something that I have noticed when I work in any language-- I can get very fixated on solving a problem one specific way that I do not think to solve it another. After I stepped away for a few minutes, I was able to reach a better solution.

     
3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

   After completing my submission, I must wonder how experienced developers use CSS to create functional, and attractive websites. I was not able to achieve much in the way of appearance, other than adding some background images to buttons. Many websites have animations and transitions that add enormous visual appeal. I am curious as to how these are implemented with HTML, CSS and JavaScript.        
   I am always curious about the best practices for a language when learning it. As I was working on the project, I wondered if I were doing things the ‘correct’ way, or if topics were simplified so that they would be easier to understand. I thought that the HTML and JavaScript I worked on was straightforward but felt that CSS was a lot to take it. I think the formatting will take a while for me to fully grasp. How do full stack developers keep all that information in their heads at once?
   While researching CSS, I found a neat website (CSSZenGarden.com) that demonstrates how CSS can be used to alter the look of an HTML file. Each variation was incredibly unique, but the underlying HTML was always the same. I thought that this was a very impressive demonstration. Looking at the source code files made me realize just how much there is to learn. It is always exciting for me to see the potential results of my learning. 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

   I wanted to add specific difficulty selection which would control the number of buttons that would be added to the game. If I had more time to work on it, I would add that feature in first. I think that the background is a bit boring as a solid color and would have liked to make it look a bit nicer, maybe with an image or a pattern. In terms of code, I was not all that happy with the timer functionality. I had to place it in an unrelated function which disabled player input when the pattern was being shown (The timer is disabled when player input is disabled, and vice versa). I am sure there is a better way to implement the timer. 
   I had initially stored all player inputs in an array, and then compared the indices <= N with the correct pattern array. I like this solution because it lets the player guess N times before being told they were incorrect, and they will not immediately know where they went wrong. I opted for the solution detailed in the project requirements to best meet them, however. My original solution is commented out, and can be viewed in the source code. There are a few 'Uncaught Type Errors' that I am unsure how to address, but they do not seem to affect execution so I chose to ignore them.




## License

    Copyright Zachary Alonzo

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
