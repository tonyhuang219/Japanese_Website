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

3) Use box-sizing border-box instead of content-box. This typically makes it much easier to size elements.

The box-sizing- content-box gives you the default CSS box-sizing behavior. If you set an element's width to 100 pixels, then the element's content box will be 100 pixels wide, and the width of any border or padding will be added to the final rendered width, making the element wider than 100px.

The box-sizing- border-box tells the browser to account for any border and padding in the values you specify for an element's width and height. If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width. This typically makes it much easier to size elements. box-sizing: border-box is the default styling that browsers use for the <table>, <select>, and <button> elements, and for <input> elements whose type is radio, checkbox, reset, button, submit, color, or search.
