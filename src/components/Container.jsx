import React, { useState } from 'react'
import TaskList from './TaskList'
import FormTodo from './FormToDo'

const Container = () => {
  const [list, setList] = useState([])

  const handleAddItem = AddItem => {
    setList([...list,AddItem])
  }

  return (
    <div>
      <FormTodo handleAddItem={handleAddItem} />
      <TaskList list={list} setList={setList} />
    </div>
  )
}

export default Container