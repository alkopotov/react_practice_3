import Rating from "./Rating"

function ProductItem(props) {
  const {id, title, image, price, rating, deleteProduct} = props
    let stars = []
    for (let i = 1; i <= rating; i++){
    stars.push(true)
    }
    while (stars.length < 5) {
    stars.push(false)
    }
  
  return (
    <div className="card" onDoubleClick={(e) => deleteProduct(id)}>
      <img src={image}/>
      <h2>Product: {title}</h2>
      <h3>Price: {price}</h3>
      <Rating stars={stars}/>
    </div>
  )
}
export default ProductItem