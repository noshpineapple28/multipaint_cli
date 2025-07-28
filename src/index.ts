import { box, list, screen, Widgets } from 'blessed';
import { terminal as term } from 'terminal-kit';

// Create a screen with mouse support
const scr: Widgets.Screen = screen({
  mouse: true, // Enable mouse support
});
term.grabInput({ mouse: 'motion' });

// list
const menu: Widgets.ListElement = list({
  width: '100%',
  height: '30%',
  xi: '0',
  yi: '0',
});

// Create a box
let box1: Widgets.BoxElement = box({
  parent: menu,
  left: '0%',
  width: '30%',
  height: '20%',
  content: 'Move your mouse and click inside the box!',
  tags: true,
  border: {
    type: 'line',
  },
  style: {
    fg: 'white',
    border: {
      fg: '#f0f0f0',
    },
  },
});
box({
  parent: menu,
  left: 'center',
  width: '40%',
  height: '30%',
  content: 'Move your mouse and click inside the box!',
  tags: true,
  border: {
    type: 'line',
  },
  style: {
    fg: 'white',
    border: {
      fg: '#f0f0f0',
    },
  },
});
box({
  parent: menu,
  left: '70%',
  width: '30%',
  height: '20%',
  content: 'Move your mouse and click inside the box!',
  tags: true,
  border: {
    type: 'line',
  },
  style: {
    fg: 'white',
    border: {
      fg: '#f0f0f0',
    },
  },
});

// Append the box to the screen
scr.append(menu);

// terminal kit mouse events cus blessed's don't wanna work :(
term.on('mouse', (name: string, data: { x: number; y: number }) => {
  if (name === 'MOUSE_MOTION') {
    menu.left = `${data.x}`;
    menu.top = `${data.y}`;
  }

  if (name === 'MOUSE_LEFT_BUTTON_PRESSED') box1.style.bg = 'red';
  else if (name === 'MOUSE_RIGHT_BUTTON_PRESSED')
    box1.setContent('Mouse clicked!');
  else box1.style.bg = 'black';
  scr.render();
});

// Quit on Escape, q, or Control-C
scr.key(['escape', 'q', 'C-c'], () => {
  return process.exit(0);
});

// Render the screen
scr.render();
