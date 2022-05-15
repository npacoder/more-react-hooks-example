
import {
useRef,
useEffect,
useState
} from 'react'

function UseRefExample2() {
  
  const renders = useRef(1)
  const prevName = useRef('')
  
  const [name, setName] = useState('')
  
  useEffect(() => {
    renders.current = renders.current + 1
    prevName.current = name
  }, [name])
  
  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>Pre Name State:{prevName.current}</h2>
      <input value={name} onChange={(e) => setName(e.target.value)
      } type='text'/>
    </div>
  )
}

export default UseRefExample2