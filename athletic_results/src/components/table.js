const TableRow = ({first, last, handle}) => (
  <tr className="bg-white border-b">
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {first}
    </td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {last}
    </td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {handle}
    </td>
  </tr>
)

export const Table = ({data}) => (
  <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center">
          <thead className="border-b bg-gray-50">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                #
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                First
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Last
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => <TableRow first={user.first} last={user.last} handle={user.handle} />)}
            <TableRow first="Bladen" last="Hooper" handle="@bladen005"/>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
)