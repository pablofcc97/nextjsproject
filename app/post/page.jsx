import PostCard from "@/components/PostCard"

//SE PROCESA EN EL BACKEND
async function loadPost(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    await new Promise((resolve)=> setTimeout(resolve, 3000))

    return data
}

//SE RENDERIZA PERO NO SE PROCESA EN EL FRONTEND
async function PostPages(){
    const posts = await loadPost()
    return(
        <div>
            {
                posts.map(p=>(
                    <PostCard post={p} key={p.id}></PostCard>
                ))
            }
        </div>
    )
}

export default PostPages