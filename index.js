const blessed = require('neo-blessed');
const term = require( 'terminal-kit' ).terminal ;

// Create a screen with mouse support
const screen = blessed.screen({
  mouse: true, // Enable mouse support
});
term.grabInput( { mouse: 'motion' , focus: true } ) ;

// Create a box
const box = blessed.box({
  top: 'center',
  left: 'center',
  width: '50%',
  height: '50%',
  content: 'Move your mouse and click inside the box!',
  tags: true,
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
    border: {
      fg: '#f0f0f0'
    }
  }
});

// Append the box to the screen
screen.append(box);

// terminal kit mouse events cus blessed's don't wanna work :(
term.on( 'mouse' , ( name , data ) => {
  if (name === "MOUSE_MOTION")
    box.setContent(`Mouse position: ${data.x}, ${data.y}`);
  else if (name === "MOUSE_LEFT_BUTTON_PRESSED")
    box.style.bg = 'red'
  else if (name === "MOUSE_RIGHT_BUTTON_PRESSED")
    box.setContent('Mouse clicked!');
  else
    box.style.bg = 'black'
  screen.render();
} ) ;

// Quit on Escape, q, or Control-C
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Render the screen
screen.render();
