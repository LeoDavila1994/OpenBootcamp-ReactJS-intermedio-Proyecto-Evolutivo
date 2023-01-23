import React from 'react'
import PropTypes from 'prop-types'
import { Task } from "../../models/task.class"


function TaskComponent({ task }) {

  return (
    <div>
      <p><strong>- Name:</strong> { task.name }.</p>
      <p><strong>- Description:</strong> { task.description }.</p>
      <p><strong>- Level:</strong> { task.level }.</p>
      <p><strong>- Is Completed:</strong> { task.completed? "COMPLETED" : "PENDING" }.</p>
    </div>
  )
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task)
}

export default TaskComponent



