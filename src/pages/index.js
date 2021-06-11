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
          <div className="tw-grid tw-w-full tw-grid-flow-col tw-col-span-1 tw-relative">
            <div className="tw-w-full ">
              <EditTask />
            </div>
            <div className="tw-w-full">
              <ListTask />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}










