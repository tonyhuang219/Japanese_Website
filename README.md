1) To set a background a certain color.

Do not write
* {
  background-color:black;
}

which will set all elements including links, paragraph to have background color black. Write

.body{
  background-color:black;
}

2) To create a fixed nav bar that move with scrolling
header{
  position: fixed; 
  z-index: 999; Makes on top of everything
}
nav {
  position: absolute;
  top: 100%;
  
}

position: fixed;  Fixed relative to viewpoint, navbar moves with scroll. 
ISSUE - is that it covers the stuff that was previously there
position: absolute; Position is relative to parent element that has position -aka header with "position fixed"
top: 100%; Element 100% down from the top edge of its nearest positioned ancestor - aka header:
