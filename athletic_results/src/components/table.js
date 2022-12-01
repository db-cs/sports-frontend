const TableRow = ({date, sport, results}) => (
  
  <tr className="even:bg-[#E3E3E3] odd:bg-[#575252] even:text-black odd:text-[#E3E3E3] border-b">
    <td className="font-light px-6 py-4 whitespace-nowrap">
      {date}
    </td>
    <td className="font-light px-6 py-4 whitespace-nowrap">
      {sport}
    </td>
    <td className="font-light px-6 py-4 whitespace-nowrap">
      {results}
    </td>
  </tr>
)

export const Table = ({data}) => (
  <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full text-center">
            <thead className="border-b bg-[#E3E3E3]">
              <tr>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                  Date
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                  Sport
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                  Results
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map(game_entry => <TableRow date={game_entry.date} sport={game_entry.sport} results={game_entry.results} />)}
              <TableRow date="Manual Addition" sport="Manual Addition" results="Manual Addition"/>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
)