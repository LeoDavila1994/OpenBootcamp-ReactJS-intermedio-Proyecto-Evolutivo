import React from 'react'
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

function TaskListComponent() {

  const defaultTask = new Task(
    "Hacer portafolio",
    "Preparar portafolio para conseguir empleo como desarrollador",
    false,
    LEVELS.URGENT
    );


  return (
    <div>
      <h1>Your Tasks:</h1>
      <TaskComponent task={ defaultTask }/>{/* 1 */}
    </div>
  )
}

/**
 * TODO: 1. Renderizar una lista de Tareas con un metodo "map".
 */

export default TaskListComponent


