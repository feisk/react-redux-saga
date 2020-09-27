import React from 'react';
import styled from 'styled-components';

const Form = styled.form``;

const PostForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };

    return (
        <Form onKeyDown={handleKeyDown} onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='postTitle'>Заголовок поста</label>
                <input type='text' className='form-control' id='postTitle' />
            </div>
            <button className='btn btn-success' type='submit'>
                Создать
            </button>
        </Form>
    );
};

export { PostForm };
