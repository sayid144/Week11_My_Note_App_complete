# WEEK 11: My Note App

This Project allows you to practice the concepts and techniques learned last Sunday and apply them in a concrete project. This assignment explored React advanced form creation and styling with Tailwind CSS. In your Project for this assignment, you will demonstrate proficiency by creating a Single Page Application that performs CRUD (Create, Read, Update, Delete) operations on a locally hosted API server.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this assignment.**

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of Repo (Not Gabi's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.
- [ ] **RUN** `npm install` at the root to retrieve all the dependencies for the node server. You will not need to create any react apps here nor will you need to install any other dependencies. You should have all you need in this repo.
- [ ]  **RUN** `npm run dev` at the root of your project.

------------------- SERVER ----------------------
- [ ] **LOOK** at all the files you've been given for this project. One important folder to note is `server`. This folder contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.
- [ ] **CHANGE** `cd` into `server` folder!
- [ ] **RUN** `npm install` in the `server` folder.
- [ ] **RUN** `npm start` to get your API up and running on `http://localhost:9000`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [ ] After your API is up and running, you can open chrome and type in `http://localhost:9000/notes`. You should see an Array `[]`. This is an array that your **API** will be using to store your notes data.
- [ ] Keep your server running while working on your project.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Submit your assignment at the student portal.


## Minimum Viable Product

The MVP of this assignment will be broken up between 2 stages.

### Stage 1

Style your application using Tailwind CSS!

- [ ] Make sure all components are showing properly
- [ ] Use Tailwind CSS to style and make your application look like [this image](/screencapture.png)
- [ ] You can reference the [Tailwind CSS Website](https://tailwindcss.com) for help.

### Stage 1

Examine all the components we created for you, you will not need to create more components unless you want to do Stretch.

- [ ] Construct an AXIOS request to retrieve an array all the notes in the Notes DB simply write a `GET` to the endpoint `/notes`.
- [ ] Display those notes in a list on the screen (You will not have any notes to start).
- [ ] Setup the `Notes` component to display all the notes.
- [ ] Setup the `AddNote` component to add new notes to the list, make sure to use `Formik` to control your form.
- [ ] Construct an AXIOS request to `POST` to add a Note to the Note DB, you will need to send `title` and `content` to create a new note.
- [ ] Display all notes underneath the `AddNote` component
- [ ] Make sure the note is displayed when it's created.
- [ ] Implement a method to delete a note.

- Example:

```js
[
  {
    title: 'Clean the house',
    content: "Buy cleaning products to clean"
  }
];
```



## STRETCH PROBLEMS

- [ ] Look at `App.js` and find the Stretch section. You will need to create a method to update each note.
- [ ] Change the color of the note being edited.
- [ ] Use [React Toast Library](https://react-hot-toast.com/) to show notifications such as "You have successfully deleted the note!"
- [ ] **ADVANCED** Implement authentication by modifying the server, `login` and `signup`, show notes only to the logged in user and only their notes.
