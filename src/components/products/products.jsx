import "./product.css";

const Products = ({ input, product, loading }) => {
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (input) {
        return(
            <>
            {
                product.filter((data) => data.category.toLowerCase().includes(input))
                .map((ele) => (
                    <div className="container" key={ele.title}>
                        <img
                            src={ele.images[0]}
                            alt={ele.title}
                            className="product-image"
                        />
                        <div className="discription">
                            {ele.description}
                        </div>
                    </div>
                ))
            }
            </>
        )
    }
    return (
        <div className="product-conatiner">
            {product.map(ele => (
                <div className="container" key={ele.title}>
                    <img
                        src={ele.images[0]}
                        alt={ele.title}
                        className="product-image"
                    />
                    <div className="discription">
                        {ele.description}
                    </div>
                </div>

            ))}
        </div>
    )
}
export default Products;