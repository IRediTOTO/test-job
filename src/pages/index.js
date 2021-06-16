import { useSelector } from 'react-redux'
import EditTask from 'src/components/edit-task'
import ListTask from 'src/components/list-task'
import NewTask from 'src/components/new-task'

export default function Home() {
  const data = useSelector(state => state)

  return (
    <div>
      <div className="tw-flex tw-flex-row tw-w-full tw-min-h-screen " >
        <div className="tw-bg-red-100 tw-w-2/5">
          <p>{JSON.stringify(data)}</p>
          <NewTask />
        </div>
        <div className="tw-w-3/5 tw-relative">
          <div className="tw-flex tw-flex-col tw-justify-between tw-flex-wrap tw-relative  tw-h-full">
            <div>
              <div className="tw-w-full ">
                <EditTask />
              </div>
              <div className="tw-w-full ">
                <ListTask />
              </div>
            </div>
            <div className="tw-sticky tw-flex tw-bg-gray-300 tw-w-full tw-flex-row tw-justify-between tw-items-center tw-py-4 tw-px-4">
              <div className="tw-flex-grow ">
                Bulk Action
              </div>
              <div className="tw-flex tw-flex-row tw-space-x-2">
                <button className="tw-rounded-lg tw-text-white tw-px-4 tw-py-2 tw-bg-blue-400" type="button">Done</button>
                <button className="tw-rounded-lg tw-text-white tw-px-4 tw-py-2 tw-bg-red-400" type="button">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}










