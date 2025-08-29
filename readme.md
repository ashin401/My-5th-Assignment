
### Below is the answer to the question clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
ans: getElementById("idName")
This is used to select a specific element by its id.Since an id is unique (only one per page), it will always return just one element.

getElementsByClassName("className")
This is used to select all elements that share the same class name.If there are multiple elements, it returns all of them as an HTMLCollection (similar to a list).

querySelector("selector")
This is used to select an element using a CSS selector.Among all the matching elements, it returns only the first matched element.

querySelectorAll("selector")
This also selects elements using a CSS selector.But unlike querySelector, instead of only the first one, it returns all matching elements.These are returned as a NodeList (which can be looped over using forEach).

2. How do you **create and insert a new element into the DOM**?
ans: With methods like document.createElement(), appendChild(), append(), prepend(), before(), after(), etc. you can create new elements and insert them into the DOM.In other words: create a new element + add it.

3. What is **Event Bubbling** and how does it work?
ans: Event Bubbling is a process where, if an event (such as a click) occurs on a child element, the event first works on the child element, and then step by step bubbles up to its parent → grandparent → all the way up to the document.Spreading of the event from the inner element outward is called Event Bubbling.

4. What is **Event Delegation** in JavaScript? Why is it useful?
ans: Event Delegation is a technique where we place the event listener on a parent element, and that event also works for its child elements (using event bubbling).

Why is this useful?

i. Even if there are many child elements, we don’t need to attach separate listeners to each → the code is shorter and performance is better.

ii. If new child elements are added in the future, they will also work automatically with the parent’s event listener.

iii. It uses less memory, because a single listener works for many elements.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
ans: preventDefault():
Stops the default behavior of an element.

stopPropagation():
Prevents the event from spreading (bubbling/propagating) to the parent element.

