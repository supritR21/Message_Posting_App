import { Link } from 'react-router-dom';
import Feed from './Feed';
import React, { useContext } from 'react';
import DataContext from './context/DataContext';

const Home = ({}) => {
  const { posts, fetchError, isLoading, searchResults } = useContext(DataContext);
  return (
    <main className="Home">
      {isLoading && <p className='statusMsg'>Loading posts...</p>}
      {!isLoading && fetchError && <p className='statusMsg' style={{color: "red"}}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResults.length ? <Feed posts={posts} /> : <p className='statusMsg'>No Posts to display.</p>)}
    </main>
  );
};

export default Home;
