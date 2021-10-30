import { useState } from 'react';
const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText]= useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleSaveClick = () =>{
        if (noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText('');
        }
     };

  return (
      
      <div className="container px-5 py-5 mx-auto ">
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-col flex-col ">
        <textarea
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none border-black"
        rows="8"
        cols="10"
        placeholder="Type here to add a note..."

        value={noteText}

        onChange={handleChange}
      ></textarea>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded my-4" onClick={handleSaveClick}>
        Save
      </button>
          
        </div>
      </div>
  );
};

export default AddNote;
