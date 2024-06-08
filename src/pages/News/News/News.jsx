import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import CategoryNews from '../CategoryNews/CategoryNews';

const News = () => {
    const DetailsNews = useLoaderData()
    const [categoryNews, setCategoryNews] = useState([])
    const { _id, title, thumbnail_url, details, category_id } = DetailsNews;

    useEffect(() => {
        fetch(`http://localhost:5000/category/${category_id}`)
            .then(res => res.json())
            .then(data => {
                setCategoryNews(data);
                // console.log(data);
            })
    }, [category_id])

    return (
        <div>
            <div className="card">
                <img src={thumbnail_url} className=" img-fluid" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{details}</p>
                    <Link to={`/category/${category_id}`} className="btn btn-danger"><FaArrowLeft /> All News in this category</Link>
                </div>
            </div>
            <div>
                <h2 className='text-success mt-3'>Similler News</h2>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    categoryNews?.map(news => <CategoryNews key={news._id} news={news} /> )
                }
                </div>
            </div>
        </div>
    );
};

export default News;