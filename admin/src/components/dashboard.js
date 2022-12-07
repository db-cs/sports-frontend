import { AllResults } from "./AllResults";

export const Dashboard = (props) => {
    function openForm() {
        alert('BUTTON!');
      }
    return (
        <> 
            <h1> Dashboard </h1>
            <button onClick={openForm}>New entry</button>
            <AllResults />
        </>
    )
}
