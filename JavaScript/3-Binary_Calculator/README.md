<div align="center">
  <h2>Palindrome Checker</h2>
</div>
<h3>Objective</h3>

In this challenge, we implement a calculator that uses binary numbers. 
!["img 0"](img/0.png "BinaryCalculatorImg0");

<h3>Constraints</h3>


+ All expressions in the test dataset are entered in the form `operand1 -> operator -> operand2`, where `operand1` is the first binary number, `operand2` is the second binary number, and `operator` is in the set `{+ , - , * , =}`.
+ Both operands will always be positive integers when converted from base-**2** to base-**10**.
+ All expressions will be valid.

<h3>Explanation</h3>
Consider the following sequence of button clicks:

     1 -> 1 -> 0 -> 1 -> 1 -> + -> 1 -> 0 -> 0 -> 0 -> = 

Before pressing the **=** button, the result div looks like this:

!["img 0"](img/1.png"BinaryCalculatorImg0");

After pressing the **=** button, the result div looks like this:

!["img 0"](img/2.png "BinaryCalculatorImg0");

Notice that (11011)<sub>2</sub> = (27)<sub>10</sub> , (1000)<sub>2</sub> = (8)<sub>10</sub> , and  (100011)<sub>2</sub> = (35)<sub>10</sub> so our calculator evaluated the expression correctly.

Now, let's consider our next sequence of button clicks as:

    0 -> 1 -> * -> 1 -> 1 -> 1 -> = 

Before pressing the **=** button, the result div looks like this:

!["img 0"](img/3.png "BinaryCalculatorImg0");

After pressing the **=** button, the result div looks like this:

!["img 0"](img/4.png "BinaryCalculatorImg0");

Consider the next sequence of button clicks as:

    C -> 1 -> 1 

The result div looks like this:

!["img 0"](img/5.png "BinaryCalculatorImg0");

[*The source is from HackerRank*
](https://www.hackerrank.com/challenges/js10-binary-calculator)