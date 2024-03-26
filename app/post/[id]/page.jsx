async function loadPost (id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

    await new Promise((resolve)=> setTimeout(resolve, 3000))

    return data
}

export default async function Page({params}){

    const post = await loadPost(params.id)
    return(
        <div>
            <h1>{post.id} {post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}   