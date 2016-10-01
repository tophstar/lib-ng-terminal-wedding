lib-ng-terminal

====================

An AngularJS Terminal Emulator.

(A "fork" of http://vtortola.github.io/ng-terminal-emulator)

![](http://vtortola.github.io/ng-terminal-emulator/example/content/capture.png)

Visit : http://tophstar.github.io/ for a live demo.

## Quick start

ng-terminal is a library that emulates a command terminal in Javascript.  After building your terminal library you will need to add the following code to you HTML page.

```
<!-- Add in jquery dependecy -->
<script src="pathto/jquery.min.js"></script>
<!-- Add in terminal harness to construct the terminal.  An example can be found in the utility folder.-->
<script src="scripts/require.js" data-main="pathto/terminal-harness"></script>

<!-- Add in terminal style sheet -->
<link rel="stylesheet" type="text/css" href="pathto/terminal.css">

<div id="terminal-element"></div>
```

### Building

In your terminal:

git clone https://github.com/tophstar/lib-ng-terminal.git\n
npm install\n
grunt\n

### Adding Commands

To add new commands you must build your own version of the terminal. (In the future these commands will be external files loaded in at run time).

### Dependencies

jQuery\n
terminal-harness