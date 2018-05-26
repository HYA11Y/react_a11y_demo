# Demo: Managing focus with React

## Pre-requisites
### Package managers
Make sure `npm` or `yarn` is installed on your machine. You will need these to install dependencies and run your local server for development.
   - [How to install npm](https://www.npmjs.com/get-npm)
   - [How to install Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)

### Git
Make sure `git` is installed on your machine.
   - [How to install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Setup
1. Clone this repository and navigate to the newly created project directory.

```
git clone LINK_COPIED_FROM_GITHUB_REPOSITORY_PAGE
cd react_a11y_demo
```

2. Run `npm install` or `yarn install` to download the packages required to run this project.

## Running the code-along
Run `npm start` or `yarn start` to start your local server. It will launch `http://localhost:3000/` in your default browser.

You can checkout the `solution` branch to see the answers for this code-along. 

## Goal
This code-along is designed to demonstrate how to manage focus in React modal components. The finished product should implement the following keyboard interactions:

1. When the modal is triggered, either the `div.modal` element or the first interactive element inside the modal (the close button) should receive focus.

2. When the last interactive element in the modal is in focus and the user presses the `Tab` key, the first interactive element in the modal (the close button) should receive focus.

3. When the first interactive element in the modal is in focus and the user presses `Shift` + `Tab`, the last interactive element in the modal (the cancel button) should receive focus.

4. Closing the modal causes focus to shift to the element that triggered the modal.

## Not in scope
- A click event is not attached to the `Confirm` button in this demo.


