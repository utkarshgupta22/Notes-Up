import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./Components/NotesList";
import Search from "./Components/Search";
const App = () => {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    return () => {};
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    // const heading = new heading();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      // heading: heading,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div>
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
