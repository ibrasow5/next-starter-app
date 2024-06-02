import { useState, useEffect } from "react";
function ProductList() {
const [products, setProducts] = useState([]);
useEffect(async () => {
const response = await fetch("api/products");
const products = await response.json();
setMovies(movies);
}, []);
return (
<div>
<h1>Products List</h1>
<ul>
{products.map(products => {
return (
<li key={movie.id}>
{product.title} - {product.releaseYear}
</li>
);
})}
</ul>
</div>
);
}
export default ProductList;