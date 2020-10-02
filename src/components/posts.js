import React from 'react';
import { connect } from 'react-redux';

import { Title, List as Root } from './styled';
import { Post } from './post';

const Posts = (props) => {
    const { posts } = props;

    console.log('posts', posts);

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

const mapStateToProps = (state) => {
    const { posts } = state;

    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
