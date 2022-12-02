const TableRow = ({date, sport, results}) => (
  
  <tr className="even:bg-[#E3E3E3] odd:bg-[#575252] even:text-black odd:text-[#E3E3E3]">
    <td className="font-light">
      {date}
    </td>
    <td className="font-light">
      {sport}
    </td>
    <td className="font-light px-6 py-4">
      {results}
    </td>
  </tr>
)

export const Table = ({data}) => (
  <div className="table-auto">
    <div className="sm:-mx-6 lg:-mx-8">
      <div className=" inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full text-center border-separate">
            <thead className=" bg-[#E3E3E3]">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Date
                </th>
                <th scope="col" className="px-6 py-4">
                  Sport
                </th>
                <th scope="col" className="px-6 py-4">
                  Results
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map(game_entry => <TableRow date={game_entry.date} sport={game_entry.sport} results={game_entry.results} />)}
              <TableRow date="MA 10 September 2022 at 8:00" sport="M Soccer" results="15-3"/>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
)