const List = ({id, person, number, deleteNameAndNumber}) => {
  console.log(id)
  return (
    <ul>
      <li className="note">{person} {number} <button onClick={() => deleteNameAndNumber(id)}>delete</button></li> 
    </ul>
  )
}

export default List;