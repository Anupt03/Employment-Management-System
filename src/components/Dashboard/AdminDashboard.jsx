import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='min-h-screen w-full bg-slate-950 text-slate-100 p-4 sm:p-6 lg:p-8 relative overflow-x-hidden'>
            {/* Ambient Background Glows */}
            <div className='absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none'></div>
            <div className='absolute top-1/3 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none'></div>

            <div className='max-w-7xl mx-auto relative z-10'>
                <Header changeUser={props.changeUser} />
                <CreateTask />
                <AllTask />
            </div>
        </div>
    )
}

export default AdminDashboard