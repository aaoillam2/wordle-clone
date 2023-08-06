# It's just wordle.

## Feel free to play it at: https://hcylam745.github.io/#/wordle 
<br/>

To play, type the 5 letter word desired, and press enter to submit.<br/><br/>

## Pictures Below:
![Image Before Playing](https://github.com/hcylam745/wordle-clone/assets/78908352/f014ca86-3cd9-410d-9d16-292620361470)
![Image After Playing](https://github.com/hcylam745/wordle-clone/assets/78908352/4b3830cf-3549-445e-ba39-1855c328a51c)

## Implementation Details: <br/>
It uses react-redux to create a store, which is then updated by the input boxes.<br/><br/>
After 5 letters are stored, and the user clicks enter, it checks with a dictionary API to make sure that the input is a word, then changes the colours on the page according to wordle's rules.

<br/>

## Things in progress: <br/>

* Add a keyboard at the bottom to indicate which characters were inputted by the user.<br/>
* Rework it from an input text box to divs, and listen for user input<br/>
* Handle correctly what happens if the user types a word with two of one character.