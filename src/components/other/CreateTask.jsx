import React, { useContext, useState } from 'react'
import { PlusCircle, Calendar, User, Tag, FileText, Send, CheckCircle } from 'lucide-react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const contextValue = useContext(AuthContext)
    const actions = contextValue && contextValue[2]

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()

        if (!asignTo.trim() || !taskTitle.trim()) {
            alert('Please fill out the Task Title and Assignee!')
            return
        }

        if (actions && actions.createTask) {
            await actions.createTask({
                taskTitle,
                taskDescription,
                taskDate,
                category,
                asignTo
            })
        }

        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 3000)

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <div className='glass-panel p-6 rounded-2xl shadow-xl mt-6 border border-slate-800/80'>
            <div className='flex items-center gap-2 mb-6 pb-4 border-b border-slate-800/80'>
                <div className='w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400'>
                    <PlusCircle className='w-5 h-5' />
                </div>
                <div>
                    <h2 className='text-lg font-bold text-white tracking-tight'>Assign New Task</h2>
                    <p className='text-xs text-slate-400'>Fill out the details below to dispatch a new task to an employee</p>
                </div>
            </div>

            <form onSubmit={submitHandler} className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-start'>
                {/* Left Column: Task Metadata Fields */}
                <div className='lg:col-span-6 space-y-4'>
                    {/* Task Title */}
                    <div>
                        <label className='block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5'>
                            Task Title *
                        </label>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            required
                            type="text"
                            placeholder='e.g., Revamp User Profile Dashboard'
                            className='w-full bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm rounded-xl py-2.5 px-3.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium'
                        />
                    </div>

                    {/* Due Date & Category Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1'>
                                <Calendar className='w-3.5 h-3.5 text-slate-400' />
                                Due Date
                            </label>
                            <input
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                                type="date"
                                className='w-full bg-slate-900/80 border border-slate-700/80 text-white text-sm rounded-xl py-2.5 px-3.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium'
                            />
                        </div>

                        <div>
                            <label className='block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1'>
                                <Tag className='w-3.5 h-3.5 text-slate-400' />
                                Category
                            </label>
                            <input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                type="text"
                                placeholder='Design, Dev, QA, DevOps'
                                className='w-full bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm rounded-xl py-2.5 px-3.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium'
                            />
                        </div>
                    </div>

                    {/* Assign To Employee */}
                    <div>
                        <label className='block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1'>
                            <User className='w-3.5 h-3.5 text-slate-400' />
                            Assign To Employee *
                        </label>
                        <input
                            value={asignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                            required
                            type="text"
                            placeholder='e.g., Arjun, Sneha, Ravi'
                            className='w-full bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm rounded-xl py-2.5 px-3.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium'
                        />
                    </div>
                </div>

                {/* Right Column: Description & Action */}
                <div className='lg:col-span-6 flex flex-col h-full justify-between'>
                    <div>
                        <label className='block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1'>
                            <FileText className='w-3.5 h-3.5 text-slate-400' />
                            Task Description
                        </label>
                        <textarea
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            rows="5"
                            placeholder='Provide clear guidelines and context for the assigned employee...'
                            className='w-full bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm rounded-xl p-3.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium resize-none'
                        ></textarea>
                    </div>

                    <div className='mt-4'>
                        <button
                            type="submit"
                            className={`w-full font-bold text-sm py-3 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 ${
                                isSubmitted 
                                    ? 'bg-emerald-600 text-white shadow-emerald-600/30' 
                                    : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/25 active:scale-[0.99]'
                            }`}
                        >
                            {isSubmitted ? (
                                <>
                                    <CheckCircle className='w-5 h-5 animate-bounce' />
                                    <span>Task Created Successfully!</span>
                                </>
                            ) : (
                                <>
                                    <Send className='w-4 h-4' />
                                    <span>Dispatch Task</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTask