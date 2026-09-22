import React from 'react'
import { Sparkles, CheckCircle2, Clock, XCircle } from 'lucide-react'

const TaskListNumbers = ({ data }) => {
  const counts = data?.taskCounts || { newTask: 0, completed: 0, active: 0, failed: 0 }
  const total = (counts.newTask || 0) + (counts.completed || 0) + (counts.active || 0) + (counts.failed || 0)

  const cards = [
    {
      title: "New Tasks",
      count: counts.newTask || 0,
      icon: Sparkles,
      color: "from-sky-500 to-blue-600",
      textColor: "text-sky-400",
      bgGlow: "bg-sky-500/10 border-sky-500/20"
    },
    {
      title: "Accepted / Active",
      count: counts.active || 0,
      icon: Clock,
      color: "from-amber-400 to-amber-600",
      textColor: "text-amber-400",
      bgGlow: "bg-amber-500/10 border-amber-500/20"
    },
    {
      title: "Completed",
      count: counts.completed || 0,
      icon: CheckCircle2,
      color: "from-emerald-400 to-teal-600",
      textColor: "text-emerald-400",
      bgGlow: "bg-emerald-500/10 border-emerald-500/20"
    },
    {
      title: "Failed",
      count: counts.failed || 0,
      icon: XCircle,
      color: "from-rose-500 to-red-600",
      textColor: "text-rose-400",
      bgGlow: "bg-rose-500/10 border-rose-500/20"
    }
  ]

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
      {cards.map((card, idx) => {
        const IconComponent = card.icon
        const percent = total > 0 ? Math.round((card.count / total) * 100) : 0

        return (
          <div 
            key={idx} 
            className={`glass-panel p-5 rounded-2xl border ${card.bgGlow} glass-card-hover flex flex-col justify-between`}
          >
            <div className='flex items-center justify-between'>
              <span className='text-xs font-semibold text-slate-400 uppercase tracking-wider'>
                {card.title}
              </span>
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${card.color} flex items-center justify-center text-slate-950 shadow-md`}>
                <IconComponent className='w-5 h-5 stroke-[2.5]' />
              </div>
            </div>

            <div className='mt-4 flex items-baseline justify-between'>
              <h2 className='text-3xl font-extrabold text-white tracking-tight'>
                {card.count}
              </h2>
              <span className={`text-xs font-bold ${card.textColor} px-2 py-0.5 rounded-full bg-slate-900/60 border border-slate-700/50`}>
                {percent}%
              </span>
            </div>

            {/* Simple progress indicator bar */}
            <div className='w-full bg-slate-800/80 h-1.5 rounded-full mt-3 overflow-hidden'>
              <div 
                className={`h-full bg-gradient-to-r ${card.color} transition-all duration-500`}
                style={{ width: `${percent}%` }}
              ></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TaskListNumbers