import React from 'react'
import { XCircle, Calendar } from 'lucide-react'

const FailedTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 w-80 min-h-[260px] glass-panel p-5 rounded-2xl border border-rose-500/30 glass-card-hover flex flex-col justify-between relative overflow-hidden group'>
            {/* Top Accent Bar */}
            <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-red-600'></div>

            <div>
                {/* Category & Date */}
                <div className='flex justify-between items-center mb-3'>
                    <span className='bg-rose-500/10 text-rose-400 border border-rose-500/30 text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 uppercase tracking-wider'>
                        <XCircle className='w-3 h-3' />
                        {data.category || 'General'}
                    </span>
                    <span className='text-xs text-slate-400 font-semibold flex items-center gap-1 bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-800'>
                        <Calendar className='w-3 h-3 text-slate-400' />
                        {data.taskDate || 'No Date'}
                    </span>
                </div>

                {/* Title & Description */}
                <h2 className='text-lg font-bold text-white tracking-tight line-clamp-2 group-hover:text-rose-300 transition-colors'>
                    {data.taskTitle}
                </h2>
                <p className='text-xs text-slate-300 mt-2 line-clamp-4 leading-relaxed font-medium'>
                    {data.taskDescription}
                </p>
            </div>

            {/* Status Footer */}
            <div className='mt-5 pt-3 border-t border-slate-800/80'>
                <div className='w-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-bold text-xs py-2 px-4 rounded-xl flex items-center justify-center gap-1.5'>
                    <XCircle className='w-4 h-4' />
                    <span>Task Failed</span>
                </div>
            </div>
        </div>
    )
}

export default FailedTask