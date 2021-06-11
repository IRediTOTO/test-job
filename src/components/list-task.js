import { useSelector } from "react-redux";
import { CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/solid'

const ListTask = (props) => {
    const tasks = useSelector(state => state.tasks)


    return (
        <>
            <div className="tw-bg-white tw-shadow tw-overflow-hidden sm:tw-rounded-md">
                <ul className="tw-divide-y tw-divide-gray-200">
                    {tasks.map((task) => (
                        <li key={task.taskId}>
                            <a href="#" className="tw-block hover:tw-bg-gray-50">
                                <div className="tw-px-4 tw-py-4 sm:tw-px-6">
                                    <div className="tw-flex tw-items-center tw-justify-between">
                                        <p className="tw-text-sm tw-font-medium tw-text-indigo-600 tw-truncate">{task.taskName}</p>
                                        <div className="tw-ml-2 tw-flex-shrink-0 tw-flex">
                                            <p className="tw-px-2 tw-inline-flex tw-text-xs tw-leading-5 tw-font-semibold tw-rounded-full tw-bg-green-100 tw-text-green-800">
                                                {task.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="tw-mt-2 sm:tw-flex sm:justify-between">
                                        <div className="sm:tw-flex">
                                            <p className="tw-flex tw-items-center tw-text-sm tw-text-gray-500">
                                                <UsersIcon className="tw-flex-shrink-0 tw-mr-1.5 tw-h-5 tw-w-5 tw-text-gray-400" aria-hidden="true" />
                                                {task.department}
                                            </p>
                                            <p className="tw-mt-2 tw-flex tw-items-center tw-text-sm tw-text-gray-500 sm:tw-mt-0 sm:tw-ml-6">
                                                <LocationMarkerIcon className="tw-flex-shrink-0 tw-mr-1.5 tw-h-5 tw-w-5 tw-text-gray-400" aria-hidden="true" />
                                                {task.location}
                                            </p>
                                        </div>
                                        <div className="tw-mt-2 tw-flex tw-items-center tw-text-sm tw-text-gray-500 sm:tw-mt-0">
                                            <CalendarIcon className="tw-flex-shrink-0 tw-mr-1.5 tw-h-5 tw-w-5 tw-text-gray-400" aria-hidden="true" />
                                            <p>
                                                Closing on <time dateTime={task.closeDate}>{task.closeDateFull}</time>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};
export default ListTask;
