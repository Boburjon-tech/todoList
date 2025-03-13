function Formatting (props) {
    
    return (
        <>
        <form className="inputForm" onSubmit={props.handleSubmit}>
    <input
      type="text"
      onChange={(e) => {
        const inputText = e.target.value
        props.setText(inputText);
      }}
      value={props.text}
      placeholder="enter your text"
    />
    <button  type="submit"className="addButton">Add</button>
    {props.error && <p>{props.error}</p>}
  </form>
        </>
    )
}

export default Formatting;