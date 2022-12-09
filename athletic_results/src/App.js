import { SearchBar } from "./components/searchbar.js";
import { SortBy } from "./components/sortby.js";
export function App() {
    const handleChange = (value) => {
      alert(value)
    }

    return (<>
      <h1 className="text-6xl text-red-500">Hello world!</h1>
      <SearchBar onChange={handleChange}/>
    </>);
  }