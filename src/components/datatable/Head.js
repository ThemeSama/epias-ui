/**
 * Tablonun ana sütunlarını yazdırır
 * @component
 * 
 * @param {Array} columns - Listenin ana sütunları
 * 
 * @since 1.0
 */
const Head = ({columns}) => {
  return <thead>
    <tr>
      {columns.map((col) => 
        <th key={col.column}>{col.title}</th>
      )}
    </tr>
  </thead>
}

export default Head;