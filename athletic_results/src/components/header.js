import feather from "./feather.svg"
export function Header() {
    return (
        <header className="bg-maroon text-white flex flex-nowrap justify-between px-24 py-4">

            
            <div className="flex flex-nowrap space-x-4">
                <div className="w-14 h-14 bg-white rounded-full flex justify-center align-center p-2">
                    <img src={feather} />
                </div>
                <h1 className="text-4xl">Dobyns Bennett Athletics</h1>
            </div>
            
            <div className="flex space-x-2 text-maroon relative inset-y-0 right-0">
                <button className="bg-gray-300 px-2 my-1">Home</button>
                <button className="bg-gray-300 px-2 my-1">Results</button>
            </div>
            
            
            
        </header>
    )
}