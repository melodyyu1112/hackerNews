import React, {useState} from 'react';

const Load = ({onFormSubmit}) => {
    const[num, setNum] = useState(10);

    const onInputChange = () => {
        setNum(num+10);
    };

    const onSubmit = event => {
        event.preventDefault();
        onFormSubmit(num);
    };

    return (
        <div className = "button">
            <form onSubmit = {onSubmit} className = "ui form">
                <button onClick = {onInputChange}>
                    Load More
                </button>
            </form>
        </div>
    )
}

export default Load;