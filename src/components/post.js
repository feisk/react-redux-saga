import React from 'react';

const Post = (props) => {
    const { children } = props;

    return (
        <li className='card mb-3'>
            <div className='card-body'>
                <h3 className='card-title'>Title</h3>
                {children}
            </div>
        </li>
    );
};

export { Post };
