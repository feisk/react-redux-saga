import React from 'react';
import styled from 'styled-components';

const Form = styled.form``;

const PostForm = () => {
    const [title, setTitle] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const post = {
            id: Date.now(),
            title,
        };

        console.log('post', post);

        setTitle('');
    };

    const handleChange = (event) => {
        const { value } = event.target;

        setTitle((prevState) => {
            if (value !== prevState) {
                return value;
            }
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='postTitle'>Заголовок поста</label>
                <input
                    className='form-control'
                    id='postTitle'
                    type='text'
                    value={title}
                    onChange={handleChange}
                />
            </div>
            <button className='btn btn-success' type='submit'>
                Создать
            </button>
        </Form>
    );
};

export { PostForm };
