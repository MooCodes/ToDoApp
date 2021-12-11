import "./Task.css"

const TaskName = ({ name }) => {
    return (
        <div className="TaskName">
            {name}
        </div>
    )
}

const TaskDate = ({ date }) => {
    return (
        <div className="TaskDate">
            {date}
        </div>
    )
}

const Task = ({ name, date }) => {
    return (
        <div className="Task">
            <TaskName name={name} />
            <TaskDate date={date} />
        </div>
    )
}

export default Task