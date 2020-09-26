import React from 'react';

import { PostForm, FetchedPosts, Posts } from './components';

function App() {
    return (
        <main className='container pt-4'>
            <div className='row'>
                <div className='col'>
                    <PostForm />
                </div>
            </div>
            <div className='row pt-2'>
                <div className='col'>
                    <Posts posts={[1, 2, 3, 4]} />
                </div>
                <div className='col'>
                    <FetchedPosts posts={[]} />
                </div>
            </div>
        </main>
    );
}

export { App };
