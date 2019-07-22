# Doing TDD Well: Bowling Game Kata

## Your Task

Create a program, which, given a valid sequence of rolls for a single game (line) of Ten-Pin Bowling, produces the total score for the game. As time is limited, your program does not have to:

* check for valid rolls
* check for the correct number of rolls and frames
* provide scores for intermediate frames

## Ten-Pin Bowling Scoring

### The Basics

One game (or line) of bowling consists of 10 frames, with a minimum score of zero and a maximum of 300. Each frame consists of two chances to knock down ten pins.


### Open Frames

After two rolls, if at least one pin is still standing, then this is called an open frame (frame score is less than 10). The score for the frame is just the total number of pins knocked down by the two rolls.

### Spares

Taking two rolls to knock down 10 pins is called a spare (usually denoted by a / ).

A spare is worth 10, plus the value of your next roll.

e.g. If you roll a spare in your first frame and then knock down 7 pins in the first roll of the next frame, your score for the first frame will be 17 (10 + 7).

The maximum score for a frame in which you roll a spare is 20 (a spare followed by a strike). The minimum score is 10 (a spare followed by a gutter ball which scores 0).

### Strikes

If you knock down all ten pins on the first roll of a frame, this is called a strike (usually denoted by an X ). For all frames except the 10th (last frame) you do not roll again this frame.

A strike is worth 10, plus the value of your next two rolls.

At a minimum, your score for a frame in which you roll a strike will be 10 (10 + 0 + 0). The maximum is 30 if your next two rolls are both strikes (10 + 10 + 10).

e.g. If you roll a 6 on your first ball and a 2 on your second in the frame after a strike, your score for the previous frame will be 18 (10 + 6 + 2).

### The Tenth Frame

If the last frame is an open frame then you get two rolls as usual.

If you roll a spare in the first two rolls of the last frame, you need an extra roll to determine the value of the frame. This is called a fill ball. The frame therefore consists of three rolls.

If you roll a strike on your first ball of the last frame, you get two more rolls to determine the total value of the frame. Again, the frame consists of three rolls.

### A Sample Game
Frame|1|2|3|4|5|6|7|8|9|10  
-----|---|---|---|---|---|---|---|---|---|--- 
**Result**|X|7,/|7,2|9,/|X|X|X|2,3|6,/|7/3
**Frame Score** |20|17|9|20|30|22|15|5|17|13
**Running Total**|20|37|46|66|96|118|133|138|155|168


## Create your jest test file


1.  Create a file `bowling_game.test.js` 

2.  Write your first test!

3.  Use TDD to write your program and complete the kata..


