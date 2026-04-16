From my Assignment 2, the current architecture only has index.html, which boots up the page, the assignment.css that brings visuals such as color and organization, 
and then the JavaScript file called assignment.js that does the DOM Manipulation, Game Logic, and some visuals changes to name a few. As I said before, there is only one 
JavaScript file called assignment2.js. For further understanding of the file, it: 

- Saves the data of all the images in the images file.  

- Creates a 6 by 16 grid that will show numbers in the grid.  

- Creates a palette of color buttons for each puzzle. 

- Generate buttons for each puzzle and click between each of them. 

- Constructing a settings UI that gives more options, page themes; dark, light, default, and resetting the current puzzle the user is on.  

- Gives accessibility to keyboard control when interacting on the website.  

- Calculate percentage for how much the user colored on the canvas. 

All the responsibilities are intertwined in this single file as my team is constantly writing new functions that will help improve the website. 
There are some comments for each function, and some lines of code for specific mechanics that bring clarity to what it does.  

 

 

First, I created about 6 or more modules that will go through similar functions together, but it got hectic and confusing when I was importing and exporting files
from different js files, which resulted in having a circular loop of errors and bugs. So, I decided to scrap the whole process and simple it down to 3 modules.  

I decided to refactor the Data Loading + Game Logic into one module called Puzzle.js and DOM mainpulation + Event Handling into another module called ui.js. 
I created another JavaScript file called main.js to execute both puzzle.js and ui.js. Doing this I created similar functions from the assignment2.js that will: 

Create more clarity for seeing where or how the Game logic + Data Loading as in seeing 
  - How the grid is made and constructed from the image 
  
  - How the numbers are processed onto the grid in puzzle.js.  
  
  - How the cells are stored in the local Storage. 

Then DOM manipulation for the ui.js file to 

  - Make interactions from the mouse to the cell 
    
  - Creating the color buttons, 
    
  - Switching between the colors. 
    
  - Saving cell data into the local storage. 

 

In the end, what I learned about modular design is that it takes a lot looking through large amounts of code and reconstructing that will fit into a module. 
Another thing I learned was that most of the errors I encountered were import and export errors between different modules as it gives crash errors due to an import. 
A specific challenge I faced was a whole lot of errors when converting the 444 lines of code into separate modules. Testing it was the most irritating part as looking 
at the module, you think it will work but running the website and seeing that it does not work and more errors show up. I think what I would refactor next if I had more 
time was maybe trying to separate the create Grid itself into it’s own module as it was most of the code that was taking a lot of line of code. Or the Game Logic as I think it 
requires it’s own module for being used for saving data from mouse interactions and the correct number on the correct cell. Also, trying to finish the modules itself as it was close 
to being exact with the raw code in assignment2.js, but some errors still occurred. 
