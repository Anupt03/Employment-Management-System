import React from 'react'
import { LogOut, User, Shield, Briefcase } from 'lucide-react'
import { supabase, isSupabaseConfigured } from '../../utils/supabaseClient'

const Header = (props) => {
  const userName = props.data?.firstName || props.data?.first_name || 'Admin'
  const isEmployee = Boolean(props.data?.firstName || props.data?.first_name)
  const initial = userName.charAt(0).toUpperCase()

  const logOutUser = async () => {
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.auth.signOut()
      } catch (err) {
        console.warn('Supabase signout notice:', err)
      }
    }
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <header className='w-full glass-panel px-6 py-4 rounded-2xl flex items-center justify-between shadow-xl mb-6 border border-slate-800/80'>
      <div className='flex items-center gap-4'>
        {/* User Gradient Avatar */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-slate-950 font-extrabold text-xl shadow-md ${
          isEmployee ? 'bg-gradient-to-tr from-emerald-400 to-teal-300' : 'bg-gradient-to-tr from-indigo-400 to-violet-300'
        }`}>
          {initial}
        </div>

        <div>
          <div className='flex items-center gap-2'>
            <h1 className='text-xl md:text-2xl font-bold text-white tracking-tight'>
              Welcome back, <span className='text-emerald-400'>{userName}</span>
            </h1>
            <span className='inline-block animate-bounce'>👋</span>
          </div>
          <div className='flex items-center gap-2 mt-0.5'>
            <span className={`inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
              isEmployee 
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
            }`}>
              {isEmployee ? <Briefcase className='w-3 h-3' /> : <Shield className='w-3 h-3' />}
              {isEmployee ? 'Employee Workspace' : 'Administrator Control Panel'}
            </span>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <button 
        onClick={logOutUser} 
        className='flex items-center gap-2 bg-rose-500/10 hover:bg-rose-600 text-rose-400 hover:text-white border border-rose-500/30 font-semibold text-sm px-4 py-2.5 rounded-xl transition-all shadow-md active:scale-95'
      >
        <LogOut className='w-4 h-4' />
        <span className='hidden sm:inline'>Log Out</span>
      </button>
    </header>
  )
}

export default Header