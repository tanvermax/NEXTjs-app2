import Link from 'next/link';
import React from 'react'

export const getpots = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
    return data;
}

export default async function posts() {
    const posts = await getpots();
    return (
        <div>
            <p>posts :</p>
            {/* <h1>{JSON.stringify(posts)}</h1> */}
            <div className='grid grid-cols-4 '>
                {
                    posts.map(d => {
                        return <div className='border-2 p-4'>
                            <p>{d.title}</p>
                            <p>{d.id}</p>
                            <Link className='bg-gray-500 p-2' href={`/posts/${d.id}`}>
                                <button>Details</button>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
