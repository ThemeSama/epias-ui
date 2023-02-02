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