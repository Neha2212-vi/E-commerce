import "./search.css";
const Search = ({ input, setInput }) => {
    return (
        <>
        <form action="" onSubmit={(e)=>e.preventDefault()}>
            <input type="search"
                className="search"
                placeholder="type category here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
        </>
        
    )
}
export default Search;