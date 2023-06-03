import React, { useEffect, useState } from "react";
// Import all your components here
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";

import axios, { Axios } from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // get all notes from localhost:9000/notes using axios
    axios.get("http://localhost:9000/notes")
      .then((res) => {
        console.log(res);
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  const createNote = (noteData) => {
    // Make API call to create a note (POST request to localhost:9000/create_note)
    axios.post('http://localhost:9000/create_note', noteData)
      .then((response) => {
        setNotes((prevNotes) => [...prevNotes, noteData])
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const deleteNote = (id) => {
    // Make API call to delete a note (DELETE request to localhost:9000/delete_note/:id)
    axios
      .delete(`http://localhost:9000/delete_note/${id}`)
      .then(() => {
        setContacts((prevNotes) =>
          prevNotes.filter((currentNotes) => currentNotes.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });


  };

  // STRETCH GOAL: Implement edit functionality
  // STRETCH GOAL: Isku day inaa edit ku sameyso notes-ka

  return (
    <div className="bg-blue-600 min-h-screen flex">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-white mb-5 mt-5">My Notes</h3>
          <AddNote createNote={createNote} />
          <Notes notes={notes} deleteNote={deleteNote} />
        </div>

      </div>
    </div>
  );
}

export default App;