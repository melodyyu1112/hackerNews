import { useState, useEffect} from 'react';
import algolia from '../apis/Agolia';

const useStory = (defaultSearchTerm, numOfHits) => {

    const [stories, setStories] = useState([]);

    useEffect(() => {        
        search(defaultSearchTerm, numOfHits);
    }, [defaultSearchTerm, numOfHits]);

    const search = async (term, num) => {
        const response = await algolia.get('/search', {
            params: {
                query: term,
                hitsPerPage: num
            }  
        });

        setStories(response.data.hits);
    };
    console.log('story' + stories);
    return [stories, search]
};

export default useStory;