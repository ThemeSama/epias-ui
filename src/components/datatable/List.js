/**
 * Tablonun gövdesini yazdırır
 * @component
 * 
 * @param {Array} list - Listenin kendisi
 * @param {Array} columns - Listenin ana sütunları
 * 
 * @since 1.0
 */
const List = ({list, columns}) => {
  return <tbody>
    {list.map((listItem) => 
      <tr key={listItem.id}>
        {columns.map((col) => <td key={col.column}>{listItem[col.column]}</td>)}
      </tr>
    )}
  </tbody>;
}

export default List;