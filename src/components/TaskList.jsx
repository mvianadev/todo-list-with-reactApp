import React from 'react'
import CheckBox from './CheckBox'

const TaskList = props => {
  const { list, setList } = props

  const onChangeStatus = e => {
    const { name, checked} = e.target
    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }))
    setList(updateList)
  }

  const check = list.map(item => (
    <CheckBox key={item.id} data={item}  onChange={onChangeStatus}/>
  ))

  const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.done)
    setList(updateList)
  }

  return (
    <div className='todo-list'> 
      {list.length ? check : "No tasks"}
      {list.length ? (
        <p>
          <button className='button blue' onClick={onClickRemoveItem}>
            Delete list
          </button>
        </p>
      ) : null}
    </div>
  )
}

export default TaskList