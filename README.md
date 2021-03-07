# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **NAME**

Time spent: **#** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

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

## Video Walkthrough

Full playthrough (no fails)
![FullPlaythrough](https://user-images.githubusercontent.com/62187352/110233918-fc95f600-7eec-11eb-82d0-1b4044ca33ba.gif)

Failing 3 times
![Failing](https://user-images.githubusercontent.com/62187352/110233920-028bd700-7eed-11eb-9f6b-5c88ede43448.gif)

Failing due to timer
![LosingToTime](https://user-images.githubusercontent.com/62187352/110233925-0a4b7b80-7eed-11eb-8de9-bf14d50fbf43.gif)




## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I used www.w3Schools.com HTML and CSS tutorials when I was stuck.
I used www.javatpoint.com when learning setInterval and clearInterval
 
2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

While working on my submission, I struggled to implement the timer functionality using SetInterval and ClearInterval. While researching these functions, I found a great javatpoint tutorial, and used it as an example to implement my timer. In their code, they inlined the JavaScript within the HTML with a <script> element. I followed their steps, inlining my own functions, but I found that I did not have enough control over the timer this way.
After playing around with the my functions, I tried to call one that I had written in the script.js file. I was unsure if it would word. When it successfully ran, I realized that the <script> element could call functions that were defined, and continued trying to inline the timer by calling external functions. Still, I was unable to get it to work and became frustrated. I thought for a while and realized that inlining the timer was unnecessary. The tutorial had only used setInterval inline, and I had gotten tunnel vision trying to implement it the same way. I removed the <script> element and wrote two functions in the script.js file, updateTimer and resetTimer. updateTimer used javascript to update the element's text (counting down). ResetTimer called clearInterval and reset timer related variables.
 I was very pleased to finally have the timer working. I had to do some code gymnastics to reactivate the timer after each turn (I was not all that happy with this), but I had to ignore it as I was running low on available time. 
In the future I need to avoid tunnel vision when developing. This is something that I have noticed when I work in any language-- I can get very fixated on solving a problem one specific way that I do not think to solve it another. Implementing this timer made me remember that. After I stepped away for a few minutes, I was able to reach a better solution.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

   After completing my submission, I must wonder how experienced developers use CSS to create functional, and attractive websites. I was not able to achieve much in the way of appearance, other than adding some background images to buttons. Many websites have animations and transitions that add enormous visual appeal. I am curious as to how these are implemented with HTML, CSS and JavaScript. I am always curious about the best practices for a language when learning it. As I was working on the project, I wondered if I were doing things the ‘correct’ way, or if topics were simplified so that they would be easier to understand. I thought that the HTML and JavaScript I worked on was straightforward but felt that CSS was a lot to take it. I think the formatting will take a while for me to fully grasp. How do full stack developers keep all that information in their heads at once? I am sure it comes with experience, but starting out it feels a bit daunting. While researching CSS, I found a neat website (CSSZenGarden.com) that demonstrates how CSS can be used to alter the look of an HTML file. Each variation was incredibly unique, but the underlying HTML was always the same. I thought that this was a very impressive demonstration. Looking at the source code files made me realize just how much there is to learn, but it is always exciting for me to see the potential results of my learning. I am curious if developers only implement the designs they are given, or if they are able to give input for what they create.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had more time to work on this project, I would want to implement buttons for the user to pick a difficulty, the number of buttons, and the length of the final sequence. I felt that the background was a bit boring and would have liked to add maybe an image or a pattern for visual appeal. In terms of code, I was not happy with the timer functionality. I had to place the activation and deactivation in an unrelated method which controls player inputs. This seems a bit dirty. I either need to rename the method to reflect its effects on the timer, or I need to figure out a better solution. There are a few Uncaught Type Errors that I am unsure how to resolve, but they do not seem to affect execution, so I ignored them for now. If I had more time, I would resolve these issues.



## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
