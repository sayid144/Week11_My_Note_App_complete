import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {

  return (
    <div className="flex flex-wrap justify-items-center shadow-lg mt-5">

      {props.notes.map((note) => (
        <div key={note.id} className=" bg-yellow-500 border-2 m-5 shadow-2xl p-8 hover:bg-green-500 text-center" >
          <div className="p-5">
            <p className="font-bold">{note.title}</p>
            <p>{note.content}</p>
          </div>
          <div className="mb-6 ">
            <button>
              <FaEdit ></FaEdit>
            </button>
            <button>
              <FaTrash onClick={() => props.deleteNote(note.id)}></FaTrash>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notes;