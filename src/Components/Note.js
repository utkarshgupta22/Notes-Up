const Note = ({ id, text, date, month, handleDeleteNote }) => {
  return (
    <section className="text-white body-font ">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col ">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gray-300 text-black flex-shrink-0 font-bold ">
            <h1>
              {date} {month}
            </h1>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 ">
            <p className="leading-relaxed text-base">{text}</p>
          </div>
          <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={()=> handleDeleteNote(id)}
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          </button>
        </div>
      </div>
    </section> 
  );
};

export default Note;