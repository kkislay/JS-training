Topics 
Exception Handling
Promises (Async-Await, callbacks... etc)
Closures
Regular Expressions

-----------------------------------------------

Exception handling deals with problems which can arise in our code due to reasons like improper inputs, processing, logic.
We try to handle exceptions.
Most common way to handle exception is by try/catch block.

Witin try blocks we put statements which cause issues.
When the issue occurs, flow will go to catch block and within the catch block we can write our handling logic.
To cause a custom exception to occur in JS we can make use of throw. Sucn excpetion are known as custom exception or applicatino exception
Sometimes we might want to do some processing irrespective of exception orrured or not. We can achieve this with the help of finally block.
in build errors/exceptions in JS as name and message properties.
-----------------------

Promises
Promises act as a link between a provider and consumer
COnsumer will have to wait for a result.

-------- 
Call back function
In JS, we can pass function as an argument to another function. This forms basis of callback function.
async makes a function return promise while await makes a function wait for promise


A regex is a pattern of characters.
General use of regex is to extract or replace.
Expression	Description
[abc]	Find any character between the brackets
[^abc]	Find any character NOT between the brackets
[0-9]	Find any character between the brackets (any digit)
[^0-9]	Find any character NOT between the brackets (any non-digit)
(x|y)	Find any of the alternatives specified
.	Find a single character, except newline or line terminator
\w	Find a word character
\W	Find a non-word character
\d	Find a digit
\D	Find a non-digit character
\s	Find a whitespace character
\S	Find a non-whitespace character
\b	Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
\B	Find a match, but not at the beginning/end of a word
\0	Find a NULL character
\n	Find a new line character
\f	Find a form feed character
\r	Find a carriage return character
\t	Find a tab character
\v	Find a vertical tab character
\xxx	Find the character specified by an octal number xxx
\xdd	Find the character specified by a hexadecimal number dd

pattern to check valid email -----  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

Regex website - https://regexr.com/
 regex matcher - https://regex-generator.olafneumann.org/
 or - https://cheatography.com/davechild/cheat-sheets/regular-expressions/


RegExp is a built-in object provided by JS
=> test is built-in function to check 
