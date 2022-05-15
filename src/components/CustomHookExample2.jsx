

import useLocalStorage from '../hooks/useLocalStorage'

function CustomHookExample2() {
  const [task, setTask] = useLocalStorage('task','')
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  
  const onSubmit = (e) => {
    e.preventDefault()
    const taskObj = {
      task,
      complated: false,
      date: new Date().toLocaleDateString()
    }
    
    setTasks([...tasks, taskObj])
  }
  
  return (
    <>
      <form className='w-25' onSubmit={onSubmit}>
        <div className='mb-3'>
          <label className='form-label'>
            Task
          </label>
          <input className='form-control' value={task} type='text' onChange={(e) => setTask(e.target.value)} />
          <button type='submit' className='btn btn-primary'> add </button>
        </div>
      </form>
      
      <hr/>
      
      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
      
    </>
  )
}

export default CustomHookExample2