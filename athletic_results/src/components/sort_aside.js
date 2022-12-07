import { useState } from "react";
export const Sort_Aside = ({ data }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="sidebar fixed top-0 bottom-0 lg:right-0 p-2 w-[350px] overflow-y-auto text-center bg-[#E3E3E3]">
      <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
        <i className="bi bi-search text-sm"></i>
        <input
          type="text"
          placeholder="Search"
          className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
        />
      </div>

      <div className="pt-2">
        <button
          id="dropdownDefault"
          data-dropdown-toggle="dropdown"
          onClick={handleClick}
          className="text-white bg-[#551221] hover:bg-[#8c2038] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-5/6"
          type="button"
        >
          Sort By:{" "}
          <svg
            className="ml-2 w-4 h-4"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>

      <div
        id="dropdown"
        className={`${
          showDropdown ? "block" : "hidden"
        } w-2/3 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Date
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sport
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Results
            </a>
          </li>
        </ul>
      </div>

      <div className="p-2.5 mt-3 mb-3 flex items-center rounded-md px-4">
        <h1 className="font-bold text-gray-900 text-[15px] ml-3">Filter</h1>
      </div>

      <div>
        <div className="form-check">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          <label
            className="form-check-label inline-block text-gray-800"
            for="flexCheckDefault"
          >
            DB Wins
          </label>
        </div>
      </div>
      <div className="my-4 bg-gray-600 h-[1px]"></div>
    </div>
  );
};
