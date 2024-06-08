import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Home = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            {/* <h1>Category News {categoryNews?.length}</h1> */}
            <div>
                {
                    categoryNews?.map(news => <NewsCard key={news._id} news={news} />)
                }
            </div>
        </div>
    );
};

export default Home;