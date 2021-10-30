import react from "react";
const Search = ({ handleSearchNote }) => {
  return (
      <div>
          {/* <div class=" justify-self-center">
    <h2 class="text-4xl font-semibold leading-normal mt-0 mb-2 text-black-800  ">
    Notes-Up....
  </h2>
  </div> */}

<div class="flex items-center flex-shrink-0 text-white mr-6">
			<a class="text-white no-underline hover:text-white hover:no-underline" href="#">
				<span class="text-3xl pl-2 font-bold ml-8"><i class="em em-grinning"></i> 📝 Notes-Up...</span>
                <p class="text-small ml-20">📍Taking notes now easier!</p>
			</a>
		</div>

    <div class="p-8">
      <div class="bg-white flex items-center rounded-full border-black">
        <input
        onChange={(event)=>handleSearchNote(event.target.value)}
          class="rounded-l-full w-full py-4 px-6 text-grey-700 leading-tight focus:outline-none "
          id="search"
          type="text"
          placeholder="Search..."
        />

        <div class="p-1">
          <button class="bg-blue-500 text-white rounded-full p-1 hover:bg-blue-400 focus:outline-none w-10 h-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Search;
