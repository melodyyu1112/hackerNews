import React, {useState} from 'react';
//import useStory from '../hooks/useStory';

const StoryList = ({stories}) => {

    const[deleteArray, setDeleteArray] = useState([]);

    const onDeleteChange = (id) => {
        setDeleteArray(...deleteArray, id);
    };

    console.log(stories);


    const renderedList = stories.map((story) => {

        if(deleteArray) {
            if (deleteArray.indexOf(story.objectID) === -1) {
        
                return (
                    <tr key = {story.objectID} id = {story.objectID}>
                        <td data-label="id">{story.objectID} </td>
                        <td data-label="author">{story.author}</td>
                        <td data-label="comments">{story.num_comments}</td>
                        <td data-label="title">{story.title}</td>
                        <td data-label="URL">{story.url}</td>
                        <td> <button onClick = {(e)=> onDeleteChange(story.objectID)}> Delete </button></td>
                    </tr>      
                );
                }
            }
                return null;
    });

    return (
        <div>
            <table className="ui celled table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Author</th>
                    <th>Comments</th>
                    <th>Title</th>
                    <th>URL</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {renderedList}
            </tbody>
            </table>
        </div> 
    )
};

export default StoryList;