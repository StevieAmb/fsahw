const PersonForm = ({addNameAndNumber, newName, handleNameAddition, newNumber, handleNumberAddition }) => {
    return (
      <form onSubmit={addNameAndNumber}>
        <div>
          name: <input value={newName} onChange={handleNameAddition}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberAddition}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
  }

  export default PersonForm;