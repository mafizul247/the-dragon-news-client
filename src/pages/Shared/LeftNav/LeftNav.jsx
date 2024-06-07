import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, [])

    // console.log(categories);

    return (
        <div>
            <h2>All Category</h2>
            <div>
                {categories?.map(category => <p key={category.id}>
                    <NavLink to={`/category/${category.id}`} className='text-decoration-none text-secondary ps-3' >{category.name}</NavLink>
                </p>)}
            </div>
        </div>
    );
};

export default LeftNav;