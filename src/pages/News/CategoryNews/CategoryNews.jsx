import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryNews = ({ news }) => {
    const { _id, title, author, image_url } = news;
    return (
        <div class="col">
            <Link to={`/news/${_id}`} className='text-decoration-none'>
                <div class="card h-100">
                    <img src={image_url} class="card-img-top" alt={title} />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">Publish Date: {moment(author?.published_date).format('yyyy-MM-DD')}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoryNews;