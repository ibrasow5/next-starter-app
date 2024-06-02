import React, { useState, useEffect } from "react";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/api/products");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data._embedded ? data._embedded.products : []);
                setLoading(false);
            } catch (error) {
                console.error('Fetch error:', error);
                setError('An error occurred while fetching the products.');
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1 className="text-2xl text-blue-500 font-bold">Product List</h1>
            <table className="border-collapse border border-slate-400">
                <thead>
                    <tr>
                        <th className="border border-slate-300">Name</th>
                        <th className="border border-slate-300">Description</th>
                        <th className="border border-slate-300">Image</th>
                        <th className="border border-slate-300">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.name}>
                            <td className="border border-slate-300 px-2 text-center">
                                {product.name}
                            </td>
                            <td className="border border-slate-300 px-2 text-center">
                                {product.description}
                            </td>
                            <td className="border border-slate-300 px-2 text-center">
                                <img src={product.image} alt={product.name} className="h-16 w-16 object-cover" />
                            </td>
                            <td className="border border-slate-300 px-2 text-center">
                                {product.price}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;
