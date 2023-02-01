import "./pagination.css";

const Pagination = ({productPerPage, totalProduct, nextPage})=>{
    const pageNumber = [];
    for(let i=1; i<=Math.ceil(totalProduct/productPerPage); i++){
        pageNumber.push(i)
    }
    return(
        <div>
           {pageNumber.map(num=>
           <a href="!#" className="pageNumber" onClick={()=> nextPage(num)} key={num}>{num}</a>
            )}
        </div>
    )
}
export default Pagination;