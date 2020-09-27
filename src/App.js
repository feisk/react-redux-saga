import React from 'react';

import { PostForm, FetchedPosts, Posts } from './components';

function App() {
    return (
        <main className='container pt-5'>
            <div className='row mb-4'>
                <div className='col'>
                    <PostForm />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Posts posts={[]} />
                </div>
                <div className='col'>
                    <FetchedPosts posts={[]} />
                </div>
            </div>
        </main>
    );
}

export { App };
