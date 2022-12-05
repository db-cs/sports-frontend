export const Sort_Aside = ({ data }) => (
  <div className="sidebar fixed top-0 bottom-0 lg:right-0 p-2 w-[350px] overflow-y-auto text-center bg-[#E3E3E3]">
    <div className="text-gray-100 text-xl">
      <div className="p-2.5 mt-1 flex items-center">
        <h1 className="font-bold text-gray-900 text-[15px] ml-3">Sort</h1>
        <i
          className="bi bi-x cursor-pointer ml-28 lg:hidden"
          onclick="openSidebar()"
        ></i>
      </div>
      <div className="my-2 bg-gray-600 h-[1px]"></div>
    </div>
    <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
      <i className="bi bi-search text-sm"></i>
      <input
        type="text"
        placeholder="Search"
        className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
      />
    </div>
    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
      <i className="bi bi-house-door-fill"></i>
      <span className="text-[15px] ml-4 text-gray-900 font-bold">Home</span>
    </div>
    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
      <i className="bi bi-bookmark-fill"></i>
      <span className="text-[15px] ml-4 text-gray-900 font-bold">Bookmark</span>
    </div>
    <div>
    <div className="form-check">
      <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"></input>
      <label className="form-check-label inline-block text-gray-800" for="flexCheckDefault">
        DB Wins
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked></input>
      <label className="form-check-label inline-block text-gray-800" for="flexCheckChecked">
        Checked checkbox
      </label>
    </div>
  </div>
    <div className="my-4 bg-gray-600 h-[1px]"></div>

  </div>
);
