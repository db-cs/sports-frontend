import {useState} from "react"
export const SearchBar = ({onChange}) => {
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onChange(value)
    }
    
   return(
   <form onSubmit={handleSubmit}>
        <input 
            type="search"
            class="
            form-control
            rounded-full
            w-half
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded-full
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search"
            value={value}
            onChange={handleChange}
        />
    </form>
    )
};