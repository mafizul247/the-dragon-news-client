import React from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const Category = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading') {
        return <LoadingSpinner />
    }
    
    const {id } = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            {/* <h2>Category News {categoryNews?.length}</h2> */}
            <div>
                {
                    categoryNews?.map(news => <NewsCard key={news._id} news={news} /> )
                }
            </div>
        </div>
    );
};

export default Category;