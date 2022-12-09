import {useState} from "react"
import { AllResults } from "./AllResults";
import { Form } from "./Form";

export const Dashboard = (props) => {
    const [showForm, setShowForm] = useState(false);
    const handleClick = () => setShowForm(!showForm)
    return (
        <> 
            <h1> Dashboard </h1>
            <AllResults />
            <button onClick={handleClick}>New entry</button>
            {showForm && <Form />}
        </>
    )
}
