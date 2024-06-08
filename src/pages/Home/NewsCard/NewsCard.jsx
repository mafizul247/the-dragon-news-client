import moment from 'moment';
import React from 'react';
import { FaEye, FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'

const NewsCard = ({ news }) => {
    const { _id, rating, total_view, title, author, thumbnail_url, image_url, details } = news;

    return (
        <div className="card mb-3">
            <div className="card-header d-flex align-items-center gap-3">
                <img className='rounded-circle' style={{ width: '40px', height: '40px' }} src={author?.img} alt={author.name} />
                <div className='flex-grow-1'>
                    <p className='m-0'>{author?.name}</p>
                    <p className='m-0'>{moment(author?.published_date).format('yyyy-MM-DD')}</p>
                </div>
                <div>
                    <FaRegBookmark className='me-2' />
                    <FaShareAlt />
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <img className='img-fluid mb-2' src={image_url} alt={title} />
                <p className="text-justify">{details < 250 ? details : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link> </>}</p>
            </div>
            <div className="card-footer text-body-secondary d-flex align-items-center">
                <div className='flex-grow-1'>
                    <div className='d-flex align-items-center gap-2'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={Math.round(rating.number)}
                            readOnly
                        />
                        <span>{rating?.number}</span>
                    </div>
                </div>
                <div>
                    <FaEye className='me-2' />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;