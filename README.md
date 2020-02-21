## Javacript:

1. What is your favourite new javascript feature and why?
Ans. There are many interesting features in javascript like you can build web, mobile and desktop apps using javascript. Like React.js framework which is built in javascript and easy to learn. 

2. Explain an interesting way in which you have used this javascript feature.
ans. I used React.js to build desktop and web apps. I build a desktop application similar to upwork tracker to track user activities.

3. Is there any difference between regular function syntax and the shorter arrow function syntax? (Write the answer in your own words)
ans. Arrow function is shorter in syntax. It do not has its own "this" keyword.

4. What is the difference between ‘myFunctionCall(++foo)’   and  ‘myFunctionCall(foo++)’
ans: for e.g foo=1
	`-- myFunctionCall(++foo) ---------> output will be 2
	-- myFunctionCall(foo++) ---------> output will be 2 because its post increment
	--- after this value will be 3`

5. In your own words, explain what a javascript ‘class’ is and how it differs from a function.
ans. Javascript function is just a block of code. Which is used to perform a task like add two numbers. A class is related to OOPs programming. You can create multiple functions/methods inside a class and use that class and its method by createing class objec;


## Css:

1. In your own words, explain css specificity.
ans: CSS Specificity is an import concept for frontend guys since we use it often, whether we know it or not. Specificity determines which CSS rule is applied to a specific HTML element at any moment in browsers. This is three type of css:
1. Inline,
2. External,
3. Internal,

2. In your own words, explain, what is ‘!important’ in css. Also how does it work? Are there any special circumstances when using it, where it’s behaviour might not be what you expect?
Ans: The CSS !important rule approaches us like a fake savior angel in our darkest times while we are trying to make something work in CSS. It is a great option to have for sure, but are we really using it in the correct way and only in cases where we have no other option? 

3. What is your prefered layout system: inline-block, floating + clearing, flex, grid, other? And why?
Ans: We are using flex because It enables a flex context for all its direct children.

4. Are negative margins legal and what do they do (margin: -20px)?
No, it's not a legal way to give negative margin because it destroys the responsiveness in design.

5. If a <div/> has no margin or other styling and a <p/> tag inside of it has a margin top of some kind, the margin from the <p/> tag will show up on the div instead (the margin will show above the div not inside of it), why is this? What are the different things that can be done to prevent it?
Ans: To prevent this situation we will apply display:block on div.


Unit tests:

What technologies do you use to unit test your react components?
Ans: i use multiple test frameworks like: jest, enzyme, mocha, chai


Are there any pitfalls associated with this technology that have caused you difficulty in the past?
Ans: everything ha some limitations and same for these frameworks. But most of it covers our requirements


How do you test in your unit tests to see if the correct properties are being passed to child components.
Ans: these framework has methods to check props. I test props value with pass different values



