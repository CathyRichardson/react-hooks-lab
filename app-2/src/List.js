import React from 'react';


function List(props) {

    return (
        <div>
            {props.list.map((item, index) => {
                return <p key={index}>{item}</p>
            })}
        </div>
    );
}

export default List;
