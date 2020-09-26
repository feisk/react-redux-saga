import React from 'react';

import { Title, List as Root } from './styled';
import { Post } from './post';

const Posts = (props) => {
    const { posts } = props;

    return (
        <Root>
            <Title>Синхронные посты</Title>

            {posts && posts.length ? (
                posts.map((post) => (
                    <Post key={post} id={post}>
                        {post}
                    </Post>
                ))
            ) : (
                <p>Нет постов</p>
            )}
        </Root>
    );
};

export { Posts };
