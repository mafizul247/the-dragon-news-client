import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading') {
        return <LoadingSpinner />
    }

    useTitle('Home');
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