# Assignments

1. Recreate exactly what you see in the gif.
   ![Task 1](https://raw.githubusercontent.com/rotimi-best/react-conditional-rendering/master/src/assets/login_logout_demo.gif)

2. When I click on the button, the side navigation should disappear, and when I click it again, it should appear. See the code [here](https://jsfiddle.net/alcidesqueiroz/zwrpna7u/). Everything has already being developed all you need to do is to add a condition to remove the navigation when the button is clicked and vice versa.
   ![Task 2](https://raw.githubusercontent.com/rotimi-best/react-conditional-rendering/master/src/assets/nav_demo.gif)

3. Use the code in this [codepen](https://codepen.io/RB_Projects/pen/bGGWdPg). Loop through the array of pets in your `<App />` component and pass them as props to the `<Pet />` component. In the `<Pet />` component, check if `isDog` value, if it is true then show the `<Dog />` else `<Cat />`. Make sure you pass the required props to each child component.

4. From question 3, in the `<App />` component, add 3 buttons, the first button `<button>Only Dogs</button>` if clicked will show only dogs, the second button `<button>Only Cats</button>` if clicked will show only cats and the third button `<button>All Pets</button>` if clicked will show all pets.

5. Follow the instructions in this [codepen](https://codepen.io/RB_Projects/pen/eYYWpyx)

6. Create a component that takes a prop called `display` which is a boolean (its value is `true` or `false`). Depending on its value display `<p>You are in</p>`, if not display nothing.

   > Important: Use the logical && operator for this

7. Create a component called `ReportCard`. It has a value called `score` in its state. Something like this:

   ```javascript
   this.state = {
     score: 0
   };
   ```

   That component should have a button and every time it is clicked then the `score` should increase by 1. If the `score` is from 1 - 4, show on the screen 'Your result is poor', if from 5 - 7, show on the screen 'Your result is average', if from 8 - 10 show on the screen 'Your result is excellent'.

8. In continuation of question 7, when the `score` value in the state gets to 10 then reset that value back to zero.

9. Follow the instructions in this [codepen](https://codepen.io/RB_Projects/pen/xxxdZad). Below is an example of how the result will look like
   ![Demo](https://raw.githubusercontent.com/rotimi-best/react-conditional-rendering/master/src/assets/user_list_if_admin.png)

10. Follow the instructions in this [codepen](https://codepen.io/RB_Projects/pen/XWWRdWR)
