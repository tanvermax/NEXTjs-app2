import React from 'react'


export const getSinglePost = async (post_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    const data = await res.json();
    return data;
}
export default async function SinglePost({ params }) {
    const p = await params;

    console.log("the ID :", p.id);

    const diglePost = await getSinglePost(p.id)

    return (
        <div className='p-5 border-amber-500 border-2'>
            <p>{JSON.stringify(diglePost)}</p>
        <h1 className='text-2xl font-bold '>{diglePost.title}</h1>
        <h1>{diglePost.id}</h1>
        <h1>{diglePost.body}</h1>
        </div>
    )
}
