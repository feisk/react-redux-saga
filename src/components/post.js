import React from 'react';
import styled from 'styled-components';

const Root = styled.li``;

const Post = (props) => {
    const { children } = props;

    return (
        <Root className='card mb-3'>
            <div className='card-body'>
                <h3 className='card-title'>Title</h3>
                {children}
            </div>
        </Root>
    );
};

export { Post };
