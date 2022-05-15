import useFetch from '../hooks/useFetch'

function CustomHookExample1() {
  
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts', {})
  
  if (loading) {
    return <h1> loading ... </h1>
  }
  
  return (
    <div>
      {data.map(post => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
    </div>
  )
}

export default CustomHookExample1