# Assignments

1. Create a component that has a list of different names in its state, and anytime I click on a button it should pick a random name and display it in the browser wrapped in an h1 tag.

2. Create a Todo component that displays a list of todos inside li tags. The todo component should have an input field. When a value is typed into the field and the enter button is clicked, that value should be added to the list of todos and displayed in the browser.

3. Any time any todo in the list is clicked then that todo must be removed from the list of todos in the Todo component.

4. Write a component that takes in 2 props, `min` and `max`, anytime we click on a button it should generate a random number between the min and max values from the props. The value should be displayed on the screen on every click. In addition if the random number is an even number then change it, if its an odd number then don't change it.

5. Make a `GET` request to this [API](https://jsonplaceholder.typicode.com/posts) and fetch a list of posts. Display each of this information similar to the image below. You can choose to style it and make it look better than this, but this is just an example of how the data should be presented in the page. Note: make sure you make the request as soon as the app is opened in the browser
   ![display_data_from_api_demo](https://raw.githubusercontent.com/rotimi-best/react-tutorial/master/lesson_one/assets/display_data_from_api_demo.jpg)

6. Make a request to this [API](https://github.com/kkmkkkkk), it will return an error. Make sure your application doesn't crash by handling the error returned from the server. Console the error and show an error page similar to this:
   ![error_page](https://raw.githubusercontent.com/janmisek/ember-error-handler/master/github/error-prod.png)

7. Create a galary component that once the page is loaded you make a request to this [API](https://picsum.photos). Please read the documentation of the API and the get 10 images and there should be a left and right button while the image is in between where a user can click to move to the next image or previous. Everytime the button is clicked the author of the image should be displayed beneath the image and as the images change the author also changes.

8. Rewrite the html part of this [website](https://mybookmarker.glitch.me) into React Components. Here is the [source code](https://github.com/rotimi-best/bookmarker)

9. In continuation of question 8, rewrite the javascript code `/js/main.js` into your Component

10. Use lifecycle methods in the right places where they should be.
