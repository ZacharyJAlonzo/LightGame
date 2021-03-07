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
![](your-link-here)
![FullPlaythrough](https://user-images.githubusercontent.com/62187352/110232487-8640c600-7ee3-11eb-84e4-9785cdd87803.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I made use of w3schools.com's HTML and CSS tutorials to find specific attributes and styles.
I read about setInterval on www.javatpoint.com, and used the examples to help imlement my timer.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[YOUR ANSWER HERE]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

After completing my submission, I have to wonder how experienced developers use CSS to create such nice looking websites. I was not able to achieve much, other than adding background images to buttons. I looked through w3schools tutorials, and the CSS buttons that they create as examples are very clean, the styling changes the look greatly.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I wanted to add specific difficulty selection which would control the number of buttons that would be added to the game. If I had more time to work on it, I would add that feature in first. I think that the background is a bit boring as a solid color, and would have liked to make it look a bit nicer, maybe with an image or a pattern. In terms of code, I was not all that happy with the timer functionality. I had to place it in an unrelated function which disabled player input when the pattern was being shown (The timer is disabled when player input is disabled, and vice versa). I'm sure there is a better way to implement the timer.



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
