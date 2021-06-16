import classNames from "classnames";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { removeTask } from "src/redux/actions/todo-action";
import { actionTypes } from "src/redux/contants/action-types";

const TaskCard = ({ task }) => {
    const dispatch = useDispatch()
    const [openDetails, setOpenDetails] = useState(false)
    const [taskNameChange, setTaskNameChange] = useState(task.name)
    const [taskDescriptionChange, setTaskDescriptionChange] = useState(task.taskDescription)
    const [dueDateChange, setDueDateChange] = useState(task.dueDate)
    
    const [piorityChange, setPiorityChange] = useState(task.piority)

    console.log('dueDateChange', dueDateChange)


    return (
        <>
            <li className="tw-flex tw-flex-col tw-px-3 tw-py-2">
                <div className="tw-flex tw-flex-row tw-px-3 tw-py-2 tw-border tw-items-center">
                    <div className="tw-flex-grow tw-space-y-2">
                        <input type="checkbox" />
                        <span className="tw-ml-4">{task.name}</span>
                    </div>
                    <div className="tw-space-x-2">
                        <button className="tw-rounded-lg tw-text-white tw-px-4 tw-py-2 tw-bg-blue-400" type="button" onClick={() => setOpenDetails(!openDetails)}>{!openDetails ? "Details" : "Hide"}</button>
                        <button className="tw-rounded-lg tw-text-white tw-px-4 tw-py-2 tw-bg-red-400" type="button"
                            onClick={() => dispatch(removeTask(task))}

                        >Remove</button>
                    </div>
                </div>
                <div className={classNames("tw-border tw-border-t-0 tw-p-4 tw-flex tw-flex-col tw-space-y-5", { "tw-hidden ": !openDetails })} >
                    <div className="tw-w-full">
                        <input type="text" className="tw-w-full tw-rounded" value={taskNameChange} onChange={(e) => taskNameChange(e.target.value)} />
                    </div>
                    <div className="">
                        <label htmlFor="">
                            Description
                        </label>
                        <textarea onChange={(e) => setTaskDescriptionChange(e.target.value)} value={taskDescriptionChange} id="task-description" name="task-description" rows="3" className="tw-shadow-sm focus:tw-ring-indigo-500 focus:tw-border-indigo-500 tw-mt-1 tw-block tw-w-full sm:tw-text-sm tw-border tw-border-gray-300 tw-rounded-md" placeholder="zcxvzxcv"></textarea>
                    </div>

                    <div className=" tw-flex tw-flex-row tw-justify-between tw-items-center">
                        <div className="tw-w-1/2">
                            <label htmlFor="country" className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">
                                Due date
                            </label>
                            <ReactDatePicker selected={new Date(dueDateChange)} onChange={(date) => setDueDateChange(date)} />

                        </div>
                        <div className="tw-w-1/2">
                            <label htmlFor="country" className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">
                                Piority
                            </label>
                            <select
                                onChange={(e) => { setPiorityChange(e.target.value) }}
                                id="country"
                                name="country"
                                autoComplete="country"
                                className="tw-mt-1 tw-block tw-w-full tw-bg-white tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-py-2 tw-px-3 focus:tw-outline-none focus:tw-ring-indigo-500 focus:tw-border-indigo-500 sm:tw-text-sm"
                                defaultValue={piorityChange}
                            >
                                <option value="low" >low</option>
                                <option value="high" >high</option>
                                <option value="normal" >normal</option>
                            </select>
                        </div>

                    </div>

                    <button className="tw-w-full tw-text-center tw-py-3 tw-bg-green-400">Update</button>

                </div>


            </li>
        </>
    )
};
export default TaskCard;
