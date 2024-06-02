import React, { useState, useEffect } from "react";

function CustomerList() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            const response = await fetch("/api/customers");
            const data = await response.json();
            setCustomers(data._embedded.customers);
        };
        fetchCustomers();
    }, []);

    return (
        <div>
            <h1 className="text-2xl text-blue-500 font-bold">Customer List</h1>
            <table className="border-collapse border border-slate-400">
                <thead>
                    <tr>
                        <th className="border border-slate-300">Full Name</th>
                        <th className="border border-slate-300">Balance</th>
                        <th className="border border-slate-300">City</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.fullname}>
                            <td className="border border-slate-300 px-2 text-center">
                                {customer.fullname}
                            </td>
                            <td className="border border-slate-300 px-2 text-center">
                                {customer.balance}
                            </td>
                            <td className="border border-slate-300 px-2 text-center">
                                {customer.city}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CustomerList;
