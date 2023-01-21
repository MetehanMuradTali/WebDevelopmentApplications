<div align="center">
  <h2>Caesars Cipher
</h2>
</div>
One of the simplest and most widely known ciphers is a <i>Caesar cipher</i>, also known as a <i>shift cipher</i>. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the <u>ROT13</u> cipher, where the values of the letters are shifted by 13 places. Thus <span style="background-color:grey">`A ↔ N`</span>, <span style="background-color:grey">`B ↔ O`</span> and so on.

Write a function which takes a <u>ROT13</u> encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


<div align="center">
  <h2>Tests</h2>
</div>

> `rot13("SERR PBQR PNZC")` should decode to the string **FREE CODE CAMP**

> `rot13("SERR CVMMN!")` should decode to the string **FREE PIZZA!**

> `rot13("SERR YBIR?")` should decode to the string **FREE LOVE?**

> `rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` should decode to the string **THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.**
