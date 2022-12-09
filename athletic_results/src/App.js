import { useState } from "react"
import { SearchBar } from "./components/searchbar";
import {Table } from "./components/table"

const initialData = [
  {date: new Date().toLocaleString(), sport: "Foosball", results: "w"},
  {date: new Date().toLocaleString(), sport: "Soccer", results: "w"},
  {date: new Date().toLocaleString(), sport: "Basketball", results: "w"},
]

export function App() {
    const [data, setData] = useState(initialData)

    const handleChange = (value) => {
      // alert(value)
      filterData = data.filter((result) => result.sport.toLowerCase() == value.toLowerCase());
      if(filterData.length > 0) {
        setData(filterData)
      } else {
        alert(`${value} not found`);
        setData(data)
      }
    }

    return (<>
      <h1 className="text-6xl text-red-500">Hello world!</h1>
      <SearchBar onChange={handleChange}/>
      <Table data={data}/>
    </>);
  }