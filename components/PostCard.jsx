"use client"

import Link from "next/link"

export default function PostCard ({post}) {
    return(
        <div >
            <h3>{post.id}. {post.title}</h3>
            <p>{post.body}</p>
            <button onClick={()=>{alert('click funcionando')}}>Click</button>
        </div>
    )
}