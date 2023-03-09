
const TableForTasks = (props) => {

    console.log(props.list, "vaikinis komponentas") 
  return (
   <table>
    <thead>
        <tr>
            <th>Eil. Nr</th>
            <th>Uzduotis</th>
            <th>Ar uzbaigta</th>
        </tr>
    </thead>
{
    props.list.map((task, index) =>(
        <tr key={index}>
            <td>{index +1}</td>
            <td>{task.text}</td>
            <td>{task.isCompleted ? "Done" : "Still in progress.."}</td>
        </tr>
    ))
}

   </table>
  )
}

export default TableForTasks