// Ví dụ này sử dung clean up function để tránh rò rỉ bộ nhớ mỗi khi 1 component được mounted hoặc unmounted (theo state true, false) và trong component đó đang sử dụng useEffect để call api & update state.

import { useState } from 'react'
import Todo from './Todo'

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true)
 
  return (
    <div>
      {showTodo && <Todo />}
      <button onClick={(e) => setShowTodo(!showTodo)} className='btn btn-primary'> toggle todo
      </button>
    </div>
  )
}

export default UseRefExample3
