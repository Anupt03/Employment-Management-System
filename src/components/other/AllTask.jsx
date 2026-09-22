import React, { useContext, useState } from 'react'
import { Users, Search, Sparkles, Clock, CheckCircle2, XCircle } from 'lucide-react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const contextValue = useContext(AuthContext)
    const userData = Array.isArray(contextValue) ? contextValue[0] : null
    const [searchTerm, setSearchTerm] = useState('')

    const filteredData = (userData || []).filter(emp => 
        emp.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className='glass-panel p-6 rounded-2xl shadow-xl mt-6 border border-slate-800/80'>
            {/* Table Header & Search Bar */}
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80'>
                <div className='flex items-center gap-2'>
                    <div className='w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400'>
                        <Users className='w-5 h-5' />
                    </div>
                    <div>
                        <h2 className='text-lg font-bold text-white tracking-tight'>Workforce Task Directory</h2>
                        <p className='text-xs text-slate-400'>Monitor real-time task distribution across team members</p>
                    </div>
                </div>

                {/* Search Input */}
                <div className='relative w-full md:w-64'>
                    <Search className='absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none' />
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="text"
                        placeholder="Search employee..."
                        className="w-full bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-xs rounded-xl py-2 pl-9 pr-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all font-medium"
                    />
                </div>
            </div>

            {/* Column Headers */}
            <div className='hidden sm:grid grid-cols-12 bg-slate-900/80 py-3 px-4 rounded-xl border border-slate-800 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3'>
                <div className='col-span-4 flex items-center gap-1.5'>
                    <span>Employee</span>
                </div>
                <div className='col-span-2 text-center flex items-center justify-center gap-1 text-sky-400'>
                    <Sparkles className='w-3 h-3' />
                    <span>New</span>
                </div>
                <div className='col-span-2 text-center flex items-center justify-center gap-1 text-amber-400'>
                    <Clock className='w-3 h-3' />
                    <span>Active</span>
                </div>
                <div className='col-span-2 text-center flex items-center justify-center gap-1 text-emerald-400'>
                    <CheckCircle2 className='w-3 h-3' />
                    <span>Done</span>
                </div>
                <div className='col-span-2 text-center flex items-center justify-center gap-1 text-rose-400'>
                    <XCircle className='w-3 h-3' />
                    <span>Failed</span>
                </div>
            </div>

            {/* Employee Rows */}
            <div className='space-y-2 max-h-80 overflow-y-auto pr-1'>
                {filteredData.length === 0 ? (
                    <div className='text-center py-8 text-slate-500 text-sm italic'>
                        No matching employee records found.
                    </div>
                ) : (
                    filteredData.map((elem, idx) => {
                        const counts = elem.taskCounts || { newTask: 0, active: 0, completed: 0, failed: 0 }
                        const initial = elem.firstName.charAt(0).toUpperCase()

                        return (
                            <div 
                                key={elem.id || idx} 
                                className='glass-card p-3.5 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-all grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-0 items-center'
                            >
                                {/* Employee Profile */}
                                <div className='sm:col-span-4 flex items-center gap-3'>
                                    <div className='w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-400 to-teal-300 text-slate-950 font-bold text-xs flex items-center justify-center shadow-sm'>
                                        {initial}
                                    </div>
                                    <div className='truncate'>
                                        <h3 className='text-sm font-semibold text-white truncate'>{elem.firstName}</h3>
                                        <p className='text-[11px] text-slate-400 truncate'>{elem.email}</p>
                                    </div>
                                </div>

                                {/* Counts */}
                                <div className='sm:col-span-2 text-left sm:text-center flex sm:block items-center justify-between'>
                                    <span className='sm:hidden text-xs text-slate-400'>New Tasks:</span>
                                    <span className='inline-flex items-center justify-center min-w-[28px] h-7 px-2 bg-sky-500/10 text-sky-400 font-bold text-xs rounded-lg border border-sky-500/20'>
                                        {counts.newTask}
                                    </span>
                                </div>

                                <div className='sm:col-span-2 text-left sm:text-center flex sm:block items-center justify-between'>
                                    <span className='sm:hidden text-xs text-slate-400'>Active Tasks:</span>
                                    <span className='inline-flex items-center justify-center min-w-[28px] h-7 px-2 bg-amber-500/10 text-amber-400 font-bold text-xs rounded-lg border border-amber-500/20'>
                                        {counts.active}
                                    </span>
                                </div>

                                <div className='sm:col-span-2 text-left sm:text-center flex sm:block items-center justify-between'>
                                    <span className='sm:hidden text-xs text-slate-400'>Completed:</span>
                                    <span className='inline-flex items-center justify-center min-w-[28px] h-7 px-2 bg-emerald-500/10 text-emerald-400 font-bold text-xs rounded-lg border border-emerald-500/20'>
                                        {counts.completed}
                                    </span>
                                </div>

                                <div className='sm:col-span-2 text-left sm:text-center flex sm:block items-center justify-between'>
                                    <span className='sm:hidden text-xs text-slate-400'>Failed:</span>
                                    <span className='inline-flex items-center justify-center min-w-[28px] h-7 px-2 bg-rose-500/10 text-rose-400 font-bold text-xs rounded-lg border border-rose-500/20'>
                                        {counts.failed}
                                    </span>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default AllTask