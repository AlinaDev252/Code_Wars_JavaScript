# Code Wars with JavaScript

In order to improve my problem solving skills and also to learn JavaScript syntax, I decided to solve at least 1 Kata/day, using https://www.codewars.com/

My user account is: https://www.codewars.com/users/AlinaDev252
Bellow you can find the description for each Kata I selected.

-> Kata1 - Friend or Foe?

Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

-> Kata2 - List Filtering

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Ex.: [1,2,'aasf','1','123',123] == [1,2,123]

-> Kata3 - Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Ex.:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

-> Kata4 - A wolf in sheep's clothing

Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep] (YOU ARE HERE AT THE FRONT OF THE QUEUE)
7 6 5 4 3 2 1

If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
Note: there will always be exactly one wolf in the array.

Ex.:
warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]) === "Oi! Sheep number 1! You are about to be eaten by a wolf!"
warnTheSheep(["sheep", "sheep", "wolf"]) === "Pls go away and stop eating my sheep"

-> Kata5 - Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer.

-> Kata6 - Is he gonna survive?

A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)

-> Kata7 - Double Sort

Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

Note that numbers written as strings are strings and must be sorted with the other strings.

-> Kata8 - Check if a triangle is an equable triangle!

A triangle is called an equable triangle if its area equals its perimeter. Return true, if it is an equable triangle, else return false. You will be provided with the length of sides of the triangle. Happy Coding!

-> Kata9 - Summy

Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer in the string into an integer and return their sum.

Ex.: summy("1 2 3") ==> 6

-> Kata10 - Simple string reversal

In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo".
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy".
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces.

Good luck!

-> Kata11 - Divide and Conquer

Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.

-> Kata12 - Two to One

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Ex.:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

-> Kata13 - FIXME: Get Full Name

The code provided is supposed return a person's Full Name given their first and last names.
But it's not working properly.
Notes - The first and/or last names are never null, but may be empty.
Task - Fix the bug so we can all go home early.

-> Kata14 - Fizz Buzz

Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).
Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

Method calling example:
fizzbuzz(3) --> [1, 2, "Fizz"]

-> Kata15 - Powers of i

i is the imaginary unit, it is defined by i² = -1, therefore it is a solution to x²+1=0.
Your Task
is to write a function pofi that returns i to the power of a given non-negative integer in its simplest form as a string (answer may contain i).

-> Kata16 - Even numbers in an array

Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:
([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

-> Kata17 - HTML Generator

Another rewarding day in the fast-paced world of WebDev. Man, you love your job! But as with any job, somtimes things can get a little tedious. Part of the website you're working on has a very repetitive structure, and writing all the HTML by hand is a bore. Time to automate! You want to write some functions that will generate the HTML for you.

To organize your code, make of all your functions methods of a class called HTMLGen. Tag functions should be named after the tag of the element they create. Each function will take one argument, a string, which is the inner HTML of the element to be created. The functions will return the string for the appropriate HTML element.

For example,

JavaScript:

var g = new HTMLGen();
var paragraph = g.p('Hello, World!');
var block = g.div(paragraph);

// The following are now true
paragraph === '<p>Hello, World!</p>'
block === '<div><p>Hello, World!</p></div>'

Your HTMLGen class should have methods to create the following elements:

a
b
p
body
div
span
title
comment
Note: The comment method should wrap its argument with an HTML comment. It is the only method whose name does not match an HTML tag. So, g.comment('i am a comment') must produce <!--i am a comment-->.
