import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { randomId } from "src/functions/randomId";

const NewTask = (props) => {
    const [dueDate, setDueDate] = useState(new Date());
    const [taskName, setTaskName] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [piority, setPiority] = useState("low")

    const dispatch = useDispatch()

    function addTask() {
        dispatch({
            type: "ADD_TASK",
            task: {
                taskName,
                taskDescription,
                dueDate,
                piority,
                taskId: randomId()
            }
        })
    }

    useEffect(() => { console.log("taskName,dueDate,taskDescription,piority", taskName, dueDate, taskDescription, piority) }, [taskName, dueDate, taskDescription, piority])

    return (
        <>
            <div className="tw-p-9">
                <h2 className="tw-text-green-500">New Task</h2>
                <div className="tw-grid tw-grid-flow-row tw-grid-cols-1 tw-space-y-3">
                    <input onChange={(e) => setTaskName(e.target.value)} type="text" className="tw-col-span-1 tw-mt-1 tw-block tw-w-full tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-py-2 tw-px-3 focus:tw-outline-none focus:tw-ring-indigo-500 focus:tw-border-indigo-500 tw-sm:tw-text-sm " placeholder="Add new task" />
                    <div className="tw-col-span-1">
                        <label htmlFor="">
                            Description
                        </label>
                        <textarea onChange={(e) => setTaskDescription(e.target.value)} id="about" name="about" rows="3" className="tw-shadow-sm focus:tw-ring-indigo-500 focus:tw-border-indigo-500 tw-mt-1 tw-block tw-w-full sm:tw-text-sm tw-border tw-border-gray-300 tw-rounded-md" placeholder="you@example.com"></textarea>
                    </div>
                    <div className="tw-col-span-1 tw-flex tw-flex-row tw-justify-between tw-items-center">
                        <div className="tw-w-1/2">
                            <label htmlFor="country" className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">
                                Due date
                            </label>
                            <DatePicker selected={dueDate} onChange={(date) => setDueDate(date)} />

                        </div>
                        <div className="tw-w-1/2">
                            <label htmlFor="country" className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">
                                Piority
                            </label>
                            <select
                                onChange={(e) => { setPiority(e.target.value) }}
                                id="country"
                                name="country"
                                autoComplete="country"
                                className="tw-mt-1 tw-block tw-w-full tw-bg-white tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-py-2 tw-px-3 focus:tw-outline-none focus:tw-ring-indigo-500 focus:tw-border-indigo-500 sm:tw-text-sm"
                            >
                                <option value="low">low</option>
                                <option value="high">high</option>
                                <option value="normal" selected>normal</option>
                            </select>
                        </div>

                    </div>

                    <div className="tw-col-span-1">
                        <button type="button" onClick={addTask}
                            className="tw-text-white tw-bg-green-500 tw-py-2 tw-mt-4 tw-w-full tw-text-center tw-rounded-lg">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};
export default NewTask;
