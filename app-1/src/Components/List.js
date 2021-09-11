import React from 'react';
import ToDo from './ToDo';

function List(props) {

    return (
        <div>
            {props.list.map((item, index) => {
                return <ToDo item={item} key={index} />
            })}
        </div>
    );
}

export default List;
