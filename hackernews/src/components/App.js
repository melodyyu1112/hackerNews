import React from 'react';

import SearchBar from './SearchBar';
import StoryList from './StoryList';
import Load from './Load';
import useStory from '../hooks/useStory';

const App = () => {
    const [stories, search] = useStory('', 10);

    return (
        <div className = "ui container">
            <h1> Hacker News Rest API </h1>
            <SearchBar onFormSubmit = {search} />
            <StoryList stories = {stories} /> 
            <Load onFormSubmit= {search} />
        </div>
    );
};

export default App;