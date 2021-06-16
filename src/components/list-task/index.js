import { useDispatch, useSelector } from "react-redux";
import { CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/solid'
import TaskCard from "./task-card";

const ListTask = (props) => {
    const tasks = useSelector(state => state.allTodos.tasks)

    return (
        <>
            <div className="tw-bg-white tw-shadow tw-overflow-hidden sm:tw-rounded-md">
                <ul className="tw-space-y-3">

                    {tasks?.length ? tasks.map((task) => (
                        <TaskCard task={task} key={task.id} />
                    )) : <p>NO task </p>}
                </ul>
            </div>
        </>
    )
};
export default ListTask;
