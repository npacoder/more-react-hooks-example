// useCallback trả về một hàm callback được ghi nhớm đó là hàm addTask. Vì mỗi khi component useCallback re-render lại nó sẽ tạo ra một địa chỉ mới cho hàm addTask. Suy ra Component Button sẽ re-render lại vì prop addTask của nó thay đổi địa chỉ. Nên ta phải sử dụng useCallback để ghi nhớ địa chỉ của hàm addTask, component Button thấy prop addTask không thay đổi sẽ không re-render lại.

import React, { useState, useCallback } from 'react'

function UseCallbackExample() {
  const [ tasks, setTasks ] = useState([])
  
  const addTask = useCallback(() => {
    setTasks(prevState => {
      return [...prevState, 'Some text']
    })
  }, [setTasks])
  
  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => {
        return <p key={index}>{task}</p>
      })}
    </div>
  )
}

const Button = React.memo(({ addTask }) => {
  console.log('Button rendered.')
  return (
    <div>
      <button className='btn btn-primary' onClick={addTask}>
        add task
      </button>
    </div>
  )
})

export default UseCallbackExample