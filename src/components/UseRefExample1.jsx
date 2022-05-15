
import { useRef } from 'react'

function UseRefExample1() {
  
  const inputRef = useRef()
  const paraRef = useRef()
  
  const onSubmit = (e) => {
    e.preventDefault()
    inputRef.current.style.display = 'none'
    paraRef.current.innerText = 'OK :)'
  }
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'> name </label>
        <input
          type='text'
          id='name'
          className='form-control mb-2'
          ref={inputRef}
        />
        <button type='submit' className='btn btn-primary'> submit </button>
        <p ref={paraRef}></p>
      </form>
    </div>
  )
}

export default UseRefExample1