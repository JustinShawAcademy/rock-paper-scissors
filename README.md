# Rock Paper Scissors
A [website](https://justinshawacademy.github.io/rock-paper-scissors/) using HTML, CSS, and Javascript. 

### Core JavaScript Concepts

*   **DOM Manipulation:** The ability to connect JavaScript to HTML and dynamically change the content and structure of the page.
    *   **Selecting Elements:** Using `document.querySelector()` and `document.querySelectorAll()` to get references to HTML elements by their ID or class.
    *   **Updating Content:** Changing the text of an element using the `.textContent` property.
    *   **Event Handling:** Making the page interactive by listening for user actions.
        *   **`addEventListener()`:** Attaching a 'click' event listener to buttons to trigger game logic.
        *   **Event Object:** Understanding how to get information from the event, such as which button was clicked.

*   **Fundamental Programming Logic:**
    *   **Variables & State:** Using `let` and `const` to store data that changes over time, such as the scores (`humanScore`, `computerScore`), which represent the "state" of the application.
    *   **Functions:** Encapsulating logic into reusable blocks of code (`playRound`, `getComputerChoice`).
    *   **Conditional Logic:** Using `if...else if...else` statements to implement the core rules of the game.
    *   **Random Number Generation:** Using `Math.random()` and `Math.floor()` to create unpredictable computer choices.
    *   **Arrays:** Storing a collection of choices in an array for the computer to pick from.

### Advanced CSS Concepts

*   **Flexbox for Layout:** A deep dive into modern CSS layout techniques for arranging and aligning elements.
    *   `display: flex` to create a flex container.
    *   `flex-direction` to control the main axis (row vs. column).
    *   `justify-content` and `align-items` to precisely position items within a container.

*   **The Box Model:**
    *   **`box-sizing: border-box;`**: A critical concept for creating intuitive and predictable layouts where an element's `padding` and `border` are included in its total `width` and `height`.
    *   **Margin vs. Padding:** Understanding the key difference between `margin` (space *outside* an element) and `padding` (space *inside* an element).

*   **UI Styling and Interactivity:**
    *   **Styling Buttons:** Applying styles to `<button>` elements to create a custom look and feel.
    *   **`aspect-ratio`:** A modern CSS property to maintain the dimensions of an element (e.g., creating perfect squares for the choice items).
    *   **Custom Fonts:** Importing and applying external fonts (like Google Fonts) using `@import`.

### Bridging HTML and JavaScript

*   **Semantic HTML for Interactivity:**
    *   Using `<button>` elements for user actions, which is more semantic and accessible than using a `<div>`.
    *   Assigning `id` and `class` attributes not just for styling, but as specific "hooks" for JavaScript to select and manipulate.
*   **Script Loading:**
    *   Placing the `<script>` tag at the end of the `<body>` to ensure the HTML is fully loaded and available to the script before it runs, preventing errors where JavaScript can't find the elements it needs.
