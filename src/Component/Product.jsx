import React from 'react'
import {useEffect, useState} from "react";
import SortList from './Sort';

const API = "http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=1000";

const Product = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(() => {
        fetchUsers(API);
    }, [])

    return <>
        <div>
            <div>
                
                <h1>Sort</h1>
                <SortList/>
            </div>
            

            <h1>Product</h1>
            
            {users.map((user, index) => (
                <div key={index}>
                    
                    <p>Name: {user.ProductName} </p>
                    <p>price: {user.price}</p>
                    <p>Rating: {user.rating}, {user.location.country}</p>
                    <p>Rating: {user.discount}</p>
                    <p>Rating: {user.availabilityt}</p>
                </div>
                
            ))}
               


  


        
        </div>
    </>
}

export default Product;
