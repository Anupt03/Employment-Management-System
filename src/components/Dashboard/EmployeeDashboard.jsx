import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='min-h-screen w-full bg-slate-950 text-slate-100 p-4 sm:p-6 lg:p-8 relative overflow-x-hidden'>
      {/* Ambient Background Glows */}
      <div className='absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-10 -right-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none'></div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard