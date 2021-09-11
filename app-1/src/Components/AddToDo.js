import React, { useState } from 'react';


function AddToDo(props) {
    const [newToDo, setNewToDo] = useState('');

    const handleChange = event => {
        setNewToDo(event.target.value);
    };

    const handleSubmit = (event) => {
        props.updateToDo(newToDo);
        setNewToDo('');
        event.preventDefault(); // prevent the HTML form from being submitted
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={newToDo} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddToDo;
