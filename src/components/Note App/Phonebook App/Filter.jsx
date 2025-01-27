const Filter = ({ userNameSearch, setUserNameSearch}) => {
  return (
    <>
     <div>
        search for a name with: <input value={userNameSearch} onChange={(event) => setUserNameSearch(event.target.value)}/>
      </div>
    </>
  )
}

export default Filter;