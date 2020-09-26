import React from 'react';

import { Title, List as Root } from './styled';
import { Post } from './post';

const FetchedPosts = (props) => {
    const { posts } = props;

    return (
        <Root>
            <Title>Асинхронные посты</Title>

            {posts && posts.length ? (
                posts.map((post) => (
                    <Post key={post} id={post}>
                        {post}
                    </Post>
                ))
            ) : (
                <button className='btn btn-primary px-3'>Загрузить посты</button>
            )}
        </Root>
    );
};

export { FetchedPosts };
