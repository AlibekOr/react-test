import React from 'react'

const List = ({ tasks }) => {
    console.log(tasks);

    return (
        <div>
            {tasks.map((task, index) => (
                <div key={index}>
                    <div>
                        {task.name}
                    </div>
                    <div> {task.task}</div>
                </div>
            ))}
        </div>
    )
}

export default List
