import { useState } from "react"
import FormForTask from "./FormForTask"
import TableForTasks from "./TableForTasks"

const ToDoMain = () => {
    //state turi buti virusje
    //1. kintamasis kuris saugoje state reiksme
    //2. metodas kuris atnaujina state reiksme
    //3. state pradine reiksme

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text : 'clean your room',
            isCompleted: false
        },
        {
            id: 2,
            text : 'Walk your dog',
            isCompleted: true
        },
        {
            id: 3,
            text : 'make some food',
            isCompleted: false
        },
    ])
    console.log(tasks)
  return (
    <div>
        <TableForTasks list={tasks}/>
        <FormForTask/>

    </div>
  )
}

export default ToDoMain