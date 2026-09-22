import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { Inbox } from 'lucide-react'

const TaskList = ({ data }) => {
    if (!data || !data.tasks || data.tasks.length === 0) {
        return (
            <div className='glass-panel p-10 rounded-2xl text-center text-slate-400 mt-6 border border-slate-800/80 flex flex-col items-center justify-center gap-3 min-h-[220px]'>
                <div className='w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500'>
                    <Inbox className='w-6 h-6' />
                </div>
                <div>
                    <h3 className='text-base font-bold text-slate-200'>No Tasks Assigned Yet</h3>
                    <p className='text-xs text-slate-400 mt-1'>Check back later when an administrator assigns new tasks to you.</p>
                </div>
            </div>
        )
    }

    return (
        <div id='tasklist' className='flex items-stretch justify-start gap-5 overflow-x-auto w-full py-4 mt-6 pb-4 scroll-smooth'>
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={elem.id || idx} data={elem} employeeId={data.id} />
                }
                if (elem.newTask) {
                    return <NewTask key={elem.id || idx} data={elem} employeeId={data.id} />
                }
                if (elem.completed) {
                    return <CompleteTask key={elem.id || idx} data={elem} employeeId={data.id} />
                }
                if (elem.failed) {
                    return <FailedTask key={elem.id || idx} data={elem} employeeId={data.id} />
                }
                return null
            })}
        </div>
    )
}

export default TaskList